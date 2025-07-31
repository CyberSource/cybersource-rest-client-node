# CyberSource.InlineResponse2013SetupsPaymentsCardProcessingSubscriptionStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**submitTimeUtc** | **String** | Time of request in UTC. `Format: YYYY-MM-DDThh:mm:ssZ`  Example 2016-08-11T22:47:57Z equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The T separates the date and the time. The Z indicates UTC.  | [optional] 
**status** | **String** | Possible values: - SUCCESS - FAILURE - PARTIAL - PENDING | [optional] 
**reason** | **String** | Possible values: - DEPENDENT_PRODUCT_NOT_CONTRACTED - DEPENDENT_FEATURE_NOT_CHOSEN - MISSING_DATA - INVALID_DATA - DUPLICATE_FIELD | [optional] 
**details** | **[{String: String}]** |  | [optional] 
**message** | **String** |  | [optional] 


