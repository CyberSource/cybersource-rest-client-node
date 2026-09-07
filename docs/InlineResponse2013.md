# CyberSource.InlineResponse2013

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique identification number to identify the submitted request. It is also appended to the endpoint of the resource.  | [optional] 
**status** | **String** | The status of the submitted transaction.  Possible values: - `COMPLETED` - `INVALID_REQUEST` - `SERVER_ERROR`  | [optional] 
**submitTimeStampUtc** | **String** | Time of request in UTC. Format: `YYYY-MM-DD'T'HH:mm:ssZ`  Example: `2016-08-11T22:47:57Z` equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The T separates the date and the time. The Z indicates UTC.  | [optional] 
**orderInformation** | [**InlineResponse2013OrderInformation**](InlineResponse2013OrderInformation.md) |  | [optional] 
**errorInformation** | [**InlineResponse2013ErrorInformation**](InlineResponse2013ErrorInformation.md) |  | [optional] 
**processorInformation** | [**InlineResponse2013ProcessorInformation**](InlineResponse2013ProcessorInformation.md) |  | [optional] 
**processingInformation** | [**InlineResponse2013ProcessingInformation**](InlineResponse2013ProcessingInformation.md) |  | [optional] 


