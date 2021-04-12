var crypto = require('crypto');
const Constants = require('../util/Constants');
var DigestGenerator = require('../payloadDigest/DigestGenerator');

/* This function returns value for paramter Signature which is then passed to Signature header
         * paramter 'Signature' is calucated based on below key values and then signed with 
         * SECRET KEY -
         * host: Sandbox (apitest.cybersource.com) or Production (api.cybersource.com) hostname
         * date: 'HTTP-date' format as defined by RFC7231.
         * (request-target): Should be in format of httpMethod: path
                             Example: 'post /pts/v2/payments'
         * Digest: Only needed for POST calls.
                    digestString = BASE64( HMAC-SHA256 ( Payload ));
                    Digest: “SHA-256=“ + digestString;
         * v-c-merchant-id: set value to Cybersource Merchant ID
                             This ID can be found on EBC portal*/
exports.getSignatureParameter = function (merchantConfig, logger) {


    var signatureString = Constants.HOST + ': ' + merchantConfig.getRequestHost();

    signatureString += '\n' + Constants.DATE + ': ' + new Date(Date.now()).toUTCString();
    signatureString += '\n(request-target): ';

    var requestType = merchantConfig.getRequestType().toLowerCase();

    if (requestType === Constants.GET) {
        var targetUrlForGet = Constants.GET + ' '
            + merchantConfig.getRequestTarget();
        signatureString += targetUrlForGet + '\n';
    }
    else if (requestType === Constants.DELETE) {
        var targetUrlForDelete = Constants.DELETE + ' '
            + merchantConfig.getRequestTarget();
        signatureString += targetUrlForDelete + '\n';
    }

    else if (requestType === Constants.POST
        || requestType === Constants.PUT
        || requestType === Constants.PATCH) {
        // Digest for PUT, POST, and PATCH calls
        var digest = DigestGenerator.generateDigest(merchantConfig, logger);

        if (requestType === Constants.POST) {

            var targetUrlForPost = Constants.POST + ' '
                + merchantConfig.getRequestTarget();
            signatureString += targetUrlForPost + '\n';
        }
        else if (requestType === Constants.PUT) {
            var targetUrlForPut = Constants.PUT + ' '
                + merchantConfig.getRequestTarget();
            signatureString += targetUrlForPut + '\n';
        }
        
        else if (requestType === Constants.PATCH) {
            var targetUrlForPatch = Constants.PATCH + ' '
                + merchantConfig.getRequestTarget();
            signatureString += targetUrlForPatch + '\n';
        }

        signatureString += Constants.DIGEST + ': '
            + Constants.SIGNATURE_ALGORITHAM + digest + '\n';
    }
    
    if(merchantConfig.getUseMetaKey())
    {
        signatureString += Constants.V_C_MERCHANTID + ': ' + merchantConfig.getPortfolioID();
    }
    else
    {
        signatureString += Constants.V_C_MERCHANTID + ': ' + merchantConfig.getMerchantID();
    }    
    var data = new Buffer(signatureString, 'utf8');
    /*        Decoding scecret key        */
    var key = new Buffer(merchantConfig.getMerchantsecretKey(), 'base64');
    var base64EncodedSignature = crypto.createHmac('sha256', key)
        .update(data)
        .digest('base64');
    return base64EncodedSignature;
};
