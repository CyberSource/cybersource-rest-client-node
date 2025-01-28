'use strict';

const maskingTags = require('./SensitiveDataTags');
const Utility = require('../util/Utility.js');
const Constants = require('../util/Constants');


function maskSensitiveData(message) {
    var jsonMsg = "";
    if (typeof message === 'string' && message.startsWith(Constants.LOG_REQUEST_BEFORE_MLE)) {
        return Constants.LOG_REQUEST_BEFORE_MLE + maskSensitiveData(message.substring(Constants.LOG_REQUEST_BEFORE_MLE.length));
    }
    if (typeof message === 'string' && message.startsWith(Constants.LOG_REQUEST_AFTER_MLE)) {
        return Constants.LOG_REQUEST_AFTER_MLE + maskSensitiveData(message.substring(Constants.LOG_REQUEST_AFTER_MLE.length));
    }

    if (Utility.isJsonString(message)) {
        jsonMsg = JSON.parse(message)
    } else {
        jsonMsg = JSON.parse(JSON.stringify(message));
    }

    var sensitiveFields = maskingTags.getSensitiveDataTags();

    if (jsonMsg instanceof Object) {
        var prop;
        for (prop in jsonMsg) {
            var isFieldSensitive = (sensitiveFields.indexOf(prop) > -1);
            if (isFieldSensitive === true) {
                if (jsonMsg[prop] != null || jsonMsg[prop] != undefined) {
                    if(typeof jsonMsg[prop].length === 'number'){
                        jsonMsg[prop] = new Array(jsonMsg[prop].length + 1).join('X');
                    }else if (jsonMsg.hasOwnProperty(prop)) {
                        jsonMsg[prop] = JSON.parse(maskSensitiveData(jsonMsg[prop]));
                    }
                }
            } else if (jsonMsg.hasOwnProperty(prop)) {
                jsonMsg[prop] = JSON.parse(maskSensitiveData(jsonMsg[prop]));
            }
        }
    }

    return JSON.stringify(jsonMsg);
}

exports.maskSensitiveData = maskSensitiveData;