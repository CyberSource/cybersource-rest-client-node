'use strict'
const jose = require('node-jose');
const KeyCertificate = require('../jwt/KeyCertificateGenerator');
const forge = require('node-forge');
const Logger= require('../logging/Logger');
const ApiException= require('./ApiException');
const Constants = require('./Constants');
const Cache = require('./Cache');
const JWEUtility = require('./JWEUtility');
const Utility = require('./Utility');

exports.checkIsMLEForAPI = function (merchantConfig, inboundMLEStatus, operationId) {
    //isMLE for an api is false by default
    var isMLEForAPI = false;

    if (
      typeof inboundMLEStatus === "string" &&
      inboundMLEStatus.toLowerCase() === "optional" &&
      merchantConfig.getEnableRequestMLEForOptionalApisGlobally()
    ) {
      isMLEForAPI = true;
    }

    if (
      typeof inboundMLEStatus === "string" &&
      inboundMLEStatus.toLowerCase() === "mandatory"
    ) {
      isMLEForAPI = !merchantConfig.getDisableRequestMLEForMandatoryApisGlobally();
    }  

    //Control the MLE only from map
    const mleControlMap = merchantConfig.getInternalMapToControlRequestMLEonAPI();
    if (mleControlMap && mleControlMap.has(operationId)) {
      isMLEForAPI = mleControlMap.get(operationId);
    }

    return isMLEForAPI;
}

/**
 * Determines if Message Level Encryption (MLE) should be applied to the API response.
 * @param {Object} merchantConfig - Merchant configuration object
 * @param {array} operationIds - Array of operation IDs
 * @returns {boolean} Whether MLE should be applied
 */
exports.checkIsResponseMLEForAPI = function (merchantConfig, operationIds) {
  let isResponseMLEForAPI = merchantConfig.getEnableResponseMleGlobally();
  const responseMLEMap = merchantConfig.getInternalMapToControlResponseMLEonAPI();
  
  if (responseMLEMap && operationIds) {
    operationIds.forEach(opId => {
      const trimmedId = opId.trim();
      if (responseMLEMap.has(trimmedId)) {
        isResponseMLEForAPI = responseMLEMap.get(trimmedId);
      }
    });
  }
  
  return isResponseMLEForAPI;
}

exports.checkAndDecryptEncryptedResponse = function (responseBody, merchantConfig) {
  const logger = Logger.getLogger(merchantConfig, 'MLEUtility');
  logger.debug('Checking if response body requires decryption');

  if (
    !responseBody ||
    typeof responseBody !== 'object' ||
    Object.keys(responseBody).length !== 1 ||
    !responseBody.encryptedResponse
  ) {
    logger.debug('Response body is not an encrypted response, returning as is');
    return Promise.resolve(responseBody);
  }

  logger.debug('Response body contains encrypted data, attempting to decrypt');
  logger.debug(Constants.LOG_RESPONSE_BEFORE_MLE + JSON.stringify(responseBody));
  
  try {
    // Private key from config will take precedence over file path.
    const privateKey = merchantConfig.getResponseMlePrivateKey() || 
                       Cache.getMleResponsePrivateKeyFromFilePath(merchantConfig);
    
    if (!privateKey) {
      const errorMsg = 'Failed to retrieve MLE response private key';
      logger.error(errorMsg);
      return Promise.reject(new Error(errorMsg));
    }
    
    logger.debug('Successfully retrieved private key for decryption');
    
    return JWEUtility.decryptJWEUsingPrivateKey(privateKey, responseBody.encryptedResponse)
      .then(decryptedData => {
        logger.debug(Constants.LOG_RESPONSE_AFTER_MLE + decryptedData);
        return JSON.parse(decryptedData);
      })
      .catch(error => {
        let errorMsg;
        if (error.message.includes('no key found') || error.message.includes('key not found')) {
          errorMsg = 'Decryption failed: unable to find a suitable decryption key.';
        } else {
          errorMsg = `Error decrypting MLE response: ${error.message}`;
        }
        logger.error(errorMsg);
        // Create a more descriptive error
        return Promise.reject(new Error(errorMsg));
      });
  } catch (error) {
    const errorMsg = `Error preparing for MLE response decryption: ${error.message}`;
    logger.error(errorMsg);
    // Create a more descriptive error
    return Promise.reject(new Error(errorMsg));
  }
}

