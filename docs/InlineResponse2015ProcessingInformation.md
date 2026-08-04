# CyberSource.InlineResponse2015ProcessingInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessApplicationId** | **String** | Payouts transaction type.  Possible Values: - `AA` - Account to account - `AB` - Business to Business - `PP` - Person to person - `TU` - Top-up for enhanced prepaid loads - `WT` - Wallet transfer - `BI` - Bank Initiated - `FT` - Funds Transfer - `FD` - Funds Disbursement - `GD` - Government Disbursement - `PD` - Payroll Disbursement - `LA` - Liquid Assets - `CP` - Card Bill Payment - `MP` - Non-card Bill Payment - `CD` - Cash Deposit - `CI` - Cash in - `CO` - Cash out - `GP` - Gambling Payment - `LO` - Loyalty and Offers - `MD` - Merchant Disbursement - `MI` - Merchant Initiated OCT for Faster Refund - `OG` - Online Gambling - `OT` - Own Account Transfer - `PS` - Payment for goods and services - `RP` - Request-To-Pay Service  | [optional] 
**commerceIndicator** | **String** | Type of transaction.  | [optional] 
**payoutsOptions** | [**InlineResponse2015ProcessingInformationPayoutsOptions**](InlineResponse2015ProcessingInformationPayoutsOptions.md) |  | [optional] 
**reconciliationId** | **String** | CyberSource or merchant generated transaction reference number. This is sent to the processor and is echoed back in the response to the merchant. This is This value is used for reconciliation purposes.  | [optional] 


