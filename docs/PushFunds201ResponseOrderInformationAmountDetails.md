# CyberSource.PushFunds201ResponseOrderInformationAmountDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalAmount** | **String** | Grand total for the order. This value cannot be negative. You can include a decimal point (.), but no other special characters. CyberSource truncates the amount to the correct number of decimal places.  Note For Visa Platform Conenct, FDC Compass, and Chase Paymentech processors, the maximum length for this field is 12 numbers.  Processor Amount Ranges: Visa Platform Connect: .01-9999999999.99  Mastercard Send: 1-9999999999.99  FDC Compass: .01- 9999999999.994  Chase Paymentech: .01-9999999999.99  | [optional] 
**currency** | **String** | Currency used for the order. Use the three-character ISO Standard Currency Codes  | 
**settlementAmount** | **String** | This is a multicurrency field. It contains the transaction amount (field 4), converted to the Currency used to bill the cardholder&#39;s account. This field is returned for OCT transactions.  | [optional] 
**settlementCurrency** | **String** | This is a multicurrency-only field. It contains a 3-digit numeric code that identifies the currency used by the issuer to bill the cardholder&#39;s account. This field is returned for OCT transactions.  | [optional] 