exports.encryptRequestPayload = function(merchantConfig, requestBody) {
    if (requestBody == null) {
      return Promise.resolve(requestBody);
    }
    
    var logger = Logger.getLogger(merchantConfig, 'MLEUtility');
    
    //get the MLE cert and verify the expiry of cert
    let cert = Cache.getRequestMLECertFromCache(merchantConfig);
    if ((cert === null || cert === undefined) && Constants.HTTP == merchantConfig.getAuthenticationType()) {
      logger.debug("The certificate to use for MLE for requests is not provided in the merchant configuration. Please ensure that the certificate path is provided.");
      logger.debug("Currently, MLE for requests using HTTP Signature as authentication is not supported by Cybersource. By default, the SDK will fall back to non-encrypted requests.");
      return Promise.resolve(requestBody);
    }
    // let isCertExpired = KeyCertificate.verifyIsCertificateExpired(cert, merchantConfig.getRequestmleKeyAlias(), logger);
    // if (isCertExpired === true) {
    //   ApiException.ApiException("Certificate for MLE with alias " + merchantConfig.getRequestmleKeyAlias() + " is expired in " + merchantConfig.getKeyFileName() + ".p12", logger);
    // }

    const customHeaders = {
        iat: Math.floor(Date.now() / 1000) //epoch time in seconds
    };
    const errorMessage = `Serial number not found in request MLE certificate for alias ${merchantConfig.getRequestmleKeyAlias()} in ${merchantConfig.getKeyFileName()}.p12, using certificate serial number as fallback`;
    const serialNumber = getSerialNumberFromCert(cert, errorMessage);
    const headers = {
        alg: "RSA-OAEP-256",
        enc: "A256GCM",
        cty: "JWT",
        kid: serialNumber,
        ...customHeaders
    };
    
    let requestBodyStr = requestBody;
    if (requestBody !== "{}") {
      requestBodyStr = JSON.stringify(requestBody, null, 0);
    }
    const payload = Buffer.from(requestBodyStr);
    const publicKeyInJWK = {
      kty: 'RSA',
      n: toBase64Url(cert.publicKey.n),
      e: toBase64Url(cert.publicKey.e),
    };

    return jose.JWE.createEncrypt({ format: 'compact', fields: headers }, { key: publicKeyInJWK, header: { kid: serialNumber } })
      .update(payload)
      .final()
      .then(token => {
          logger.debug(Constants.LOG_REQUEST_BEFORE_MLE + JSON.stringify(requestBody));
          const mleRequest = {
              encryptedRequest: token
          };
          logger.debug(Constants.LOG_REQUEST_AFTER_MLE + JSON.stringify(mleRequest));
          return mleRequest;
      });
}

