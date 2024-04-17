# CyberSource.Ptsv1pushfundstransferSenderInformationPaymentInformationCard

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Three-digit value that indicates the card type.  IMPORTANT It is strongly recommended that you include the card type field in request messages even if it is optional for your processor and card type. Omitting the card type can cause the transaction to be processed with the wrong card type.  Possible values:  - `001`: Visa. For card-present transactions on all processors except SIX, the Visa Electron card type is processed the same way that the Visa debit card is processed. Use card type value 001 for Visa Electron. - `002`: Mastercard, Eurocard[^1], which is a European regional brand of Mastercard.  | [optional] 
**securityCode** | **String** | 3-digit value that indicates the card Cvv2Value. Values can be 0-9.  This field is supported in Mastercard Send.  | [optional] 
**sourceAccountType** | **String** | Flag that specifies the type of account associated with the card. The cardholder provides this information during the payment process.  Valid values for Visa Platform Connect: - `CHECKING`: Checking account - `CREDIT`: Credit card account - `SAVING`: Saving account - `LINE_OF_CREDIT`: Line of credit or credit portion of combo card - `PREPAID`: Prepaid card account or prepaid portion of combo card - `UNIVERSAL`: Universal account  Valid values for Mastercard Send: - `00`: Other, - `01`: RTN + Bank Account, - `02`: IBAN, - `03`: Card Account, - `04`: Email, - `05`: Phone Number, - `06`: Bank account number (BAN) + Bank Identification Сode (BIC), - `07`: Wallet ID, - `08`: Social Network ID. Numeric, 2 characters.  This field is supported in Mastercard Send.  | [optional] 
**_number** | **String** | The customer's payment card number, also known as the Primary Account Number (PAN).  This field is supported in Mastercard Send.  | [optional] 
**expirationMonth** | **String** | Two-digit month in which the payment card expires.  Format: MM.  Valid values: 01 through 12. Leading 0 is required.  This field is supported for Mastercard Send.  | [optional] 
**expirationYear** | **String** | Four-digit year in which the payment card expires.  This field is supported for Mastercard Send.  | [optional] 


