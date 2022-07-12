'use strict';

var Constants = require('../util/Constants');
var Logger = require('../logging/Logger');
var Map = require('collections/map');
var ApiException = require('../util/ApiException');
var LogConfiguration = require('../logging/LogConfiguration');

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

    /* JWT Parameters*/
    this.keysDirectory = result.keysDirectory;
    this.keyAlias = result.keyAlias;
    this.keyPass = result.keyPass;
    this.keyType;
    this.keyFilename = result.keyFileName;
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

    /* MutualAuth Parameters */
    this.enableClientCert = result.enableClientCert;
    this.clientCertDir = result.clientCertDir;
    this.sslClientCert = result.sslClientCert;
    this.privateKey = result.privateKey;

    /* OAuth Parameters */
    this.clientId = result.clientId;
    this.clientSecret = result.clientSecret;
    this.accessToken = result.accessToken;
    this.refreshToken = result.refreshToken;

    this.runEnvironment = result.runEnvironment;

    this.solutionId = result.solutionId;

    this.logConfiguration = new LogConfiguration(result.logConfiguration);

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

MerchantConfig.prototype.setEnableClientCert = function setEnableClientCert(enableClientCert) {
    this.enableClientCert = enableClientCert;
};

MerchantConfig.prototype.setClientCertDir = function setClientCertDir(clientCertDir) {
    this.clientCertDir = clientCertDir;
};

MerchantConfig.prototype.setSSLClientCert = function setSSLClientCert(sslClientCert) {
    this.sslClientCert = sslClientCert;
};

MerchantConfig.prototype.setPrivateKey = function setPrivateKey(privateKey) {
    this.privateKey = privateKey;
};

MerchantConfig.prototype.setClientId = function setClientId(clientId) {
    this.clientId = clientId;
};

MerchantConfig.prototype.setClientSecret = function setClientSecret(clientSecret) {
    this.clientSecret = clientSecret;
};

MerchantConfig.prototype.setAccessToken = function setAccessToken(accessToken) {
    this.accessToken = accessToken;
};

