'use strict'
const jose = require('node-jose');
const KeyCertificate = require('../jwt/KeyCertificateGenerator');
const forge = require('node-forge');
const Logger= require('../logging/Logger');
const ApiException= require('./ApiException');
const Constants = require('./Constants');
const Cache = require('./Cache');

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
    if (merchantConfig.mapToControlMLEonAPI != null && operationId in merchantConfig.mapToControlMLEonAPI) {
        if (merchantConfig.mapToControlMLEonAPI[operationId] === true) {
          isMLEForAPI = true;
        }

        if (merchantConfig.mapToControlMLEonAPI[operationId] === false) {
          isMLEForAPI = false;
        }
    }

    return isMLEForAPI;
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
    // let isCertExpired = KeyCertificate.verifyIsCertificateExpired(cert, merchantConfig.getMleKeyAlias(), logger);
    // if (isCertExpired === true) {
    //   ApiException.ApiException("Certificate for MLE with alias " + merchantConfig.getMleKeyAlias() + " is expired in " + merchantConfig.getKeyFileName() + ".p12", logger);
    // }

    const customHeaders = {
        iat: Math.floor(Date.now() / 1000) //epoch time in seconds
    };
    const serialNumber = getSerialNumberFromCert(cert, merchantConfig, logger);
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

function getSerialNumberFromCert(cert, merchantConfig, logger) {
  if (!cert.subject || !cert.subject.attributes) {
      throw new Error("Subject or attributes are missing in MLE cert");
  }

  const serialNumberAttr = cert.subject.attributes.find(attr => attr.name === 'serialNumber');
  if (serialNumberAttr) {
      return serialNumberAttr.value;
  } else {
    logger.warn("Serial number not found in MLE certificate for alias " + merchantConfig.getMleKeyAlias() + " in " + merchantConfig.getKeyFileName() + ".p12");
    return cert.serialNumber;
  }
}
