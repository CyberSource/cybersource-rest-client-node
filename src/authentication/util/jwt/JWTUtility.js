'use strict'

const forge = require('node-forge');
const crypto = require('crypto');
const JWTExceptions = require('./JWTExceptions.js');

// Supported JWT algorithms and their corresponding hash algorithms
const SUPPORTED_ALGORITHMS = {
    'RS256': 'sha256',
    'RS384': 'sha384',
    'RS512': 'sha512'
};

// Error messages constants
const ERROR_MESSAGES = {
    UNSUPPORTED_ALGORITHM: (algorithm) =>
        `Unsupported JWT algorithm: ${algorithm}. Supported algorithms: ${Object.keys(SUPPORTED_ALGORITHMS).join(', ')}`,
    MISSING_ALGORITHM: 'JWT header missing algorithm (alg) field',
    NO_PUBLIC_KEY: 'No public key found',
    INVALID_PUBLIC_KEY_FORMAT: 'Invalid public key format. Expected JWK object or JSON string.',
    INVALID_RSA_KEY: 'Public key must be an RSA key (kty: RSA)',
    MISSING_RSA_PARAMS: 'Invalid RSA JWK: missing required parameters (n, e)'
};

/**
 * Decodes a base64url encoded string to a JSON object
 * @param {string} base64urlString - The base64url encoded string
 * @param {string} partName - Name of the JWT part for error reporting (e.g., 'header', 'payload')
 * @returns {Object} - The decoded JSON object
 * @throws {InvalidJwtException} - If decoding or parsing fails
 * @private
 */
function decodeJwtPart(base64urlString, partName) {
    try {
        const jsonString = Buffer.from(base64urlString, 'base64url').toString('utf8');
        return JSON.parse(jsonString);
    } catch (decodeErr) {
        if (decodeErr.name === 'SyntaxError') {
            throw new JWTExceptions.InvalidJwtException(`Invalid JSON in JWT ${partName}`, decodeErr);
        }
        throw new JWTExceptions.InvalidJwtException(`Failed to decode JWT ${partName} from base64url`, decodeErr);
    }
}

/**
 * Validates and parses a JWK public key
 * @param {Object|string} publicKey - The RSA public key (JWK object or JSON string)
 * @returns {Object} - The validated JWK object
 * @throws {InvalidJwkException} - If the public key is invalid
 * @private
 */
function validateAndParseJwk(publicKey) {
    let jwkKey;

    if (typeof publicKey === 'string') {
        try {
            jwkKey = JSON.parse(publicKey);
        } catch (parseErr) {
            throw new JWTExceptions.InvalidJwkException('Invalid public key JSON format', parseErr);
        }
    } else if (typeof publicKey === 'object' && publicKey !== null && publicKey.kty) {
        jwkKey = publicKey;
    } else {
        throw new JWTExceptions.InvalidJwkException(ERROR_MESSAGES.INVALID_PUBLIC_KEY_FORMAT);
    }

    if (jwkKey.kty !== 'RSA') {
        throw new JWTExceptions.InvalidJwkException(ERROR_MESSAGES.INVALID_RSA_KEY);
    }

    if (!jwkKey.n || !jwkKey.e) {
        throw new JWTExceptions.InvalidJwkException(ERROR_MESSAGES.MISSING_RSA_PARAMS);
    }

    return jwkKey;
}

/**
 * Converts JWK RSA parameters to PEM format public key
 * @param {Object} jwkKey - The JWK object with RSA parameters
 * @returns {string} - The PEM formatted public key
 * @throws {InvalidJwkException} - If key conversion fails
 * @private
 */
function convertJwkToPem(jwkKey) {
    let n, e;
    try {
        n = Buffer.from(jwkKey.n, 'base64url');
        e = Buffer.from(jwkKey.e, 'base64url');
    } catch (decodeErr) {
       
        throw new JWTExceptions.InvalidJwkException('Invalid base64url encoding in JWK parameters', decodeErr);
    }

    let publicKeyForge;
    try {
        publicKeyForge = forge.pki.rsa.setPublicKey(
            forge.util.createBuffer(n).toHex(),
            forge.util.createBuffer(e).toHex()
        );
    } catch (keyErr) {
        throw new JWTExceptions.InvalidJwkException('Failed to create RSA public key from JWK', keyErr);
    }

    try {
        return forge.pki.publicKeyToPem(publicKeyForge);
    } catch (pemErr) {
        throw new JWTExceptions.InvalidJwkException('Failed to convert public key to PEM format', pemErr);
    }
}

/**
 * Parses a JWT token and extracts its header, payload, and signature components
 * @param {string} jwtToken - The JWT token to parse
 * @returns {Object} - Object containing header, payload, signature, and raw parts
 * @throws {InvalidJwtException} - If the JWT token is invalid or malformed
 */
