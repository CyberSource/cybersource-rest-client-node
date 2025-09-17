'use strict';

const Jwt = require('jwt-simple');
const Constants = require('../util/Constants');
const KeyCertificate = require('./KeyCertificateGenerator');
const DigestGenerator = require('../payloadDigest/DigestGenerator');
const ApiException = require('../util/ApiException');

// Constants for algorithms
const JWT_ALGORITHM = 'RS256';
const DIGEST_ALGORITHM = 'SHA-256';

/**
 * JWTSigToken module generates JWT tokens for API authentication.
 * 
 * The JWT token contains a claim set encoded with JWT using RS256 algorithm.
 * For POST, PUT, and PATCH methods, a digest of the request payload is added to the claim set.
 * For MLE-enabled APIs, a response MLE key ID is added to the claim set.
 * 
 * @module authentication/jwt/JWTSigToken
 */

/**
 * Generates a JWT token for authentication
 * 
 * @param {Object} merchantConfig - Configuration containing merchant details
 * @param {boolean} isResponseMLEForApi - Flag indicating if MLE is enabled for this API
 * @param {Object} logger - Logger instance
 * @returns {string} The generated JWT token
 * @throws {Error} If token generation fails
 */
exports.getToken = function (merchantConfig, isResponseMLEForApi, logger) {
    try {
        // date format is 'Mon, 09 Apr 2018 10:18:57 GMT'
        const date = new Date(Date.now()).toUTCString();
        const rsaPrivateKey = KeyCertificate.getRSAPrivateKey(merchantConfig, logger);
        const certificate = KeyCertificate.getX509CertificateInBase64(merchantConfig, logger, merchantConfig.getKeyAlias());
        const requestType = merchantConfig.getRequestType().toLowerCase();
        // Create claim set as a regular JavaScript object
        const claimSetJson = {};
        
        if (requestType === Constants.GET || requestType === Constants.DELETE) {
            claimSetJson.iat = date;
        }
        else if (requestType === Constants.POST || requestType === Constants.PUT
            || requestType === Constants.PATCH) {
            const digest = DigestGenerator.generateDigest(merchantConfig, logger);
            claimSetJson.digest = digest;
            claimSetJson.digestAlgorithm = DIGEST_ALGORITHM;
            claimSetJson.iat = date;
        }
        
        // Add MLE key ID if MLE is enabled
        if (isResponseMLEForApi === true) {
            // Using bracket notation for property name with hyphens
            claimSetJson["v-c-response-mle-kid"] = merchantConfig.getResponseMleKeyId();
        }

        const customHeader = {
            'header': {
                'v-c-merchant-id': merchantConfig.getMerchantID(),
                'x5c': [certificate]
            }
        };

        // Generating JWToken using the claimSetJson object directly
        const jwtToken = Jwt.encode(claimSetJson, rsaPrivateKey, JWT_ALGORITHM, customHeader);

        return jwtToken;

    } catch (err) {
        logger.error(`JWT token generation failed: ${err.message}`);
        throw new Error(`Failed to generate JWT token: ${err.message}`);
    }
};
