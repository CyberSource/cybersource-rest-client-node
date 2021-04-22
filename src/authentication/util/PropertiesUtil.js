'use strict';

var fs = require('fs');
var Constants = require('./Constants');
var Promise = require('promise');
var path = require('path');

/*Method for reading json config file */
exports.getConfig = function () {
    var filePath = path.resolve('resource/cybs.json');
    return new Promise(function (resolve, reject) {
        if (fs.existsSync(filePath)) {
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    reject(err);
                }
                else {
                    var configObject = JSON.parse(data);
                    resolve(configObject);
                }
            });
        }

        else {
            var err = new Error(Constants.FILE_NOT_FOUND + filePath);
            reject(err);
        }

    })
}

/**
 * Check fro proxy Address and proxy port
 */
exports.proxyCheck = function (merchantConfig, requestOptions) {

    if (merchantConfig.getProxyAddress() !== null && merchantConfig.getProxyAddress() !== ""
        && merchantConfig.getProxyAddress() !== undefined) {
        requestOptions.proxy = merchantConfig.getProxyAddress();
    }

    if (merchantConfig.getProxyPort() !== null && merchantConfig.getProxyPort() !== ""
        && merchantConfig.getProxyPort() !== undefined) {
        requestOptions.port = merchantConfig.getProxyPort();
    }

    return requestOptions;
}