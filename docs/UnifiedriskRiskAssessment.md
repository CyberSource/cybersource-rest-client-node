# CyberSource.UnifiedriskRiskAssessment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**thirdPartyIndicators** | **String** | Any risk indicators provided by a third party provider that is integrated with ARIC. This is a free text field, and if there are multiple risk indicators, they should each be separated by a comma. | [optional] 
**thirdPartyScore** | **Number** | Risk Score provided by a third party that is integrated with ARIC. | [optional] 
**thirdPartyScores** | **Object** |  | [optional] 
**buyerHistory** | [**UnifiedriskRiskAssessmentBuyerHistory**](UnifiedriskRiskAssessmentBuyerHistory.md) |  | [optional] 
**auxiliaryData** | **Object** |  | [optional] 
**vital4** | [**UnifiedriskRiskAssessmentVital4**](UnifiedriskRiskAssessmentVital4.md) |  | [optional] 
**isConfirmedRisk** | **Boolean** | Indicates whether this transaction has been confirmed as fraudulent or high-risk through post-transaction investigation. True flags the transaction for model feedback and alert closure | [optional] 
**reportedBy** | **String** | Identifier or name of the entity (customer, merchant, or internal team) that reported this transaction as fraudulent or suspicious | [optional] 
**merchantScore** | **String** | Risk score specific to the merchant's fraud exposure level, derived from the merchant's historical fraud rates, chargeback ratio, and industry risk profile | [optional] 
**merchantFraudRate** | **String** | The merchant's fraud rate expressed as a percentage or basis points, representing the ratio of confirmed fraudulent transactions to total transactions over a rolling period | [optional] 
**trustlistStatus** | **String** | Indicates whether the payer or payee appears on a trust list, reducing friction for known-good entities. Values - TRUSTED, UNTRUSTED, UNKNOWN | [optional] 
**trustlistSource** | **String** | The source system or registry that determined the trustlist status (e.g., MERCHANT_WHITELIST, NETWORK_WHITELIST, INTERNAL_TRUSTLIST) | [optional] 