function toBase64Url(bi) {
  const hex = bi.toString(16);
  const base64 = forge.util.encode64(forge.util.hexToBytes(hex));
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function getSerialNumberFromCert(cert, errorMessage) {
  if (!cert.subject || !cert.subject.attributes) {
      throw new Error("Subject or attributes are missing in MLE cert");
  }

  const serialNumberAttr = cert.subject.attributes.find(attr => attr.name === 'serialNumber');
  if (serialNumberAttr) {
      return serialNumberAttr.value;
  }
  throw new Error(errorMessage || "Serial number attribute not found in cert subject");
}

/**
 * Validates and auto-extracts responseMleKID if necessary
 * @param {object} merchantConfig - Merchant configuration object
 * @param {object} logger - Logger object for logging messages
 * @returns {string} - The validated or auto-extracted responseMleKID
 * @throws Will throw an error if responseMleKID is not available and cannot be auto-extracted
 */
exports.validateAndAutoExtractResponseMleKid = function(merchantConfig, logger) {
    logger.debug('Validating responseMleKID for JWT token generation');
    
    // Variable to store auto-extracted KID
    let cybsKid = null;
    
    // First, try to auto-extract from CyberSource P12 certificate if applicable
    const hasValidFilePath = typeof merchantConfig.getResponseMlePrivateKeyFilePath() === "string" 
        && merchantConfig.getResponseMlePrivateKeyFilePath().trim() !== "";
    
    if (hasValidFilePath) {
        const path = require('path');
        const fileExtension = path.extname(merchantConfig.getResponseMlePrivateKeyFilePath()).toLowerCase();
        const isP12File = fileExtension === ".p12" || fileExtension === ".pfx";
        
        if (isP12File) {
            logger.debug('P12/PFX file detected, checking if it is a CyberSource certificate');
            
            const isCybersourceP12 = Utility.isCybersourceP12(
                merchantConfig.getResponseMlePrivateKeyFilePath(),
                merchantConfig.getResponseMlePrivateKeyFilePassword(),
                logger
            );
            
            if (isCybersourceP12) {
                logger.debug('Detected CyberSource P12 file, attempting to auto-extract responseMleKID');
                try {
                    cybsKid = exports.extractResponseMleKid(
                        merchantConfig.getResponseMlePrivateKeyFilePath(),
                        merchantConfig.getResponseMlePrivateKeyFilePassword(),
                        merchantConfig.getMerchantID(),
                        logger
                    );
                    
                    logger.info('Successfully auto-extracted responseMleKID from CyberSource P12 certificate');
                } catch (error) {
                    logger.warn(`Failed to auto-extract responseMleKID from P12 file: ${error.message}. Will check for manually configured value.`);
                }
            } else {
                logger.debug('P12 file is not a CyberSource-generated certificate, skipping auto-extraction');
            }
        } else {
            logger.debug('Private key file is not a P12/PFX file, skipping auto-extraction');
        }
    } else {
        logger.debug('No valid private key file path provided, skipping auto-extraction');
    }
    
    // Get manually configured responseMleKID
    let configuredKid = merchantConfig.getResponseMleKID();
    configuredKid = (configuredKid && typeof configuredKid === "string" && configuredKid.trim()) ? configuredKid.trim() : null;
    
    // Determine which value to use
    if (!cybsKid && !configuredKid) {
        logger.error('responseMleKID is required but not available');
        ApiException.ApiException(
            "responseMleKID is required when response MLE is enabled. " +
            "Could not auto-extract from certificate and no manual configuration provided. " +
            "Please provide responseMleKID explicitly in your configuration.",
            logger
        );
    }
    
    if (cybsKid && !configuredKid) {
        logger.debug('Using auto-extracted responseMleKID from CyberSource P12 certificate');
        return cybsKid;
    }
    
    if (!cybsKid && configuredKid) {
        logger.debug('Using manually configured responseMleKID');
        return configuredKid;
    }
    
    // Both exist
    if (cybsKid !== configuredKid) {
        logger.warn('Auto-extracted responseMleKID does not match manually configured responseMleKID. Using configured value as preference.');
    } else {
        logger.debug('Auto-extracted responseMleKID matches manually configured value');
    }
    return configuredKid;
};

/**
 * Extracts the serial number (KID) from a certificate's subject in a P12 file where CN matches the merchantId
 * @param {string} filePath - Path to the P12 file
 * @param {string} password - Password for the P12 file
 * @param {string} merchantId - The merchant ID to match against the CN in the certificate subject
 * @param {object} logger - Logger object for logging messages
 * @returns {string} - The serial number extracted from the certificate's subject attributes
 * @throws Will throw an error if the certificate with matching CN is not found or serial number is missing
 */
exports.extractResponseMleKid = function(filePath, password, merchantId, logger) {
    try {
        logger.debug(`Extracting MLE KID from P12 file: ${filePath} for merchantId: ${merchantId}`);
        
        const p12 = Cache.fetchCachedP12FromFile(filePath, password, logger);
        
        // Get certificate bags from P12
        const certBags = p12.getBags({ bagType: forge.pki.oids.certBag });
        const certs = certBags[forge.pki.oids.certBag];
        
        if (!certs || certs.length === 0) {
            logger.error(`No certificates found in P12 file: ${filePath}`);
            ApiException.AuthException(`No certificates found in P12 file: ${filePath}`);
        }
        
        logger.debug(`Found ${certs.length} certificate(s) in P12 file`);
        
        // Iterate through certificates to find one with matching CN
        for (let i = 0; i < certs.length; i++) {
            const certBag = certs[i];
            const cert = certBag.cert;
            
            if (!cert || !cert.subject || !cert.subject.attributes) {
                logger.debug(`Certificate ${i + 1} has no subject attributes, skipping`);
                continue;
            }
            
            // Extract CN from certificate subject
            let cn = null;
            for (const attr of cert.subject.attributes) {
                if (attr.name === 'commonName' || attr.shortName === 'CN') {
                    cn = attr.value;
                    break;
                }
            }
            
            if (!cn) {
                logger.debug(`Certificate ${i + 1} has no CN in subject, skipping`);
                continue;
            }
            
            logger.debug(`Certificate ${i + 1} CN: ${cn}`);
            
            // Check if CN matches merchantId (case-insensitive)
            if (cn.toLowerCase() === merchantId.toLowerCase()) {
                logger.debug(`Found certificate with matching CN: ${cn}`);
                
                // Use the shared getSerialNumberFromCert function
                let serialNumber = null;
                try {
                    serialNumber = getSerialNumberFromCert(cert, logger);
                } catch (error) {
                    logger.warn(`Failed to extract serial number from certificate subject: ${error.message}` +  `Using certificate serial number as fallback.`);
                    serialNumber = cert.serialNumber;

                }
                
                logger.debug(`Serial number (MLE KID) extracted: ${serialNumber}`);
                
                return serialNumber;
            }
        }
        
        // If we get here, no matching certificate was found
        logger.error(`No certificate with CN matching merchantId (${merchantId}) and valid serialNumber found in P12 file: ${filePath}`);
        ApiException.AuthException(`No certificate with CN matching merchantId (${merchantId}) found in P12 file: ${filePath}`);
        
    } catch (error) {
        logger.error(`Error extracting MLE KID from P12 file: ${filePath}: ${error.message}`);
        ApiException.AuthException(`Error extracting MLE KID from P12 file: ${filePath}: ${error.message}`);
    }
};
