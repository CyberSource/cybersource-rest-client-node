# CyberSource.Ptsv1pushfundstransferOrderInformationAmountDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalAmount** | **String** | Grand total for the order. This value cannot be negative. You can include a decimal point (.), but no other special characters. CyberSource truncates the amount to the correct number of decimal places.  | 
**currency** | **String** | Use a 3-character alpha currency code for currency of the funds transfer.  ISO standard currencies: http://apps.cybersource.com/library/documentation/sbc/quickref/currencies.pdf  Currency must be supported by the processor.  | 
**sourceCurrency** | **String** | Use a 3-character alpha currency code for source currency of the funds transfer. Supported for card and bank account based cross border funds transfers.  ISO standard currencies: http://apps.cybersource.com/library/documentation/sbc/quickref/currencies.pdf  | [optional] 
**destinationCurrency** | **String** | Use a 3-character alpha currency code for destination currency of the funds transfer. Supported for card and bank account based cross border funds transfers.  ISO standard currencies: http://apps.cybersource.com/library/documentation/sbc/quickref/currencies.pdf  | [optional] 
**surcharge** | [**Ptsv2paymentsOrderInformationAmountDetailsOctsurcharge**](Ptsv2paymentsOrderInformationAmountDetailsOctsurcharge.md) |  | [optional] 


