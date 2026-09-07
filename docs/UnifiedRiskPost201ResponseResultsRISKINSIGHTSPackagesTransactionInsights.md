# CyberSource.UnifiedRiskPost201ResponseResultsRISKINSIGHTSPackagesTransactionInsights

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier of the VPRI package. | [optional] 
**name** | **String** | Human-readable display name of the VPRI package. | [optional] 
**type** | **String** | Category of the VPRI package indicating the type of assessment performed. | [optional] 
**score** | **Number** | Risk score produced by the AIP engine, ranging from 0 (lowest risk) to 100 (highest risk). Absent when the AIP service was not invoked. | [optional] 
**insights** | [**UnifiedRiskPost201ResponseResultsRISKINSIGHTSPackagesTransactionInsightsInsights**](UnifiedRiskPost201ResponseResultsRISKINSIGHTSPackagesTransactionInsightsInsights.md) |  | [optional] 
**additionalData** | [**VpriTransactionInsightsAdditionalData**](VpriTransactionInsightsAdditionalData.md) |  | [optional] 


