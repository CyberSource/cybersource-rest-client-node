var Assert = require('chai').assert;
var KeyCertificateGenerator = require('../../../../../src/com/cybersource/authentication/jwt/KeyCertificateGenerator');
var Logger = require('../../../../../src/com/cybersource/authentication/util/Logger');
var merchantConfig = require('../../../../../src/com/cybersource/authentication/core/MerchantConfig');
var mConfigMockData = require('../core/merchantConfigMock');

    it('should return certificate in pem format', function () {
        var mConfig = new merchantConfig(mConfigMockData.objectWithAllValuesJWT);
        var logger = Logger.getLogger(mConfig);
        var certificate = KeyCertificateGenerator.getX509CertificateInPem(mConfig, logger);
        Assert.exists(certificate, "certificate is is neither `null` nor `undefined`");
    });

    it('should return RSA Private key', function () {
        var mConfig = new merchantConfig(mConfigMockData.objectWithAllValuesJWT);
        var logger = Logger.getLogger(mConfig);
        var privateKey = KeyCertificateGenerator.getRSAPrivateKey(mConfig, logger);
        Assert.exists(privateKey, "privatekey is is neither `null` nor `undefined`");
    });

    it('should return public key in pem format', function () {
        var mConfig = new merchantConfig(mConfigMockData.objectWithAllValuesJWT);
        var logger = Logger.getLogger(mConfig);
        var publicKey = KeyCertificateGenerator.getPublicKeyInPem(mConfig, logger);
        Assert.exists(publicKey, "publicKey is is neither `null` nor `undefined`");
    });