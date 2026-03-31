'use strict';

const Jwt = require('jwt-simple');
const Constants = require('../util/Constants');
const KeyCertificate = require('./KeyCertificateGenerator');
const MLEUtility = require('../util/MLEUtility');

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

    let requestTarget;

    if (merchantConfig.requestTarget.includes("?")) {
        requestTarget = merchantConfig.requestTarget.substring(0, merchantConfig.requestTarget.indexOf("?"));
    } else {
        requestTarget = merchantConfig.requestTarget;
    }

    // Request metadata
    payloadClaimSet["request-host"] = merchantConfig.getRunEnvironment();
    payloadClaimSet["request-resource-path"] = requestTarget;
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
            payloadClaimSet["v-c-api-response-mle-kid"] = MLEUtility.validateAndAutoExtractResponseMleKid(merchantConfig, logger);
        }
    } catch (err) {
        logger.fatal(GlobalLabelParameters.JWT_SIG_FAILED);
        logger.error(err);
        throw new Error(`${GlobalLabelParameters.JWT_SIG_FAILED} ${err.message}`);
    }

    return payloadClaimSet;
}

/**
 * Returns the header claim set as a JavaScript object.
 * @private
 * @returns {Object} The header claimset object.
 */
function getHeaderClaimSet(certificate) {
    const headerClaimSet = {
        'header': {
            'kid': getSerialNumberFromCert(certificate)
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
        const rsaPrivateKey = KeyCertificate.getRSAPrivateKey(merchantConfig, logger);
        const certificate = KeyCertificate.getX509CertificateInCert(merchantConfig, logger, merchantConfig.getKeyAlias());

        const claimSetJson = getPayloadClaimSet(merchantConfig, isResponseMLEForApi, logger);
        const customHeader = getHeaderClaimSet(certificate);

        // Generating JWToken using the claimSetJson object directly
        const jwtToken = Jwt.encode(claimSetJson, rsaPrivateKey, JWT_ALGORITHM, customHeader);

        return jwtToken;
    } catch (err) {
        logger.error(`JWT token generation failed: ${err.message}`);
        throw new Error(`Failed to generate JWT token: ${err.message}`);
    }
};
