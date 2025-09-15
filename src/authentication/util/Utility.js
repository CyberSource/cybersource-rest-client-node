'use strict'

var ApiException = require('./ApiException');
var Constants = require('./Constants')

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
    if (configString === null || configString === undefined || configString.trim() === "") {
       ApiException.ApiException("Unsupported empty or non-string configString. Expected format: 'requestMLE::responseMLE' or 'requestMLE' as true/false.", logger);
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
            ApiException.ApiException("Invalid MLE control map value format for key '" + configString + "'. Expected format: true/false for 'requestMLE' but got: '" + configString + "'", logger);
        }
    }
}
