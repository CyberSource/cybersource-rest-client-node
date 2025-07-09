const axios = require('axios');
const fs = require('fs');
const https = require('https');
const tls = require('tls');
const FormData = require('form-data');
const { v4: uuidv4 } = require('uuid');

/**
 * Uploads an encrypted PGP file using mTLS with PKCS#12 (.p12/.pfx) client certificate.
 * @param {Buffer} encryptedPgpBytes - The encrypted PGP file content as Buffer.
 * @param {string} fileName - The name of the file to be uploaded.
 * @param {Buffer} clientCertP12 - The PKCS#12 client certificate as Buffer.
 * @param {string} clientCertP12Password - Password for the PKCS#12 client certificate.
 * @param {Buffer} serverTrustCert - The server trust certificate as Buffer.
 * @returns {Promise<any>}
 */
function handleUploadOperationUsingP12orPfx(
    encryptedPgpBytes,
    endpointUrl,
    fileName,
    clientCertP12,
    clientCertP12Password,
    serverTrustCert,
    verify_ssl
) {
    const form = new FormData();
    form.append('file', encryptedPgpBytes, { filename: fileName });

    const defaultCAs = tls.rootCertificates.slice();
    //Assuming serverTrustCert is a PEM encoded certificate
    if (serverTrustCert && serverTrustCert.length > 0) {
        defaultCAs.push(serverTrustCert.toString());
    }

    const correlationId = uuidv4();

    const cleanServername = new URL(endpointUrl).hostname;

    const httpsAgent = new https.Agent({
        pfx: clientCertP12,
        passphrase: clientCertP12Password,
        ca: defaultCAs,
        rejectUnauthorized: verify_ssl,
        servername: cleanServername
    });

    return axios.post(endpointUrl, form, {
        httpsAgent,
        headers: {
            ...form.getHeaders(),
            'v-c-correlation-id': correlationId
        }
    }).then(response => {
        if (response.status >= 200 && response.status < 300) {
            return normalizeResponse(response);
        } throw {
            response
        };
    }).catch(error => {
        return Promise.reject({
            error: normalizeErrorResponse(error),
            response: error.response
        });
    });
}

/**
 * Uploads an encrypted PGP file using mTLS with client key/cert as PEM Buffers/strings.
 * @param {Buffer} encryptedPgpBytes - The encrypted PGP file content as Buffer.
 * @param {string} fileName - The name of the file to be uploaded.
 * @param {Buffer|string} clientPrivateKey - The client's private key (Buffer).
 * @param {Buffer|string} clientCert - The client's certificate (Buffer).
 * @param {Buffer|string} serverTrustCert - The server's trust certificate (Buffer).
 * @param {string} [clientKeyPassword] - Password for the private key, if encrypted.
 * @returns {Promise<any>}
 */
function handleUploadOperationUsingPrivateKeyAndCerts(
    encryptedPgpBytes,
    endpointUrl,
    fileName,
    clientPrivateKey,
    clientCert,
    serverTrustCert,
    clientKeyPassword,
    verify_ssl
) {
    const form = new FormData();
    form.append('file', encryptedPgpBytes, { filename: fileName });

    const correlationId = uuidv4();

    const defaultCAs = tls.rootCertificates.slice();
    //Assuming serverTrustCert is a PEM encoded certificate
    if (serverTrustCert && serverTrustCert.length > 0) {
        defaultCAs.push(serverTrustCert.toString());
    }

    const cleanServername = new URL(endpointUrl).hostname;

    const httpsAgent = new https.Agent({
        key: clientPrivateKey,
        cert: clientCert,
        ca: defaultCAs,
        passphrase: clientKeyPassword,
        rejectUnauthorized: verify_ssl,
        servername: cleanServername
    });

    return axios.post(endpointUrl, form, {
        httpsAgent,
        headers: {
            ...form.getHeaders(),
            'v-c-correlation-id': correlationId
        }
    }).then(response => {
        if (response.status >= 200 && response.status < 300) {
            return normalizeResponse(response);
        } throw {
            response
        };
    }).catch(function(error) {
        return Promise.reject({
            error: normalizeErrorResponse(error),
            response: error.response
        });
    });
}

function normalizeResponse(response) {
    return {
        status: response.status,
        statusText: response.statusText,
        data: response.data,
        header: response.headers,
        message: "File uploaded successfully"
    };
}

function normalizeErrorResponse(error) {
    if (typeof error.response !== 'undefined') {
        return {
            status: error.response.status,
            statusText: error.response.statusText,
            data: error.response.data,
            header: error.response.headers,
            message: `File upload failed: ${error.message}`
        };
    } else {
        var tester = {};
        tester.errno = error.errno;
        tester.code = error.code;
        tester.syscall = error.syscall;
        tester.address = error.address;
        tester.port = error.port;
        tester.message = error.message ? error.message : 'An unknown error occurred';
        return tester;
    }
}
module.exports = {
    handleUploadOperationUsingP12orPfx,
    handleUploadOperationUsingPrivateKeyAndCerts
};