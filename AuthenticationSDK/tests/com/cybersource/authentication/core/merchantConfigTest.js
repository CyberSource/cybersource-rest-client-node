var Chai = require('chai');
var Assert = Chai.assert;
var expect = Chai.expect;
var merchantConfig = require('../../../../../src/com/cybersource/authentication/core/MerchantConfig');
var mConfigMockData = require('./merchantConfigMock');

    it('should return authenticationType as JWT', function () {
        var mConfig = new merchantConfig(mConfigMockData.objectWithAllValuesJWT);
        Assert.equal("JWT", mConfig.getAuthenticationType());
    });

    it('should return merchantId as testrest', function () {
        var mConfig = new merchantConfig(mConfigMockData.objectWithAllValuesJWT);
        Assert.equal("testrest", mConfig.getMerchantID());
    });

    it('should return requestHost for sandbox', function () {
        var mConfig = new merchantConfig(mConfigMockData.objectWithAllValuesJWT);
        Assert.equal("apitest.cybersource.com", mConfig.getRequestHost());
        Assert.equal("CyberSource.Environment.SANDBOX", mConfig.getRunEnvironment());
    });

    it('should return requestHost for production', function () {
        var mConfig = new merchantConfig(mConfigMockData.objectWithRunEnvProduction);
        Assert.equal("api.cybersource.com", mConfig.getRequestHost());
    });

    it('should return requestHost for sandbox', function () {
        var mConfig = new merchantConfig(mConfigMockData.objectWithRunEnvUrl);
        Assert.equal("apitest.cybersource.com", mConfig.getRequestHost());
    }); 

    it('should return all the merchantConfig properties', function () {
        var mConfig = new merchantConfig(mConfigMockData.objectWithAllValuesJWT);
        var allProperties = mConfig.getAllProperties(mConfig);
        Assert.isObject(allProperties, 'allProperties is an object');
        Assert.include(JSON.stringify(allProperties), "authenticationType", "authenticationType is visisble");
        Assert.notInclude(JSON.stringify(allProperties), "merchantsecretKey", "merchantsecretKey is hidden")
    });

    it('should return jwt fallback values', function () {
        var mConfig = new merchantConfig(mConfigMockData.objectWithJwtFallback);
        Assert.equal("testrest", mConfig.getKeyAlias());
        Assert.equal("testrest", mConfig.getKeyPass());
        Assert.equal("testrest", mConfig.getKeyFileName());
        Assert.equal("resource", mConfig.getKeysDirectory());
        Assert.equal("20", mConfig.getRunEnvironment());
    });

    it('should return keyAliyas as merchantID', function () {
        var mConfig = new merchantConfig(mConfigMockData.objectWithJwtInvalidkeyAlias);
        Assert.equal("testrest", mConfig.getKeyAlias());
    });

    it('should return default enableLog', function () {
        var mConfig = new merchantConfig(mConfigMockData.objectWithInvalidEnableType);
        Assert.equal(false, mConfig.getEnableLog());
    });

    it('should return error, invalid Authentication Type', function () {
        expect(() => new merchantConfig(mConfigMockData.invalidProperties))
        .to.throw(Error, 'Check Authentication Type (HTTP_Signature/JWT) in cybs.json.');
    });

    it('should return error, invalid RUNTIME ENVIRONMENT', function () {
        expect(() => new merchantConfig(mConfigMockData.invalidRunEnv))
        .to.throw(Error, 'RunEnvironment is Mandatory');
    });

    it('should return error, MerchantID is mandatory', function () {
        expect(() => new merchantConfig(mConfigMockData.invalidMerchantID))
        .to.throw(Error, 'MerchantID is mandatory');
    });

    it('should return error, invalid type for Authentication Type', function () {
        expect(() => new merchantConfig(mConfigMockData.invalidAuthType))
        .to.throw(Error, 'Check Authentication Type (HTTP_Signature/JWT) in cybs.json.');
    });

    it('should return error, Authentication Type is mandatory', function () {
        expect(() => new merchantConfig(mConfigMockData.authenticationNull))
        .to.throw(Error, 'AuthenticationType is Mandatory');
    });

    it('should return error, MerchantKeyId is Mandatory', function () {
        expect(() => new merchantConfig(mConfigMockData.mKeyIdNull))
        .to.throw(Error, 'MerchantKeyId is Mandatory');
    });

    it('should return error, MerchantSecretKey is Mandatory', function () {
        expect(() => new merchantConfig(mConfigMockData.mSecretKeyUndefined))
        .to.throw(Error, 'MerchantSecretKey is Mandatory');
    });

    it('should return merchantConfig object', function () {
        var mConfig = new merchantConfig(mConfigMockData.objectWithRunEnvProduction);
        mConfig.setRequestTarget("pts/v2/payments");
        mConfig.setRequestJsonPath('c:/xyz');
        mConfig.setURL("https:/api");
        Assert.equal("api.cybersource.com", mConfig.getRequestHost());
        Assert.equal("pts/v2/payments", mConfig.getRequestTarget());
        Assert.equal("c:/xyz", mConfig.getRequestJsonPath());
        Assert.equal("https:/api", mConfig.getURL());
        Assert.equal("18", mConfig.getMerchantsecretKey()); 
        Assert.equal("25", mConfig.getMerchantKeyID());
    });

    