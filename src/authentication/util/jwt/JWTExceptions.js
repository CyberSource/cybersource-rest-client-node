'use strict';

function createCustomError(name) {
    function CustomError(message, cause) {
        const instance = Reflect.construct(Error, [message], this.constructor);
        
        Reflect.setPrototypeOf(instance, Reflect.getPrototypeOf(this));
        
        instance.name = name;
        
        Error.captureStackTrace(instance, this.constructor);
        
        if (cause) {
            instance.cause = cause;
            if (cause.stack) {
                instance.stack = instance.stack + '\nCaused by: ' + cause.stack;
            }
        }
        
        return instance;
    }
    
    CustomError.prototype = Object.create(Error.prototype, {
        constructor: {
            value: CustomError,
            enumerable: false,
            writable: true,
            configurable: true
        },
        name: {
            value: name,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    
    Reflect.setPrototypeOf(CustomError, Error);    
    return CustomError;
}

/**
 * InvalidJwkException - Error class for invalid JWK (JSON Web Key)
 * @param {string} message - Error message describing the invalid JWK
 * @param {Error} [cause] - Optional underlying cause of the error
 * @constructor
 */
exports.InvalidJwkException = createCustomError('InvalidJwkException');

/**
 * InvalidJwtException - Error class for invalid JWT token
 * @param {string} message - Error message describing the invalid JWT token
 * @param {Error} [cause] - Optional underlying cause of the error
 * @constructor
 */
exports.InvalidJwtException = createCustomError('InvalidJwtException');

/**
 * JwtSignatureValidationException - Error class for JWT signature validation failures
 * @param {string} message - Error message describing the signature validation failure
 * @param {Error} [cause] - Optional underlying cause of the error
 * @constructor
 */
exports.JwtSignatureValidationException = createCustomError('JwtSignatureValidationException');
