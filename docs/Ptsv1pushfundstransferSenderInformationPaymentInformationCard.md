# CyberSource.Ptsv1pushfundstransferSenderInformationPaymentInformationCard

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Three-digit value that indicates the card type.  IMPORTANT It is strongly recommended that you include the card type field in request messages even if it is optional for your processor and card type. Omitting the card type can cause the transaction to be processed with the wrong card type.  Possible values:  - &#x60;001&#x60;: Visa. For card-present transactions on all processors except SIX, the Visa Electron card type is processed the same way that the Visa debit card is processed. Use card type value 001 for Visa Electron. - &#x60;002&#x60;: Mastercard, Eurocard[^1], which is a European regional brand of Mastercard.  | [optional] 
**securityCode** | **String** | 3-digit value that indicates the card Cvv2Value. Values can be 0-9.  This field is supported in Mastercard Send.  | [optional] 
**sourceAccountType** | **String** | Flag that specifies the type of account associated with the card. The cardholder provides this information during the payment process.  Valid values for Visa Platform Connect: - &#x60;CHECKING&#x60;: Checking account - &#x60;CREDIT&#x60;: Credit card account - &#x60;SAVING&#x60;: Saving account - &#x60;LINE_OF_CREDIT&#x60;: Line of credit or credit portion of combo card - &#x60;PREPAID&#x60;: Prepaid card account or prepaid portion of combo card - &#x60;UNIVERSAL&#x60;: Universal account  Valid values for Mastercard Send: - &#x60;00&#x60;: Other, - &#x60;01&#x60;: RTN + Bank Account, - &#x60;02&#x60;: IBAN, - &#x60;03&#x60;: Card Account, - &#x60;04&#x60;: Email, - &#x60;05&#x60;: Phone Number, - &#x60;06&#x60;: Bank account number (BAN) + Bank Identification Сode (BIC), - &#x60;07&#x60;: Wallet ID, - &#x60;08&#x60;: Social Network ID. Numeric, 2 characters.  This field is supported in Mastercard Send.  | [optional] 
**_number** | **String** | The customer’s payment card number, also known as the Primary Account Number (PAN).  This field is supported in Mastercard Send.  | [optional] 
**expirationMonth** | **String** | Two-digit month in which the payment card expires.  Format: MM.  Valid values: 01 through 12. Leading 0 is required.  This field is supported for Mastercard Send.  | [optional] 
**expirationYear** | **String** | Four-digit year in which the payment card expires.  This field is supported for Mastercard Send.  | [optional] 


