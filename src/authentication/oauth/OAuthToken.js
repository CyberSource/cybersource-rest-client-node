'use strict';

const Constants = require('../util/Constants');
var ApiException = require('../util/ApiException');

exports.getToken = function (merchantConfig, logger) {

    try {
        var oauthtoken;
        oauthtoken = merchantConfig.getAccessToken();
        return oauthtoken;

    } catch (err) {
        throw err;
    }
};
