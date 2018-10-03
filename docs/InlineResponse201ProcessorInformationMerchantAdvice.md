# CyberSource.InlineResponse201ProcessorInformationMerchantAdvice

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | Reason the recurring payment transaction was declined. For some processors, this field is used only for Mastercard. For other processors, this field is used for Visa and Mastercard. And for other processors, this field is not implemented.  Possible values:   - **00**: Response not provided.  - **01**: New account information is available. Obtain the new information.  - **02**: Try again later.  - **03**: Do not try again. Obtain another type of payment from the customer.  - **04**: Problem with a token or a partial shipment indicator.  - **21**: Recurring payment cancellation service.  - **99**: An unknown value was returned from the processor.  | [optional] 
**codeRaw** | **String** | Raw merchant advice code sent directly from the processor. This field is used only for Mastercard.  For processor-specific information, see the auth_merchant_advice_code_raw field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html)  | [optional] 


