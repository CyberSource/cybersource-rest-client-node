'use strict';

var fs = require('fs');
var crypto = require('crypto');

/**
 * This return return Digest value which is SHA-256 hash of payload that is BASE64 encoded
 */
exports.generateDigest = function (merchantConfig, logger) {

    try {
        var data = merchantConfig.getRequestJsonData();
        var buffer = Buffer.from(data, 'utf8');
        const hash = crypto.createHash('sha256');
        hash.update(buffer);
        var digest = hash.digest('base64');
        return digest;
    } catch (err) {
        logger.error(err.stack);
    }
}