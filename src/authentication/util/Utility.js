'use strict'

var ApiException = require('./ApiException');
var Constants = require('./Constants');
var fs = require('fs');
var forge = require('node-forge');
var jwkToPem = require('jwk-to-pem');

exports.getResponseCodeMessage = function (responseCode) {

    var tempResponseCode = responseCode.toString();

    switch (tempResponseCode) {
        case "200":
            tempResponseCode = Constants.STATUS200;
            break;
        case "201":
            tempResponseCode = Constants.STATUS200;
            break;
        case "400":
            tempResponseCode = Constants.STATUS400;
            break;
        case "401":
            tempResponseCode = Constants.STATUS401;
            break;
        case "403":
            tempResponseCode = Constants.STATUS403;
            break;
        case "404":
            tempResponseCode = Constants.STATUS404;
            break;
        case "500":
            tempResponseCode = Constants.STATUS500;
            break;
        case "502":
            tempResponseCode = Constants.STATUS502;
            break;
        case "503":
            tempResponseCode = Constants.STATUS503;
            break;
        case "504":
            tempResponseCode = Constants.STATUS504;
            break;

        default:
            tempResponseCode = null;
    }
    return tempResponseCode;
}

exports.isJsonString = function(jsonString){
    try {
        JSON.parse(jsonString);
        return true;
    } catch (e) {
        return false;
    }
}

exports.loadPemCertificates = function (pemCertificatePath) {
    if (pemCertificatePath === null || pemCertificatePath === undefined) {
        return null;
    }
    const certs = pemCertificatePath.match(/-----BEGIN CERTIFICATE-----[\s\S]*?-----END CERTIFICATE-----/gm);
    return certs;
}


exports.findCertificateByAlias = function (certs, keyAlias) {
    if (certs === null || certs === undefined || keyAlias === null || keyAlias === undefined) {
        return null;
    }
    
    if (!Array.isArray(certs)) {
        ApiException.AuthException("Invalid certificate format. Expected an array of certificates.");
    }
    
    const forge = require('node-forge');

    
    try {
        // Iterate through each certificate
        for (const cert of certs) {
            try {
                // Create an X509 certificate object
                const x509 = forge.pki.certificateFromPem(cert);
                

                
                // Extract the Common Name (CN) from the subject
                let commonName = null;
                const lowerKeyAlias = keyAlias.toLowerCase();
                
                // In node-forge, subject is an object with attributes
                if (x509.subject && x509.subject.attributes) {
                    for (const attr of x509.subject.attributes) {
                        if (attr.name === 'commonName' || attr.shortName === 'CN') {
                            commonName = attr.value;
                            break;
                        }
                    }
                }
                
                if (commonName) {
                    if (commonName.toLowerCase() === lowerKeyAlias) {
                        return cert;
                    }
                }
            } catch (e) {
                // Skip invalid certificates
                continue;
            }
        }
        
        // If we get here, no matching certificate was found
        ApiException.AuthException("Certificate with alias " + keyAlias + " not found in the provided PEM certificates.");
    } catch (e) {
        ApiException.AuthException("Error processing certificates: " + e.message);
    }
}

/**
 * Parses the MLE configuration string and returns an object indicating requestMLE and responseMLE flags.
 * @param {string} configString - The MLE configuration string in the format 'requestMLE::responseMLE' or 'requestMLE'.
 * @param {object} logger - Logger object for logging errors.
 * @returns {object} An object with requestMLE and optionally responseMLE boolean properties.
 * @throws Will throw an error if the configString format is invalid.
 */
