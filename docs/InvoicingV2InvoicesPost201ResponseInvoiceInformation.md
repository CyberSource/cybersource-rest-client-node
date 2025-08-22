# CyberSource.InvoicingV2InvoicesPost201ResponseInvoiceInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoiceNumber** | **String** | Invoice Number. | [optional] 
**description** | **String** | The description included in the invoice. | [optional] 
**dueDate** | **Date** | The invoice due date. This field is required for creating an invoice. Format: `YYYY-MM-DD`, where `YYYY` = year, `MM` = month, and `DD` = day  | [optional] 
**expirationDate** | **Date** | Define an expiration date for the link.  Format: `YYYY-MM-DD`, where `YYYY` = year, `MM` = month, and `DD` = day  | [optional] 
**allowPartialPayments** | **Boolean** | If set to `true`, the payer can make a partial invoice payment. | [optional] [default to false]
**paymentLink** | **String** | Returns the payment link to an invoice when the invoice status is `SENT`, `CREATED`, `PARTIAL`, or `PAID`. | [optional] 
**deliveryMode** | **String** | If this field is set to 'None', an invoice will be generated with the status 'CREATED', but no email will be dispatched.    Possible values:        - `None`   - `Email`     | [optional] 
**customLabels** | [**[InvoicingV2InvoicesPost201ResponseInvoiceInformationCustomLabels]**](InvoicingV2InvoicesPost201ResponseInvoiceInformationCustomLabels.md) | A list of custom labels that allows you to override (rename) default field names and control the visibility of specific fields on invoices and items. If the list is empty, the labels will not be overwritten.  | [optional] 


