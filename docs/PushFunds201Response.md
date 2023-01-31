# CyberSource.PushFunds201Response

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique identification number to identify the submitted request. It is also appended to the endpoint of the resource.  | [optional] 
**submitTimeUtc** | **String** | Time of request in UTC. Format: &#x60;YYYY-MM-DDThh:mm:ssZ&#x60;  **Example** &#x60;2016-08-11T22:47:57Z&#x60; equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The &#x60;T&#x60; separates the date and the time. The &#x60;Z&#x60; indicates UTC.  | [optional] 
**status** | **String** | The status of the submitted transaction.  Possible values: - AUTHORIZED - DECLINED - SERVER_ERROR - INVALID_REQUEST - PARTIAL_AUTHORIZED  | [optional] 
**reconciliationId** | **String** | Cybersource or merchant generated transaction reference number. This is sent to the processor and is echoed back in the response to the merchant. This is This value is used for reconciliation purposes.  | [optional] 
**clientReferenceInformation** | [**PushFunds201ResponseClientReferenceInformation**](PushFunds201ResponseClientReferenceInformation.md) |  | [optional] 
**recipientInformation** | [**PushFunds201ResponseRecipientInformation**](PushFunds201ResponseRecipientInformation.md) |  | [optional] 
**merchantInformation** | [**PushFunds201ResponseMerchantInformation**](PushFunds201ResponseMerchantInformation.md) |  | [optional] 
**errorInformation** | [**PushFunds201ResponseErrorInformation**](PushFunds201ResponseErrorInformation.md) |  | [optional] 
**processorInformation** | [**PushFunds201ResponseProcessorInformation**](PushFunds201ResponseProcessorInformation.md) |  | [optional] 
**orderInformation** | [**PushFunds201ResponseOrderInformation**](PushFunds201ResponseOrderInformation.md) |  | [optional] 
**links** | [**PushFunds201ResponseLinks**](PushFunds201ResponseLinks.md) |  | [optional] 


