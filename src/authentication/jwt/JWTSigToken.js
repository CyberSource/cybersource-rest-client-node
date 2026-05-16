'use strict';

const Jwt = require('jwt-simple');
const crypto = require('crypto');
const Constants = require('../util/Constants');
const KeyCertificate = require('./KeyCertificateGenerator');
const MLEUtility = require('../util/MLEUtility');

// Constants for algorithms
const JWT_ALGORITHM_RSA = 'RS256';
const JWT_ALGORITHM_HMAC = 'HS256';
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
 * Generates the payload claim set for the JWT token based on the merchant configuration and request details.
 * @private
 * @param {Object} merchantConfig - The merchant configuration object containing necessary details.
 * @param {boolean} isResponseMLEForApi - Flag indicating if MLE is enabled for this API
 * @param {Object} logger - Logger instance for logging errors and information.
 */
function getPayloadClaimSet(merchantConfig, isResponseMLEForApi, logger) {
    const { randomUUID } = require('crypto');
    const DigestGenerator = require('../payloadDigest/DigestGenerator');

    const payloadClaimSet = {};

    // Determine issuer
    const issuer = merchantConfig.getUseMetaKey()
        ? merchantConfig.getPortfolioID()
        : merchantConfig.getMerchantID();

    const requestVerb = merchantConfig.getRequestType().toLowerCase();

    // Add digest claims for POST / PUT / PATCH
    if ([Constants.POST, Constants.PUT, Constants.PATCH].includes(requestVerb)) {
        payloadClaimSet["digest"] = DigestGenerator.generateDigest(merchantConfig, logger);
        payloadClaimSet["digest-algorithm"] = DIGEST_ALGORITHM;
    }

    // Current UTC time in seconds
    const nowEpochSeconds = Math.floor(Date.now() / 1000);

    payloadClaimSet["iat"] = nowEpochSeconds;
    payloadClaimSet["exp"] = nowEpochSeconds + 120; // +2 minutes

    // Request metadata
    payloadClaimSet["request-host"] = merchantConfig.getRunEnvironment();
    payloadClaimSet["request-resource-path"] = merchantConfig.requestTarget;
    payloadClaimSet["request-method"] = requestVerb;

    // Standard JWT claims
    payloadClaimSet["iss"] = issuer;
    payloadClaimSet["jti"] = randomUUID();
    payloadClaimSet["v-c-jwt-version"] = "2";

    // Merchant ID (if present)
    if (merchantConfig.getMerchantID() != null) {
        payloadClaimSet["v-c-merchant-id"] = merchantConfig.getMerchantID();
    }

    // Optional Response MLE handling
    try {
        if (isResponseMLEForApi) {
            payloadClaimSet["v-c-response-mle-kid"] = MLEUtility.validateAndAutoExtractResponseMleKid(merchantConfig, logger);
        }
    } catch (err) {
        logger.error('JWT signature generation failed due to MLE KID validation error');
        logger.error(err);
        throw new Error(`JWT signature generation failed: ${err.message}`);
    }

    return payloadClaimSet;
}


/**
 * Generates a JWT header claim set with a key ID.
 * 
 * @param {Object} options - The options object
 * @param {string} [options.merchantKeyId=''] - The merchant key ID to use for the 'kid' claim
 * @param {Object} [options.certificate=null] - The certificate object to extract the serial number from certificate
 * @returns {Object} An object containing the JWT header with the 'kid' (key ID) claim set
 * @example
 * // Returns { header: { kid: '1234567890' } }
 * getHeaderClaimSet({ merchantKeyId: '1234567890' });
 */
function getHeaderClaimSet({ merchantKeyId = '', certificate = null}) {
    let kidValue = '';
    if(certificate != null){
        kidValue = getSerialNumberFromCert(certificate);
    }
    else if(merchantKeyId){
        kidValue = merchantKeyId;
    }
    const headerClaimSet = {
        'header': {
            'kid': kidValue
        }
    };
    return headerClaimSet;
}


/**
 * Gets the serial number from the certificate's subject attributes.
 * @private
 * @param {*} cert - The certificate object containing subject attributes.
 * @returns {string} The serial number extracted from the certificate.
 */
function getSerialNumberFromCert(cert) {
    if (!cert.subject || !cert.subject.attributes) {
        throw new Error("Subject or attributes are missing in JWT P12 certificate");
    }

    const serialNumberAttr = cert.subject.attributes.find(attr => attr.name === 'serialNumber');
    if (serialNumberAttr) {
        return serialNumberAttr.value;
    }
    throw new Error("Serial number attribute not found in cert subject of JWT P12 certificate");
}

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
        const claimSetJson = getPayloadClaimSet(merchantConfig, isResponseMLEForApi, logger);
        let jwtToken;
        if (merchantConfig.isSharedSecretKeyType()) {
            // Shared Secret (HMAC-SHA256) signing
            logger.debug('Generating JWT token using shared secret (HS256)');
            
            // Base64 decode the merchant secret key
            const secretKey = merchantConfig.getMerchantsecretKey();
            if (!secretKey) {
                throw new Error('Merchant secret key is not configured');
            }
            
            const secretKeyBuffer = Buffer.from(secretKey, 'base64');
            if (secretKeyBuffer.length === 0 || secretKeyBuffer.toString('base64') !== secretKey) {
                throw new Error('Invalid base64 encoded merchant secret key');
            }

            const customHeader = getHeaderClaimSet({ merchantKeyId: merchantConfig.getMerchantKeyID() });
            
            // Generate JWT token using HMAC-SHA256
            jwtToken = Jwt.encode(claimSetJson, secretKeyBuffer, JWT_ALGORITHM_HMAC, customHeader);
        } else {
            // P12 Certificate (RSA-SHA256) signing - existing behavior
            logger.debug('Generating JWT token using P12 certificate (RS256)');
            
            const rsaPrivateKey = KeyCertificate.getRSAPrivateKey(merchantConfig, logger);
            const certificate = KeyCertificate.getX509CertificateInCert(merchantConfig, logger, merchantConfig.getKeyAlias());

            const customHeader = getHeaderClaimSet({ certificate: certificate });

            // Generate JWT token using RSA-SHA256
            jwtToken = Jwt.encode(claimSetJson, rsaPrivateKey, JWT_ALGORITHM_RSA, customHeader);
        }
        return jwtToken;
    } catch (err) {
        logger.error(`JWT token generation failed: ${err.message}`);
        throw new Error(`Failed to generate JWT token: ${err.message}`);
    }
};
