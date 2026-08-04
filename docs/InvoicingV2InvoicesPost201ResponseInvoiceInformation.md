# CyberSource.InvoicingV2InvoicesPost201ResponseInvoiceInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoiceNumber** | **String** | Invoice Number. | [optional] 
**transactionReferenceNumber** | **String** | The transaction reference number (TRN) is a identifier assigned to each payment transaction that allows merchants, customers, and payment processors to track and reference specific transactions throughout their lifecycle.  When provided, this value is passed to the payment processor as the reconciliation ID for the payment. For invoices this is typically the invoice number, and for purchase or donation links it is typically the link identifier.  Only letters and numbers are allowed; spaces and other special characters are not permitted.  | [optional] 
**description** | **String** | The description included in the invoice. | [optional] 
**dueDate** | **Date** | The invoice due date. This field is required for creating an invoice. Format: `YYYY-MM-DD`, where `YYYY` = year, `MM` = month, and `DD` = day.  The invoice link automatically expires 12 months after the due date.  | [optional] 
**expirationDate** | **Date** | Define an expiration date for the link.  The date must be today or in the future.  Format: `YYYY-MM-DD`, where `YYYY` = year, `MM` = month, and `DD` = day.  The invoice link automatically expires 12 months after the due date.  | [optional] 
**allowPartialPayments** | **Boolean** | If set to `true`, the payer can make a partial invoice payment. | [optional] [default to false]
**paymentLink** | **String** | Returns the payment link to an invoice when the invoice status is `SENT`, `CREATED`, `PARTIAL`, or `PAID`. | [optional] 
**deliveryMode** | **String** | If this field is set to 'None', an invoice will be generated with the status 'CREATED', but no email will be dispatched.    Possible values:        - `None`   - `Email`     | [optional] 
**customLabels** | [**[InvoicingV2InvoicesPost201ResponseInvoiceInformationCustomLabels]**](InvoicingV2InvoicesPost201ResponseInvoiceInformationCustomLabels.md) | A list of custom labels that allows you to override (rename) default field names and control the visibility of specific fields on invoices and items. If the list is empty, the labels will not be overwritten.  | [optional] 


