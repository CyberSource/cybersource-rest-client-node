'use strict';

var Constants = require('../util/Constants');
var Logger = require('../logging/Logger');
var ApiException = require('../util/ApiException');
var LogConfiguration = require('../logging/LogConfiguration');
var path = require('path');
var fs = require('fs');
var path = require('path');
var fs = require('fs');

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

    this.sslCaCert = result.sslCaCert;
    this.disableSSLVerification = result.disableSSLVerification;

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

    /* Intermediate Host */
    this.intermediateHost = result.intermediateHost;

    this.defaultDeveloperId = result.defaultDeveloperId;

    this.pemFileDirectory = result.pemFileDirectory;

    this.solutionId = result.solutionId;

    this.logConfiguration = new LogConfiguration(result.logConfiguration);

    /* Default Custom Headers */
    this.defaultHeaders = result.defaultHeaders;

    /* MLE Feature */
    this.useMLEGlobally = result.useMLEGlobally;
    this.enableRequestMLEForOptionalApisGlobally = result.enableRequestMLEForOptionalApisGlobally !== undefined ? result.enableRequestMLEForOptionalApisGlobally : this.useMLEGlobally;
    this.disableRequestMLEForMandatoryApisGlobally = result.disableRequestMLEForMandatoryApisGlobally !== undefined ? result.disableRequestMLEForMandatoryApisGlobally : false;

    this.mapToControlMLEonAPI = result.mapToControlMLEonAPI;
    this.mleKeyAlias = result.mleKeyAlias; //mleKeyAlias is optional parameter, default value is "CyberSource_SJC_US".
    this.mleForRequestPublicCertPath = result.mleForRequestPublicCertPath;

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

MerchantConfig.prototype.getIntermediateHost = function getIntermediateHost() {
    return this.intermediateHost;
}

MerchantConfig.prototype.setIntermediateHost = function setIntermediateHost(intermediateHost) {
    this.intermediateHost = intermediateHost;
}

MerchantConfig.prototype.getDefaultDeveloperId = function getDefaultDeveloperId() {
    return this.defaultDeveloperId;
}

