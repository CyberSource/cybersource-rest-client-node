const crypto = require('crypto');
const jwkToPem = require('jwk-to-pem');
 
function isPemFormattedString(input) {
  return typeof input === 'string' && /^-----BEGIN PUBLIC KEY-----[\S\s]*-----END PUBLIC KEY-----/.test(input);
}
 
function isBase64String(input) {
  return typeof input === 'string' && /^[a-zA-Z0-9+/=]*$/g.test(input);
}
 
function base64toPem(base64) {
  const urlDecoded = base64.replace(/-/g, '+').replace(/_/g, '/');
 
  return [
    '-----BEGIN PUBLIC KEY-----',
    ...urlDecoded.match(/.{1,64}/g),
    '-----END PUBLIC KEY-----',
  ].join('\n');
}
 
function verifyToken(publicKey, token) {
  if (typeof token !== 'object' || !token) throw new Error('Invalid token object');
  if (!Object.prototype.hasOwnProperty.call(token, 'signature')) throw new Error('token.signature is missing');
  if (!Object.prototype.hasOwnProperty.call(token, 'signedFields')) throw new Error('token.signedFields is missing');
 
  let pem;
  if (typeof publicKey === 'object') pem = jwkToPem(publicKey);
  else if (isPemFormattedString(publicKey)) pem = publicKey;
  else if (isBase64String(publicKey)) pem = base64toPem(publicKey);
  else {
    throw new Error('Invalid publicKey parameter');
  }
 
  const dataToVerify = token.signedFields.split(',').map(field => token[field]).join(',');
  return crypto.createVerify('RSA-SHA512').update(dataToVerify).verify(pem, token.signature, 'base64');
}
 
module.exports = verifyToken;