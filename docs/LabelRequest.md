# CyberSource.LabelRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | **[String]** | Actions to perform. For label submission, specify VISA_PROTECT_RISK_INSIGHTS. | 
**events** | **[String]** | Must be LABELS for label submission requests. | 
**requestId** | **String** | Unique identifier for the label submission request | [optional] 
**eventTime** | **Date** | The time that the real-world event occurred. | [optional] 
**transaction** | [**UnifiedriskTransaction**](UnifiedriskTransaction.md) |  | 
**labels** | [**UnifiedriskLabels**](UnifiedriskLabels.md) |  | 


