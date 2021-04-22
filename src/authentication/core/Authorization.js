'use strict';

var Constants = require('../util/Constants');
var HttpSingToken = require('../http/HTTPSigToken');
var JWTSigToken = require('../jwt/JWTSigToken');
var ApiException = require('../util/ApiException');

/**
 * This function calls for the generation of Signature message depending on the authentication type.
 * 
 */
exports.getToken = function(merchantConfig, logger){

    var authenticationType = merchantConfig.getAuthenticationType().toLowerCase();
    var httpSigToken;
    var jwtSingToken;

    if(authenticationType === Constants.HTTP) {
        httpSigToken = HttpSingToken.getToken(merchantConfig, logger);
        return httpSigToken;
    }
    else if(authenticationType === Constants.JWT) {
        jwtSingToken = JWTSigToken.getToken(merchantConfig, logger);
        return jwtSingToken;
    }
    else{
        ApiException.ApiException(Constants.AUTH_ERROR, logger);
    }
}