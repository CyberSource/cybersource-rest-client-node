var appRoot = require('app-root-path');
module.exports = {
    objectWithAllValuesJWT: {
        "authenticationType": "JWT",
        "merchantID": "testrest",
        "runEnvironment": "CyberSource.Environment.SANDBOX",
        "requestJsonPath": `${appRoot}/tests/resource/request.json`,

        "keyAlias": "testrest",
        "keyPass": "testrest",
        "keyFileName": "testrest",
        "keysDirectory": "../AuthenticationSDK/tests/resource",

        "merchantKeyId": "08c94330-f618-42a3-b09d-e1e43be5efda",
        "merchantsecretKey": "yBJxy6LjM2TmcPGu+GaJrHtkke25fPpUX+UY6/L/1tE=",

        "enableLog": false,
        "logDirectory": `${appRoot}/tests/log`,
        "logFilename": "cybs",
        "proxyPort" : 443,
        "proxyAddress" : "visa.com" ,
    },

    objectWithRunEnvProduction: {
        "authenticationType": "http_signature",
        "merchantID": "testrest",
        "runEnvironment": "CyberSource.Environment.PRODUCTION",
        "merchantKeyId": 25,
        "merchantsecretKey": 18,
        "enableLog": false,
        "logDirectory": `${appRoot}/tests/log`
    },

    objectWithRunEnvUrl: {
        "authenticationType": "http_signature",
        "merchantID": "testrest",
        "runEnvironment": "apitest.cybersource.com",
        "enableLog": false,
        "merchantKeyId": "08c94330-f618-42a3-b09d-e1e43be5efda",
        "merchantsecretKey": "yBJxy6LjM2TmcPGu+GaJrHtkke25fPpUX+UY6/L/1tE=",
        "logDirectory": `${appRoot}/tests/log`
    },

    httpProperties: {
        "authenticationType": "http_signature",
        "merchantID": "testrest",
        "runEnvironment": "CyberSource.Environment.SANDBOX",
        "merchantKeyId": "08c94330-f618-42a3-b09d-e1e43be5efda",
        "merchantsecretKey": "yBJxy6LjM2TmcPGu+GaJrHtkke25fPpUX+UY6/L/1tE=",
        "logDirectory": `${appRoot}/tests/log`,
        "logFilename": "cybs",
        "proxyPort" : "",
        "enableLog": true,
        "proxyAddress" : "" ,
    },

    invalidProperties :{
        "authenticationType": "signature",
        "merchantID": "testrest",
        "enableLog": false,
        "runEnvironment": "CyberSource.Environment.SANDBOX",
        "merchantKeyId": "08c94330-f618-42a3-b09d-e1e43be5efda",
        "merchantsecretKey": "yBJxy6LjM2TmcPGu+GaJrHtkke25fPpUX+UY6/L/1tE=",
        "logDirectory": `${appRoot}/tests/log`,
        "logFilename": "cybs"
    },

    invalidAuthType :{
        "authenticationType": 9,
        "merchantID": "testrest",
        "runEnvironment": "CyberSource.Environment.SANDBOX",
        "merchantKeyId": "08c94330-f618-42a3-b09d-e1e43be5efda",
        "enableLog": false,
        "merchantsecretKey": "yBJxy6LjM2TmcPGu+GaJrHtkke25fPpUX+UY6/L/1tE=",
        "logDirectory": `${appRoot}/tess/log`,
        "logFilename": "cybs"
    },

    invalidRunEnv :{
        "authenticationType": "http_signature",
        "merchantID": "testrest",
        "merchantKeyId": "08c94330-f618-42a3-b09d-e1e43be5efda",
        "enableLog": false,
        "merchantsecretKey": "yBJxy6LjM2TmcPGu+GaJrHtkke25fPpUX+UY6/L/1tE=",
        "logDirectory": `${appRoot}/tests/log`,
        "logFilename": "cybs"
    },

    objectWithJwtFallback: {
        "authenticationType": "JWT",
        "merchantID": "testrest",
        "runEnvironment": 20,
        "merchantKeyId": "08c94330-f618-42a3-b09d-e1e43be5efda",
        "enableLog": false,
        "merchantsecretKey": "yBJxy6LjM2TmcPGu+GaJrHtkke25fPpUX+UY6/L/1tE=",
        "logDirectory": `${appRoot}/tests/log`,
        "logFilename": "cybs"
    },
    objectWithlogSize: {
        "authenticationType": "http_signature",
        "merchantID": "testrest",
        "runEnvironment": "CyberSource.Environment.SANDBOX",
        "merchantKeyId": "08c94330-f618-42a3-b09d-e1e43be5efda",
        "merchantsecretKey": "yBJxy6LjM2TmcPGu+GaJrHtkke25fPpUX+UY6/L/1tE=",
        "logDirectory": `${appRoot}/tests/log`,
        "logFilename": "cybs",
        "logFileMaxSize": 1000,
        "enableLog": true,
    },
    objectWithInvalidEnableType :{
        "authenticationType": "JWT",
        "merchantID": "testrest",
        "runEnvironment": "CyberSource.Environment.SANDBOX",
        "merchantKeyId": "08c94330-f618-42a3-b09d-e1e43be5efda",
        "merchantsecretKey": "yBJxy6LjM2TmcPGu+GaJrHtkke25fPpUX+UY6/L/1tE=",
        "enableLog": 1,
        "logDirectory": `${appRoot}/tests/log`
    },

    jwtProperties : {
        "authenticationType": "JWT",
        "merchantID": "testrest",
        "runEnvironment": "CyberSource.Environment.SANDBOX",
        "keyFileName": "testrest",
        "keysDirectory": "../AuthenticationSDK/tests/resource",
        "enableLog": false,
        "merchantKeyId": "08c94330-f618-42a3-b09d-e1e43be5efda",
        "merchantsecretKey": "yBJxy6LjM2TmcPGu+GaJrHtkke25fPpUX+UY6/L/1tE=",
        "logDirectory": `${appRoot}/tests/log`,
        "logFilename": "cybs"
    },
    objectWithJwtInvalidkeyAlias: {
        "authenticationType": "JWT",
        "merchantID": "testrest",
        "keyAlias": "test",
        "runEnvironment": "CyberSource.Environment.SANDBOX",
        "merchantKeyId": "08c94330-f618-42a3-b09d-e1e43be5efda",
        "merchantsecretKey": "yBJxy6LjM2TmcPGu+GaJrHtkke25fPpUX+UY6/L/1tE=",
        "logDirectory": `${appRoot}/tests/log`,
        "enableLog": false,
        "logFilename": "cybs"
    },

    invalidMerchantID : {
        "authenticationType": "http_signature",
        "merchantKeyId": "08c94330-f618-42a3-b09d-e1e43be5efda",
        "merchantsecretKey": "yBJxy6LjM2TmcPGu+GaJrHtkke25fPpUX+UY6/L/1tE=",
        "runEnvironment": "CyberSource.Environment.SANDBOX",
        "logDirectory": `${appRoot}/tests/log`,
        "enableLog": false,
        "logFilename": "cybs"
    },

    authenticationNull : {
        "authenticationType": null,
        "merchantID": "testrest",
        "enableLog": false,
        "merchantKeyId": "08c94330-f618-42a3-b09d-e1e43be5efda",
        "merchantsecretKey": "yBJxy6LjM2TmcPGu+GaJrHtkke25fPpUX+UY6/L/1tE=",
        "runEnvironment": "CyberSource.Environment.SANDBOX",
        "logDirectory": `${appRoot}/tests/log`,
        "logFilename": "cybs"
    },

    mKeyIdNull : {
        "authenticationType": "http_signature",
        "merchantID": "testrest",
        "merchantKeyId": null,
        "enableLog": false,
        "merchantsecretKey": "yBJxy6LjM2TmcPGu+GaJrHtkke25fPpUX+UY6/L/1tE=",
        "runEnvironment": "CyberSource.Environment.SANDBOX",
        "logDirectory": `${appRoot}/test/log`,
        "logFilename": "cybs"
    },

    mSecretKeyUndefined : {
        "authenticationType": "http_signature",
        "merchantID": "testrest",
        "merchantKeyId": "08c94330-f618-42a3-b09d-e1e43be5efda",
        "merchantsecretKey": undefined,
        "runEnvironment": "CyberSource.Environment.SANDBOX",
        "logDirectory": `${appRoot}/test/log`,
        "enableLog": false,
        "logFilename": "cybs"
    }

}