'use strict'
const jose = require('node-jose');
const KeyCertificate = require('../jwt/KeyCertificateGenerator');
const forge = require('node-forge');

exports.checkIsMLEForAPI = function(merchantConfig, isMLESupportedByCybsForApi, operationId) {
    //isMLE for an api is false by default
    var isMLEForAPI=false;

    //check here isMLE True or False
    //if API is part of MLE then add the isMLE global paramter
    if(isMLESupportedByCybsForApi === true && merchantConfig.isMLE === true){
      isMLEForAPI=true;
    }

    //Control the MLE only from map
    if(merchantConfig.mapToControlMLEonAPI !=null && operationId in merchantConfig.mapToControlMLEonAPI){
        if(merchantConfig.mapToControlMLEonAPI[operationId] === true){
          isMLEForAPI=true;
        }
        if(merchantConfig.mapToControlMLEonAPI[operationId] === false){
          isMLEForAPI=false;
        }
    }

    return isMLEForAPI;
}

exports.encryptRequestPayload = function(merchantConfig,requestBody){
    if(requestBody != null){
        let cert = KeyCertificate.getX509CertificateInCert(merchantConfig,null,"CyberSource_SJC_US");
        return generateJWEToken(requestBody, cert,merchantConfig).then(token => {
          console.log("\nrequest before mle: "+ JSON.stringify(requestBody));
          let mleRequest= createMLEJsonRequest(token);
          console.log("\nrequest after mle: "+ JSON.stringify(mleRequest));
          return mleRequest;
        }).catch(error => {
              console.error(`Encryption error: ${error}`);
              return null;
        });
    } else {
        return Promise.resolve(requestBody);
    }
}

function generateJWEToken(requestBody, cert,merchantConfig) {

  const customHeaders = {
      iat: Math.floor(Date.now() / 1000) //epoch time in seconds
  };
  const serialNumber = getSerialNumberFromCert(cert);
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
        })
        .catch(error => {
            console.error(`error: ${error}`);
            return null;
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

function getSerialNumberFromCert(cert) {
 if (!cert.subject || !cert.subject.attributes) {
        throw new Error("Subject or attributes are missing");
    }

    const serialNumberAttr = cert.subject.attributes.find(attr => attr.name === 'serialNumber');
    if (serialNumberAttr) {
        return serialNumberAttr.value;
    } else {
        throw new Error("Serial number not found in subject attributes");
    }
}
