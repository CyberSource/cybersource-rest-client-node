'use strict';

var Constants = require('../util/Constants');
var SignatureParameterGenerator = require('./SignatureParameterGenerator');
var ApiException = require('../util/ApiException');

/* HttpSigToken return SignatureHeader Value that contains following paramters
 * keyid     -- Merchant ID obtained from EBC portal
 * algorithm -- Should have value as "HmacSHA256"
 * headers   -- List of all header name passed in the Signature paramter below
                String getHeaders = "host date (request-target)" + " " + "v-c-merchant-id";
                String postHeaders = "host date (request-target) digest v-c-merchant-id";
                Note: Digest is not passed for GET calls
 * signature -- Signature header has paramter called signature
                Paramter 'Signature' must contain all the paramters mentioned in header above in given order  */

exports.getToken = function (merchantConfig, logger) {
    var signatureHeader = "";
    var signatureValue = "";
    var requestType = merchantConfig.getRequestType().toLowerCase();

    try {
        /* KeyId is the key obtained from EBC */
        signatureHeader += "keyid=\"" + merchantConfig.getMerchantKeyID() + "\"";

        /* Algorithm should be always HmacSHA256 for http signature */
        signatureHeader += ", algorithm=\"" + Constants.HmacSHA256 + "\"";

        /* Headers - list is choosen based on HTTP method. Digest is not required for GET Method */
        if (requestType === Constants.GET || requestType === Constants.DELETE) {
            var headersForGetMethod = "host date (request-target)" + " " + Constants.V_C_MERCHANTID;
            signatureHeader += ", headers=\"" + headersForGetMethod + "\"";
        }
        else if (requestType === Constants.POST || requestType === Constants.PUT) {
            var headersForPostPutMethod = "host date (request-target) digest " + Constants.V_C_MERCHANTID;
            signatureHeader += ", headers=\"" + headersForPostPutMethod + "\"";
        }
        // for patch call, added on 26-10-18
        else if (requestType === Constants.PATCH) {
            var headersForPatchMethod = "host date (request-target) digest " + Constants.V_C_MERCHANTID;
            signatureHeader += ", headers=\"" + headersForPatchMethod + "\"";
        }
        else {
            ApiException.ApiException(Constants.INVALID_REQUEST_TYPE_METHOD, logger);
        }

        /* Get Value for paramter 'Signature' to be passed to Signature Header */
        signatureValue = SignatureParameterGenerator.getSignatureParameter(merchantConfig, logger);
        signatureHeader += ", signature=\"" + signatureValue + "\"";
        logger.info("signatureHeader : " + signatureHeader);
        return signatureHeader;
    } catch (err) {
        logger.error(err.stack);
    }

};