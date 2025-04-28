# CyberSource.InlineResponse4041

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**submitTimeUtc** | **Date** | Time of request in UTC. `Format: YYYY-MM-DDThh:mm:ssZ`  Example 2016-08-11T22:47:57Z equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The T separates the date and the time. The Z indicates UTC.  | [optional] 
**status** | **String** | The http status description of the submitted request. | [optional] 
**reason** | **String** | Documented reason codes. Client should be able to use the key for generating their own error message Possible Values:   - 'RESOURCE_NOT_FOUND'  | [optional] 
**message** | **String** | Descriptive message for the error. | [optional] 
**details** | [**[InlineResponse4007Details]**](InlineResponse4007Details.md) |  | [optional] 


