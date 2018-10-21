var Chai = require('chai');
var expect = Chai.expect;
var Logger = require('../../../../../src/com/cybersource/authentication/util/Logger');
var merchantConfig = require('../../../../../src/com/cybersource/authentication/core/MerchantConfig');
var mConfigMockData = require('../core/merchantConfigMock');
var ApiException = require('../../../../../src/com/cybersource/authentication/util/ApiException');

it('should return error object', function () {
    var mConfig = new merchantConfig(mConfigMockData.objectWithlogSize);
    var logger = Logger.getLogger(mConfig);
    expect(() => ApiException.ApiException("Error occured", logger)).to.throw(Error, 'Error occured');

});

it('should return error object', function () {
    var mConfig = new merchantConfig(mConfigMockData.objectWithlogSize);
    expect(() => ApiException.AuthException("Error occured")).to.throw(Error, 'Error occured');

});