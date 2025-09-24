const path = require('path');
const fs = require('fs');
const PgpEncryptionUtility = require('../utilities/PGP/BatchUpload/PgpEncryptionUtility');
const MutualAuthUploadUtility = require('../utilities/PGP/BatchUpload/MutualAuthUploadUtility');
const BatchUploadUtility = require('../utilities/PGP/BatchUpload/BatchUploadUtility');
const LogConfiguration = require('../authentication/logging/LogConfiguration');
const Constants = require('../authentication/util/Constants');
const Logger = require('../authentication/logging/Logger');

/**
 * BatchUploadWithMTLSApi
 * Class for uploading batch files to CyberSource using mutual TLS authentication.
 * Supports PKCS#12 client certificates, and direct private key/certificate paths.
 * Handles PGP encryption of files before upload.
 */
class BatchUploadWithMTLSApi {
    /**
     * Constructs a new BatchUploadWithMTLSApi instance.
     * @param {Object} [log_config] - Logging configuration object (optional).
     * @param {boolean} [log_config.enableLog=false] - Enable or disable logging.
     * @param {string} [log_config.logFileName='cybs-batch-upload'] - Log file name (without extension).
     * @param {string} [log_config.logDirectory='./logs'] - Directory to store log files.
     * @param {number} [log_config.logFileMaxSize=5242880] - Maximum log file size in bytes (default 5MB).
     * @param {string} [log_config.loggingLevel='debug'] - Logging level ('debug', 'info', 'warn', 'error').
     *
     * Example:
     *   const log_config = {
     *     enableLog: true,
     *     logFileName: 'cybs-batch-upload',
     *     logDirectory: './logs',
     *     logFileMaxSize: 5242880,
     *     loggingLevel: 'debug'
     *   };
     */
    constructor(log_config) {
        if (!log_config) {
            log_config = {
                enableLog: false
            };
        }
        const logConfiguration = new LogConfiguration(log_config);
        //fallback for missing values
        logConfiguration.getDefaultLoggingProperties("");

        this.logger = Logger.getLoggerFromLogConfig(logConfiguration, 'BatchUploadWithMTLSApi');
        this.logger.info(Constants.BEGIN_TRANSACTION);
    }

    /**
     * Uploads a batch file to CyberSource using a PKCS#12 (.p12/.pfx) client certificate for mutual TLS authentication.
     * The file is PGP-encrypted before upload.
     *
     * @param {Object} opts - Options for the upload.
     * @param {string} opts.inputFilePath - Path to the input file to be uploaded.
     * @param {string} opts.environmentHostname - CyberSource environment hostname.
     * @param {string} opts.publicKeyFilePath - Path to the PGP public key file for encryption.
     * @param {string} opts.clientCertP12FilePath - Path to the PKCS#12 client certificate file.
     * @param {string} opts.clientCertP12Password - Password for the PKCS#12 client certificate password.
     * @param {string} opts.serverTrustCertPath - Path to the server trust certificate file (optional).
     * @param {boolean} [opts.verify_ssl=true] - Whether to reject unauthorized SSL certificates (optional).
     * @param {function(Error, any):void} callback - Callback function with (error, result).
     */
    uploadBatchAPIWithP12(opts, callback) {
        const {
            inputFilePath,
            environmentHostname,
            publicKeyFilePath,
            clientCertP12FilePath,
            clientCertP12Password,
            serverTrustCertPath,
            verify_ssl = true
        } = opts;
        try {
            if (verify_ssl === false) {
                this.logger.warn('verify_ssl is set to false. SSL verification is DISABLED. This setting is NOT SAFE for production and should NOT be used in production environments!');
            }
            this.logger.info('Starting batch upload with p12/pfx for given file');
            const endpoint = '/pts/v1/transaction-batch-upload';
            const endpointUrl = BatchUploadUtility.getEndpointUrl(environmentHostname, endpoint);
            BatchUploadUtility.validateBatchApiP12Inputs(
                inputFilePath, environmentHostname, publicKeyFilePath, clientCertP12FilePath, serverTrustCertPath
            );

            PgpEncryptionUtility.handlePGPEncrypt(inputFilePath, publicKeyFilePath)
                .then(encryptedBuffer => {
                    let uploadFileName = 'file.pgp';
                    if (inputFilePath && inputFilePath.trim()) {
                        const base = path.basename(inputFilePath, path.extname(inputFilePath));
                        uploadFileName = base + '.pgp';
                    }
                    const clientCertP12 = fs.readFileSync(clientCertP12FilePath);
                    const serverTrustCert = serverTrustCertPath ? fs.readFileSync(serverTrustCertPath) : undefined;
                    return MutualAuthUploadUtility.handleUploadOperationUsingP12orPfx(
                        encryptedBuffer,
                        endpointUrl,
                        uploadFileName,
                        clientCertP12,
                        clientCertP12Password,
                        serverTrustCert,
                        verify_ssl
                    );
                })
                .then(result => {
                    callback(null, result);
                    this.logger.info(Constants.END_TRANSACTION);
                })
                .catch(error => {
                    const errorMsg = error?.message || error?.error?.message || error.stack;
                    this.logger.error(errorMsg);
                    callback(error, (error && error.response) ? error.response : undefined);
                    this.logger.info(Constants.END_TRANSACTION);
                });
        } catch (e) {
            this.logger.error('Exception in Batch Upload API', e);
            callback(e);
            this.logger.info(Constants.END_TRANSACTION);
        }
    }

