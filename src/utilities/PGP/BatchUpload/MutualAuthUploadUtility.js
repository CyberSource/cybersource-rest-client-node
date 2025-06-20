const axios = require('axios');
const fs = require('fs');
const https = require('https');
const tls = require('tls');
const FormData = require('form-data');
const { v4: uuidv4 } = require('uuid');

/**
 * Uploads an encrypted PGP file using mTLS with PKCS#12 (.p12/.pfx) client certificate.
 * @param {Buffer} encryptedPgpBytes - The encrypted PGP file content as Buffer.
 * @param {string} environmentHostname - The environment hostname.
 * @param {string} fileName - The name of the file to be uploaded.
 * @param {Buffer} clientCertP12 - The PKCS#12 client certificate as Buffer.
 * @param {string} clientCertP12Password - Password for the PKCS#12 client certificate.
 * @param {Buffer} serverTrustCert - The server trust certificate as Buffer.
 * @returns {Promise<any>}
 */
function handleUploadOperationUsingP12orPfx(
    encryptedPgpBytes,
    endpointUrl,
    environmentHostname,
    fileName,
    clientCertP12,
    clientCertP12Password,
    serverTrustCert,
    rejectUnauthorizedFlag
) {
    const form = new FormData();
    form.append('file', encryptedPgpBytes, { filename: fileName });

    const defaultCAs = tls.rootCertificates.slice();

    if (serverTrustCert && serverTrustCert.length > 0) {
        defaultCAs.push(serverTrustCert.toString());
    }

    const correlationId = uuidv4();

    const httpsAgent = new https.Agent({
        pfx: clientCertP12,
        passphrase: clientCertP12Password,
        ca: defaultCAs,
        rejectUnauthorized: rejectUnauthorizedFlag,
        servername: environmentHostname
    });

    return axios.post(endpointUrl, form, {
        httpsAgent,
        headers: {
            ...form.getHeaders(),
            'v-c-correlation-id': correlationId
        }
    }).then(response => {
        if (response.status === 201) {
            return {
                status: response.status,
                statusText: response.statusText,
                data: response.data,
                message: "File uploaded successfully"
            };
        } throw {
            response
        };
    }).catch(error => {
        return Promise.reject(normalizeError(error));
    });
}

/**
 * Uploads an encrypted PGP file using mTLS with client key/cert as PEM Buffers/strings.
 * @param {Buffer} encryptedPgpBytes - The encrypted PGP file content as Buffer.
 * @param {string} environmentHostname - The environment hostname.
 * @param {string} fileName - The name of the file to be uploaded.
 * @param {Buffer|string} clientPrivateKey - The client's private key (PEM string or Buffer).
 * @param {Buffer|string} clientCert - The client's X509 certificate (PEM string or Buffer).
 * @param {Buffer|string} serverTrustCert - The server's trust X509 certificate (PEM string or Buffer).
 * @param {string} [clientKeyPassword] - Password for the private key, if encrypted.
 * @returns {Promise<any>}
 */
function handleUploadOperationUsingPrivateKeyAndCerts(
    encryptedPgpBytes,
    endpointUrl,
    environmentHostname,
    fileName,
    clientPrivateKey,
    clientCert,
    serverTrustCert,
    clientKeyPassword,
    rejectUnauthorizedFlag
) {
    const form = new FormData();
    form.append('file', encryptedPgpBytes, { filename: fileName });

    const defaultCAs = tls.rootCertificates.slice();

    if (serverTrustCert && serverTrustCert.length > 0) {
        defaultCAs.push(serverTrustCert.toString());
    }
    const httpsAgent = new https.Agent({
        key: clientPrivateKey,
        cert: clientCert,
        ca: defaultCAs,
        passphrase: clientKeyPassword,
        rejectUnauthorized: rejectUnauthorizedFlag,
        servername: environmentHostname
    });

    return axios.post(endpointUrl, form, {
        httpsAgent,
        headers: form.getHeaders()
    }).then(response => {
        if (response.status === 201) {
            return {
                status: response.status,
                statusText: response.statusText,
                data: response.data,
                message: "File uploaded successfully"
            };
        } throw {
            response
        };
    }).catch(error => {
        return Promise.reject(normalizeError(error));
    });
}

function normalizeError(error) {
    return {
        message: `File upload failed: ${error.message}`
    };
}

module.exports = {
    handleUploadOperationUsingP12orPfx,
    handleUploadOperationUsingPrivateKeyAndCerts
};