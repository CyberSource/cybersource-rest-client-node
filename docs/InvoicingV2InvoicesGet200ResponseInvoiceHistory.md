# CyberSource.InvoicingV2InvoicesGet200ResponseInvoiceHistory

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | **String** | The event triggered for the invoice.  Possible values:  - `UNKNOWN`  - `DRAFT`  - `CREATE`  - `UPDATE`  - `SEND`  - `RESEND`  - `REMINDER`  - `PAYMENT`  - `CANCEL`  - `PENDING`  - `REJECTED`  | [optional] 
**_date** | **Date** | The date and time when the invoice event was triggered in ISO 8601 format. Format: YYYY-MM-DDThh:mm:ssZ  | [optional] 
**transactionDetails** | [**InvoicingV2InvoicesGet200ResponseTransactionDetails**](InvoicingV2InvoicesGet200ResponseTransactionDetails.md) |  | [optional] 


