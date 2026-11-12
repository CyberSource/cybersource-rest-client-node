# CyberSource.FeedJobStatusResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobId** | **String** | Unique identifier of the feed submission job. | [optional] 
**status** | **String** | Overall status of the feed job.  Possible values: - PENDING - PROCESSING - COMPLETED - FAILED | [optional] 
**processing** | [**FeedProcessingSummary**](FeedProcessingSummary.md) |  | [optional] 
**syndication** | [**{String: FeedSyndicationProtocolStatus}**](FeedSyndicationProtocolStatus.md) | Per-protocol syndication status, keyed by lowercase protocol name (e.g. `acp`, `ucp`).  | [optional] 


