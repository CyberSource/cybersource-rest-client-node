# CyberSource.PtsV2PaymentsPost201ResponseProcessorInformationCardVerification

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resultCode** | **String** | CVN result code.  For details, see the &#x60;auth_cv_result&#x60; reply field description in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/wwhelp/wwhimpl/js/html/wwhelp.htm)  | [optional] 
**resultCodeRaw** | **String** | CVN result code sent directly from the processor. Returned only when the processor returns this value.  **Important** Do not use this field to evaluate the result of card verification. Use for debugging purposes only.  | [optional] 


