'use strict';

var expect = require('chai').expect;
var forge = require('node-forge');
var fs = require('fs');
var os = require('os');
var path = require('path');
var crypto = require('crypto');

var MLEUtility = require('../../src/authentication/util/MLEUtility');
var JWEUtility = require('../../src/authentication/util/JWEUtility');

function noopLogConfiguration() {
    return {
        isExternalLoggerSet: function () { return false; },
        isLogEnabled: function () { return false; },
        isMaskingEnabled: function () { return false; },
        getLoggingLevel: function () { return 'error'; }
    };
}

// Generates a fresh self-signed cert whose subject carries the given serialNumber,
// writes the cert PEM to a temp file (mleForRequestPublicCertPath expects a PEM file),
// and returns the private key PEM for the round-trip decrypt assertions.
function makeSelfSignedCertWithSerial(serial) {
    var keys = forge.pki.rsa.generateKeyPair(2048);
    var cert = forge.pki.createCertificate();
    cert.publicKey = keys.publicKey;
    cert.serialNumber = '01';
    cert.validity.notBefore = new Date();
    cert.validity.notAfter = new Date();
    cert.validity.notAfter.setFullYear(cert.validity.notBefore.getFullYear() + 1);
    var attrs = [
        { name: 'commonName', value: 'CyberSource_SJC_US' },
        { name: 'serialNumber', value: serial }
    ];
    cert.setSubject(attrs);
    cert.setIssuer(attrs);
    cert.sign(keys.privateKey, forge.md.sha256.create());

    var certPem = forge.pki.certificateToPem(cert);
    var certPath = path.join(os.tmpdir(), 'mle-request-test-' + crypto.randomBytes(8).toString('hex') + '.pem');
    fs.writeFileSync(certPath, certPem);

    return {
        certPath: certPath,
        privateKeyPem: forge.pki.privateKeyToPem(keys.privateKey)
    };
}

function buildMerchantConfig(certPath) {
    return {
        getMerchantID: function () { return 'test-merchant'; },
        getAuthenticationType: function () { return 'http_signature'; },
        isSharedSecretKeyType: function () { return false; },
        getMleForRequestPublicCertPath: function () { return certPath; },
        getRequestmleKeyAlias: function () { return 'CyberSource_SJC_US'; },
        getKeyFileName: function () { return 'testrest'; },
        getLogConfiguration: function () { return noopLogConfiguration(); }
    };
}

function decodeProtectedHeader(compactJwe) {
    var parts = compactJwe.split('.');
    expect(parts.length).to.equal(5, 'Expected JWE compact serialization with 5 segments');
    var json = Buffer.from(parts[0].replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString('utf8');
    return JSON.parse(json);
}

describe('MLEUtility.encryptRequestPayload — JWE "cty" (content type) header', function () {
    ['application/json', 'application/hal+json', 'application/json; charset=utf-8'].forEach(function (contentType) {
        it("sets 'cty' to the exact selected Content-Type '" + contentType + "'", function () {
            var serial = '7000000000000000111222';
            var certInfo = makeSelfSignedCertWithSerial(serial);
            var merchantConfig = buildMerchantConfig(certInfo.certPath);
            var payload = { amount: '100' };

            return MLEUtility.encryptRequestPayload(merchantConfig, payload, contentType).then(function (result) {
                var header = decodeProtectedHeader(result.encryptedRequest);
                expect(header.cty).to.equal(contentType);
                expect(header.alg).to.equal('RSA-OAEP-256');
                expect(header.enc).to.equal('A256GCM');
                expect(header.kid).to.equal(serial);

                return JWEUtility.decryptJWEUsingPrivateKey(certInfo.privateKeyPem, result.encryptedRequest).then(function (decrypted) {
                    expect(decrypted).to.equal(JSON.stringify(payload, null, 0));
                    fs.unlinkSync(certInfo.certPath);
                });
            });
        });
    });

    it("omits 'cty' when the caller does not supply a content type", function () {
        var certInfo = makeSelfSignedCertWithSerial('7000000000000000333444');
        var merchantConfig = buildMerchantConfig(certInfo.certPath);

        return MLEUtility.encryptRequestPayload(merchantConfig, { amount: '100' }).then(function (result) {
            var header = decodeProtectedHeader(result.encryptedRequest);
            expect(header).to.not.have.property('cty');
            fs.unlinkSync(certInfo.certPath);
        });
    });

    it("omits 'cty' when the caller supplies a blank content type", function () {
        var certInfo = makeSelfSignedCertWithSerial('7000000000000000555666');
        var merchantConfig = buildMerchantConfig(certInfo.certPath);

        return MLEUtility.encryptRequestPayload(merchantConfig, { amount: '100' }, '   ').then(function (result) {
            var header = decodeProtectedHeader(result.encryptedRequest);
            expect(header).to.not.have.property('cty');
            fs.unlinkSync(certInfo.certPath);
        });
    });

    it('encrypts the bodyless-POST sentinel and decrypts back to the literal JSON object {}', function () {
        var certInfo = makeSelfSignedCertWithSerial('7000000000000000777888');
        var merchantConfig = buildMerchantConfig(certInfo.certPath);

        return MLEUtility.encryptRequestPayload(merchantConfig, '{}', 'application/json').then(function (result) {
            var header = decodeProtectedHeader(result.encryptedRequest);
            expect(header.cty).to.equal('application/json');

            return JWEUtility.decryptJWEUsingPrivateKey(certInfo.privateKeyPem, result.encryptedRequest).then(function (decrypted) {
                expect(decrypted).to.equal('{}');
                fs.unlinkSync(certInfo.certPath);
            });
        });
    });

    it('returns the unencrypted payload unchanged when no certificate is configured for HTTP Signature', function () {
        var merchantConfig = {
            getMerchantID: function () { return 'test-merchant'; },
            getAuthenticationType: function () { return 'http_signature'; },
            isSharedSecretKeyType: function () { return false; },
            getMleForRequestPublicCertPath: function () { return null; },
            getLogConfiguration: function () { return noopLogConfiguration(); }
        };
        var payload = { amount: '100' };

        return MLEUtility.encryptRequestPayload(merchantConfig, payload, 'application/json').then(function (result) {
            expect(result).to.equal(payload);
        });
    });
});
