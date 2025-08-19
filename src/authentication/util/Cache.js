'use strict';

var fs = require('fs');
var forge = require('node-forge');
var cache = require('memory-cache');
var path = require('path');
var Constants = require('./Constants');
var ApiException = require('./ApiException');
var Logger = require('../logging/Logger');
var Utility = require('./Utility');

function loadP12FileToAsn1(filePath) {
    var p12Buffer = fs.readFileSync(filePath);
    var p12Der = forge.util.binary.raw.encode(new Uint8Array(p12Buffer));
    var p12Asn1 = forge.asn1.fromDer(p12Der);
    return p12Asn1;
}


/**
 * This module is doing Caching.
 * Certificate will be available in the memory cache if it has initialized once.
 */
exports.fetchCachedCertificate = function (merchantConfig, logger) {

    var cachedCertificateFromP12File = cache.get("certificateFromP12File");
    var cachedLastModifiedTimeStamp = cache.get("certificateLastModifideTimeStamp");

    var filePath = merchantConfig.getP12FilePath();
    if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);
        const currentFileLastModifiedTime = stats.mtime;
        //If no entry found from cache, create a cache entry and return the created object
        if ((cachedCertificateFromP12File === null || cachedCertificateFromP12File === undefined) ||
            (cachedLastModifiedTimeStamp === null || cachedLastModifiedTimeStamp === undefined) ||
            (currentFileLastModifiedTime > cachedLastModifiedTimeStamp)) {
            //Function call to read the file and put values to new cache  
            var keyPass = merchantConfig.getKeyPass();
            var certificateFromP12File = getCertificate(keyPass, filePath, currentFileLastModifiedTime, logger);
            return certificateFromP12File;

        }

        else {
            return cachedCertificateFromP12File;
        }
    }

    else {
        ApiException.AuthException(Constants.FILE_NOT_FOUND + filePath);
    }

}

//Function to read the file and put values to new cache 
function getCertificate(keyPass, filePath, fileLastModifiedTime, logger) {
    try {
        var p12Asn1 = loadP12FileToAsn1(filePath);
        var certificate = forge.pkcs12.pkcs12FromAsn1(p12Asn1, false, keyPass);
        cache.put("certificateFromP12File", certificate);
        cache.put("certificateLastModifideTimeStamp", fileLastModifiedTime);
        return certificate;
    } catch (error) {
        ApiException.AuthException(error.message + ". " + Constants.INCORRECT_KEY_PASS);
    }
}

/**
 * @deprecated This method has been marked as Deprecated and will be removed in coming releases.
 *
 */
exports.fetchPEMFileForNetworkTokenization = function(merchantConfig) {
    var filePath = merchantConfig.getpemFileDirectory();
    var pemFileData = cache.get("privateKeyFromPEMFile");
    var cachedPemFileLastUpdatedTime = cache.get("cachedLastModifiedTimeOfPEMFile");
    if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);
        const currentFileLastModifiedTime = stats.mtime;
        if (pemFileData === undefined || pemFileData === null || cachedPemFileLastUpdatedTime < currentFileLastModifiedTime) {
            pemFileData = fs.readFileSync(filePath, 'utf8');
            cache.put("privateKeyFromPEMFile", pemFileData);
            cache.put("cachedLastModifiedTimeOfPEMFile", currentFileLastModifiedTime);
        }
    }
    return cache.get("privateKeyFromPEMFile");
}


