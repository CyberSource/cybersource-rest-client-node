# CyberSource.InlineResponse2002PaymentInformationTokenizedCard

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**prefix** | **String** | First six digits of token. CyberSource includes this field in the reply message when it decrypts the payment blob for the tokenized transaction.  | [optional] 
**suffix** | **String** | Last four digits of token. CyberSource includes this field in the reply message when it decrypts the payment blob for the tokenized transaction.  | [optional] 
**type** | **String** | Type of card to authorize. - 001 Visa - 002 Mastercard - 003 Amex - 004 Discover  | [optional] 
**expirationMonth** | **String** | Two-digit month in which the payment network token expires. &#x60;Format: MM&#x60;. Possible values: 01 through 12.  | [optional] 
**expirationYear** | **String** | Four-digit year in which the payment network token expires. &#x60;Format: YYYY&#x60;.  | [optional] 


