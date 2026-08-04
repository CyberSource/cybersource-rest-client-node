# CyberSource.Invoicingv2invoicesInvoiceInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoiceNumber** | **String** | Invoice Number. | [optional] 
**transactionReferenceNumber** | **String** | The transaction reference number (TRN) is a identifier assigned to each payment transaction that allows merchants, customers, and payment processors to track and reference specific transactions throughout their lifecycle.  When provided, this value is passed to the payment processor as the reconciliation ID for the payment. For invoices this is typically the invoice number, and for purchase or donation links it is typically the link identifier.  Only letters and numbers are allowed; spaces and other special characters are not permitted.  | [optional] 
**description** | **String** | The description included in the invoice. | 
**dueDate** | **Date** | The invoice due date. This field is required for creating an invoice. Format: `YYYY-MM-DD`, where `YYYY` = year, `MM` = month, and `DD` = day.  The invoice link automatically expires 12 months after the due date.  | 
**expirationDate** | **Date** | Define an expiration date for the link.  The date must be today or in the future.  Format: `YYYY-MM-DD`, where `YYYY` = year, `MM` = month, and `DD` = day.  The invoice link automatically expires 12 months after the due date.  | [optional] 
**sendImmediately** | **Boolean** | If set to `true`, we send the invoice immediately. If set to `false`, the invoice remains in draft mode. | [optional] [default to false]
**allowPartialPayments** | **Boolean** | If set to `true`, the payer can make a partial invoice payment. | [optional] [default to false]
**deliveryMode** | **String** | If this field is set to 'None', an invoice will be generated with the status 'CREATED', but no email will be dispatched.    Possible values:        - `None`   - `Email`     | [optional] 


