const fs = require('fs');
const path = require('path');

const MAX_FILE_SIZE_BYTES = 75 * 1024 * 1024; // 75MB

class BatchUploadUtility {
    /**
     * Constructs the full endpoint URL for the given environment hostname and endpoint path.
     * @param {string} environmentHostname - The environment hostname (with or without protocol prefix).
     * @param {string} endpoint - The endpoint path to append.
     * @returns {string} The full endpoint URL.
     */
    static getEndpointUrl(environmentHostname, endpoint) {
        const URL_PREFIX = 'https://';
        let baseUrl;
        if (environmentHostname.trim().toLowerCase().startsWith(URL_PREFIX)) {
            baseUrl = environmentHostname.trim();
        } else {
            baseUrl = URL_PREFIX + environmentHostname.trim();
        }
        return baseUrl + endpoint;
    }

    /**
     * Validates the input parameters for batch API using P12 client certificate.
     * @param {string} inputFile - Path to the input CSV file for batch upload.
     * @param {string} environmentHostname
     * @param {string} pgpEncryptionCertPath
     * @param {string} clientCertP12FilePath
     * @param {string} serverTrustCertPath
     */
    static validateBatchApiP12Inputs(inputFile, environmentHostname, pgpEncryptionCertPath, clientCertP12FilePath, serverTrustCertPath) {
        this.validateInputFile(inputFile);
        if (!environmentHostname || !environmentHostname.trim()) {
            throw new Error('Environment Host Name for Batch Upload API cannot be null or empty.');
        }
        this.validatePathAndFile(pgpEncryptionCertPath, 'PGP Encryption Cert Path');
        this.validatePathAndFile(clientCertP12FilePath, 'Client Cert P12 File Path');
        // serverTrustCertPath is optional, but if provided, validate
        if (serverTrustCertPath && serverTrustCertPath.trim()) {
            this.validatePathAndFile(serverTrustCertPath, 'Server Trust Cert Path');
        }
    }

    /**
     * Validates the input parameters for batch API using direct key and certificate file paths.
     * @param {string} inputFile - Path to the input CSV file for batch upload.
     * @param {string} environmentHostname
     * @param {string} pgpPublicKeyPath - Path to the PGP public key file (.asc).
     * @param {string} clientPrivateKeyPath - Path to the client private key file (PEM).
     * @param {string} clientCertPath - Path to the client X509 certificate file (PEM).
     * @param {string} serverTrustCertPath - Path to the server trust X509 certificate file (PEM, optional).
     */
    static validateBatchApiKeysInputs(inputFile, environmentHostname, pgpPublicKeyPath, clientPrivateKeyPath, clientCertPath, serverTrustCertPath) {
        this.validateInputFile(inputFile);
        if (!environmentHostname || !environmentHostname.trim()) {
            throw new Error('Environment Host Name for Batch Upload API cannot be null or empty.');
        }
        this.validatePathAndFile(pgpPublicKeyPath, 'PGP Public Key Path');
        this.validatePathAndFile(clientPrivateKeyPath, 'Client Private Key Path');
        this.validatePathAndFile(clientCertPath, 'Client Certificate Path');
        // serverTrustCertPath is optional, but if provided, validate
        if (serverTrustCertPath && serverTrustCertPath.trim()) {
            this.validatePathAndFile(serverTrustCertPath, 'Server Trust Certificate Path');
        }
    }

    /**
     * Validates the input file for batch upload.
     * Checks for existence, file type (CSV), and maximum file size (75MB).
     * @param {string} inputFile - Path to the input file to validate.
     */
    static validateInputFile(inputFile) {
        if (!inputFile || !fs.existsSync(inputFile) || !fs.statSync(inputFile).isFile()) {
            throw new Error(`Input file is invalid or does not exist: ${inputFile}`);
        }
        // Only CSV files are allowed for batch API
        if (!inputFile.toLowerCase().endsWith('.csv')) {
            throw new Error(`Only CSV file type is allowed: ${path.basename(inputFile)}`);
        }
        // Max file size allowed is 75MB
        const fileSize = fs.statSync(inputFile).size;
        if (fileSize > MAX_FILE_SIZE_BYTES) {
            throw new Error(`Input file size exceeds the maximum allowed size of 75MB: ${fileSize}`);
        }
    }

    /**
     * Validates that the given file path exists and is not empty.
     * @param {string} filePath - The file path to validate.
     * @param {string} pathType - A description of the path type (e.g., "Input file").
     */
    static validatePathAndFile(filePath, pathType) {
        if (!filePath || !filePath.trim()) {
            throw new Error(`${pathType} path cannot be null or empty`);
        }

        // Normalize Windows-style paths that start with a slash before the drive letter
        let normalizedPath = filePath;
        if (path.sep === '\\' && normalizedPath.match(/^\/[A-Za-z]:.*/)) {
            normalizedPath = normalizedPath.substring(1);
        }

        if (!fs.existsSync(normalizedPath)) {
            throw new Error(`${pathType} does not exist: ${normalizedPath}`);
        }
        if (!fs.statSync(normalizedPath).isFile()) {
            throw new Error(`${pathType} does not have valid file: ${normalizedPath}`);
        }
        try {
            fs.accessSync(normalizedPath, fs.constants.R_OK);
        } catch (err) {
            throw new Error(`${pathType} is not readable: ${normalizedPath}`);
        }
    }
}

module.exports = BatchUploadUtility;