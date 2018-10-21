var Assert = require('chai').assert;
var DigestGenerator = require('../../../../../src/com/cybersource/authentication/payloadDigest/DigestGenerator');
var merchantConfig = require('../../../../../src/com/cybersource/authentication/core/MerchantConfig');
var Logger = require('../../../../../src/com/cybersource/authentication/util/Logger');
var mConfigMockData = require('../core/merchantConfigMock');
var path = require('path');
var fs = require('fs');

it('should return digest', function () {
    var mConfig = new merchantConfig(mConfigMockData.objectWithAllValuesJWT);
    var requestJsonMock = fs.readFileSync(path.resolve('tests/com/cybersource/authentication/core/requestJsonMock.json'),'utf8');
    mConfig.setRequestJsonData(requestJsonMock);
    var logger = Logger.getLogger(mConfig);
    var digest = DigestGenerator.generateDigest(mConfig,logger);
    Assert.exists(digest, 'digest is neither `null` nor `undefined`');
});