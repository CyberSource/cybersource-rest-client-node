var Assert = require('chai').assert;
var SignatureParameterGenerator = require('../../../../../src/com/cybersource/authentication/http/SignatureParameterGenerator');
var Logger = require('../../../../../src/com/cybersource/authentication/util/Logger');
var merchantConfig = require('../../../../../src/com/cybersource/authentication/core/MerchantConfig');
var mConfigMockData = require('../core/merchantConfigMock');
var path = require('path');
var fs = require('fs');

it('should return http signature for post method', function () {
    var mConfig = new merchantConfig(mConfigMockData.httpProperties);
    mConfig.setRequestType("post");
    var requestJsonMock = fs.readFileSync(path.resolve('tests/com/cybersource/authentication/core/requestJsonMock.json'));
    mConfig.setRequestJsonData(requestJsonMock);
    var logger = Logger.getLogger(mConfig);
    var signature = SignatureParameterGenerator.getSignatureParameter(mConfig, logger);
    Assert.exists(signature, "Http signature is neither `null` nor `undefined`");
});

it('should return http signature for get method', function () {
    var mConfig = new merchantConfig(mConfigMockData.httpProperties);
    mConfig.setRequestType("get");
    var logger = Logger.getLogger(mConfig);
    var signature = SignatureParameterGenerator.getSignatureParameter(mConfig, logger);
    Assert.exists(signature, "Http signature is neither `null` nor `undefined`");
});

it('should return http signature for put method', function () {
    var mConfig = new merchantConfig(mConfigMockData.httpProperties);
    mConfig.setRequestType("put");
    var requestJsonMock = fs.readFileSync(path.resolve('tests/com/cybersource/authentication/core/requestJsonMock.json'));
    mConfig.setRequestJsonData(requestJsonMock);
    var logger = Logger.getLogger(mConfig);
    var signature = SignatureParameterGenerator.getSignatureParameter(mConfig, logger);
    Assert.exists(signature, "Http signature is neither `null` nor `undefined`");
});

it('should return http signature for delete method', function () {
    var mConfig = new merchantConfig(mConfigMockData.httpProperties);
    mConfig.setRequestType("delete");
    var logger = Logger.getLogger(mConfig);
    var signature = SignatureParameterGenerator.getSignatureParameter(mConfig, logger);
    Assert.exists(signature, "Http signature is neither `null` nor `undefined`");
});