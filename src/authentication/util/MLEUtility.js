'use strict'
const jose = require('node-jose');
const KeyCertificate = require('../jwt/KeyCertificateGenerator');
const forge = require('node-forge');
const Logger= require('../logging/Logger');
const ApiException= require('./ApiException');
const Constants = require('./Constants');

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
    if (requestBody != null) {
        var logger = Logger.getLogger(merchantConfig, 'MLEUtility');
        return generateJWEToken(requestBody, logger, merchantConfig).then(token => {
          logger.debug(Constants.LOG_REQUEST_BEFORE_MLE + JSON.stringify(requestBody));
          let mleRequest = createMLEJsonRequest(token);
          logger.debug(Constants.LOG_REQUEST_AFTER_MLE + JSON.stringify(mleRequest));
          return mleRequest;
        });
    } else {
        return Promise.resolve(requestBody);
    }
}

function generateJWEToken(requestBody, logger, merchantConfig) {
  //get the MLE cert and verify the expiry of cert
  let cert = KeyCertificate.getX509CertificateInCert(merchantConfig, logger, merchantConfig.getMleKeyAlias());
  let isCertExpired = KeyCertificate.verifyIsCertificateExpired(cert, merchantConfig.getMleKeyAlias(), logger);
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
  if (requestBody !== "{}") {
    requestBody = JSON.stringify(requestBody, null, 0);
  }
  const payload = Buffer.from(requestBody);
  const publicKeyInJWK = {
    kty: 'RSA',
    n: toBase64Url(cert.publicKey.n),
    e: toBase64Url(cert.publicKey.e),
  };

  return jose.JWE.createEncrypt({ format: 'compact', fields: headers }, { key: publicKeyInJWK, header: { kid: serialNumber } })
    .update(payload)
    .final()
    .then(result => {
        return result;
    });
}

function toBase64Url(bi) {
  const hex = bi.toString(16);
  const base64 = forge.util.encode64(forge.util.hexToBytes(hex));
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function createMLEJsonRequest(jweToken) {
  const mleJson = {
      encryptedRequest: jweToken
  };
  return mleJson;
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
