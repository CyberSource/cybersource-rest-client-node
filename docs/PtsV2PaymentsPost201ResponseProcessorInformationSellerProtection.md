# CyberSource.PtsV2PaymentsPost201ResponseProcessorInformationSellerProtection

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The kind of seller protection in force for the transaction. This field is returned only when the protection eligibility value is set to ELIGIBLE or PARTIALLY_ELIGIBLE. Possible values - ITEM_NOT_RECEIVED_ELIGIBLE: Sellers are protected against claims for items not received. - UNAUTHORIZED_PAYMENT_ELIGIBLE: Sellers are protected against claims for unauthorized payments. One or both values can be returned.  | [optional] 
**eligibility** | **String** | The level of seller protection in force for the transaction. Possible values: - `ELIGIBLE` - `PARTIALLY_ELIGIBLE` - `INELIGIBLE`  | [optional] 
**eligibilityType** | **String** | The kind of seller protection in force for the transaction. This field is returned only when the protection_eligibility property is set to ELIGIBLE or PARTIALLY_ELIGIBLE. Possible values: - `ITEM_NOT_RECEIVED_ELIGIBLE: Sellers are protected against claims for items not received.` - `UNAUTHORIZED_PAYMENT_ELIGIBLE: Sellers are protected against claims for unauthorized payments.` One or both values can be returned.  | [optional] 


