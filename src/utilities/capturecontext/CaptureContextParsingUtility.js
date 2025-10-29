'use strict';

const JWTUtility = require('../../authentication/util/jwt/JWTUtility');
const JWTExceptions = require('../../authentication/util/jwt/JWTExceptions');
const Cache = require('../../authentication/util/Cache');
const PublicKeyApiController = require('./PublicKeyApiController');

/**
 * Parses a capture context JWT response and optionally verifies its signature
 * @param {string} jwtValue - The JWT token to parse
 * @param {Object} merchantConfig - The merchant configuration object
 * @param {boolean} verifyJwt - Whether to verify the JWT signature
 * @param {Function} callback - Callback function (error, result)
 */
function parseCaptureContextResponse(jwtValue, merchantConfig, verifyJwt, callback) {
    if (typeof callback !== 'function') {
        throw new Error('callback parameter must be a function');
    }
    
    if (!jwtValue) {
        return callback(JWTExceptions.InvalidJwtException('JWT value is null or undefined'));
    }
    
    if (!merchantConfig) {
        return callback(new Error('merchantConfig is required'));
    }
    
    let parsedJwt;
    try {
        parsedJwt = JWTUtility.parse(jwtValue);
    } catch (parseError) {
        return callback(parseError);
    }
    
    if (!verifyJwt) {
        return callback(null, parsedJwt.payload);
    }
    
    const header = parsedJwt.header;
    const kid = header.kid;
    
    if (!kid) {
        return callback(JWTExceptions.JwtSignatureValidationException('JWT header missing key ID (kid) field'));
    }
    
    const runEnvironment = merchantConfig.getRunEnvironment();
    if (!runEnvironment) {
        return callback(new Error('Run environment not found in merchant config'));
    }
    
    let publicKey;
    let isPublicKeyFromCache = false;
    
    try {
        publicKey = Cache.getPublicKeyFromCache(runEnvironment, kid);
        isPublicKeyFromCache = true;
    } catch (cacheError) {
        isPublicKeyFromCache = false;
    }
    
    if (!isPublicKeyFromCache) {
        return fetchPublicKeyAndVerify(jwtValue, parsedJwt, kid, runEnvironment, false, callback);
    }
    
    try {
        JWTUtility.verifyJwt(jwtValue, publicKey);
        return callback(null, parsedJwt.payload);
    } catch (verificationError) {
        return fetchPublicKeyAndVerify(jwtValue, parsedJwt, kid, runEnvironment, true, callback);
    }
}

/**
 * Fetches public key from API and performs JWT verification
 * @param {string} jwtValue - The JWT token
 * @param {Object} parsedJwt - The parsed JWT object
 * @param {string} kid - The key ID
 * @param {string} runEnvironment - The runtime environment
 * @param {Function} callback - Callback function
 * @private
 */
function fetchPublicKeyAndVerify(jwtValue, parsedJwt, kid, runEnvironment, callback) {
    fetchPublicKeyFromApi(kid, runEnvironment, (fetchError, publicKey) => {
        if (fetchError) {
            return callback(fetchError);
        }
        
        try {
            JWTUtility.verifyJwt(jwtValue, publicKey);
            return callback(null, parsedJwt.payload);
        } catch (verificationError) {
            return callback(JWTExceptions.JwtSignatureValidationException('JWT validation failed'));
        }
    });
}


/**
 * Fetches public key from API and adds it to cache
 * @param {string} kid - The key ID
 * @param {string} runEnvironment - The runtime environment
 * @param {Function} callback - Callback function (error, publicKey)
 * @private
 */
function fetchPublicKeyFromApi(kid, runEnvironment, callback) {
    PublicKeyApiController.fetchPublicKey(kid, runEnvironment, (error, publicKey) => {
        if (error) {
            if (error.message && error.message.includes('Invalid Runtime URL')) {
                return callback(new Error('Invalid Runtime URL in Merchant Config'));
            } else if (error.message && error.message.includes('Network error')) {
                return callback(new Error('Error while trying to retrieve public key from server'));
            } else if (error.message && error.message.includes('Failed to parse JWK')) {
                return callback(JWTExceptions.InvalidJwkException('JWK received from server cannot be parsed correctly', error));
            } else {
                return callback(new Error('Error while trying to retrieve public key from server'));
            }
        }
        
        try {
            Cache.addPublicKeyToCache(runEnvironment, kid, publicKey);
            callback(null, publicKey);
        } catch (cacheError) {
            callback(null, publicKey);
        }
    });
}

module.exports = {
    parseCaptureContextResponse
};
