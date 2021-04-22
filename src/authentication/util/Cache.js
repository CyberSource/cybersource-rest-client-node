'use strict';

var fs = require('fs');
var forge = require('node-forge');
var cache = require('memory-cache');
var path = require('path');
var Constants = require('./Constants');
var ApiException = require('./ApiException');


/**
 * This module is doing Caching.
 * Certificate will be available in the memory cache if it has initialized once.
 */
exports.fetchCachedCertificate = function (merchantConfig, logger) {

    var cachedCertificateFromP12File = cache.get("certificateFromP12File");
    var cachedLastModifiedTimeStamp = cache.get("certificateLastModifideTimeStamp");

    var filePath = path.resolve(path.join(merchantConfig.getKeysDirectory(), merchantConfig.getKeyFileName() + '.p12'));
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
        var p12Buffer = fs.readFileSync(filePath);
        var p12Der = forge.util.binary.raw.encode(new Uint8Array(p12Buffer));
        var p12Asn1 = forge.asn1.fromDer(p12Der);
        var certificate = forge.pkcs12.pkcs12FromAsn1(p12Asn1, false, keyPass);
        cache.put("certificateFromP12File", certificate);
        cache.put("certificateLastModifideTimeStamp", fileLastModifiedTime);
        return certificate;
    } catch (error) {
        ApiException.AuthException(error.message + ". " + Constants.INCORRECT_KEY_PASS);
    }
}