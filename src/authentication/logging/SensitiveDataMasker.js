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

    if (typeof message === 'string' && message.startsWith(Constants.LOG_RESPONSE_AFTER_MLE)) {
        return Constants.LOG_RESPONSE_AFTER_MLE + maskSensitiveData(message.substring(Constants.LOG_RESPONSE_AFTER_MLE.length));
    }
    if (typeof message === 'string' && message.startsWith(Constants.LOG_RESPONSE_BEFORE_MLE)) {
        return Constants.LOG_RESPONSE_BEFORE_MLE + maskSensitiveData(message.substring(Constants.LOG_RESPONSE_BEFORE_MLE.length));
    }

    if (typeof message === 'string' && message.startsWith(Constants.RESPONSE_DATA_MESSAGE)) {
        return Constants.RESPONSE_DATA_MESSAGE + maskSensitiveData(message.substring(Constants.RESPONSE_DATA_MESSAGE.length));
    }

    if (Utility.isJsonString(message)) {
        jsonMsg = JSON.parse(message);
    } else {
        jsonMsg = JSON.parse(JSON.stringify(message));
    }

    var sensitiveFields = maskingTags.getSensitiveDataTags();

    if (jsonMsg instanceof Object) {
        var prop;
        for (prop in jsonMsg) {
            var isFieldSensitive = (sensitiveFields.indexOf(prop) > -1);
            if (isFieldSensitive === true) {
                if (jsonMsg[prop] !== null && jsonMsg[prop] !== undefined) {  // && not ||
                    var v = jsonMsg[prop];
                    if (typeof v === 'string') {
                        jsonMsg[prop] = new Array(v.length + 1).join('X');
                    } else if (typeof v === 'number' || typeof v === 'boolean') {
                        // Mask primitive non-string values with a fixed placeholder
                        jsonMsg[prop] = 'XXX';
                    } else if (Array.isArray(v)) {
                        // Recurse into each array item
                        jsonMsg[prop] = v.map(function (item) {
                            // Item is not valid
                            if (item === null || item === undefined) return item;

                            // Item is an array or an object — recurse
                            if (typeof item === 'object') return JSON.parse(maskSensitiveData(item));

                            // Item is a string — mask with Xs
                            if (typeof item === 'string') return new Array(item.length + 1).join('X');

                            // Item is a number / boolean / unknown — fail closed
                            return 'XXX';
                        });
                    } else if (typeof v === 'object') {
                        // Object type - recurse into children
                        jsonMsg[prop] = JSON.parse(maskSensitiveData(v));
                    } else {
                        // Unknown type — fail closed
                        jsonMsg[prop] = 'XXX';
                    }
                }
            } else if (jsonMsg.hasOwnProperty(prop)) {
                // Recurse into non-sensitive objects/arrays to mask any nested sensitive fields
                jsonMsg[prop] = JSON.parse(maskSensitiveData(jsonMsg[prop]));
            }
        }
    }

    return JSON.stringify(jsonMsg);
}

exports.maskSensitiveData = maskSensitiveData;