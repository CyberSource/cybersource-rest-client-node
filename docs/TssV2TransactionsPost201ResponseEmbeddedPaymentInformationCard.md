# CyberSource.TssV2TransactionsPost201ResponseEmbeddedPaymentInformationCard

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**suffix** | **String** | Last four digits of the cardholder’s account number. This field is returned only for tokenized transactions. You can use this value on the receipt that you give to the cardholder.  **Note** This field is returned only for CyberSource through VisaNet and FDC Nashville Global.  #### CyberSource through VisaNet The value for this field corresponds to the following data in the TC 33 capture file: - Record: CP01 TCRB - Position: 85 - Field: American Express last 4 PAN return indicator.  | [optional] 
**prefix** | **String** | The description for this field is not available. | [optional] 
**type** | **String** | Three-digit value that indicates the card type.  Type of card to authorize. - 001 Visa - 002 Mastercard - 003 Amex - 004 Discover - 005: Diners Club - 007: JCB - 024: Maestro (UK Domestic) - 039 Encoded account number - 042: Maestro (International)  For the complete list of possible values, see &#x60;card_type&#x60; field description in the [Credit Card Services Using the SCMP API Guide.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html)  | [optional] 


