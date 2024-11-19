'use strict'

const inclusionList = [
    'module:model/CapturePaymentRequest',
    'module:model/CreateCreditRequest',
    'module:model/AddNegativeListRequest',
    'module:model/CreateBundledDecisionManagerCaseRequest',
    'module:model/FraudMarkingActionRequest',
    'module:model/CheckPayerAuthEnrollmentRequest',
    'module:model/PayerAuthSetupRequest',
    'module:model/ValidateRequest',
    'module:model/CreatePaymentRequest',
    'module:model/IncrementAuthRequest',
    'module:model/CreatePlanRequest',
    'module:model/RefundCaptureRequest',
    'module:model/RefundPaymentRequest',
    'module:model/AuthReversalRequest',
    'module:model/MitReversalRequest',
    'module:model/CreateSubscriptionRequest',
    'module:model/UpdateSubscription',
    'module:model/TaxRequest',
    'module:model/VoidTaxRequest',
    'module:model/ValidateExportComplianceRequest',
    'module:model/VerifyCustomerAddressRequest',
    'module:model/MitVoidRequest',
    'module:model/VoidCaptureRequest',
    'module:model/VoidCreditRequest',
    'module:model/VoidPaymentRequest',
    'module:model/VoidRefundRequest'
];

function SdkTracker() {}

SdkTracker.prototype.insertDeveloperIdTracker = function insertDeveloperIdTracker(requestObj, requestClass, runEnvironment, defaultDeveloperId) {
    if (inclusionList.includes(requestClass)) {
        var developerIdValue = '';

        if (runEnvironment == 'apitest.cybersource.com') {
            developerIdValue = 'N2RC3Q4K';
        } else {
            developerIdValue = 'FS39X8Q7';
        }

        if (defaultDeveloperId !== null && defaultDeveloperId !== undefined && defaultDeveloperId.trim() !== "") {
            developerIdValue=defaultDeveloperId.trim();
        }

        if (requestObj.clientReferenceInformation == undefined) {
            requestObj.clientReferenceInformation = {};
        }

        if (requestObj.clientReferenceInformation.partner == undefined) {
            requestObj.clientReferenceInformation.partner = {};
        }

        if (!requestObj.clientReferenceInformation.partner.developerId) {
            requestObj.clientReferenceInformation.partner.developerId = developerIdValue;
        }
    }

    return requestObj;
}

module.exports = SdkTracker;
