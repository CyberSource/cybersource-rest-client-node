var Chai = require('chai');
var expect = Chai.expect;
var propertiesUtil = require('../../../../../src/com/cybersource/authentication/util/PropertiesUtil');
var merchantConfig = require('../../../../../src/com/cybersource/authentication/core/MerchantConfig');
var mConfigMockData = require('../core/merchantConfigMock');
var chaiAsPromised = require('chai-as-promised');
Chai.use(chaiAsPromised);

it('should return proxy', function () {
    var mConfig = new merchantConfig(mConfigMockData.objectWithAllValuesJWT);
    var arrayObj = [];
    var object = propertiesUtil.proxyCheck(mConfig, arrayObj);
    expect("visa.com").to.equal(object.proxy);
    expect(443).to.equal(object.port);
});

it('should not return proxy', function () {
    var mConfig = new merchantConfig(mConfigMockData.httpProperties);
    var arrayObj = [];
    var object = propertiesUtil.proxyCheck(mConfig, arrayObj);
    expect(undefined).to.equal(object.proxy);
    expect(undefined).to.equal(object.proxy);
});