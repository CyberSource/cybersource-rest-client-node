# CyberSource.UnifiedRiskLabelsPost400ResponseErrors

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **String** | The action that encountered an error (e.g., DECISION, FEATURESPACE, RISK_INSIGHTS, CONSUMER_AUTHENTICATION, VEAS).  Possible values: - DECISION - FEATURESPACE - RISK_INSIGHTS - CONSUMER_AUTHENTICATION - VEAS | [optional] 
**status** | **String** | Indicates a FAILURE or PARTIAL_FAILURE. | [optional] 
**reason** | **String** | Machine-readable reason code explaining why the action failed (e.g., SYSTEM_ERROR, INVALID_REQUEST, SERVICE_UNAVAILABLE, TIMEOUT). | [optional] 
**message** | **String** | Human-readable error message providing additional context about the failure for this specific action. | [optional] 


