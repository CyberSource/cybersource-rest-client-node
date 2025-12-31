# CyberSource.Acpv1instructionsMandates

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mandateId** | **String** | Unique identifier with in the context of a purchase-intent for the mandate.   Assigned by Partner. Id shall not be reused when a mandate is updated/deleted.  | 
**preferredMerchantName** | **String** | User merchant preference. | [optional] 
**merchantCategory** | **String** | Merchant category Description. | [optional] 
**merchantCategoryCode** | **String** | Merchant category Code. Once it is checked, it has to be valid merchant category code. Ex:\" 5311\" | [optional] 
**declineThreshold** | [**Acpv1instructionsDeclineThreshold**](Acpv1instructionsDeclineThreshold.md) |  | 
**recurringPaymentInformation** | [**Acpv1instructionsRecurringPaymentInformation**](Acpv1instructionsRecurringPaymentInformation.md) |  | [optional] 
**effectiveUntilTime** | **String** | UTC time in Unix epoch format. | 
**quantity** | **String** | Quantity of the product. | [optional] 
**description** | **String** | Description of the product. | 