exports.parse = function (jwtToken) {
    if (!jwtToken) {
        throw new JWTExceptions.InvalidJwtException('JWT token is null or undefined');
    }

    if (typeof jwtToken !== 'string') {
        throw new JWTExceptions.InvalidJwtException('JWT token must be a string');
    }

    const tokenParts = jwtToken.split('.');
    if (tokenParts.length !== 3) {
        throw new JWTExceptions.InvalidJwtException('Invalid JWT token format: expected 3 parts separated by dots');
    }

    // Validate that all parts are non-empty
    if (!tokenParts[0] || !tokenParts[1] || !tokenParts[2]) {
        throw new JWTExceptions.InvalidJwtException('Invalid JWT token: one or more parts are empty');
    }

    try {
        // Use helper function for consistent base64url decoding
        const header = decodeJwtPart(tokenParts[0], 'header');
        const payload = decodeJwtPart(tokenParts[1], 'payload');
        const signature = tokenParts[2];

        return {
            header,
            payload,
            signature,
            // Include raw base64url parts for signature verification
            rawHeader: tokenParts[0],
            rawPayload: tokenParts[1]
        };
    } catch (err) {
        // Re-throw our custom exceptions
        if (err.name === 'InvalidJwtException') {
            throw err;
        }
        throw new JWTExceptions.InvalidJwtException('Malformed JWT cannot be parsed', err);
    }
}

/**
 * Verifies a JWT token using an RSA public key
 * @param {string} jwtToken - The JWT token to verify
 * @param {Object|string} publicKey - The RSA public key (JWK object or JSON string)
 * @throws {InvalidJwtException} - If JWT parsing fails
 * @throws {JwtSignatureValidationException} - If signature verification fails
 */
exports.verifyJwt = function (jwtToken, publicKey) {
    if (!publicKey) {
        throw new JWTExceptions.JwtSignatureValidationException('No public key found');
    }

    if (!jwtToken) {
        throw new JWTExceptions.JwtSignatureValidationException('JWT token is null or undefined');
    }
    
    const { header, _, signature, rawHeader, rawPayload } =  exports.parse(jwtToken);
    
    const algorithm = header.alg;
    if (!algorithm) {
        throw new JWTExceptions.JwtSignatureValidationException(ERROR_MESSAGES.MISSING_ALGORITHM);
    }

    const hashAlgorithm = SUPPORTED_ALGORITHMS[algorithm];
    if (!hashAlgorithm) {
        throw new JWTExceptions.JwtSignatureValidationException(ERROR_MESSAGES.UNSUPPORTED_ALGORITHM(algorithm));
    }

    // Validate and parse the JWK public key - let InvalidJwkException bubble up
    const jwkKey = validateAndParseJwk(publicKey);
    
    // Convert JWK to PEM format for verification - let InvalidJwkException bubble up
    const publicKeyPem = convertJwkToPem(jwkKey);
    const signingInput = rawHeader + '.' + rawPayload;
    
    let signatureBuffer;
    try {
        signatureBuffer = Buffer.from(signature, 'base64url');
    } catch (sigDecodeErr) {
        throw new JWTExceptions.JwtSignatureValidationException('Invalid base64url encoding in JWT signature', sigDecodeErr);
    }
    
    let isValid;
    try {
        const verifier = crypto.createVerify(hashAlgorithm.toUpperCase());
        verifier.update(signingInput);
        isValid = verifier.verify(publicKeyPem, signatureBuffer);
    } catch (verifyErr) {
        throw new JWTExceptions.JwtSignatureValidationException('Signature verification failed', verifyErr);
    }

    if (!isValid) {
        throw new JWTExceptions.JwtSignatureValidationException('JWT signature verification failed');
    }
}

/**
 * Extracts an RSA public key from a JWK JSON string
 * @param {string} jwkJsonString - The JWK JSON string containing the RSA key
 * @returns {Object} - The RSA public key object
 * @throws {InvalidJwkException} - If the JWK is invalid or not an RSA key
 */
exports.getRSAPublicKeyFromJwk = function (jwkJsonString) {
    try {
        const jwkData = JSON.parse(jwkJsonString);
        if (jwkData.kty !== 'RSA') {
            throw new JWTExceptions.InvalidJwkException('JWK Algorithm mismatch. Expected algorithm : RSA');
        }
        return jwkData;
    } catch (err) {
        if (err.name === 'InvalidJwkException') {
            throw err;
        }
        throw new JWTExceptions.InvalidJwkException('Failed to parse JWK or extract RSA public key', err);
    }
}
