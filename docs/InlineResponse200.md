# CyberSource.InlineResponse200

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | UUID uniquely generated for this comments.  | [optional] 
**submitTimeUtc** | **String** | Time of request in UTC. Format: `YYYY-MM-DDThh:mm:ssZ` **Example** `2016-08-11T22:47:57Z` equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The `T` separates the date and the time. The `Z` indicates UTC.  Returned by Cybersource for all services.  | [optional] 
**status** | **String** | The status of the submitted transaction. Possible values are: - `ACCEPTED` - `REJECTED`  | [optional] 
**embedded** | [**InlineResponse200Embedded**](InlineResponse200Embedded.md) |  | [optional] 


