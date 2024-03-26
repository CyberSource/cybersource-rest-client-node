# CyberSource.PtsV2PaymentsOrderPost201ResponseProcessorInformationSellerProtection

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eligibilty** | **String** | The level of seller protection in force for the transaction. Possible values: - &#x60;ELIGIBLE&#x60; - &#x60;PARTIALLY_ELIGIBLE&#x60; - &#x60;INELIGIBLE&#x60;  | [optional] 
**type** | **String** | The kind of seller protection in force for the transaction. This field is returned only when the protection eligibility is set to ELIGIBLE or PARTIALLY_ELIGIBLE. Possible values: - &#x60;ITEM_NOT_RECEIVED_ELIGIBLE: Sellers are protected against claims for items not received.&#x60; - &#x60;UNAUTHORIZED_PAYMENT_ELIGIBLE: Sellers are protected against claims for unauthorized payments.One or both values can be returned.&#x60;  | [optional] 


