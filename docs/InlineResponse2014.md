# CyberSource.InlineResponse2014

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique identification number to identify the submitted request. It is also appended to the endpoint of the resource.  | [optional] 
**status** | **String** | The status of the submitted transaction.  Possible values: - `COMPLETED` - `INVALID_REQUEST` - `SERVER_ERROR`  | [optional] 
**submitTimeStampUtc** | **String** | Time of request in UTC. Format: `YYYY-MM-DD'T'HH:mm:ssZ`  Example: `2016-08-11T22:47:57Z` equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The T separates the date and the time. The Z indicates UTC.  | [optional] 
**orderInformation** | [**InlineResponse2014OrderInformation**](InlineResponse2014OrderInformation.md) |  | [optional] 
**errorInformation** | [**InlineResponse2014ErrorInformation**](InlineResponse2014ErrorInformation.md) |  | [optional] 
**processorInformation** | [**InlineResponse2014ProcessorInformation**](InlineResponse2014ProcessorInformation.md) |  | [optional] 
**processingInformation** | [**InlineResponse2014ProcessingInformation**](InlineResponse2014ProcessingInformation.md) |  | [optional] 


