# CyberSource.Ptsv2paymentsidrefundsPaymentInformationPaymentType

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A Payment Type is an agreed means for a payee to receive legal tender from a payer. The way one pays for a commercial financial transaction. Examples: Card, Bank Transfer, Digital, Direct Debit. Possible values: - `CARD` (use this for a PIN debit transaction) - `CHECK` (use this for all eCheck payment transactions - ECP Debit, ECP Follow-on Credit, ECP StandAlone Credit) - `bankTransfer` (use for Online Bank Transafer for methods such as P24, iDeal, Estonia Bank, KCP) - `localCard` (KCP Local card via Altpay) - `carrierBilling` (KCP Carrier Billing via Altpay)  | [optional] 
**subTypeName** | **String** | In case the APM supports multiple modes of initiation (e.g. Alipay via QR Code or Barcode)  | [optional] 
**method** | [**Ptsv2paymentsidcapturesPaymentInformationPaymentTypeMethod**](Ptsv2paymentsidcapturesPaymentInformationPaymentTypeMethod.md) |  | [optional] 


