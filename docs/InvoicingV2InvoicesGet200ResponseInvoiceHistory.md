# CyberSource.InvoicingV2InvoicesGet200ResponseInvoiceHistory

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | **String** | The event triggered for the invoice.  Possible values:  - &#x60;CREATE&#x60;  - &#x60;UPDATE&#x60;  - &#x60;SEND&#x60;  - &#x60;RESEND&#x60;  - &#x60;REMINDER&#x60;  - &#x60;PAYMENT&#x60;  - &#x60;CANCEL&#x60;  | [optional] 
**_date** | **Date** | The date and time when the invoice event was triggered in ISO 8601 format. Format: YYYY-MM-DDThh:mm:ssZ  | [optional] 
**transactionDetails** | [**InvoicingV2InvoicesGet200ResponseTransactionDetails**](InvoicingV2InvoicesGet200ResponseTransactionDetails.md) |  | [optional] 