MerchantConfig.prototype.setRefreshToken = function setRefreshToken(refreshToken) {
    this.refreshToken = refreshToken;
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

MerchantConfig.prototype.getEnableClientCert = function getEnableClientCert() {
    return this.enableClientCert;
};

MerchantConfig.prototype.getClientCertDir = function getClientCertDir() {
    return this.clientCertDir;
};

MerchantConfig.prototype.getSSLClientCert = function getSSLClientCert() {
    return this.sslClientCert;
};

MerchantConfig.prototype.getPrivateKey = function getPrivateKey() {
    return this.privateKey;
};

MerchantConfig.prototype.getClientId = function getClientId() {
    return this.clientId;
};

MerchantConfig.prototype.getClientSecret = function getClientSecret() {
    return this.clientSecret;
};

MerchantConfig.prototype.getAccessToken = function getAccessToken() {
    return this.accessToken;
};

MerchantConfig.prototype.getRefreshToken = function getRefreshToken() {
    return this.refreshToken;
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

MerchantConfig.prototype.getSolutionId = function getSolutionId() {
    return this.solutionId;
};

MerchantConfig.prototype.getURL = function getURL() {
    return this.url;
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

MerchantConfig.prototype.getLogConfiguration = function getLogConfiguration() {
    return this.logConfiguration;
}

MerchantConfig.prototype.setLogConfiguration = function setLogConfiguration(logConfig) {
    this.logConfiguration = new LogConfiguration(logConfig);
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

        if (Constants.OLD_RUN_ENVIRONMENT_CONSTANTS.includes(this.runEnvironment.toUpperCase())) {
            ApiException.ApiException(Constants.DEPRECATED_RUN_ENVIRONMENT, logger);
        }

        this.setRequestHost(this.runEnvironment);
    }

}
//This method is for fallback 
MerchantConfig.prototype.defaultPropValues = function defaultPropValues() {

    var warningMessage = "";
    //fallback for missing values
    this.logConfiguration.getDefaultLoggingProperties(warningMessage);

    var logger = Logger.getLogger(this, 'MerchantConfig');
    logger.info(Constants.BEGIN_TRANSACTION);

    if (warningMessage.length > 0)
        logger.warn(warningMessage);

    this.runEnvironmentCheck(logger);

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

    if (typeof (this.enableClientCert) !== "boolean") {
        this.enableClientCert = false;
    }
    else if(this.enableClientCert)
    {
        if (this.clientCertDir === null || this.clientCertDir === "" || this.clientCertDir === undefined) {
            ApiException.ApiException(Constants.CLIENT_CERT_DIR_EMPTY, logger);
        }
        else if (typeof (this.clientCertDir) !== "string") {
            this.clientCertDir = this.clientCertDir.toString();
        }
        if (this.sslClientCert === null || this.sslClientCert === "" || this.sslClientCert === undefined) {
            ApiException.ApiException(Constants.SSL_CLIENT_CERT_EMPTY, logger);
        }
        else if (typeof (this.sslClientCert) !== "string") {
            this.sslClientCert = this.sslClientCert.toString();
        }
        if (this.privateKey === null || this.privateKey === "" || this.privateKey === undefined) {
            ApiException.ApiException(Constants.PRIVATE_KEY_EMPTY, logger);
        }
        else if (typeof (this.privateKey) !== "string") {
            this.privateKey = this.privateKey.toString();
        }
        
        var certFile = path.resolve(path.join(this.clientCertDir, this.sslClientCert));
        var keyFile = path.resolve(path.join(this.clientCertDir, this.privateKey));

        if(!(fs.existsSync(keyFile) && fs.existsSync(certFile)))
        {
            ApiException.ApiException(Constants.FILE_NOT_FOUND, logger);
        }
    }


    //authentication mechanism specific checks
    if (typeof (this.authenticationType) === "string") {
        if (this.authenticationType.toLowerCase() === Constants.HTTP) {
            // verifying mandatory properties
            if (this.merchantID === null || this.merchantID === "" || this.merchantID === undefined) {
                ApiException.ApiException(Constants.MERCHANTID_REQ, logger);
            }
            else if (typeof (this.merchantID) !== "string") {
                this.merchantID = this.merchantID.toString();
            }
            if (this.merchantKeyId === null || this.merchantKeyId === "" || this.merchantKeyId === undefined) {
                ApiException.ApiException(Constants.MERCHANT_KEY_ID_REQ, logger);
            }
            else if (typeof (this.merchantKeyId) !== "string") {
                this.merchantKeyId = this.merchantKeyId.toString();
            }

            if (this.merchantsecretKey === null || this.merchantsecretKey === "" || this.merchantsecretKey === undefined) {
                ApiException.ApiException(Constants.MERCHANT_SECRET_KEY_REQ, logger);
            }
            else if (typeof (this.merchantsecretKey) !== "string") {
                this.merchantsecretKey = this.merchantsecretKey.toString();
            }
        }

        else if (this.authenticationType.toLowerCase() === Constants.JWT) {
            if (this.merchantID === null || this.merchantID === "" || this.merchantID === undefined) {
                ApiException.ApiException(Constants.MERCHANTID_REQ, logger);
            }
            else if (typeof (this.merchantID) !== "string") {
                this.merchantID = this.merchantID.toString();
            }
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
        else if (this.authenticationType.toLowerCase() === Constants.OAUTH)
        {
            if (this.accessToken === null || this.accessToken === "" || this.accessToken === undefined) {
                ApiException.ApiException(Constants.ACCESS_TOKEN_EMPTY, logger);
            }
            else if (typeof (this.accessToken) !== "string") {
                this.accessToken = this.accessToken.toString();
            }
            if (this.refreshToken === null || this.refreshToken === "" || this.refreshToken === undefined) {
                ApiException.ApiException(Constants.REFRESH_TOKEN_EMPTY, logger);
            }
            else if (typeof (this.refreshToken) !== "string") {
                this.refreshToken = this.refreshToken.toString();
            }
        }
        else if (this.authenticationType.toLowerCase() === Constants.MUTUAL_AUTH && this.enableClientCert)
        {
            if (this.clientId === null || this.clientId === "" || this.clientId === undefined) {
                ApiException.ApiException(Constants.CLIENT_ID_EMPTY, logger);
            }
            else if (typeof (this.clientId) !== "string") {
                this.clientId = this.clientId.toString();
            }
            if (this.clientSecret === null || this.clientSecret === "" || this.clientSecret === undefined) {
                ApiException.ApiException(Constants.CLIENT_SECRET_EMPTY, logger);
            }
            else if (typeof (this.clientSecret) !== "string") {
                this.clientSecret = this.clientSecret.toString();
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
    if(!this.logConfiguration.isExternalLoggerSet){
        logger.clear();
    }
}

module.exports = MerchantConfig;
