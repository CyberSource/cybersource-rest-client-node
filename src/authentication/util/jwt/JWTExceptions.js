'use strict';

/**
 * InvalidJwkException - Error class for invalid JWK (JSON Web Key)
 * @param {string} message - Error message describing the invalid JWK
 * @param {Error} [cause] - Optional underlying cause of the error
 * @constructor
 */
exports.InvalidJwkException = function (message, cause) {
    Error.captureStackTrace(this, this.constructor);
    this.name = 'InvalidJwkException';
    this.message = message;
    if (cause) {
        this.cause = cause;
        this.stack = this.stack + '\nCaused by: ' + cause.stack;
    }
};
exports.InvalidJwkException.prototype = Object.create(Error.prototype);
exports.InvalidJwkException.prototype.constructor = exports.InvalidJwkException;

/**
 * InvalidJwtException - Error class for invalid JWT token
 * @param {string} message - Error message describing the invalid JWT token
 * @param {Error} [cause] - Optional underlying cause of the error
 * @constructor
 */
exports.InvalidJwtException = function (message, cause) {
    Error.captureStackTrace(this, this.constructor);
    this.name = 'InvalidJwtException';
    this.message = message;
    if (cause) {
        this.cause = cause;
        this.stack = this.stack + '\nCaused by: ' + cause.stack;
    }
};
exports.InvalidJwtException.prototype = Object.create(Error.prototype);
exports.InvalidJwtException.prototype.constructor = exports.InvalidJwtException;

/**
 * JwtSignatureValidationException - Error class for JWT signature validation failures
 * @param {string} message - Error message describing the signature validation failure
 * @param {Error} [cause] - Optional underlying cause of the error
 * @constructor
 */
exports.JwtSignatureValidationException = function (message, cause) {
    Error.captureStackTrace(this, this.constructor);
    this.name = 'JwtSignatureValidationException';
    this.message = message;
    if (cause) {
        this.cause = cause;
        this.stack = this.stack + '\nCaused by: ' + cause.stack;
    }
};
exports.JwtSignatureValidationException.prototype = Object.create(Error.prototype);
exports.JwtSignatureValidationException.prototype.constructor = exports.JwtSignatureValidationException;
