'use strict';

/**
 * These are constant variables
 */
module.exports = {
    POST                              :  "post",
    GET                               :  "get",
    PUT                               :  "put",
    DELETE                            :  "delete",
    PATCH                             :  "patch",
    HTTP_URL_PREFIX                   :  "https://",
    HTTP                              :  "http_signature",
    JWT                               :  "jwt",
    OAUTH                             :  "oauth",
    MUTUAL_AUTH                       :  "mutual_auth",   
    V_C_MERCHANTID                    :  "v-c-merchant-id",
    DATE                              :  "date",
    HOST                              :  "host",
    SIGNATURE                         :  "Signature",
    USERAGENT                         :  "User-Agent",
    USER_AGENT_VALUE                  :  "Mozilla/5.0",
    CONTENT_TYPE                      :  "Content-Type",
    APPLICATION_JSON                  :  "application/json",
    V_C_CORRELATION_ID                :  "v-c-correlation-id",
    STATUS_INFORMATION                :  "Status Information",
    DIGEST                            :  "digest",
    REQUEST_TYPE                      :  "Request Type",

    OLD_RUN_ENVIRONMENT_CONSTANTS     :  ["CYBERSOURCE.ENVIRONMENT.SANDBOX", "CYBERSOURCE.ENVIRONMENT.PRODUCTION",
        "CYBERSOURCE.IN.ENVIRONMENT.SANDBOX", "CYBERSOURCE.IN.ENVIRONMENT.PRODUCTION"],

    /* Digest Constants*/
    SIGNATURE_ALGORITHAM              :  "SHA-256=",
    HmacSHA256                        :  "HmacSHA256",

    /* Logging Labels*/
    BEGIN_TRANSACTION                 :  "************************ LOGGING START ************************",
    END_TRANSACTION                   :  "************************  LOGGING END  ************************",
    MERCHANTID                        :  "MERCHANTID",
    MERCHANT_KEY_ID                   :  "MERCHANT_KEY_ID",
    MERCHANT_SECERT_KEY               :  "MERCHANT_SECERT_KEY",
    REQUEST_BODY                      :  "Request Body",
    RESPONSE_CODE                     :  "Response Code",
    RESPONSE_MESSAGE                  :  "Response Message",
    AUTHORIZATION                     :  "Authorization",
    HideMerchantConfigProps           :  "merchantID,merchantsecretKey,merchantKeyId,keyAlias,keyPass,requestJsonData",

    /* Masking list*/
    MASKING_DATA                      :  "expirationMonth, expirationYear, email,firstName, lastName, phoneNumber, number, securityCode, type",

    /* Exception labels */
    PROXY_PREFIX                      :  "https",
    FILE_NOT_FOUND                    :  "File not found, Re-Enter path/file name, Entered path/file name : ",
    AUTH_ERROR                        :  "Check Authentication Type (HTTP_Signature/JWT) in cybs.json.",
    KEY_ALIAS_NULL_EMPTY              :  "KeyAlias Empty/Null. Assigining merchantID value",
    REQUEST_JSON_ERROR                :  "Request Json File missing. File Path : ",
    KEY_FILE_EMPTY                    :  "KeyFileName is empty, Assigining merchantID value",
    REFER_LOG                         :  "Please refer Log for details",
    MERCHANTID_REQ                    :  "MerchantID is mandatory",
    INCORRECT_KEY_ALIAS               :  "The Entered key_alias is Incorrect, Assigining merchantID value",
    INCORRECT_KEY_PASS                :  "The Entered keyPass is Incorrect",
    AUTHENTICATION_REQ                :  "AuthenticationType is Mandatory",
    MERCHANT_KEY_ID_REQ               :  "MerchantKeyId is Mandatory",
    PORTFOLIO_ID_REQ                  :  "PortfolioID is Mandatory",
    RUN_ENVIRONMENT_REQ               :  "RunEnvironment is Mandatory",
    MERCHANT_SECRET_KEY_REQ           :  "MerchantSecretKey is Mandatory",
    KEY_PASS_EMPTY                    :  "KeyPass Empty/Null. Assigining merchantID value",
    KEY_DIRECTORY_EMPTY               :  "KeysDirectory not provided. Using Default Path : ",
    REQUEST_JSON_EMPTY                :  "RequestJsonPath not provided",
    INVALID_LOGDIRECTORY              :  "Entered log directory does not exists. Taking default log directory ./log",
    INVALID_REQUEST_TYPE_METHOD       :  "Entered Request Type should be (GET/POST/PUT/DELETE)",
    DEPRECATED_RUN_ENVIRONMENT        :  "The value provided for this field `RunEnvironment` has been deprecated and will not be used anymore.\n\nPlease refer to the README file [ https://github.com/CyberSource/cybersource-rest-samples-node/blob/master/README.md ] for information about the new values that are accepted.",
    ENABLE_CLIENT_CERT_EMPTY          :  "Enable Clientcert is Empty/Null",
    CLIENT_CERT_DIR_EMPTY             :  "Client Cert Directory is Empty/Null",
    SSL_CLIENT_CERT_EMPTY             :  "SSL Client Cert is Empty/Null",
    PRIVATE_KEY_EMPTY                 :  "Private Key is Empty/Null",
    CLIENT_ID_EMPTY                   :  "Client Id is Empty/Null",
    CLIENT_SECRET_EMPTY               :  "Client Secret is Empty/Null",
    ACCESS_TOKEN_EMPTY                :  "AccessToken is Empty/Null",
    REFRESH_TOKEN_EMPTY               :  "RefreshToken is Empty/Null",
    /*Fall back default values*/

    DEFAULT_LOG_SIZE                  :  "10485760", //10 MB
    DEFAULT_PROXY_ADDRESS             :  "userproxy.visa.com",
    DEFAULT_PROXY_PORT                :  "443",
    DEFAULT_TIMEOUT                   :  1000, //1000 milliseconds
    DEFAULT_LOG_DIRECTORY             :  "./log",
    DEFAULT_KEYS_DIRECTORY            :  "resource",
    DEFAULT_LOG_FILENAME              :  "cybs",
    DEFAULT_MAX_LOG_FILES             :  "10d",
    DEFAULT_LOGGING_LEVEL             :  "error",

    STATUS200                         :  "Transaction Successful",
    STATUS400                         :  "Bad Request",
    STATUS401                         :  "Authentication Failed",
    STATUS403                         :  "Forbidden",
    STATUS404                         :  "URL not found",
    STATUS500                         :  "Internal Server Error",
    STATUS502                         :  "Bad Gateway",
    STATUS503                         :  "Service Unavailable",
    STATUS504                         :  "Gateway Timeout"
};