    /**
     * Uploads a batch file to CyberSource using a client private key and certificate for mutual TLS authentication.
     * The file is PGP-encrypted before upload.
     *
     * @param {Object} opts - Options for the upload.
     * @param {string} opts.inputFilePath - Path to the input file to be uploaded.
     * @param {string} opts.environmentHostname - CyberSource environment hostname.
     * @param {string} opts.publicKeyFilePath - Path to the PGP public key file for encryption.
     * @param {string} opts.clientPrivateKeyFilePath - Path to the client private key file.
     * @param {string} opts.clientCertFilePath - Path to the client certificate file.
     * @param {string} opts.serverTrustCertPath - Path to the server trust certificate file (optional).
     * @param {string} [opts.clientKeyPassword] - Password for the client private key (if encrypted).
     * @param {boolean} [opts.verify_ssl=true] - Whether to reject unauthorized SSL certificates (optional).
     * @param {function(Error, any):void} callback - Callback function with (error, result).
     */

    uploadBatchAPIWithKeys(opts, callback) {
        const {
            inputFilePath,
            environmentHostname,
            publicKeyFilePath,
            clientPrivateKeyFilePath,
            clientCertFilePath,
            serverTrustCertPath,
            clientKeyPassword,
            verify_ssl = true
        } = opts;
        try {
            if (verify_ssl === false) {
                this.logger.warn('verify_ssl is set to false. SSL verification is DISABLED. This setting is NOT SAFE for production and should NOT be used in production environments!');
            }
            this.logger.info('Starting batch upload with client private key and certs for given file');
            const endpoint = '/pts/v1/transaction-batch-upload';
            const endpointUrl = BatchUploadUtility.getEndpointUrl(environmentHostname, endpoint);
            BatchUploadUtility.validateBatchApiKeysInputs(
                inputFilePath, environmentHostname, publicKeyFilePath, clientPrivateKeyFilePath, clientCertFilePath, serverTrustCertPath
            );

            PgpEncryptionUtility.handlePGPEncrypt(inputFilePath, publicKeyFilePath)
                .then(encryptedBuffer => {
                    let uploadFileName = 'file.pgp';
                    if (inputFilePath && inputFilePath.trim()) {
                        const base = path.basename(inputFilePath, path.extname(inputFilePath));
                        uploadFileName = base + '.pgp';
                    }
                    const clientPrivateKey = fs.readFileSync(clientPrivateKeyFilePath);
                    const clientCert = fs.readFileSync(clientCertFilePath);
                    const serverTrustCert = serverTrustCertPath ? fs.readFileSync(serverTrustCertPath) : undefined;
                    return MutualAuthUploadUtility.handleUploadOperationUsingPrivateKeyAndCerts(
                        encryptedBuffer,
                        endpointUrl,
                        uploadFileName,
                        clientPrivateKey,
                        clientCert,
                        serverTrustCert,
                        clientKeyPassword,
                        verify_ssl
                    );
                })
                .then(result => {
                    callback(null, result);
                    this.logger.info(Constants.END_TRANSACTION);
                })
                .catch(error => {
                    const errorMsg = error?.message || error?.error?.message || error.stack;
                    this.logger.error(errorMsg);
                    callback(error, (error && error.response) ? error.response : undefined);
                    this.logger.info(Constants.END_TRANSACTION);
                });
        } catch (e) {
            this.logger.error('Exception in Batch Upload API', e);
            callback(e);
            this.logger.info(Constants.END_TRANSACTION);
        }
    }
}

module.exports = BatchUploadWithMTLSApi;