# CyberSource.PtsV2PaymentsPost201ResponseProcessorInformationSellerProtection

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The kind of seller protection in force for the transaction. This field is returned only when the protection eligibility value is set to ELIGIBLE or PARTIALLY_ELIGIBLE. Possible values - ITEM_NOT_RECEIVED_ELIGIBLE: Sellers are protected against claims for items not received. - UNAUTHORIZED_PAYMENT_ELIGIBLE: Sellers are protected against claims for unauthorized payments. One or both values can be returned.  | [optional] 
**eligibility** | **String** | Indicates whether the transaction is eligible for seller protection. The values returned are described below. Possible values: - `ELIGIBLE` - `PARTIALLY_ELIGIBLE` - `INELIGIBLE` - `NOT_ELIGIBLE`  | [optional] 
**disputeCategories** | **[String]** | An array of conditions that are covered for the transaction.  | [optional] 
**eligibilityType** | **String** | The kind of seller protection in force for the transaction. This field is returned only when the protection_eligibility property is set to ELIGIBLE or PARTIALLY_ELIGIBLE. Possible values: - `ITEM_NOT_RECEIVED_ELIGIBLE: Sellers are protected against claims for items not received.` - `UNAUTHORIZED_PAYMENT_ELIGIBLE: Sellers are protected against claims for unauthorized payments.` One or both values can be returned.  | [optional] 


