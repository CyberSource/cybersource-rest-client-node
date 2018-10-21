var Assert = require('chai').assert;
var Logger = require('../../../../../src/com/cybersource/authentication/util/Logger');
var merchantConfig = require('../../../../../src/com/cybersource/authentication/core/MerchantConfig');
var mConfigMockData = require('../core/merchantConfigMock');

  it('should check log rotation, Return logger object ', function() {
    var mConfig = new merchantConfig(mConfigMockData.objectWithlogSize);
    var logger = Logger.getLogger(mConfig);
    Assert.isObject(logger, "logger object is created");
  });

    it('should return loggerObject', function () {
        var mConfig = new merchantConfig(mConfigMockData.objectWithAllValuesJWT);
        var logger = Logger.getLogger(mConfig);
        Assert.isObject(logger, "logger object is created");
    });