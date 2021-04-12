'use strict'

var Constants = require('./Constants')

exports.getResponseCodeMessage = function (responseCode) {

    var tempResponseCode = responseCode.toString();

    switch (tempResponseCode) {
        case "200":
            tempResponseCode = Constants.STATUS200;
            break;
        case "201":
            tempResponseCode = Constants.STATUS200;
            break;
        case "400":
            tempResponseCode = Constants.STATUS400;
            break;
        case "401":
            tempResponseCode = Constants.STATUS401;
            break;
        case "403":
            tempResponseCode = Constants.STATUS403;
            break;
        case "404":
            tempResponseCode = Constants.STATUS404;
            break;
        case "500":
            tempResponseCode = Constants.STATUS500;
            break;
        case "502":
            tempResponseCode = Constants.STATUS502;
            break;
        case "503":
            tempResponseCode = Constants.STATUS503;
            break;
        case "504":
            tempResponseCode = Constants.STATUS504;
            break;

        default:
            tempResponseCode = null;
    }
    return tempResponseCode;
}