MerchantConfig.prototype.setDefaultDeveloperId = function setDefaultDeveloperId(defaultDeveloperId) {
    this.defaultDeveloperId = defaultDeveloperId;
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

MerchantConfig.prototype.getSslCaCert = function getSslCaCert() {
    return this.sslCaCert;
}

MerchantConfig.prototype.setSslCaCert = function setSslCaCert(sslCaCert) {
    this.sslCaCert = sslCaCert;
}

MerchantConfig.prototype.getDisableSSLVerification = function getDisableSSLVerification() {
    return this.disableSSLVerification;
}

MerchantConfig.prototype.setDisableSSLVerification = function setDisableSSLVerification(disableSSLVerification) {
    this.disableSSLVerification = disableSSLVerification;
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

MerchantConfig.prototype.getDefaultHeaders = function getDefaultHeaders() {
    return this.defaultHeaders;
}

MerchantConfig.prototype.setDefaultHeaders = function setDefaultHeaders(defaultHeaders) {
    return this.defaultHeaders;
}

MerchantConfig.prototype.getpemFileDirectory = function getpemFileDirectory() {
    return this.pemFileDirectory;
}

MerchantConfig.prototype.setpemFileDirectory = function getpemFileDirectory(pemFileDirectory) {
    this.pemFileDirectory = pemFileDirectory;
}

MerchantConfig.prototype.getUseMLEGlobally = function getUseMLEGlobally() {
    return this.useMLEGlobally;
}

MerchantConfig.prototype.setUseMLEGlobally = function setUseMLEGlobally(useMLEGlobally) {
    this.useMLEGlobally = useMLEGlobally;
    // If enableRequestMLEForOptionalApisGlobally is not set, set it to useMLEGlobally
    if (this.enableRequestMLEForOptionalApisGlobally === undefined) {
        this.enableRequestMLEForOptionalApisGlobally = useMLEGlobally;
    }
    // If it is set but has a different value, throw an exception
    else if (this.enableRequestMLEForOptionalApisGlobally !== useMLEGlobally) {
        var logger = Logger.getLogger(this, 'MerchantConfig');
        ApiException.ApiException("enableRequestMLEForOptionalApisGlobally and useMLEGlobally must have the same value if both are provided.", logger);
    }
}

MerchantConfig.prototype.getEnableRequestMLEForOptionalApisGlobally = function getEnableRequestMLEForOptionalApisGlobally() {
    return this.enableRequestMLEForOptionalApisGlobally;
}

MerchantConfig.prototype.setEnableRequestMLEForOptionalApisGlobally = function setEnableRequestMLEForOptionalApisGlobally(enableRequestMLEForOptionalApisGlobally) {
    this.enableRequestMLEForOptionalApisGlobally = enableRequestMLEForOptionalApisGlobally;
    // If it is set but has a different value, throw an exception
    if (this.useMLEGlobally !== undefined && (this.useMLEGlobally !== enableRequestMLEForOptionalApisGlobally)) {
        var logger = Logger.getLogger(this, 'MerchantConfig');
        ApiException.ApiException("enableRequestMLEForOptionalApisGlobally and useMLEGlobally must have the same value if both are provided.", logger);
    }
}

MerchantConfig.prototype.getDisableRequestMLEForMandatoryApisGlobally = function getDisableRequestMLEForMandatoryApisGlobally() {
    return this.disableRequestMLEForMandatoryApisGlobally;
}

MerchantConfig.prototype.setDisableRequestMLEForMandatoryApisGlobally = function setDisableRequestMLEForMandatoryApisGlobally(disableRequestMLEForMandatoryApisGlobally) {
    this.disableRequestMLEForMandatoryApisGlobally = disableRequestMLEForMandatoryApisGlobally;
}

MerchantConfig.prototype.getMapToControlMLEonAPI = function getMapToControlMLEonAPI() {
    return this.mapToControlMLEonAPI;
}

MerchantConfig.prototype.setMapToControlMLEonAPI = function setMapToControlMLEonAPI(mapToControlMLEonAPI) {
    this.mapToControlMLEonAPI = mapToControlMLEonAPI;
}

MerchantConfig.prototype.getMleKeyAlias = function getMleKeyAlias() {
    return this.mleKeyAlias;
}

MerchantConfig.prototype.setMleKeyAlias = function setMleKeyAlias(mleKeyAlias) {
    this.mleKeyAlias = mleKeyAlias;
}

MerchantConfig.prototype.getMleForRequestPublicCertPath = function getMleForRequestPublicCertPath() {
    return this.mleForRequestPublicCertPath;
}

MerchantConfig.prototype.setMleForRequestPublicCertPath = function setMleForRequestPublicCertPath(mleForRequestPublicCertPath) {
    this.mleForRequestPublicCertPath = mleForRequestPublicCertPath;
}

MerchantConfig.prototype.getP12FilePath = function getP12FilePath() {
    return path.resolve(path.join(this.getKeysDirectory(), this.getKeyFileName() + '.p12'));
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
    else if (this.useMetaKey && (this.portfolioID === null || this.portfolioID === "" || this.portfolioID === undefined))
    {
        ApiException.ApiException(Constants.PORTFOLIO_ID_REQ, logger);
    }

    if (typeof (this.disableSSLVerification) !== "boolean") {
        this.disableSSLVerification = false;
    } else if (this.disableSSLVerification) {
        logger.warn("SSL Verification has been disabled. This is NOT advised. DO NOT USE THIS CODE IN PRODUCTION.");
    }

    if (typeof (this.enableClientCert) !== "boolean") {
        this.enableClientCert = false;
    }
    else if (this.enableClientCert)
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

        if (!(fs.existsSync(keyFile) && fs.existsSync(certFile)))
        {
            ApiException.ApiException(Constants.FILE_NOT_FOUND, logger);
        }

        if (this.sslCaCert) {
            var sslCaCert = path.resolve(this.sslCaCert);

            if (!fs.existsSync(sslCaCert)) {
                ApiException.ApiException(Constants.FILE_NOT_FOUND, logger);
            }
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
            try {
                fs.accessSync(this.getP12FilePath(), fs.constants.R_OK);
            } catch (err) {
                ApiException.ApiException("Merchant p12 certificate file not found or not readable: " + this.getP12FilePath());
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

    //set the MLE key alias either from merchant config or default value
    if (!this.mleKeyAlias || !this.mleKeyAlias.trim()) {
        this.mleKeyAlias = Constants.DEFAULT_MLE_ALIAS_FOR_CERT;
    }

    if (
        this.enableRequestMLEForOptionalApisGlobally !== undefined &&
        this.useMLEGlobally !== undefined &&
        this.enableRequestMLEForOptionalApisGlobally !== this.useMLEGlobally
    ) {
        ApiException.ApiException("enableRequestMLEForOptionalApisGlobally and useMLEGlobally must have the same value if both are provided.", logger);
    }

    //useMLEGlobally check for auth Type
    if (this.enableRequestMLEForOptionalApisGlobally === true || this.mapToControlMLEonAPI != null) {
        if (this.enableRequestMLEForOptionalApisGlobally === true && this.authenticationType.toLowerCase() !== Constants.JWT) {
            ApiException.ApiException("Request MLE is only supported in JWT auth type", logger);
        }

        if (this.mapToControlMLEonAPI != null && typeof (this.mapToControlMLEonAPI) !== "object") {
            ApiException.ApiException("mapToControlMLEonAPI in merchantConfig should be key value pair", logger);
        }

        if (this.mapToControlMLEonAPI != null && Object.keys(this.mapToControlMLEonAPI).length !== 0) {
            var hasTrueValue = false;
            for (const[key, value] of Object.entries(this.mapToControlMLEonAPI)) {
                if (value === true) {
                    hasTrueValue = true;
                    break;
                }
            }
            if (hasTrueValue && this.authenticationType.toLowerCase() !== Constants.JWT) {
                ApiException.ApiException("Request MLE is only supported in JWT auth type", logger);
            }
        }
    }
    if (this.mleForRequestPublicCertPath) {
    // First check if the file exists and is readable
        try {
            fs.accessSync(this.mleForRequestPublicCertPath, fs.constants.R_OK);
        } catch (err) {
            const errorType = err.code === 'ENOENT' ? 'does not exist' : 'is not readable';
            ApiException.ApiException(`mleForRequestPublicCertPath file ${errorType}: ${this.mleForRequestPublicCertPath} (${err.message})`, logger);
        }

        let stats;
        try {
            stats = fs.statSync(this.mleForRequestPublicCertPath);
        } catch (err) {
            ApiException.ApiException(`Error checking file stats for mleForRequestPublicCertPath: ${this.mleForRequestPublicCertPath} (${err.message})`, logger);
        }

        // Check if it's a file
        if (stats.isFile() === false) {
            ApiException.ApiException(`mleForRequestPublicCertPath is not a file: ${this.mleForRequestPublicCertPath}`, logger);
        }
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

        const filteredMerchantConfig = {};
        for (key in merchantConfig) {
            if (!hiddenPropertiesArray.includes(key)) {
                filteredMerchantConfig[key] = merchantConfig[key];
            }
        }

        return filteredMerchantConfig;
    }
    if (!this.logConfiguration.isExternalLoggerSet) {
        logger.clear();
    }
}

module.exports = MerchantConfig;
