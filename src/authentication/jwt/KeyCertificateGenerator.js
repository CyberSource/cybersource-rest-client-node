
var forge = require('node-forge');
var Cache = require('../util/Cache');
var ApiException = require('../util/ApiException');
var Constants = require('../util/Constants');

/*
This module reads a p12 file and generate certificate, RSA private key and public key
*/
var thisModule = module.exports = {

    /* Generating certificate in base64 */
    getX509CertificateInBase64: function (merchantConfig, logger, keyAlias) {
        var p12 = Cache.fetchCachedCertificate(merchantConfig, logger);
        var certBags = p12.getBags({ bagType: forge.pki.oids.certBag });
        let cert = null;
        // Iterate through the certBags to find the certificate with the matching alias
        for (const bag of certBags[forge.pki.oids.certBag]) {
            if (bag.attributes && bag.attributes.friendlyName && bag.attributes.friendlyName[0].toLowerCase().includes(`cn=${keyAlias.toLowerCase()}`)) {
                cert = bag;
                break;
            }
        }

        if (!cert) {
            ApiException.ApiException("Certificate with alias " + keyAlias + " not found in " + merchantConfig.getKeyFileName() + ".p12", logger);
        }
        var certificatePem = forge.pki.certificateToPem(cert.cert);
        var certDer = forge.pki.pemToDer(certificatePem);
        var p12b64 = forge.util.encode64(certDer.data);
        return p12b64;
    },

    /* Generating certificate in pem */
    getX509CertificateInCert: function (merchantConfig, logger, keyAlias) {
        var p12 = Cache.fetchCachedCertificate(merchantConfig, logger);
        var certBags = p12.getBags({ bagType: forge.pki.oids.certBag });
        let cert = null;
        // Iterate through the certBags to find the certificate with the matching alias
        for (const bag of certBags[forge.pki.oids.certBag]) {
            if (bag.attributes && bag.attributes.friendlyName && bag.attributes.friendlyName[0].toLowerCase().includes(`cn=${keyAlias.toLowerCase()}`)) {
                cert = bag;
                break;
            }
        }
        //verify if cert exist for given alias
        if (!cert) {
            ApiException.ApiException("Certificate with alias " + keyAlias + " not found in " + merchantConfig.getKeyFileName() + ".p12",logger);
        }
        return cert.cert;
    },

    /* This method is for generating RSA private key in pem format */
    getRSAPrivateKey: function (merchantConfig, logger) {

        var p12 = Cache.fetchCachedCertificate(merchantConfig, logger);
        var keyBags = p12.getBags({ bagType: forge.pki.oids.keyBag });
        var bag = keyBags[forge.pki.oids.keyBag][0];
        
        if (keyBags[forge.pki.oids.keyBag] === undefined || keyBags[forge.pki.oids.keyBag].length == 0) {
            keyBags = p12.getBags({ bagType: forge.pki.oids.pkcs8ShroudedKeyBag });
            bag = keyBags[forge.pki.oids.pkcs8ShroudedKeyBag][0];
        }
        
        var privateKey = bag.key;
        var rsaPrivateKey = forge.pki.privateKeyToPem(privateKey);
        return rsaPrivateKey;
    },

    /* verify certificate expiry date */
    verifyIsCertificateExpired: function (cert,keyAlias, logger) {
        const expiryDate = new Date(cert.validity.notAfter);
        const currentDate = new Date();
        const expiryWarningDaysInMilliseconds = Constants.CERTIFICATE_EXPIRY_DATE_WARNING_DAYS * Constants.FACTOR_DAYS_TO_MILLISECONDS;
        const timeUntilExpiry = expiryDate - currentDate;

        if (timeUntilExpiry <= 0) {
            // Certificate has already expired
            logger.warn("Certificate with alias " + keyAlias + " is expired as of " + cert.validity.notAfter + ". Please update p12 file.");
            return true;
        } else if (timeUntilExpiry <= expiryWarningDaysInMilliseconds) {
            // Certificate will expire in the next 90 days
            logger.warn("Certificate with alias " + keyAlias + " is going to expired on " + cert.validity.notAfter + ". Please update p12 file before that.");
            return false;
        } else {
            // Certificate is valid and not expiring in the next 90 days
            return false;
        }
    },

    /* This method generate public key in pem format */
    getPublicKeyInPem: function (merchantConfig, logger) {

        var p12 = Cache.fetchCachedCertificate(merchantConfig, logger);
        var keyBags = p12.getBags({ bagType: forge.pki.oids.keyBag });
        var bag = keyBags[forge.pki.oids.keyBag][0];
        var privateKey = bag.key;
        var key = forge.pki.setRsaPublicKey(privateKey.n, privateKey.e);
        var publicKey = forge.pki.publicKeyToPem(key);
        return publicKey;
    }
};
