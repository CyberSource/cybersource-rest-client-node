# CyberSource.VpriRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | **[String]** | Actions to perform. For VPRI, specify VISA_PROTECT_RISK_INSIGHTS. Multiple actions may be included in a single request to invoke additional services simultaneously. | 
**events** | **[String]** | The events to be performed under specific actions. For VISA_PROTECT_RISK_INSIGHTS, supported values are LABELS and INSIGHTS. | 
**transaction** | [**UnifiedriskTransaction**](UnifiedriskTransaction.md) |  | 
**requestId** | **String** | Unique identifier for the risk assessment request | [optional] 
**eventTime** | **Date** | The time that the real-world event occurred. | 
**context** | **String** | The context in which the request is made. | [optional] 
**mode** | **String** | Indicates whether the request is live or a test. | [optional] 
**requestComments** | **String** | Brief description or comments about the request | [optional] 
**schemaVersion** | **Number** | Version of the request schema | [optional] 
**partner** | [**UnifiedriskPartner**](UnifiedriskPartner.md) |  | [optional] 
**payment** | [**UnifiedriskPayment**](UnifiedriskPayment.md) |  | [optional] 
**order** | [**UnifiedriskOrder**](UnifiedriskOrder.md) |  | [optional] 
**customer** | [**UnifiedriskCustomer**](UnifiedriskCustomer.md) |  | [optional] 
**riskAssessment** | [**UnifiedriskRiskAssessment**](UnifiedriskRiskAssessment.md) |  | [optional] 
**travel** | [**UnifiedriskTravel**](UnifiedriskTravel.md) |  | [optional] 
**merchant** | [**UnifiedriskMerchant**](UnifiedriskMerchant.md) |  | [optional] 
**acquirer** | [**UnifiedriskAcquirer**](UnifiedriskAcquirer.md) |  | [optional] 
**device** | [**UnifiedriskDevice**](UnifiedriskDevice.md) |  | [optional] 
**session** | [**UnifiedriskSession**](UnifiedriskSession.md) |  | [optional] 
**supplementaryData** | **String** | Free-form field for information not catered for by other components. Must not contain cardholder data or sensitive auth data. | [optional] 
**labels** | [**UnifiedriskLabels**](UnifiedriskLabels.md) |  | [optional] 
**account** | [**UnifiedriskAccount**](UnifiedriskAccount.md) |  | [optional] 
**authentication** | [**UnifiedriskAuthentication**](UnifiedriskAuthentication.md) |  | [optional] 
**authorization** | [**UnifiedriskAuthorization**](UnifiedriskAuthorization.md) |  | [optional] 
**browser** | [**UnifiedriskBrowser**](UnifiedriskBrowser.md) |  | [optional] 
**initiatingParty** | [**UnifiedriskInitiatingParty**](UnifiedriskInitiatingParty.md) |  | [optional] 
**terminal** | [**UnifiedriskTerminal**](UnifiedriskTerminal.md) |  | [optional] 
**thirdPartyRisk** | [**UnifiedriskThirdPartyRisk**](UnifiedriskThirdPartyRisk.md) |  | [optional] 


