'use strict';

const fs = require('fs');
const crypto = require('crypto');
const { compactDecrypt } = require('jose');
const cache = require('./Cache.js');

/**
 * @deprecated This method has been marked as Deprecated and will be removed in coming releases.
 * Use {@link decryptJWEUsingPrivateKey()} instead.
 *
 */
exports.decryptUsingPEM = function(merchantConfig, encodedData) {
    const pemFileData = cache.fetchPEMFileForNetworkTokenization(merchantConfig);
    return exports.decryptJWEUsingPrivateKey(pemFileData, encodedData);
}

exports.decryptJWEUsingPrivateKey = async function(privateKey, encodedData) {
    const privateKeyObject = crypto.createPrivateKey(privateKey);
    const { plaintext } = await compactDecrypt(encodedData, privateKeyObject, {
        keyManagementAlgorithms: ['RSA-OAEP-256', 'RSA-OAEP'],
        contentEncryptionAlgorithms: ['A256GCM', 'A128GCM'],
    });
    return new TextDecoder().decode(plaintext);
}
