# CyberSource.Ptsv2paymentsidcapturesOrderInformationInvoiceDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**purchaseOrderNumber** | **String** | Value used by your customer to identify the order. This value is typically a purchase order number. CyberSource recommends that you do not populate the field with all zeros or nines.  | [optional] 
**purchaseOrderDate** | **String** | Date the order was processed. `Format: YYYY-MM-DD`.  | [optional] 
**purchaseContactName** | **String** | The name of the individual or the company contacted for company authorized purchases.  | [optional] 
**taxable** | **Boolean** | Flag that indicates whether an order is taxable. This value must be true if the sum of all _lineItems[].taxAmount_ values > 0.  If you do not include any `lineItems[].taxAmount` values in your request, CyberSource does not include `invoiceDetails.taxable` in the data it sends to the processor.  Possible values:  - **true**  - **false**  | [optional] 
**vatInvoiceReferenceNumber** | **String** | VAT invoice number associated with the transaction.  | [optional] 
**commodityCode** | **String** | International description code of the overall order's goods or services or the Categorizes purchases for VAT reporting. Contact your acquirer for a list of codes.  | [optional] 
**transactionAdviceAddendum** | [**[Ptsv2paymentsOrderInformationInvoiceDetailsTransactionAdviceAddendum]**](Ptsv2paymentsOrderInformationInvoiceDetailsTransactionAdviceAddendum.md) |  | [optional] 


