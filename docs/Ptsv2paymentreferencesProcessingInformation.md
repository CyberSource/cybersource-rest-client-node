# CyberSource.Ptsv2paymentreferencesProcessingInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sessionType** | **String** | Will have 2 values, 'U' (Update) , 'N' (New). Any other values will be rejected. Default will be 'N'  | [optional] 
**paymentFlowMode** | **String** | Whether merchant wants to pass the flow Inline or want to invoke Klarna Hosted Page  | [optional] 
**actionList** | **[String]** | Possible values are one or more of follows:   - `AP_SESSIONS`: Use this when Alternative Payment Sessions service is requested.  | [optional] 


