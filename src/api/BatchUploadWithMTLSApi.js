const path = require('path');
const fs = require('fs');
const { handlePGPEncrypt } = require('../utilities/PGP/BatchUpload/PgpEncryptionUtility');
const {
    handleUploadOperationUsingP12orPfx,
    handleUploadOperationUsingPrivateKeyAndCerts
} = require('../utilities/PGP/BatchUpload/MutualAuthUploadUtility');
const BatchUploadUtility = require('../utilities/PGP/BatchUpload/BatchUploadUtility');

/**
 * BatchUploadWithMTLSApi
 * Class for uploading batch files to CyberSource using mutual TLS authentication.
 * Supports PKCS#12 client certificates, and direct private key/certificate paths.
 * Handles PGP encryption of files before upload.
 */
class BatchUploadWithMTLSApi {
    constructor(logger = console) {
        this.logger = logger;
    }

    uploadBatchAPIWithP12(opts, callback) {
        try {
            const {
                inputFilePath,
                environmentHostname,
                publicKeyFilePath,
                clientCertP12FilePath,
                clientCertP12Password,
                serverTrustCertPath,
                rejectUnauthorizedFlag = true
            } = opts;
            if (rejectUnauthorizedFlag === false) {
                this.logger.warn('rejectUnauthorized is set to false. SSL verification is DISABLED. This setting is NOT SAFE for production and should NOT be used in production environments!');
            }
            this.logger.info('Starting batch upload with p12/pfx for given file');
            const endpoint = '/pts/v1/transaction-batch-upload';
            const endpointUrl = BatchUploadUtility.getEndpointUrl(environmentHostname, endpoint);
            BatchUploadUtility.validateBatchApiP12Inputs(
                inputFilePath, environmentHostname, publicKeyFilePath, clientCertP12FilePath, serverTrustCertPath
            );

            handlePGPEncrypt(inputFilePath, publicKeyFilePath)
                .then(encryptedBuffer => {
                    const uploadFileName = path.basename(inputFilePath) + '.pgp';
                    console.log('Encrypted file name:', uploadFileName);
                    const clientCertP12 = fs.readFileSync(clientCertP12FilePath);
                    const serverTrustCert = serverTrustCertPath ? fs.readFileSync(serverTrustCertPath) : undefined;
                    return handleUploadOperationUsingP12orPfx(
                        encryptedBuffer,
                        endpointUrl,
                        environmentHostname,
                        uploadFileName,
                        clientCertP12,
                        clientCertP12Password,
                        serverTrustCert,
                        rejectUnauthorizedFlag
                    );
                })
                .then(result => callback(null, result))
                .catch(error => {
                    this.logger.error(error);
                    callback(error);
                });
        } catch (e) {
            this.logger.error('Exception in Batch Upload API', e);
            callback(e);
        }
    }

    uploadBatchAPIWithKeys(opts, callback) {
        try {
            const {
                inputFilePath,
                environmentHostname,
                publicKeyFilePath,
                clientPrivateKeyFilePath,
                clientCertFilePath,
                serverTrustCertPath,
                clientKeyPassword,
                rejectUnauthorizedFlag = true

            } = opts;
            if (rejectUnauthorizedFlag === false) {
                this.logger.warn('rejectUnauthorized is set to false. SSL verification is DISABLED. This setting is NOT SAFE for production and should NOT be used in production environments!');
            }
            this.logger.info('Starting batch upload with client private key and certs for given file');
            const endpoint = '/pts/v1/transaction-batch-upload';
            const endpointUrl = BatchUploadUtility.getEndpointUrl(environmentHostname, endpoint);
            BatchUploadUtility.validateBatchApiKeysInputs(
                inputFilePath, environmentHostname, publicKeyFilePath, clientPrivateKeyFilePath, clientCertFilePath, serverTrustCertPath
            );

            handlePGPEncrypt(inputFilePath, publicKeyFilePath)
                .then(encryptedBuffer => {
                    const uploadFileName = path.basename(inputFilePath) + '.pgp';
                    const clientPrivateKey = fs.readFileSync(clientPrivateKeyFilePath);
                    const clientCert = fs.readFileSync(clientCertFilePath);
                    const serverTrustCert = serverTrustCertPath ? fs.readFileSync(serverTrustCertPath) : undefined;
                    return handleUploadOperationUsingPrivateKeyAndCerts(
                        encryptedBuffer,
                        endpointUrl,
                        environmentHostname,
                        uploadFileName,
                        clientPrivateKey,
                        clientCert,
                        serverTrustCert,
                        clientKeyPassword,
                        rejectUnauthorizedFlag
                    );
                })
                .then(result => callback(null, result))
                .catch(error => {
                    this.logger.error(error);
                    callback(error);
                });
        } catch (e) {
            this.logger.error('Exception in Batch Upload API', e);
            callback(e);
        }
    }
}

module.exports = BatchUploadWithMTLSApi;