exports.ParseMLEConfigString = function (configString, logger) {
    if (!configString?.trim()) {
       ApiException.ApiException("Unsupported empty. Expected format: 'requestMLE::responseMLE' or 'requestMLE' as true/false.", logger);
    } else if (configString.indexOf('::') != -1) {
        const parts = configString.split('::');
        if (parts.length !== 2) {
            ApiException.ApiException("Invalid MLE control map value format. Expected format: true/false for 'requestMLE::responseMLE' but got: '" + configString + "'", logger);
        }
        const requestMLEPart = parts[0].trim();
        const responseMLEPart = parts[1].trim();

        if (requestMLEPart !== "" && ((requestMLEPart !== 'true' && requestMLEPart !== 'false'))) {
            ApiException.ApiException("Invalid MLE control map value format. Expected format: true/false for 'requestMLE::responseMLE' but got: '" + configString + "'", logger);
        }
        if (responseMLEPart !== "" && ((responseMLEPart !== 'true' && responseMLEPart !== 'false'))) {
            ApiException.ApiException("Invalid MLE control map value format. Expected format: true/false for 'requestMLE::responseMLE' but got: '" + configString + "'", logger);
        }


        // Create the result object
        const result = {};
        
        // Only set requestMLE if requestMLEPart is not empty
        if (requestMLEPart !== "") {
            result.requestMLE = (requestMLEPart === 'true');
        }
        
        // Only set responseMLE if responseMLEPart is not empty
        if (responseMLEPart !== "") {
            result.responseMLE = (responseMLEPart === 'true');
        }
        
        return result;
        
    } else {
        if (configString === 'true' || configString === 'false') {
            const result = {
                requestMLE: configString === 'true'
            };
            return result;
        } else {
            ApiException.ApiException("Invalid MLE control map value format: '" + configString + "'. Expected format: true/false for 'requestMLE' but got: '" + configString + "'", logger);
        }
    }
}

/**
 * Internal helper: Parses a P12 file and returns the pkcs12 object
 * @param {string} filePath - Path to the P12 file
 * @param {string} password - Password for the P12 file
 * @param {object} logger - Logger object for logging messages
 * @returns {object} - Parsed pkcs12 object
 * @throws Will throw an error if file reading or parsing fails
 */
function parseP12File(filePath, password, logger) {
    logger.debug(`Parsing P12 file: ${filePath}`);
    
    if (!fs.existsSync(filePath)) {
        logger.error(`File not found: ${filePath}`);
        throw new Error(Constants.FILE_NOT_FOUND + filePath);
    }
    
    var p12Buffer = fs.readFileSync(filePath);
    var p12Der = forge.util.binary.raw.encode(new Uint8Array(p12Buffer));
    var p12Asn1 = forge.asn1.fromDer(p12Der);
    var p12 = forge.pkcs12.pkcs12FromAsn1(p12Asn1, false, password);
    
    logger.debug(`Successfully parsed P12 file`);
    
    return p12;
}

/**
 * Reads a private key from a P12 file
 * @param {string} filePath - Path to the P12 file
 * @param {string} password - Password for the P12 file
 * @param {object} logger - Logger object for logging messages
 * @returns {string} - Private key in PEM format
 */
exports.readPrivateKeyFromP12 = function(filePath, password, logger) {
    try {
        logger.debug(`Reading private key from P12 file: ${filePath}`);
        
        var p12 = parseP12File(filePath, password, logger);
        
        // Extract the private key
        var keyBags = p12.getBags({ bagType: forge.pki.oids.keyBag });
        var bag = keyBags[forge.pki.oids.keyBag][0];
        
        if (keyBags[forge.pki.oids.keyBag] === undefined || keyBags[forge.pki.oids.keyBag].length == 0) {
            logger.debug(`No key bag found, trying pkcs8ShroudedKeyBag`);
            keyBags = p12.getBags({ bagType: forge.pki.oids.pkcs8ShroudedKeyBag });
            bag = keyBags[forge.pki.oids.pkcs8ShroudedKeyBag][0];
        }
        
        var privateKey = bag.key;
        var rsaPrivateKey = forge.pki.privateKeyToPem(privateKey);
        
        logger.debug(`Successfully extracted private key from P12 file`);
        
        return rsaPrivateKey;
    } catch (error) {
        logger.error(`Error reading private key from P12 file: ${filePath}: ${error.message}`);
        ApiException.AuthException(`Error reading private key from P12 file: ${filePath}: ${error.message}. ${Constants.INCORRECT_KEY_PASS}`);
    }
};

/**
 * Loads a private key from a PEM file
 * @param {string} filePath - Path to the PEM file
 * @param {string} password - Password for the encrypted PEM file (optional)
 * @param {object} logger - Logger object for logging messages
 * @returns {string} - Private key in PEM format
 */
