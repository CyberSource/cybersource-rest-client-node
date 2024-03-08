'use strict'

var CybersourceRestApi = require('cybersource-rest-client');
/*
* If Cybs.json file is not provided Merchant configuration properties are taken from Configuration module
*/

//set the constant values 
const MerchantId = "testrest";
const MerchantKeyId = "08c94330-f618-42a3-b09d-e1e43be5efda";
const MerchantSecretKey = "yBJxy6LjM2TmcPGu+GaJrHtkke25fPpUX+UY6/L/1tE=";
const AuthenticationType = "jwt";
//const AuthenticationType = "http_signature";
const KeysDirectory = "Resource";
const KeyFileName = "testrest";
const RunEnvironment = "cybersource.environment.sandbox";
const KeyAlias = "testrest";
const KeyPass = "testrest";
const RequestJsonPath = "Resource\\request.json";
const EnableLog = true;
const LogFileName = "cybs";
const LogDirectory = "../log";
const LogfileMaxSize = "5242880"; //10 MB In Bytes

// Constructor for Configuration
function Configuration() {

    var configObj = {
        "authenticationType": AuthenticationType,
        "merchantID": MerchantId,
        "runEnvironment": RunEnvironment,
        "requestJsonPath": RequestJsonPath,

        "keyAlias": KeyAlias,
        "keyPass": KeyPass,
        "keyFileName": KeyFileName,

        "keysDirectory": KeysDirectory,

        "merchantKeyId": MerchantKeyId,
        "merchantsecretKey": MerchantSecretKey,

        "enableLog": EnableLog,

        "logFilename": LogFileName,
        "logDirectory": LogDirectory,
        "logFileMaxSize": LogfileMaxSize
    };
    return configObj;

}

module.exports = Configuration;
