const fs = require('fs');
const openpgp = require('openpgp');

/**
 * Encrypts a file using a PGP public key (.asc).
 * @param {string} inputFilePath - Path to the file to encrypt.
 * @param {string} publicKeyPath - Path to the public .asc key or armored key string.
 * @returns {Promise<Buffer>} - The encrypted file as a Buffer.
 */
function handlePGPEncrypt(inputFilePath, publicKeyPath) {
    return new Promise((resolve, reject) => {
        let publicKeyArmored, fileData;
        try {
            publicKeyArmored = fs.readFileSync(publicKeyPath, 'utf8');
            fileData = fs.readFileSync(inputFilePath);
        } catch (err) {
            return reject(err);
        }
        openpgp.readKey({ armoredKey: publicKeyArmored })
            .then(publicKey => {
                return openpgp.createMessage({ binary: fileData })
                    .then(message => {
                        return openpgp.encrypt({
                            message,
                            encryptionKeys: publicKey,
                            config: { preferredCompressionAlgorithm: openpgp.enums.compression.zip },
                            format: 'binary'
                        });
                    });
            })
            .then(encrypted => resolve(Buffer.from(encrypted)))
            .catch(reject);
    });
}

module.exports = { handlePGPEncrypt };