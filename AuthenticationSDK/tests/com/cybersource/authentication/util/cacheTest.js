var Assert = require('chai').assert;
var Cache = require('../../../../../src/com/cybersource/authentication/util/Cache');
var Logger = require('../../../../../src/com/cybersource/authentication/util/Logger');
var merchantConfig = require('../../../../../src/com/cybersource/authentication/core/MerchantConfig');
var mConfigMockData = require('../core/merchantConfigMock');

    it('should return certificate not from cache', function () {
        var mConfig = new merchantConfig(mConfigMockData.objectWithAllValuesJWT);
        var logger = Logger.getLogger(mConfig);
        var certificate = Cache.fetchCachedCertificate(mConfig, logger);
        Assert.exists(certificate, "certificate is is neither `null` nor `undefined`");
    });