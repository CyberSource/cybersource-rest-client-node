# CyberSource.PushFunds400Response

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique identification number to identify the submitted request. It is also appended to the endpoint of the resource.  | [optional] 
**submitTimeUtc** | **String** | Time of request in UTC. Format: `YYYY-MM-DDThh:mm:ssZ`  **Example** `2016-08-11T22:47:57Z` equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The `T` separates the date and the time. The `Z` indicates UTC.  | [optional] 
**status** | **String** | Possible values: - INVALID_REQUEST  | [optional] 
**reason** | **String** | The reason of the status.  Possible values: - INVALID_DATA - MISSING_FIELD - INVALID_MERCHANT_CONFIGURATION - INVALID_REQUEST - INVALID_PAYMENT_ID  | [optional] 
**message** | **String** | The detail message related to the status and reason listed above.  Possible values: - One or more fields in the request contains invalid data. - The request is missing one or more required fields. - Declined - There is a problem with your CyberSource merchant configuration.  | [optional] 
**details** | [**[PushFunds400ResponseDetails]**](PushFunds400ResponseDetails.md) |  | [optional] 


