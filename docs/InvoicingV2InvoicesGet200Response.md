# CyberSource.InvoicingV2InvoicesGet200Response

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**InvoicingV2InvoicesAllGet200ResponseLinks1**](InvoicingV2InvoicesAllGet200ResponseLinks1.md) |  | [optional] 
**id** | **String** | An unique identification number assigned by CyberSource to identify the submitted request. It is also appended to the endpoint of the resource.  On incremental authorizations, this value with be the same as the identification number returned in the original authorization response.  | [optional] 
**submitTimeUtc** | **String** | Time of request in UTC. Format: &#x60;YYYY-MM-DDThh:mm:ssZ&#x60; Example &#x60;2016-08-11T22:47:57Z&#x60; equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The &#x60;T&#x60; separates the date and the time. The &#x60;Z&#x60; indicates UTC.  | [optional] 
**status** | **String** | The status of the invoice.  Possible values: - DRAFT - CREATED - SENT - PARTIAL - PAID - CANCELED  | [optional] 
**customerInformation** | [**Invoicingv2invoicesCustomerInformation**](Invoicingv2invoicesCustomerInformation.md) |  | [optional] 
**invoiceInformation** | [**InvoicingV2InvoicesPost201ResponseInvoiceInformation**](InvoicingV2InvoicesPost201ResponseInvoiceInformation.md) |  | [optional] 
**orderInformation** | [**InvoicingV2InvoicesPost201ResponseOrderInformation**](InvoicingV2InvoicesPost201ResponseOrderInformation.md) |  | [optional] 
**invoiceHistory** | [**[InvoicingV2InvoicesGet200ResponseInvoiceHistory]**](InvoicingV2InvoicesGet200ResponseInvoiceHistory.md) |  | [optional] 


