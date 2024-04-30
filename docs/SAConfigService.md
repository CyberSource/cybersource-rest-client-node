# CyberSource.SAConfigService

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**decisionManagerVerboseEnabled** | **Boolean** | Toggles whether verbose Decision Manager results should be present in the Secure Acceptance response. As this response passes through the browser, it is recommended to set this to \"false\" outside of debugging. | [optional] 
**declinedRetryLimit** | **Number** | Defines the number of retries a payer is presented with on payment declines on Hosted Checkout. Valid values are between 0 and 5. | [optional] 
**decisionManagerEnabled** | **Boolean** | Toggles whether Decision Manager is enabled or not for Secure Acceptance transactions. Requires the transacting MID to be enabled and configured for Decicion Manager. | [optional] 
**tokenizationEnabled** | **Boolean** | Toggles whether Tokenization is enabled or not for Secure Acceptance transactions. Requires the transacting MID to be enabled and configured for Tokenization. | [optional] 
**reverseAuthOnAddressVerificationSystemFailure** | **Boolean** | Toggles whether or not an approved Authorization that fails AVS should be automatically reversed. | [optional] 
**deviceFingerprintEnabled** | **Boolean** | Toggles whether or not fraud Device Fingerprinting is enabled on the Hosted Checkout. This simplifies enablement for Decision Manager. | [optional] 
**reverseAuthOnCardVerificationNumberFailure** | **Boolean** | Toggles whether or not an approved Authorization that fails CVN check that should be automatically reversed. | [optional] 