exports.readPrivateKeyFromPemFile = function(filePath, password, logger) {
    try {
        logger.debug(`Reading private key from PEM file: ${filePath}`);
        
        if (!fs.existsSync(filePath)) {
            logger.error(`File not found: ${filePath}`);
            ApiException.AuthException(Constants.FILE_NOT_FOUND + filePath);
        }
        
        // Read the PEM file
        var pemData = fs.readFileSync(filePath, 'utf8');
        
        logger.debug(`Successfully read PEM file`);
        
        // Check if the private key is encrypted
        var isEncrypted = pemData.includes('ENCRYPTED');
        
        logger.debug(`PEM file contains ${isEncrypted ? 'an encrypted' : 'an unencrypted'} private key`);
        
        if (isEncrypted && (!password || password.trim() === '')) {
            logger.error(`Password is required for encrypted private key: ${filePath}`);
            ApiException.AuthException(`Password is required for encrypted private key: ${filePath}`);
        }
        
        try {
            var privateKey;
            if (isEncrypted) {
                logger.debug(`Decrypting private key using provided password`);
                // Decrypt the private key using the provided password
                privateKey = forge.pki.decryptRsaPrivateKey(pemData, password);
            } else {
                logger.debug(`Parsing unencrypted private key`);
                // Parse the unencrypted private key
                privateKey = forge.pki.privateKeyFromPem(pemData);
            }
            
            if (!privateKey) {
                logger.error(`Failed to parse private key from PEM file: ${filePath}`);
                ApiException.AuthException(`Failed to parse private key from PEM file: ${filePath}`);
            }
            
            logger.debug(`Successfully extracted private key from PEM file`);
            
            return forge.pki.privateKeyToPem(privateKey);
        } catch (error) {
            if (isEncrypted) {
                logger.error(`Error decrypting private key from ${filePath}: ${error.message}. This may be due to an incorrect password.`);
                ApiException.AuthException(`Error decrypting private key from ${filePath}: ${error.message}. ${Constants.INCORRECT_KEY_PASS}`);
            } else {
                logger.error(`Error parsing private key from ${filePath}: ${error.message}`);
                ApiException.AuthException(`Error parsing private key from ${filePath}: ${error.message}`);
            }
        }
    } catch (error) {
        logger.error(`Error loading private key from PEM file: ${filePath}: ${error.message}`);
        ApiException.AuthException(`Error loading private key from PEM file: ${filePath}: ${error.message}`);
    }
};

exports.parseAndReturnPem = function(key, logger, password, passwordPropertyName) {
  logger.debug(`Parsing private key to PEM format synchronously, key type: ${typeof key}`);
  
  if (typeof key === 'string') {
    logger.debug('Processing string key as potential PEM private key');
    
    // Check if the key is encrypted
    const isEncrypted = key.includes('ENCRYPTED');
    
    if (isEncrypted) {
      logger.debug('Detected encrypted private key');
      
      // Check if password is provided for encrypted key
      if (!password || password.trim() === '') {
        const propertyHint = passwordPropertyName ? ` Please set the '${passwordPropertyName}' property in your configuration.` : '';
        const errorMessage = `Password is required for encrypted private key.${propertyHint}`;
        logger.error(errorMessage);
        throw new Error(errorMessage);
      }
      
      try {
        // Decrypt the private key using the provided password
        logger.debug('Attempting to decrypt private key with provided password');
        const privateKey = forge.pki.decryptRsaPrivateKey(key, password);
        
        if (!privateKey) {
          logger.error('Failed to decrypt private key. Incorrect password or invalid key format.');
          throw new Error('Failed to decrypt private key. Incorrect password or invalid key format.');
        }
        
        // Convert the decrypted key back to PEM format
        const pemKey = forge.pki.privateKeyToPem(privateKey);
        logger.debug('Successfully decrypted and converted private key to PEM format');
        return pemKey;
      } catch (error) {
        logger.error(`Error decrypting private key: ${error.message}`);
        throw new Error(`Error decrypting private key: ${error.message}`);
      }
    } else {
      // Not encrypted, proceed with normal validation
      try {
        // Validate it's a valid private key PEM
        forge.pki.privateKeyFromPem(key);
        logger.debug('Successfully validated private key PEM format');
        return key;
      } catch (error) {
        logger.error(`Invalid private key PEM format: ${error.message}`);
        throw new Error('Invalid private key PEM format');
      }
    }
  } else if (typeof key === 'object' && key !== null) {
    logger.debug('Processing object key as potential JWK private key');
    try {
      // Check if it has the 'd' property which indicates a private key
      if (!key.d) {
        logger.error('JWK object is not a private key (missing d parameter)');
        throw new Error('JWK object is not a private key');
      }
      
      // Convert JWK to PEM (private key)
      logger.debug('Converting JWK to private key PEM');
      const pem = jwkToPem(key, { private: true });
      logger.debug('Successfully converted JWK to private key PEM format');
      return pem;
    } catch (error) {
      logger.error(`Invalid JWK private key object: ${error.message}`);
      throw new Error('Invalid JWK private key object');
    }
  } else {
    logger.error(`Unsupported key format: ${typeof key}`);
    throw new Error('Unsupported key format');
  }
}

