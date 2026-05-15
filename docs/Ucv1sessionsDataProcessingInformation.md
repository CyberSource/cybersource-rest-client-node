# CyberSource.Ucv1sessionsDataProcessingInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reconciliationId** | **String** | The reconciliation ID | [optional] 
**purposeOfPayment** | **String** | This field is applicable for AFT and OCT transactions.  For list of supported values, please refer to Developer Guide.  | [optional] 
**authorizationOptions** | [**Ucv1sessionsDataProcessingInformationAuthorizationOptions**](Ucv1sessionsDataProcessingInformationAuthorizationOptions.md) |  | [optional] 
**recurringOptions** | [**Ucv1sessionsDataProcessingInformationRecurringOptions**](Ucv1sessionsDataProcessingInformationRecurringOptions.md) |  | [optional] 
**bankTransferOptions** | [**Ucv1sessionsDataProcessingInformationBankTransferOptions**](Ucv1sessionsDataProcessingInformationBankTransferOptions.md) |  | [optional] 
**businessApplicationId** | **String** | The business application Id<br><br>  Optional field: This field cannot be configured through the Merchant Experience screens in the Business Center, but if required should be provided on a per‑transaction basis in the uc/v1/sessions API request.  | [optional] 
**commerceIndicator** | **String** | The commerce indicator<br><br>  Optional field: This field cannot be configured through the Merchant Experience screens in the Business Center, but if required should be provided on a per‑transaction basis in the uc/v1/sessions API request.  | [optional] 
**processingInstruction** | **String** | The processing instruction<br><br>  Optional field: This field cannot be configured through the Merchant Experience screens in the Business Center, but if required should be provided on a per‑transaction basis in the uc/v1/sessions API request.  | [optional] 


