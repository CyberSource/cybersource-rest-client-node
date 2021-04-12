'use strict';

var Constants = require('../util/Constants');
var Logger = require('../logging/Logger');
var Map = require('collections/map');
var ApiException = require('../util/ApiException');

/**
 * This function has all the merchentConfig properties getters and setters methods
 * 
 * @param  result 
 */
function MerchantConfig(result) {

    /*Common Parameters*/
    this.authenticationType = result.authenticationType;
    this.url;
    this.requestHost;
    this.requestJsonPath = result.requestJsonPath;
    this.merchantID = result.merchantID;
    this.requestType;
    this.requestTarget;
    this.requestJsonData;

    /*Logging Parameters */
    this.logDirectory = result.logDirectory;
    this.logFilename = result.logFilename;
    this.logFileMaxSize = result.logFileMaxSize;
    this.loggingLevel = result.loggingLevel;
    this.maxLogFiles = result.maxLogFiles;

    /* JWT Parameters*/
    this.keysDirectory = result.keysDirectory;
    this.keyAlias = result.keyAlias;
    this.keyPass = result.keyPass;
    this.keyType;
    this.keyFilename = result.keyFileName;
    this.enableLog = result.enableLog;
    this.useHttpClient;

    /* proxy Parameters*/
    this.useProxy = result.useProxy;
    this.proxyAddress = result.proxyAddress;
    this.proxyPort = result.proxyPort;
    this.proxyUser = result.proxyUser;
    this.proxyPassword = result.proxyPassword;

    /*HTTP Parameters*/
    this.merchantKeyId = result.merchantKeyId;
    this.merchantsecretKey = result.merchantsecretKey;

    /* MetaKey Parameters */
    this.useMetaKey = result.useMetaKey;
    this.portfolioID = result.portfolioID;

    this.runEnvironment = result.runEnvironment;

    this.solutionId = result.solutionId;

    /* Fallback logic*/
    this.defaultPropValues();

}

MerchantConfig.prototype.getAuthenticationType = function getAuthenticationType() {
    return this.authenticationType;
};

MerchantConfig.prototype.setAuthenticationType = function setAuthenticationType(authType) {
    this.authenticationType = authType;
};

MerchantConfig.prototype.setMerchantID = function setMerchantID(merchantID) {
    this.merchantID = merchantID;
};

MerchantConfig.prototype.setRequestHost = function setRequestHost(requestHost) {
    this.requestHost = requestHost;
};

MerchantConfig.prototype.setKeyAlias = function setKeyAlias(keyAlias) {
    this.keyAlias = keyAlias;
};

MerchantConfig.prototype.setKeyPass = function setKeyPass(keyPass) {
    this.keyPass = keyPass;
};

MerchantConfig.prototype.setKeysDirectory = function setKeysDirectory(keysDirectory) {
    this.keysDirectory = keysDirectory;
};

MerchantConfig.prototype.setMerchantKeyID = function setMerchantKeyID(merchantKeyId) {
    this.merchantKeyId = merchantKeyId;
};

MerchantConfig.prototype.setMerchantsecretKey = function setMerchantsecretKey(merchantsecretKey) {
    this.merchantsecretKey = merchantsecretKey;
};

MerchantConfig.prototype.setUseMetaKey = function setUseMetaKey(useMetaKey) {
    this.useMetaKey = useMetaKey;
};

MerchantConfig.prototype.setPortfolioID = function setPortfolioID(portfolioID) {
    this.portfolioID = portfolioID;
};

MerchantConfig.prototype.setEnableLog = function setEnableLog(enableLog) {
    this.enableLog = enableLog;
};

MerchantConfig.prototype.setLogDirectory = function setLogDirectory(logDirectory) {
    this.logDirectory = logDirectory;
};

MerchantConfig.prototype.setSolutionId = function setSolutionId(solutionId) {
    this.solutionId = solutionId;
};

MerchantConfig.prototype.setURL = function setURL(url) {
    this.url = url;
};

MerchantConfig.prototype.getMerchantID = function getMerchantID() {
    return this.merchantID;
};

MerchantConfig.prototype.getRequestHost = function getRequestHost() {
    return this.requestHost;
};

MerchantConfig.prototype.getKeyAlias = function getKeyAlias() {
    return this.keyAlias;
};

