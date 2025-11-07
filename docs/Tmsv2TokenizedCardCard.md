# CyberSource.Tmsv2TokenizedCardCard

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_number** | **String** | The customer's payment card number, also known as the Primary Account Number (PAN).  | [optional] 
**expirationMonth** | **String** | Two-digit month in which the payment card expires.  Format: `MM`.  Possible Values: `01` through `12`.  | [optional] 
**expirationYear** | **String** | Four-digit year in which the credit card expires.  Format: `YYYY`.  | [optional] 
**type** | **String** | The type of card (Card Network). Possible Values: - 001: visa  | [optional] 
**suffix** | **String** | The customer's latest payment card number suffix.  | [optional] 
**issueDate** | **Date** | Card issuance date. XML date format: YYYY-MM-DD. | [optional] 
**activationDate** | **Date** | Card activation date. XML date format: YYYY-MM-DD | [optional] 
**expirationPrinted** | **Boolean** | Indicates if the expiration date is printed on the card. | [optional] 
**securityCodePrinted** | **Boolean** | Indicates if the Card Verification Number is printed on the card. | [optional] 
**termsAndConditions** | [**Tmsv2TokenizedCardCardTermsAndConditions**](Tmsv2TokenizedCardCardTermsAndConditions.md) |  | [optional] 


