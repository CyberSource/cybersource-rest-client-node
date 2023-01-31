# CyberSource.Ptsv1pushfundstransferOrderInformationAmountDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalAmount** | **String** | Grand total for the order. This value cannot be negative. You can include a decimal point (.), but no other special characters. CyberSource truncates the amount to the correct number of decimal places.  The disbursement amount. Numeric integer, 1-999999999999. The decimal point is implied based on the relevant currency exponent. For example, a US Dollar $53 amount is a value of 5300.  Processor Amount Ranges: Visa Platform Connect: .01-9999999999.99  Mastercard Send: 1-9999999999.99  FDC Compass: .01- 9999999999.99  Chase Paymentech: .01-9999999999.99  | 
**currency** | **String** | Use a 3-character alpha currency code for currency of the sender.  ISO standard currencies: http://apps.cybersource.com/library/documentation/sbc/quickref/currencies.pdf  Currency must be supported by the processor.  | 


