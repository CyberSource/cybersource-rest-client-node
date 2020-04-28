# CyberSource.TssV2TransactionsGet200ResponsePaymentInformationPaymentType

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A Payment Type is an agreed means for a payee to receive legal tender from a payer. The way one pays for a commercial financial transaction. Examples: Card, Bank Transfer, Digital, Direct Debit. Possible values: - &#x60;CARD&#x60; (use this for a PIN debit transaction) - &#x60;CHECK&#x60; (use this for eCheck payment and this is equivalent to invoke ics_ecp_debit or ics_ecp_credit service)  | [optional] 
**type** | **String** | Indicates the payment type used in this payment transaction. Example: credit card, check | [optional] 
**method** | **String** | Indicates the payment method used in this payment transaction. | [optional] 


