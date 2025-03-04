'use strict';

const authJWEUtlilty = require('../authentication/util/JWEUtility.js');

function JWEUtility() {

}

/**
 * @deprecated This method has been marked as Deprecated and will be removed in coming releases.
 * Use {@link decryptJWEResponseUsingPrivateKey()} instead.
 *
 */
JWEUtility.decryptJWEResponse = function decryptJWEResponse(encodedResponse, merchantConfig) {
    return authJWEUtlilty.decryptUsingPEM(merchantConfig, encodedResponse);
};

JWEUtility.decryptJWEResponseUsingPrivateKey = function (privateKey, encodedResponse) {
    return authJWEUtlilty.decryptJWEUsingPrivateKey(privateKey, encodedResponse);
}

module.exports = JWEUtility;
