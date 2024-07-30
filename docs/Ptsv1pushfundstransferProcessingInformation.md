# CyberSource.Ptsv1pushfundstransferProcessingInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessApplicationId** | **String** | Payouts transaction type.  Business Application ID: - `PP`: Person to person. - `FD`: Funds disbursement (general)  | [optional] 
**payoutsOptions** | [**Ptsv1pushfundstransferProcessingInformationPayoutsOptions**](Ptsv1pushfundstransferProcessingInformationPayoutsOptions.md) |  | [optional] 
**enablerId** | **String** | Enablers are payment processing entities that are not acquiring members and are often the primary relationship owner with merchants and originators. Enablers own technical solutions through which the merchant or originator will access acceptance. The Enabler ID is a five-character hexadecimal identifier that will be used by Visa to identify enablers. Enabler ID assignment will be determined by Visa. Visa will communicate Enablers assignments to enablers.  | [optional] 


