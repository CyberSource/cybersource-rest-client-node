# CyberSource.PtsV2PaymentsPost201ResponseProcessingInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bankTransferOptions** | [**PtsV2PaymentsPost201ResponseProcessingInformationBankTransferOptions**](PtsV2PaymentsPost201ResponseProcessingInformationBankTransferOptions.md) |  | [optional] 
**paymentSolution** | **String** | Type of digital payment solution for the transaction. Possible Values:   - `visacheckout`: Visa Checkout. This value is required for Visa Checkout transactions. For details, see `payment_solution` field description in [Visa Checkout Using the REST API.](https://developer.cybersource.com/content/dam/docs/cybs/en-us/apifields/reference/all/rest/api-fields.pdf)  - `001`: Apple Pay.  - `004`: Cybersource In-App Solution.  - `005`: Masterpass. This value is required for Masterpass transactions on OmniPay Direct.   - `006`: Android Pay.  - `007`: Chase Pay.  - `008`: Samsung Pay.  - `012`: Google Pay.  - `013`: Cybersource P2PE Decryption  - `014`: Mastercard credential on file (COF) payment network token. Returned in authorizations that use a payment network token associated with a TMS token.  - `015`: Visa credential on file (COF) payment network token. Returned in authorizations that use a payment network token associated with a TMS token.  - `027`: Click to Pay.  | [optional] 
**enhancedDataEnabled** | **Boolean** | The possible values for the reply field are: - `true` : the airline data was included in the request to the processor. - `false` : the airline data was not included in the request to the processor.  Returned by authorization, capture, or credit services.  | [optional] 
**captureOptions** | [**PtsV2PaymentsPost201ResponseProcessingInformationCaptureOptions**](PtsV2PaymentsPost201ResponseProcessingInformationCaptureOptions.md) |  | [optional] 
**authorizationOptions** | [**PtsV2PaymentsPost201ResponseProcessingInformationAuthorizationOptions**](PtsV2PaymentsPost201ResponseProcessingInformationAuthorizationOptions.md) |  | [optional] 
**purchaseOptions** | [**PtsV2PaymentsPost201ResponseProcessingInformationPurchaseOptions**](PtsV2PaymentsPost201ResponseProcessingInformationPurchaseOptions.md) |  | [optional] 


