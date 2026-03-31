# CyberSource.Ptsv1pullfundstransferProcessingInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commerceIndicator** | **String** | Type of transaction. This field identifies the level of security used in an electronic commerce transaction over an open network (for example, the internet).  Values for a Payouts transaction:   `INTERNET`, `RECURRING`, `RECURRING_INTERNET`, `VBV_FAILURE`, `VBV_ATTEMPTED`, `VBV`, `SPA_FAILURE`, `SPA_ATTEMPTED`, `SPA`    If no value is entered this field will set a default value = `INTERNET`.  | [optional] 
**fundingOptions** | [**Ptsv1pullfundstransferProcessingInformationFundingOptions**](Ptsv1pullfundstransferProcessingInformationFundingOptions.md) |  | [optional] 
**recurringOptions** | [**Ptsv1pullfundstransferProcessingInformationRecurringOptions**](Ptsv1pullfundstransferProcessingInformationRecurringOptions.md) |  | [optional] 
**businessApplicationId** | **String** | Payouts transaction type.  Possible Values: - `AA` = Account to account - `PP` = Person to person - `TU` = Top-up for enhanced prepaid loads - `WT` = Wallet transfer - `BI` = Bank-Initiated - `FT` = Funds Transfer - `FD` = Funds Disbursement - `MP` = Merchant Payment - `PD` = Payroll Disbursement - `LA` = Liquid Assets  | 
**purposeOfPayment** | **String** | Visa Direct   Purpose of payment is required in certain markets to clearly identify the purpose of the payment based on the standard values defined for respective market.  | [optional] 
**payoutsOptions** | [**Ptsv1pullfundstransferProcessingInformationPayoutsOptions**](Ptsv1pullfundstransferProcessingInformationPayoutsOptions.md) |  | [optional] 
**languageCode** | **String** | Contains the ISO 639-2 defined language Code  | [optional] 


