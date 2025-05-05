# CyberSource.GetSubscriptionResponse1PaymentInstrumentBuyerInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**companyTaxID** | **String** | Company's tax identifier. This is only used for eCheck service.  | [optional] 
**currency** | **String** | Currency used for the order. Use the three-character I[ISO Standard Currency Codes.](http://apps.cybersource.com/library/documentation/sbc/quickref/currencies.pdf)  For an authorization reversal (`reversalInformation`) or a capture (`processingOptions.capture` is set to `true`), you must use the same currency that you used in your payment authorization request.  #### DCC for First Data Your local currency. For details, see the `currency` field description in [Dynamic Currency Conversion For First Data Using the SCMP API](http://apps.cybersource.com/library/documentation/dev_guides/DCC_FirstData_SCMP/DCC_FirstData_SCMP_API.pdf).  | [optional] 
**dateOfBirth** | **Date** | Date of birth of the customer. Format: YYYY-MM-DD  | [optional] 
**personalIdentification** | [**[Tmsv2customersEmbeddedDefaultPaymentInstrumentBuyerInformationPersonalIdentification]**](Tmsv2customersEmbeddedDefaultPaymentInstrumentBuyerInformationPersonalIdentification.md) |  | [optional] 


