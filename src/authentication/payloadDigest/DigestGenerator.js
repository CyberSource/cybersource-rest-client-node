'use strict';

var fs = require('fs');
var crypto = require('crypto');
var path = require('path');

/**
 * This return return Digest value which is SHA-256 hash of payload that is BASE64 encoded
 */
exports.generateDigest = function (merchantConfig, logger) {
    var data = merchantConfig.getRequestJsonData();
    if (data) {
        try {
            console.log("data,");
            var buffer = Buffer.from(data, 'utf8');
            const hash = crypto.createHash('sha256');
            hash.update(buffer);
            var digest = hash.digest('base64');
            return digest;
        } catch (err) {
            logger.error(err.stack);
        }
    } else {
        data = merchantConfig.getFormParamsData();
        var filePath = data['file'];
        var fileContents = fs.readFileSync(filePath, 'utf8');
        var filename = path.basename(filePath);
        var boundary = randomNumeric(24);
        const contentLength = Buffer.byteLength(fileContents, 'utf8');

        var fullfile = '--' + boundary + '\n';
        fullfile += 'Content-Disposition: form-data; name="file"; filename="' + filename + '"\n';
        fullfile += 'Content-Type: application/octet-stream\n';
        fullfile += 'Content-Length: ' + contentLength + '\n\n';
        fullfile += fileContents + '\n';
        fullfile += '--' + boundary + '--\n';
        var digest = generateDigestForMultipart(fullfile);
        return digest;
        // fs.readFile(filePath, 'utf8', (err, fileContents) => {
        //     if (err) {
        //         console.error(err);
        //         return;
        //     }

        //     var filename = path.basename(filePath);
        //     var boundary = randomNumeric(24);
            
        //     var fullfile = '--' + boundary + '\n';
        //     fullfile += 'Content-Disposition: form-data; name="file"; filename="' + filename + '"\n';
        //     fullfile += 'Content-Type: text/csv\n\n';
        //     fullfile += fileContents + '\n';
        //     fullfile += '--' + boundary + '--\n';

        //     var digest = generateDigestForMultipart(fullfile);
        //     return digest;
        // })
    }
}

function generateDigestForMultipart(data) {
    var buffer = Buffer.from(data, 'utf8');
    const hash = crypto.createHash('sha256');
    hash.update(buffer);
    var digest = hash.digest('base64');
    return digest;
}

function randomNumeric(length) {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += Math.floor(Math.random() * 10);
    }
    return result;
}

exports.fetchFileContentsAsFormParams = function (filePath) {
    var fileContents = fs.readFileSync(filePath, 'utf8');
    var filename = path.basename(filePath);
    var boundary = randomNumeric(24);
    const contentLength = Buffer.byteLength(fileContents, 'utf8');

    var fullfile = '--' + boundary + '\n';
    fullfile += 'Content-Disposition: form-data; name="file"; filename="' + filename + '"\n';
    fullfile += 'Content-Type: application/octet-stream\n';
    fullfile += 'Content-Length: ' + contentLength + '\n\n';
    fullfile += fileContents + '\n';
    fullfile += '--' + boundary + '--\n';

    return fullfile;

    // fs.readFile(filePath, 'utf8', (err, fileContents) => {
    //     if (err) {
    //         console.error(err);
    //         return;
    //     }
    //     console.log("\n\nCHECK ME");

    //     var filename = path.basename(filePath);
    //     console.log("file name : " + filename);
    //     var boundary = randomNumeric(24);

    //     var fullfile = '--' + boundary + '\n';
    //     fullfile += 'Content-Disposition: form-data; name="file"; filename="' + filename + '"\n';
    //     fullfile += 'Content-Type: text/csv\n\n';
    //     fullfile += fileContents + '\n';
    //     fullfile += '--' + boundary + '--\n';

    //     console.log("\n\nDIGEST PARAMETER : " + fullfile);
       
    //     return fullfile;
    // })
}