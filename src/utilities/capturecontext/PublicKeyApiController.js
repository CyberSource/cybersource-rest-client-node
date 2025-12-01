'use strict';

const axios = require('axios');
const JWTUtility = require('../../authentication/util/jwt/JWTUtility');

/**
 * Fetches the public key for the given key ID (kid) from the specified run environment.
 *
 * @param {string} kid - The key ID for which to fetch the public key.
 * @param {string} runEnvironment - The environment domain (e.g., 'apitest.cybersource.com').
 * @param {function(Error, string):void} callback - Callback function called with (error, publicKey).
 *        If successful, error is null and publicKey is a PEM-formatted string.
 *        If an error occurs, error is an Error object and publicKey is undefined.
 */
function fetchPublicKey(kid, runEnvironment, callback) {
    if (!kid) {
        return callback(new Error('kid parameter is required'));
    }
    
    if (!runEnvironment) {
        return callback(new Error('runEnvironment parameter is required'));
    }
    
    if (typeof callback !== 'function') {
        return callback(new Error('callback parameter must be a function'));
    }
    
    const url = `https://${runEnvironment}/flex/v2/public-keys/${kid}`;
    
    const axiosConfig = {
        method: 'GET',
        url: url,
        headers: {
            'Accept': 'application/json'
        }
    };
    
    axios.request(axiosConfig)
        .then(response => {
            try {
                if (!response.data) {
                    return callback(new Error('Empty response received from public key endpoint'));
                }
                
                let jwkJsonString;
                if (typeof response.data === 'string') {
                    jwkJsonString = response.data;
                } else {
                    jwkJsonString = JSON.stringify(response.data);
                }
                
                const publicKey = JWTUtility.getRSAPublicKeyFromJwk(jwkJsonString);
                if (!publicKey) {
                    return callback(new Error('Invalid public key received from JWK'));
                }
                callback(null, publicKey);
                
            } catch (parseError) {
                const error = new Error(`Failed to parse JWK response: ${parseError.message}`);
                error.originalError = parseError;
                callback(error);
            }
        })
        .catch(axiosError => {
            let error;
            
            if (axiosError.response) {
                const status = axiosError.response.status;
                const statusText = axiosError.response.statusText;
                error = new Error(`HTTP ${status}: ${statusText} - Failed to fetch public key for kid: ${kid}`);
                error.status = status;
                error.response = axiosError.response;
            } else if (axiosError.request) {
                error = new Error(`No response received - Failed to fetch public key for kid: ${kid}`);
                error.code = axiosError.code;
            } else {
                error = new Error(`Request setup error: ${axiosError.message}`);
            }
            
            error.originalError = axiosError;
            callback(error);
        });
}

module.exports = { fetchPublicKey };