MerchantConfig.prototype.getKeyPass = function getKeyPass() {
    return this.keyPass;
};

MerchantConfig.prototype.getUseMetaKey = function getUseMetaKey() {
    return this.useMetaKey;
};

MerchantConfig.prototype.getPortfolioID = function getPortfolioID() {
    return this.portfolioID;
};

MerchantConfig.prototype.getKeysDirectory = function getKeysDirectory() {
    return this.keysDirectory;
};

MerchantConfig.prototype.getMerchantKeyID = function getMerchantKeyID() {
    return this.merchantKeyId;
};

MerchantConfig.prototype.getMerchantsecretKey = function getMerchantsecretKey() {
    return this.merchantsecretKey;
};

MerchantConfig.prototype.getEnableLog = function getEnableLog() {
    return this.enableLog;
};

MerchantConfig.prototype.getLogDirectory = function getLogDirectory() {
    return this.logDirectory;
};

MerchantConfig.prototype.getSolutionId = function getSolutionId() {
    return this.solutionId;
};

MerchantConfig.prototype.getURL = function getURL() {
    return this.url;
};

MerchantConfig.prototype.getLogFileMaxSize = function getLogFileMaxSize() {
    return this.logFileMaxSize;
};

MerchantConfig.prototype.setLogFileMaxSize = function setLogFileMaxSize(logFileMaxSize) {
    this.logFileMaxSize = logFileMaxSize;
};

MerchantConfig.prototype.getLogFileName = function getLogFileName() {
    return this.logFilename;
};

MerchantConfig.prototype.setLogFileName = function setLogFileName(logFilename) {
    this.logFilename = logFilename;
};

MerchantConfig.prototype.getLoggingLevel = function getLoggingLevel() {
    return this.loggingLevel;
};

MerchantConfig.prototype.setLoggingLevel = function setLoggingLevel(loggingLevel) {
    this.loggingLevel = loggingLevel;
};

MerchantConfig.prototype.getMaxLogFiles = function getMaxLogFiles() {
    return this.maxLogFiles;
};

MerchantConfig.prototype.setMaxLogFiles = function setMaxLogFiles(maxLogFiles) {
    this.maxLogFiles = maxLogFiles;
};

MerchantConfig.prototype.getRequestTarget = function getRequestTarget() {
    return this.requestTarget;
};

MerchantConfig.prototype.setRequestJsonData = function setRequestJsonData(requestJsonData) {
    this.requestJsonData = requestJsonData;
};

MerchantConfig.prototype.getRequestJsonData = function getRequestJsonData() {
    return this.requestJsonData;
};

MerchantConfig.prototype.setRequestTarget = function setRequestTarget(requestTarget) {
    this.requestTarget = requestTarget;
};

MerchantConfig.prototype.getRequestJsonPath = function getRequestJsonPath() {
    return this.requestJsonPath;
}

MerchantConfig.prototype.setRequestJsonPath = function setRequestJsonPath(requestJsonPath) {
    this.requestJsonPath = requestJsonPath;
}

MerchantConfig.prototype.getRequestType = function getRequestType() {
    return this.requestType;
}

MerchantConfig.prototype.setRequestType = function setRequestType(requestType) {
    this.requestType = requestType;
}

MerchantConfig.prototype.getRunEnvironment = function getRunEnvironment() {
    return this.runEnvironment;
}

MerchantConfig.prototype.setRunEnvironment = function setRunEnvironment(runEnvironment) {
    this.runEnvironment = runEnvironment;
}


MerchantConfig.prototype.getProxyAddress = function getProxyAddress() {
    return this.proxyAddress;
}

MerchantConfig.prototype.setProxyAddress = function setProxyAddress(proxyAddress) {
    this.proxyAddress = proxyAddress;
}

MerchantConfig.prototype.getProxyPort = function getProxyPort() {
    return this.proxyPort;
}

MerchantConfig.prototype.setProxyPort = function setProxyPort(proxyPort) {
    this.proxyPort = proxyPort;
}

MerchantConfig.prototype.getUseProxy = function getUseProxy() {
    return this.useProxy;
}

MerchantConfig.prototype.setUseProxy = function setUseProxy(useProxy) {
    this.useProxy = useProxy;
}

