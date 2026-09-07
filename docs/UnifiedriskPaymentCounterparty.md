# CyberSource.UnifiedriskPaymentCounterparty

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountId** | **String** | Counterparty account identifier | [optional] 
**accountFormat** | **String** | Counterparty account format | [optional] 
**branchId** | **String** | Counterparty branch identifier | [optional] 
**name** | **String** | Full legal name of the counterparty (individual or business) used for identity matching, beneficiary validation, and fraud screening | [optional] 
**type** | **String** | Classification of the counterparty entity type (e.g., INDIVIDUAL, BUSINESS, FINANCIAL_INSTITUTION). Used for AML screening and beneficiary risk assessment | [optional] 
**agentId** | **String** | Unique identifier for the financial agent or correspondent bank through which the counterparty payment is being routed | [optional] 
**agentName** | **String** | Name of the financial agent or correspondent institution facilitating the payment to the counterparty | [optional] 
**branchAddress** | [**UnifiedriskPaymentCounterpartyBranchAddress**](UnifiedriskPaymentCounterpartyBranchAddress.md) |  | [optional] 
**address** | [**UnifiedriskPaymentCounterpartyAddress**](UnifiedriskPaymentCounterpartyAddress.md) |  | [optional] 
**creationTime** | **String** | Timestamp when the counterparty record was created in the system, expressed in ISO 8601 format. Used for new payee fraud detection | [optional] 


