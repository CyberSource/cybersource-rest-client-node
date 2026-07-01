'use strict';

function LoggingUtilities() { }

/**
 * Generic redactor for opaque secrets in log output.
 * Returns "***" + last `tailLen` chars of the input.
 * Null/empty safe. If the value is shorter than `tailLen`, the whole
 * value is appended after "***" (no slice underflow, still prefixed).
 *
 * Use this for any new auth-related log statement that needs to include
 * a token, key, secret, or signature material.
 */
LoggingUtilities.redact = function (value, tailLen) {
  if (value === null || value === undefined || value === '') return '***';
  var n = (typeof tailLen === 'number' && tailLen > 0) ? tailLen : 4;
  var s = String(value);
  return '***' + (s.length > n ? s.slice(-n) : s);
};

/**
 * Redact opaque values in a JWT string.
 * Masks the JWT to "***" + last 4 chars of the original value.
 */
LoggingUtilities.redactJwt = function (jwt) {
    return LoggingUtilities.redact(jwt, 4);
}

/**
 * Redact opaque values in an HTTP Signature header string.
 * Keeps algorithm and headers (structural metadata) intact; masks the rest
 * to "***" + last 4 chars of the original value.
 */
LoggingUtilities.redactSignature = function (signature) {
  if (!signature) return signature;
  var KEEP = { algorithm: true, headers: true };
  var matched = false;
  var result = signature.replace(/(\w+)="([^"]*)"/g, function (_, key, val) {
    matched = true;
    if (KEEP[key.toLowerCase()]) return key + '="' + val + '"';
    return key + '="' + LoggingUtilities.redact(val, 4) + '"';
  });
  if (!matched) return LoggingUtilities.redact(signature, 4);
  return result;
}

module.exports = LoggingUtilities;