exports.getRequestMLECertFromCache = function(merchantConfig) {
    var logger = Logger.getLogger(merchantConfig, 'Cache');
    var merchantId = merchantConfig.getMerchantID();
    var cacheKey = null;
    var certificatePath = null;
    if (merchantConfig.getMleForRequestPublicCertPath() !== null && merchantConfig.getMleForRequestPublicCertPath() !== undefined) {
        cacheKey =  merchantId + Constants.MLE_CACHE_IDENTIFIER_FOR_CONFIG_CERT;
        certificatePath = merchantConfig.getMleForRequestPublicCertPath();
    } else if (Constants.JWT === merchantConfig.getAuthenticationType().toLowerCase()) {
        certificatePath = merchantConfig.getP12FilePath();
        cacheKey =  merchantId + Constants.MLE_CACHE_IDENTIFIER_FOR_P12_CERT;
    } else {
        logger.debug("The certificate to use for MLE for requests is not provided in the merchant configuration. Please ensure that the certificate path is provided.");
        return null;
    }
    return getMLECertBasedOnCacheKey(merchantConfig, cacheKey, certificatePath);

}

function getMLECertBasedOnCacheKey(merchantConfig, cacheKey, certificatePath) {
    var cachedMLECert = cache.get(cacheKey);
    var logger = Logger.getLogger(merchantConfig, 'Cache');
    if (cachedMLECert === null || cachedMLECert === undefined || cachedMLECert.fileLastModifiedTime !== fs.statSync(certificatePath).mtimeMs) {
        logger.debug("MLE certificate not found in cache or has been modified. Loading from file: " + certificatePath);
        setupMLECache(merchantConfig, cacheKey, certificatePath);
    } else {
        logger.debug("MLE certificate found in cache for key: " + cacheKey);
    }
    return cache.get(cacheKey).mleCert;
}

function setupMLECache(merchantConfig, cacheKey, certificateSourcePath) {
    var fileLastModifiedTime = fs.statSync(certificateSourcePath).mtimeMs;
    var mleCert = null;
    if  (cacheKey.endsWith(Constants.MLE_CACHE_IDENTIFIER_FOR_CONFIG_CERT)) {
        mleCert = loadCertificateFromPem(merchantConfig, certificateSourcePath);
    }
    else if (cacheKey.endsWith(Constants.MLE_CACHE_IDENTIFIER_FOR_P12_CERT)) {
        mleCert = loadCertificateFromP12(merchantConfig, certificateSourcePath);
    }
    cache.put(cacheKey, {
        mleCert: mleCert,
        fileLastModifiedTime: fileLastModifiedTime
    });
    validateCertificateExpiry(mleCert, merchantConfig.getMleKeyAlias(), cacheKey, merchantConfig);
}


function loadCertificateFromP12(merchantConfig, certificatePath) {
    const logger = Logger.getLogger(merchantConfig, 'Cache');
    try {
        // Read the P12 file and convert to ASN1
        var p12Asn1 = loadP12FileToAsn1(certificatePath);
        var p12Cert = forge.pkcs12.pkcs12FromAsn1(p12Asn1, false, merchantConfig.getKeyPass());
        
        // Extract the certificate from the P12 container
        var certBags = p12Cert.getBags({ bagType: forge.pki.oids.certBag });
        if (certBags && certBags[forge.pki.oids.certBag] && certBags[forge.pki.oids.certBag].length > 0) {
            // Process all certificates in the P12 file
            var certs = [];
            for (var i = 0; i < certBags[forge.pki.oids.certBag].length; i++) {
                var cert = certBags[forge.pki.oids.certBag][i].cert;
                var certPem = forge.pki.certificateToPem(cert);
                certs.push(certPem);
            }
            
            // Try to find the certificate by alias among all certificates
            var mleCert =  Utility.findCertificateByAlias(certs, merchantConfig.getMleKeyAlias());
            return forge.pki.certificateFromPem(mleCert);
        } else {
            throw new Error("No certificate found in P12 file");
        }
    } catch (error) {
        ApiException.ApiException(error.message + ". " + Constants.INCORRECT_KEY_PASS, logger);
    }
}

