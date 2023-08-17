'use strict';

const fs = require('fs');
const jose = require('node-jose');

function readPemFileFromLocation(path) {
    return fs.readFileSync(path, 'utf8');
}

exports.decryptUsingPEM = function(merchantConfig, encodedData) {
    const pemFileData = readPemFileFromLocation(merchantConfig.getpemFileDirectory());
    const keyPromise = jose.JWK.asKey(pemFileData, 'pem');
    const decryptedResponsePromise = keyPromise.then(key => jose.JWE.createDecrypt(key).decrypt(encodedData))
                                               .then(result => result.plaintext.toString('utf8'))
    return decryptedResponsePromise;
}
