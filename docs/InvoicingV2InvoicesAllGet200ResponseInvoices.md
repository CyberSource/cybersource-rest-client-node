# CyberSource.InvoicingV2InvoicesAllGet200ResponseInvoices

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**InvoicingV2InvoicesAllGet200ResponseLinks1**](InvoicingV2InvoicesAllGet200ResponseLinks1.md) |  | [optional] 
**id** | **String** | An unique identification number assigned by CyberSource to identify the submitted request. It is also appended to the endpoint of the resource.  On incremental authorizations, this value with be the same as the identification number returned in the original authorization response.  | [optional] 
**status** | **String** | The status of the invoice.  Possible values: - DRAFT - CREATED - SENT - PARTIAL - PAID - CANCELED  | [optional] 
**customerInformation** | [**InvoicingV2InvoicesAllGet200ResponseCustomerInformation**](InvoicingV2InvoicesAllGet200ResponseCustomerInformation.md) |  | [optional] 
**invoiceInformation** | [**InvoicingV2InvoicesAllGet200ResponseInvoiceInformation**](InvoicingV2InvoicesAllGet200ResponseInvoiceInformation.md) |  | [optional] 
**orderInformation** | [**InvoicingV2InvoicesAllGet200ResponseOrderInformation**](InvoicingV2InvoicesAllGet200ResponseOrderInformation.md) |  | [optional] 


