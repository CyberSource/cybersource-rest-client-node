var Chai = require('chai');
var Assert = Chai.assert;
var expect = Chai.expect;
var JWTSigToken = require('../../../../../src/com/cybersource/authentication/jwt/JWTSigToken');
var Logger = require('../../../../../src/com/cybersource/authentication/util/Logger');
var merchantConfig = require('../../../../../src/com/cybersource/authentication/core/MerchantConfig');
var mConfigMockData = require('../core/merchantConfigMock');
var path = require('path');
var fs = require('fs');

it('should return jwt encoded token', function () {
    var mConfig = new merchantConfig(mConfigMockData.objectWithAllValuesJWT);
    mConfig.setRequestType("post");
    var requestJsonMock = fs.readFileSync(path.resolve('tests/resource/request.json'));
    mConfig.setRequestJsonData(requestJsonMock);
    var logger = Logger.getLogger(mConfig);
    var token = JWTSigToken.getToken(mConfig, logger);
    Assert.exists(token, "JWT token is is neither `null` nor `undefined`");
});

it('should return error, Invalid requestType', function () {
    var mConfig = new merchantConfig(mConfigMockData.objectWithAllValuesJWT);
    mConfig.setRequestType("head");
    var logger = Logger.getLogger(mConfig);
    expect(() => JWTSigToken.getToken(mConfig, logger))
    .to.throw(Error, 'Entered Request Type should be (GET/POST/PUT/DELETE)');
});