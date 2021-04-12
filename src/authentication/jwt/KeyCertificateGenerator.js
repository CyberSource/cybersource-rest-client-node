
var forge = require('node-forge');
var Cache = require('../util/Cache');

/*
This module reads a p12 file and generate certificate, RSA private key and public key
*/
var thisModule = module.exports = {

    /* Generating certificate in base64 */
    getX509CertificateInPem: function (merchantConfig, logger) {

        var p12 = Cache.fetchCachedCertificate(merchantConfig, logger);        
        var certBags = p12.getBags({ bagType: forge.pki.oids.certBag });
        var cert = certBags[forge.pki.oids.certBag][0];
        var certificatePem = forge.pki.certificateToPem(cert.cert);
        var certDer = forge.pki.pemToDer(certificatePem);
        var p12b64 = forge.util.encode64(certDer.data);
        return p12b64;
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
