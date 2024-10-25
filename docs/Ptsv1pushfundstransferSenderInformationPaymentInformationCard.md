# CyberSource.Ptsv1pushfundstransferSenderInformationPaymentInformationCard

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Three-digit value that indicates the card type.  IMPORTANT It is strongly recommended that you include the card type field in request messages even if it is optional for your processor and card type. Omitting the card type can cause the transaction to be processed with the wrong card type.  Possible values: - `001`: Visa. For card-present transactions on all processors except SIX, the Visa Electron card type is processed the same way that the Visa debit card is processed. Use card type value 001 for Visa Electron. - `002`: Mastercard, Eurocard[^1], which is a European regional brand of Mastercard. - `033`: Visa Electron - `024`: Maestro - `042`: Maestro International  | [optional] 
**securityCode** | **String** | 3-digit value that indicates the card Cvv2Value. Values can be 0-9.  | [optional] 
**sourceAccountType** | **String** | Flag that specifies the type of account associated with the card. The cardholder provides this information during the payment process.  | [optional] 
**_number** | **String** | The customer's payment card number, also known as the Primary Account Number (PAN).  | [optional] 
**expirationMonth** | **String** | Two-digit month in which the payment card expires.  Format: MM.  Valid values: 01 through 12. Leading 0 is required.  | [optional] 
**expirationYear** | **String** | Four-digit year in which the payment card expires.  | [optional] 


