# CyberSource.InlineResponse20019

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobId** | **String** | Unique identifier of the feed submission job. | [optional] 
**status** | **String** | Overall status of the feed job.  Possible values: - PENDING - PROCESSING - COMPLETED - FAILED | [optional] 
**processing** | [**InlineResponse20019Processing**](InlineResponse20019Processing.md) |  | [optional] 
**syndication** | [**{String: InlineResponse20019Syndication}**](InlineResponse20019Syndication.md) | Per-protocol syndication status, keyed by lowercase protocol name (e.g. `acp`, `ucp`).  | [optional] 


