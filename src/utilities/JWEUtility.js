'use strict';

const authJWEUtlilty = require('../authentication/util/JWEUtility.js');

function JWEUtility() {

}

JWEUtility.decryptJWEResponse = function decryptJWEResponse(encodedResponse, merchantConfig) {
    return authJWEUtlilty.decryptUsingPEM(merchantConfig, encodedResponse);
};

module.exports = JWEUtility;
