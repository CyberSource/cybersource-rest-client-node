# CyberSource.UnifiedRiskPost201ResponseResultsRISKINSIGHTSPackagesTransactionInsightsInsights

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**codes** | **[String]** | Array of insight codes returned by the AIP engine, each representing a specific risk signal or behavioral pattern identified for the transaction. Codes follow the pattern {category}-{signal}-{window}-{detail} (e.g., BEH-* for behavioral history codes, RSK-* for real-time risk signals). | [optional] 
**signals** | **{String: Number}** | Key-value map of behavioral signals produced by the AIP engine. Keys represent signal identifiers and values represent their computed numeric measurements for the transaction. May be an empty object when no signals are available. | [optional] 
**warnings** | [**[UnifiedRiskPost201ResponseResultsRISKINSIGHTSPackagesTransactionInsightsInsightsWarnings]**](UnifiedRiskPost201ResponseResultsRISKINSIGHTSPackagesTransactionInsightsInsightsWarnings.md) | AIP-level warnings issued during risk evaluation. An empty array indicates no warnings. Each warning describes a limitation or anomaly encountered during AIP processing. | [optional] 