function loadCertificateFromPem(merchantConfig, mleCertPath) {
    try {
        const logger = Logger.getLogger(merchantConfig, 'Cache');
        var pemData = fs.readFileSync(mleCertPath, 'utf8');
        var certs = Utility.loadPemCertificates(pemData);
        var mleCert = null;
        if (!certs || certs.length === 0) {
            throw new Error("No valid PEM certificates found in the provided path : " + mleCertPath);
        }
        try {
            mleCert = Utility.findCertificateByAlias(certs, merchantConfig.getMleKeyAlias());
            
        } catch (error) {
            logger.warn("No certificate found for the specified mleKeyAlias '" + merchantConfig.getMleKeyAlias() + "'. Using the first certificate from file " + mleCertPath + " as the MLE request certificate.");
            mleCert = certs[0];
        }
        // Use node forge to parse the PEM certificate
        var forgeCert = forge.pki.certificateFromPem(mleCert);
        return forgeCert;
    } catch (error) {
        ApiException.AuthException("Error occurred while loading MLE certificate from PEM file : " + error.message);
    }
}

function validateCertificateExpiry(certificate, keyAlias, cacheKey, merchantConfig) {
    var logger = Logger.getLogger(merchantConfig, 'Cache');
    
    var warningMessageForNoExpiryDate = "Certificate does not have expiry date";
    var warningMessageForCertificateExpiringSoon = "Certificate with alias {} is going to expire on {}. Please update the certificate before then.";
    var warningMessageForExpiredCertificate = "Certificate with alias {} is expired as of {}. Please update the certificate.";

    if (cacheKey.endsWith(Constants.MLE_CACHE_IDENTIFIER_FOR_CONFIG_CERT)) {
        warningMessageForNoExpiryDate = "Certificate for MLE Requests does not have expiry date from mleForRequestPublicCertPath in merchant configuration.";
        warningMessageForCertificateExpiringSoon = "Certificate for MLE Requests with alias {} is going to expire on {}. Please update the certificate provided in mleForRequestPublicCertPath in merchant configuration before then.";
        warningMessageForExpiredCertificate = "Certificate for MLE Requests with alias {} is expired as of {}. Please update the certificate provided in mleForRequestPublicCertPath in merchant configuration.";
    }

    if (cacheKey.endsWith(Constants.MLE_CACHE_IDENTIFIER_FOR_P12_CERT)) {
        warningMessageForNoExpiryDate = "Certificate for MLE Requests does not have expiry date in the P12 file.";
        warningMessageForCertificateExpiringSoon = "Certificate for MLE Requests with alias {} is going to expire on {}. Please update the P12 file before then.";
        warningMessageForExpiredCertificate = "Certificate for MLE Requests with alias {} is expired as of {}. Please update the P12 file.";
    }

    // Get the certificate's notAfter date (expiry date)
    var notAfter = null;
    try {
        // All certificates are now in PEM format
        if (certificate.validity && certificate.validity.notAfter) {
            notAfter = certificate.validity.notAfter;
        } else {
            logger.warn("Unknown certificate format. Cannot extract expiry date.");
        }
    } catch (error) {
        logger.warn("Error extracting certificate expiry date: " + error.message);
        return;
    }

    if (!notAfter) {
        // Certificate does not have an expiry date
        logger.warn(warningMessageForNoExpiryDate);
    } else {
        var now = new Date();
        
        if (notAfter < now) {
            // Certificate is already expired
            var expiredMessage = warningMessageForExpiredCertificate.replace("{}", keyAlias).replace("{}", notAfter.toISOString().split('T')[0]);
            logger.warn(expiredMessage);
        } else {
            // Calculate days until expiry
            var timeToExpire = notAfter.getTime() - now.getTime();
            var daysToExpire = Math.floor(timeToExpire / Constants.FACTOR_DAYS_TO_MILLISECONDS);
            
            if (daysToExpire < Constants.CERTIFICATE_EXPIRY_DATE_WARNING_DAYS) {
                var expiringMessage = warningMessageForCertificateExpiringSoon.replace("{}", keyAlias).replace("{}", notAfter.toISOString().split('T')[0]);
                logger.warn(expiringMessage);
            }
        }
    }
};
