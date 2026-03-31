# CyberSource.Ptsv1pullfundstransferSenderInformationPaymentInformationTokenizedCard

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cryptogram** | **String** | This field contains token cryptogram information | [optional] 
**expirationMonth** | **String** | One of two possible meanings:  The two-digit month in which a token expires. The two-digit month in which a card expires.   Format: `MM`   Possible values: 01 through 12  | [optional] 
**expirationYear** | **String** | One of two possible meanings:  The four-digit year in which a token expires. The four-digit year in which a card expires.   Format: `YYYY`   Possible values: 1900 through 3000   Data type: Non-negative integer  | [optional] 
**_number** | **String** | Customer's payment network token value.  | [optional] 
**securityCode** | **String** | Card Verification Number (CVN).  | [optional] 
**type** | **String** | Three-digit value that indicates the card type. Mandatory if not present in a token.  Possible values:  - `001`: Visa - `002`: Mastercard, Eurocard, which is a European regional brand of Mastercard. - `033`: Visa Electron - `024`: Maestro  | [optional] 


