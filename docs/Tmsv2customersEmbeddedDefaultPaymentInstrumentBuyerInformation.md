# CyberSource.Tmsv2customersEmbeddedDefaultPaymentInstrumentBuyerInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**companyTaxID** | **String** | Company’s tax identifier. This is only used for eCheck service.  | [optional] 
**currency** | **String** | Currency used for the order. Use the three-character I[ISO Standard Currency Codes.](http://apps.cybersource.com/library/documentation/sbc/quickref/currencies.pdf)  For details about currency as used in partial authorizations, see \&quot;Features for Debit Cards and Prepaid Cards\&quot; in the [Credit Card Services Using the SCMP API Guide](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  For an authorization reversal (&#x60;reversalInformation&#x60;) or a capture (&#x60;processingOptions.capture&#x60; is set to &#x60;true&#x60;), you must use the same currency that you used in your payment authorization request.  #### DCC for First Data Your local currency. For details, see the &#x60;currency&#x60; field description in [Dynamic Currency Conversion For First Data Using the SCMP API](http://apps.cybersource.com/library/documentation/dev_guides/DCC_FirstData_SCMP/DCC_FirstData_SCMP_API.pdf).  | [optional] 
**dateOfBirth** | **Date** | Date of birth of the customer. Format: YYYY-MM-DD  | [optional] 
**personalIdentification** | [**[Tmsv2customersEmbeddedDefaultPaymentInstrumentBuyerInformationPersonalIdentification]**](Tmsv2customersEmbeddedDefaultPaymentInstrumentBuyerInformationPersonalIdentification.md) |  | [optional] 


