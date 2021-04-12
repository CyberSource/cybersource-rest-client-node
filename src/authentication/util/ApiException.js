'use strict';

var Constants = require('./Constants');

exports.ApiException = function (message, logger) {
    var err = new Error(message);
    logger.error(err.stack);
    logger.info(Constants.END_TRANSACTION);
    throw err;
}

exports.AuthException = function (message) {
    var err = new Error(message);
    throw err;
}