# CyberSource.Invoicingv2invoicesidInvoiceInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | The description included in the invoice. | 
**dueDate** | **Date** | The invoice due date. This field is required for creating an invoice. Format: `YYYY-MM-DD`, where `YYYY` = year, `MM` = month, and `DD` = day  | 
**expirationDate** | **Date** | Define an expiration date for the link.  Format: `YYYY-MM-DD`, where `YYYY` = year, `MM` = month, and `DD` = day  | [optional] 
**sendImmediately** | **Boolean** | If set to `true`, we send the invoice immediately. If set to `false`, the invoice remains in draft mode. | [optional] [default to false]
**allowPartialPayments** | **Boolean** | If set to `true`, the payer can make a partial invoice payment. | [optional] [default to false]
**deliveryMode** | **String** | If this field is set to 'None', an invoice will be generated with the status 'CREATED', but no email will be dispatched.    Possible values:        - `None`   - `Email`     | [optional] 


