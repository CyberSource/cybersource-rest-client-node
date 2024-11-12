# CyberSource.Ptsv2intentsProcessingInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**processingInstruction** | **String** | The instruction to process an order. - default value: 'NO_INSTRUCTION' - 'ORDER_SAVED_EXPLICITLY'  | [optional] 
**authorizationOptions** | [**Ptsv2intentsProcessingInformationAuthorizationOptions**](Ptsv2intentsProcessingInformationAuthorizationOptions.md) |  | [optional] 
**actionList** | **[String]** | Array of actions (one or more) to be included in the order to invoke bundled services along with order. Possible values: - `AP_ORDER`: Use this when Alternative Payment Order service is requested.  | [optional] 


