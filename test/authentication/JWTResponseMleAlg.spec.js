'use strict';

var expect = require('chai').expect;
var jwtSimple = require('jwt-simple');

var JWTSigToken = require('../../src/authentication/jwt/JWTSigToken');
var Constants = require('../../src/authentication/util/Constants');

function noopLogger() {
    return { debug: function () {}, info: function () {}, warn: function () {}, error: function () {} };
}

function buildSharedSecretMerchantConfig() {
    return {
        getUseMetaKey: function () { return false; },
        getPortfolioID: function () { return null; },
        getMerchantID: function () { return 'test-merchant'; },
        getRequestType: function () { return 'get'; },
        requestTarget: '/pts/v2/payments',
        getRunEnvironment: function () { return 'apitest.cybersource.com'; },
        isSharedSecretKeyType: function () { return true; },
        getMerchantsecretKey: function () { return Buffer.from('super-secret-key-value-123456').toString('base64'); },
        getMerchantKeyID: function () { return 'test-key-id'; },
        getResponseMleKID: function () { return 'test-response-mle-kid'; },
        getResponseMlePrivateKeyFilePath: function () { return null; },
        getResponseMlePrivateKeyFilePassword: function () { return null; }
    };
}

describe('JWT v-c-response-mle-algo claim (Issue #49)', function () {

    it('adds v-c-response-mle-algo = RSA-OAEP-256 when response MLE is enabled', function () {
        var token = JWTSigToken.getToken(buildSharedSecretMerchantConfig(), true, noopLogger());
        var payload = jwtSimple.decode(token, null, true);

        expect(payload).to.have.property('v-c-response-mle-algo', 'RSA-OAEP-256');
        expect(Constants.V_C_RESPONSE_MLE_ALGO).to.equal('v-c-response-mle-algo');
        expect(Constants.RSA_OAEP_256).to.equal('RSA-OAEP-256');
    });

    it('omits v-c-response-mle-algo when response MLE is disabled (backward compatibility)', function () {
        var token = JWTSigToken.getToken(buildSharedSecretMerchantConfig(), false, noopLogger());
        var payload = jwtSimple.decode(token, null, true);

        expect(payload).to.not.have.property('v-c-response-mle-algo');
        expect(payload).to.not.have.property('v-c-response-mle-kid');
    });
});
