# CyberSource.Invoicingv2invoicesInvoiceInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoiceNumber** | **String** | Invoice Number. | [optional] 
**description** | **String** | The description included in the invoice. | [optional] 
**dueDate** | **Date** | The invoice due date. This field is required for creating an invoice. Format: `YYYY-MM-DD`, where `YYYY` = year, `MM` = month, and `DD` = day  | [optional] 
**sendImmediately** | **Boolean** | If set to `true`, we send the invoice immediately. If set to `false`, the invoice remains in draft mode. | [optional] 
**allowPartialPayments** | **Boolean** | If set to `true`, the payer can make a partial invoice payment. | [optional] 
**deliveryMode** | **String** | If set to `None`, the invoice is created, and its status is set to 'CREATED', but no email is sent.    Possible values:        - `None`   - `Email`   | [optional] 


