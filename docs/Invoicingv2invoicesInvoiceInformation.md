# CyberSource.Invoicingv2invoicesInvoiceInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoiceNumber** | **String** | Invoice Number. | [optional] 
**description** | **String** | The description included in the invoice. | [optional] 
**dueDate** | **Date** | The invoice due date. This field is required for creating an invoice. Format: &#x60;YYYY-MM-DD&#x60;, where &#x60;YYYY&#x60; &#x3D; year, &#x60;MM&#x60; &#x3D; month, and &#x60;DD&#x60; &#x3D; day  | [optional] 
**sendImmediately** | **Boolean** | If set to &#x60;true&#x60;, we send the invoice immediately. If set to &#x60;false&#x60;, the invoice remains in draft mode. | [optional] 
**allowPartialPayments** | **Boolean** | If set to &#x60;true&#x60;, the payer can make a partial invoice payment. | [optional] 
**deliveryMode** | **String** | If set to &#x60;None&#x60;, the invoice is created, and its status is set to &#39;CREATED&#39;, but no email is sent.    Possible values:        - &#x60;None&#x60;   - &#x60;Email&#x60;   | [optional] 


