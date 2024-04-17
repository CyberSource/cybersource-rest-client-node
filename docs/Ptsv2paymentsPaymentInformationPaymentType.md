# CyberSource.Ptsv2paymentsPaymentInformationPaymentType

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A Payment Type is an agreed means for a payee to receive legal tender from a payer. The way one pays for a commercial financial transaction. Examples: Card, Bank Transfer, Digital, Direct Debit. Possible values: - `CARD` (use this for a PIN debit transaction) - `CHECK` (use this for all eCheck payment transactions - ECP Debit, ECP Follow-on Credit, ECP StandAlone Credit) - `bankTransfer` (use for Online Bank Transafer for methods such as P24, iDeal, Estonia Bank, KCP) - `localCard` (KCP Local card via Altpay) - `carrierBilling` (KCP Carrier Billing via Altpay)  | [optional] 
**subTypeName** | **String** | Detailed information about the Payment Type. Possible values: - `DEBIT`: Use this value to indicate a PIN debit transaction.  Examples: For Card, if Credit or Debit or PrePaid. For Bank Transfer, if Online Bank Transfer or Wire Transfers.  | [optional] 
**method** | [**Ptsv2paymentsPaymentInformationPaymentTypeMethod**](Ptsv2paymentsPaymentInformationPaymentTypeMethod.md) |  | [optional] 


