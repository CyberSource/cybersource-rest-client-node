# CyberSource.UnifiedRiskPost400Response

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestId** | **String** | Echoes the unique request identifier from the original request. May be absent if the request could not be parsed (e.g., malformed JSON). | 
**submitTimeUtc** | **Date** | UTC timestamp indicating when the failed request was received by the server. | 
**errors** | [**[UnifiedRiskPost400ResponseErrors]**](UnifiedRiskPost400ResponseErrors.md) | Root-level list of action-level errors describing what failed and why. | 


