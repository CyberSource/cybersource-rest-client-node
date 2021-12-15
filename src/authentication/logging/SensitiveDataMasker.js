'use strict';

const maskingTags = require('./SensitiveDataTags');

function maskSensitiveData(message) {
    var jsonMsg = JSON.parse(JSON.stringify(message));
    var sensitiveFields = maskingTags.getSensitiveDataTags();

    if (jsonMsg instanceof Object) {
        var prop;
        for (prop in jsonMsg) {
            var isFieldSensitive = (sensitiveFields.indexOf(prop) > -1);
            if (isFieldSensitive === true) {
                if (jsonMsg[prop] != null || jsonMsg[prop] != undefined) {
                    jsonMsg[prop] = new Array(jsonMsg[prop].length + 1).join('X');
                }
            } else if (jsonMsg.hasOwnProperty(prop)) {
                jsonMsg[prop] = JSON.parse(maskSensitiveData(jsonMsg[prop]));
            }
        }
    }

    return JSON.stringify(jsonMsg);
}

exports.maskSensitiveData = maskSensitiveData;