MerchantConfig.prototype.getProxyUser = function getProxyUser() {
    return this.proxyUser;
}

MerchantConfig.prototype.setProxyUser = function setProxyUser(proxyUser) {
    this.proxyUser = proxyUser;
}


MerchantConfig.prototype.getProxyPassword = function getProxyPassword() {
    return this.proxyPassword;
}

MerchantConfig.prototype.setProxyPassword = function setProxyPassword(proxyPassword) {
    this.proxyPassword = proxyPassword;
}

MerchantConfig.prototype.getKeyFileName = function getKeyFileName() {
    return this.keyFilename;
}

MerchantConfig.prototype.setKeyFileName = function setKeyFileName(keyFilename) {
    this.keyFilename = keyFilename;
}

MerchantConfig.prototype.runEnvironmentCheck = function runEnvironmentCheck(logger) {

    /*url*/
    if (this.runEnvironment === null || this.runEnvironment === "" || this.runEnvironment === undefined) {
        ApiException.ApiException(Constants.RUN_ENVIRONMENT_REQ, logger);
    }
    else {
        if (typeof (this.runEnvironment) !== "string") {
            this.runEnvironment = this.runEnvironment.toString();
        }
        if (this.runEnvironment.toLowerCase() === Constants.SANDBOX_RUN_ENV) {
            this.setRequestHost(Constants.SANDBOX_URL);
        } else if (this.runEnvironment.toLowerCase() === Constants.PRODUCTION_RUN_ENV) {
            this.setRequestHost(Constants.PRODUCTION_URL);
        } else if (this.runEnvironment.toLowerCase() === Constants.BOA_SANDBOX_RUN_ENV) {
            this.setRequestHost(Constants.BOA_SANDBOX_URL);
        } else if (this.runEnvironment.toLowerCase() === Constants.BOA_PRODUCTION_RUN_ENV) {
            this.setRequestHost(Constants.BOA_PRODUCTION_URL);
        } else if (this.runEnvironment.toLowerCase() === Constants.IDC_SANDBOX_RUN_ENV) {
            this.setRequestHost(Constants.IDC_SANDBOX_URL);
        } else if (this.runEnvironment.toLowerCase() === Constants.IDC_PRODUCTION_RUN_ENV) {
            this.setRequestHost(Constants.IDC_PRODUCTION_URL);
        } else {
            this.setRequestHost(this.runEnvironment);
        }
    }

}
//This method is for fallback 
MerchantConfig.prototype.defaultPropValues = function defaultPropValues() {

    var warningMessage = "";
    //fallback for missing values
    if (this.enableLog === null || this.enableLog === "" || this.enableLog === undefined) {
        this.enableLog = true;
    }
    else if (typeof (this.enableLog) !== "boolean") {
        this.enableLog = false;
    }

    if (this.logFileMaxSize === null || this.logFileMaxSize === "" || this.logFileMaxSize === undefined) {
        this.logFileMaxSize = Constants.DEFAULT_LOG_SIZE;
    }

    if (this.maxLogFiles === null || this.maxLogFiles === "" || this.maxLogFiles === undefined) {
        this.maxLogFiles = Constants.DEFAULT_MAX_LOG_FILES;
    }

    if (this.loggingLevel === null || this.loggingLevel === "" || this.loggingLevel === undefined) {
        this.loggingLevel = Constants.DEFAULT_LOGGING_LEVEL;
    }

    var fs = require('fs');
    var path = require('path');
    if (this.logDirectory === null || this.logDirectory === "" || this.logDirectory === undefined) {
        this.logDirectory = Constants.DEFAULT_LOG_DIRECTORY;
        if (!fs.existsSync(this.logDirectory) && this.enableLog === true) {
            fs.mkdir(path.resolve(this.logDirectory), function (err) {
                if (err)
                    throw err;
            })
        }
    }
    else if (!fs.existsSync(this.logDirectory)) {
        this.logDirectory = Constants.DEFAULT_LOG_DIRECTORY;
        warningMessage += Constants.INVALID_LOGDIRECTORY;
        if (!fs.existsSync(this.logDirectory) && this.enableLog === true) {
            fs.mkdir(path.resolve(this.logDirectory), function (err) {
                if (err)
                    throw err;
            })
        }
    }


    if (this.logFilename === null || this.logFilename === "" || this.logFilename === undefined) {
        this.logFilename = Constants.DEFAULT_LOG_FILENAME;
    }

    var logger = Logger.getLogger(this, 'MerchantConfig');
    logger.info(Constants.BEGIN_TRANSACTION);

    if (warningMessage.length > 0)
        logger.warn(warningMessage);

    this.runEnvironmentCheck(logger);

    // verifying mandatory properties
    if (this.merchantID === null || this.merchantID === "" || this.merchantID === undefined) {
        ApiException.ApiException(Constants.MERCHANTID_REQ, logger);
    }

    if (this.authenticationType === null || this.authenticationType === "" || this.authenticationType === undefined) {
        ApiException.ApiException(Constants.AUTHENTICATION_REQ, logger);
    }

    if (typeof (this.useMetaKey) !== "boolean") {
        this.useMetaKey = false;
    }
    else if(this.useMetaKey && (this.portfolioID === null || this.portfolioID === "" || this.portfolioID === undefined))
    {
        ApiException.ApiException(Constants.PORTFOLIO_ID_REQ, logger);
    }

    //authentication mechanism specific checks
    if (typeof (this.authenticationType) === "string") {
        if (this.authenticationType.toLowerCase() === Constants.HTTP) {
            if (this.merchantKeyId === null || this.merchantKeyId === "" || this.merchantKeyId === undefined) {
                ApiException.ApiException(Constants.MERCHANT_KEY_ID_REQ, logger);
            }
            else if (typeof (this.merchantID) !== "string") {
                this.merchantID = this.merchantID.toString();
            }

            if (this.merchantsecretKey === null || this.merchantsecretKey === "" || this.merchantsecretKey === undefined) {
                ApiException.ApiException(Constants.MERCHANT_SECRET_KEY_REQ, logger);
            }
            else if (typeof (this.merchantsecretKey) !== "string") {
                this.merchantsecretKey = this.merchantsecretKey.toString();
            }
        }

        else if (this.authenticationType.toLowerCase() === Constants.JWT) {
            if (this.keyAlias === null || this.keyAlias === "" || this.keyAlias === undefined) {
                this.keyAlias = this.merchantID;
                logger.warn(Constants.KEY_ALIAS_NULL_EMPTY);
            }
            else if (this.keyAlias !== this.merchantID) {
                this.keyAlias = this.merchantID;
                logger.warn(Constants.INCORRECT_KEY_ALIAS);
            }

            if (this.keyPass === null || this.keyPass === "" || this.keyPass === undefined) {
                this.keyPass = this.merchantID;
                logger.warn(Constants.KEY_PASS_EMPTY);
            }

            if (this.keysDirectory === null || this.keysDirectory === "" || this.keysDirectory === undefined) {
                this.keysDirectory = Constants.DEFAULT_KEYS_DIRECTORY;
                logger.warn(Constants.KEY_DIRECTORY_EMPTY);
            }

            if (this.keyFilename === null || this.keyFilename === "" || this.keyFilename === undefined) {
                this.keyFilename = this.merchantID;
                logger.warn(Constants.KEY_FILE_EMPTY);
            }
        }
        else {
            ApiException.ApiException(Constants.AUTH_ERROR, logger);
        }
    }
    else {
        ApiException.ApiException(Constants.AUTH_ERROR, logger);
    }

    /**
     * This method is to log all merchantConfic properties 
     * excluding HideMerchantConfigProperies defined in Constants
     * 
     * @param {*} merchantConfig 
     */
    MerchantConfig.prototype.getAllProperties = function getAllProperties(merchantConfig) {

        var hiddenProperties = Constants.HideMerchantConfigProps;
        var hiddenPropertiesArray = [];
        hiddenProperties.toString().split(',').forEach(function (each) {
            hiddenPropertiesArray.push(each.trim());
        });

        var merchantMap = new Map(Object.entries(merchantConfig));
        //iterating the merchantConfig Object 
        merchantMap.forEach(function (value, key) {
            hiddenPropertiesArray.forEach(function (hide) {
                if (key === hide) {
                    merchantMap.delete(key);
                }
            })
        });

        return merchantMap.toObject();
    }
    logger.clear();
}

module.exports = MerchantConfig;
