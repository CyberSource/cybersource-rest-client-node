# CyberSource.InlineResponse2002PaymentInformationCard

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**suffix** | **String** | Last four digits of the cardholderâ€™s account number. This field is returned only for tokenized transactions. You can use this value on the receipt that you give to the cardholder.  | [optional] 
**expirationMonth** | **String** | Two-digit month in which the credit card expires. &#x60;Format: MM&#x60;. Possible values: 01 through 12.  **Encoded Account Numbers**  For encoded account numbers (_type_&#x3D;039), if there is no expiration date on the card, use 12.  For processor-specific information, see the customer_cc_expmo field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html)  | [optional] 
**expirationYear** | **String** | Four-digit year in which the credit card expires. &#x60;Format: YYYY&#x60;.  **Encoded Account Numbers**  For encoded account numbers (_type_&#x3D;039), if there is no expiration date on the card, use 2021.  For processor-specific information, see the customer_cc_expyr field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html)  | [optional] 
**type** | **String** | Type of card to authorize. - 001 Visa - 002 Mastercard - 003 Amex - 004 Discover  | [optional] 


