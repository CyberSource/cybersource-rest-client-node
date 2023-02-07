# CyberSource.PushFunds400Response

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique identification number to identify the submitted request. It is also appended to the endpoint of the resource.  | [optional] 
**submitTimeUtc** | **String** | Time of request in UTC. Format: &#x60;YYYY-MM-DDThh:mm:ssZ&#x60;  **Example** &#x60;2016-08-11T22:47:57Z&#x60; equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The &#x60;T&#x60; separates the date and the time. The &#x60;Z&#x60; indicates UTC.  | [optional] 
**status** | **String** | Possible values: - INVALID_REQUEST  | [optional] 
**reason** | **String** | The reason of the status.  Possible values: - INVALID_DATA - MISSING_FIELD - INVALID_MERCHANT_CONFIGURATION - INVALID_REQUEST - INVALID_PAYMENT_ID  | [optional] 
**message** | **String** | The detail message related to the status and reason listed above.  Possible values: - Declined - One or more fields in the request contains invalid data - Declined - The request is missing one or more fields - Declined - There is a problem with your CyberSource merchant configuration.  | [optional] 
**details** | [**[PushFunds400ResponseDetails]**](PushFunds400ResponseDetails.md) |  | [optional] 


