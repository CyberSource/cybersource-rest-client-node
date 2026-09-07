# CyberSource.UnifiedriskAcquirerMerchantAccount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchantAccountBranchId** | **String** | Unique identifier for the specific branch or location of the merchant's account within the acquiring bank's organizational structure | [optional] 
**merchantAccountId** | **String** | The primary account identifier assigned by the acquirer to the merchant for payment processing and settlement purposes | [optional] 
**merchantAccountIdFormat** | **String** | Describes the format or standard used for the merchant account identifier (e.g., ISO, Proprietary, Numeric) | [optional] 
**securityAmount** | [**UnifiedriskAcquirerMerchantAccountSecurityAmount**](UnifiedriskAcquirerMerchantAccountSecurityAmount.md) |  | [optional] 
**settlementFrequency** | **Number** | The number of days between settlement cycles defining how often funds are transferred from the acquirer to the merchant's account (e.g., 1 for daily, 7 for weekly) | [optional] 


