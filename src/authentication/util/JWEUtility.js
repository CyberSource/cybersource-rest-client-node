'use strict';

const fs = require('fs');
const jose = require('node-jose');
const cache = require('./Cache.js');

/**
 * @deprecated This method has been marked as Deprecated and will be removed in coming releases.
 * Use {@link decryptJWEUsingPrivateKey()} instead.
 *
 */
exports.decryptUsingPEM = function(merchantConfig, encodedData) {
    const pemFileData = cache.fetchPEMFileForNetworkTokenization(merchantConfig);
    const keyPromise = jose.JWK.asKey(pemFileData, 'pem');
    const decryptedResponsePromise = keyPromise.then(key => jose.JWE.createDecrypt(key).decrypt(encodedData))
                                               .then(result => result.plaintext.toString('utf8'))
    return decryptedResponsePromise;
}

exports.decryptJWEUsingPrivateKey = function(privateKey, encodedData) {
    const keyPromise = jose.JWK.asKey(privateKey, 'pem');
    const decryptedResponsePromise = keyPromise.then(key => jose.JWE.createDecrypt(key).decrypt(encodedData))
                                               .then(result => result.plaintext.toString('utf8'))
    return decryptedResponsePromise;
}
