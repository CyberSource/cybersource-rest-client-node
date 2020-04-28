# CyberSource.Ptsv2paymentsidrefundsPaymentInformationPaymentType

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A Payment Type is an agreed means for a payee to receive legal tender from a payer. The way one pays for a commercial financial transaction. Examples: Card, Bank Transfer, Digital, Direct Debit. Possible values: - &#x60;CARD&#x60; (use this for a PIN debit transaction) - &#x60;CHECK&#x60; (use this for eCheck payment and this is equivalent to invoke ics_ecp_debit or ics_ecp_credit service)  | [optional] 
**subTypeName** | **String** | SubType Name is detail information about Payment Type. Examples: For Card, if Credit or Debit or PrePaid. For Bank Transfer, if Online Bank Transfer or Wire Transfers. - &#x60;DEBIT&#x60; (use this for a PIN debit transaction)  | [optional] 
**method** | [**Ptsv2paymentsidrefundsPaymentInformationPaymentTypeMethod**](Ptsv2paymentsidrefundsPaymentInformationPaymentTypeMethod.md) |  | [optional] 


