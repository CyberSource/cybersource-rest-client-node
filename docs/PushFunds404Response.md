# CyberSource.PushFunds404Response

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique identification number to identify the submitted request. It is also appended to the endpoint of the resource.  | [optional] 
**submitTimeUtc** | **String** | Time of request in UTC. Format: `YYYY-MM-DDThh:mm:ssZ`  **Example** `2016-08-11T22:47:57Z` equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The `T` separates the date and the time. The `Z` indicates UTC.  | [optional] 
**reason** | **String** | The reason of the status.  Possible values: - NOT_FOUND  | [optional] 
**message** | **String** | The detail message related to the status and reason listed above.  Possible values: - The requested resource does not exist  | [optional] 