/**
 * Checks if a P12 file is generated by CyberSource
 * Validates that the P12 contains a certificate with CN="CyberSource_SJC_US" and only one private key
 * @param {string} filePath - Path to the P12 file
 * @param {string} password - Password for the P12 file
 * @param {object} logger - Logger object for logging messages
 * @returns {boolean} - True if the P12 file is generated by CyberSource, false otherwise
 */
exports.isCybersourceP12 = function(filePath, password, logger) {
    try {
        logger.debug(`Checking if P12 file is generated by CyberSource: ${filePath}`);
        
        const p12 = parseP12File(filePath, password, logger);
        const certBags = p12.getBags({ bagType: forge.pki.oids.certBag });
        const certs = certBags[forge.pki.oids.certBag];
        
        // Early return if no certificates found
        if (!certs) {
            logger.debug('No certificates found in P12 file');
            return false;
        }
        
        logger.debug(`Found ${certs.length} certificate(s) in P12 file`);
        
        // Check for CyberSource certificate using modern iteration
        const hasCybersourceCert = certs.some(({ cert }) => {
            if (!cert?.subject?.attributes) return false;
            
            const cnAttr = cert.subject.attributes.find(
                attr => attr.name === 'commonName' || attr.shortName === 'CN'
            );
            
            if (cnAttr) {
                logger.debug(`Found certificate with CN: ${cnAttr.value}`);
                if (cnAttr.value === Constants.CYBERSOURCE_P12_CERT_ALIAS) {
                    logger.debug(`Found CyberSource certificate (CN=${Constants.CYBERSOURCE_P12_CERT_ALIAS})`);
                    return true;
                }
            }
            return false;
        });
        
        if (!hasCybersourceCert) {
            logger.debug(`P12 file does not contain CyberSource certificate (CN=${Constants.CYBERSOURCE_P12_CERT_ALIAS})`);
            return false;
        }
        
        // Count private keys from both bag types
        const bagTypes = [
            { oid: forge.pki.oids.keyBag, name: 'keyBag' },
            { oid: forge.pki.oids.pkcs8ShroudedKeyBag, name: 'pkcs8ShroudedKeyBag' }
        ];
        
        let privateKeyCount = 0;
        for (const { oid, name } of bagTypes) {
            const bags = p12.getBags({ bagType: oid });
            const count = bags[oid]?.length || 0;
            if (count > 0) {
                privateKeyCount += count;
                logger.debug(`Found ${count} ${name} private key(s)`);
            }
        }
        
        logger.debug(`Total private keys found: ${privateKeyCount}`);
        
        // Verify exactly one private key
        if (privateKeyCount !== 1) {
            logger.debug(`P12 file does not contain exactly one private key (found ${privateKeyCount})`);
            return false;
        }
        
        logger.debug('P12 file is generated by CyberSource: contains CyberSource certificate and exactly one private key');
        return true;
        
    } catch (error) {
        logger.error(`Error checking if P12 file is generated by CyberSource: ${error.message}`);
        return false;
    }
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
        
        const p12 = parseP12File(filePath, password, logger);
        
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
                
                const serialNumberAttr = cert.subject.attributes.find(attr => attr.name === 'serialNumber');
                let serialNumber;
                
                if (serialNumberAttr) {
                    serialNumber = serialNumberAttr.value;
                } else {
                    logger.warn(`Serial number not found in certificate subject for merchantId ${merchantId}, using certificate serial number as fallback`);
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
