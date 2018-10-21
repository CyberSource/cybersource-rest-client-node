var Chai = require('chai');
var Assert = Chai.assert;
var expect = Chai.expect;
var merchantConfig = require('../../../../../src/com/cybersource/authentication/core/MerchantConfig');
var mConfigMockData = require('./merchantConfigMock');
var Authorization = require('../../../../../src/com/cybersource/authentication/core/Authorization');
var Logger = require('../../../../../src/com/cybersource/authentication/util/Logger');

    it('should return token for JWT', function () {
        var mConfig = new merchantConfig(mConfigMockData.objectWithAllValuesJWT);
        mConfig.setRequestType("get");
        var logger = Logger.getLogger(mConfig);
        var token = Authorization.getToken(mConfig,logger);
        Assert.exists(token, "Token for jwt is neither `null` nor `undefined`");
    });

    it('should return token for http', function () {
        var mConfig = new merchantConfig(mConfigMockData.httpProperties);
        mConfig.setRequestType("get");
        var logger = Logger.getLogger(mConfig);
        var token = Authorization.getToken(mConfig, logger);
        Assert.exists(token, "Token for http is neither `null` nor `undefined`");
    });

    it('should return error', function () {
        var mConfig = new merchantConfig(mConfigMockData.httpProperties);
        mConfig.setRequestType("get");
        mConfig.setAuthenticationType("Xyz");
        var logger = Logger.getLogger(mConfig);
        expect(() => Authorization.getToken(mConfig, logger))
        .to.throw(Error, 'Check Authentication Type (HTTP_Signature/JWT) in cybs.json.');
    });