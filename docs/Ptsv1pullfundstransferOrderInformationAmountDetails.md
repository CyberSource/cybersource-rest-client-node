# CyberSource.Ptsv1pullfundstransferOrderInformationAmountDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalAmount** | **String** | The total amount of the funds transfer including all fees.  This value cannot be negative.   You can include a decimal point (.), but no other special characters.  | 
**currency** | **String** | Use a 3-character alpha currency code for currency of the sender.  ISO standard currencies: [http://apps.cybersource.com/library/documentation/sbc/quickref/currencies.pdf](http://apps.cybersource.com/library/documentation/sbc/quickref/currencies.pdf)    Currency must be supported by the processor.  | 
**serviceFee** | **String** | When present, this field contains the sender's surcharge as assessed by the originator. Values in this field must be in the same currency and format as defined in the amount field.  | [optional] 
**foreignExchangeFee** | **String** | When present, this field contains the sender's foreign exchange markup fee (markup above the wholesale or VisaNet exchange rate as assessed by the originator). Values in this field must be in the same currency and format as defined in the amount field.  | [optional] 
**surcharge** | [**Ptsv2paymentsOrderInformationAmountDetailsOctsurcharge**](Ptsv2paymentsOrderInformationAmountDetailsOctsurcharge.md) |  | [optional] 


