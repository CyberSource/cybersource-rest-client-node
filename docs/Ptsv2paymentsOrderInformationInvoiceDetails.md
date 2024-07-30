# CyberSource.Ptsv2paymentsOrderInformationInvoiceDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoiceNumber** | **String** | Invoice Number. | [optional] 
**barcodeNumber** | **String** | Barcode Number. | [optional] 
**expirationDate** | **String** | Expiration Date. | [optional] 
**purchaseOrderNumber** | **String** | Value used by your customer to identify the order. This value is typically a purchase order number. CyberSource recommends that you do not populate the field with all zeros or nines.  | [optional] 
**purchaseOrderDate** | **String** | Date the order was processed. `Format: YYYY-MM-DD`.  | [optional] 
**purchaseContactName** | **String** | The name of the individual or the company contacted for company authorized purchases.  | [optional] 
**taxable** | **Boolean** | Flag that indicates whether an order is taxable. This value must be true if the sum of all _lineItems[].taxAmount_ values > 0.  If you do not include any `lineItems[].taxAmount` values in your request, CyberSource does not include `invoiceDetails.taxable` in the data it sends to the processor.  Possible values:  - **true**  - **false**  | [optional] 
**vatInvoiceReferenceNumber** | **String** | VAT invoice number associated with the transaction.  | [optional] 
**commodityCode** | **String** | International description code of the overall order's goods or services or the Categorizes purchases for VAT reporting. Contact your acquirer for a list of codes.  | [optional] 
**merchandiseCode** | **Number** | Identifier for the merchandise. This field is supported only on the processors listed in this field description.  #### American Express Direct Possible value: - 1000: Gift card  #### CyberSource through VisaNet This value must be right justified. In Japan, this value is called a _goods code_.  #### JCN Gateway This value must be right justified. In Japan, this value is called a _goods code_.  | [optional] 
**transactionAdviceAddendum** | [**[Ptsv2paymentsOrderInformationInvoiceDetailsTransactionAdviceAddendum]**](Ptsv2paymentsOrderInformationInvoiceDetailsTransactionAdviceAddendum.md) |  | [optional] 
**referenceDataCode** | **String** | Code that identifies the value of the `referenceDataNumber` field.  This field is a pass-through, which means that CyberSource does not verify the value or modify it in any way before sending it to the processor.  | [optional] 
**referenceDataNumber** | **String** | Reference number. The meaning of this value is identified by the value of the `referenceDataCode` field.  This field is a pass-through, which means that CyberSource does not verify the value or modify it in any way before sending it to the processor.  | [optional] 
**salesSlipNumber** | **Number** | Transaction identifier that is generated. You have the option of printing the sales slip number on the receipt. This field is supported only on Cybersource through Visanet and JCN gateway.  Optional field.  #### Card Present processing message If you included this field in the request, the returned value is the value that you sent in the request. If you did not include this field in the request, the system generated this value for you.  The difference between this reply field and the `processorInformation.systemTraceAuditNumber` field is that the system generates the system trace audit number (STAN), and you must print the receipt number on the receipt; whereas you can generate the sales slip number, and you can choose to print the sales slip number on the receipt.  | [optional] 
**invoiceDate** | **String** | Date of the tax calculation. Use format YYYYMMDD. You can provide a date in the past if you are calculating tax for a refund and want to know what the tax was on the date the order was placed. You can provide a date in the future if you are calculating the tax for a future date, such as an upcoming tax holiday.  The default is the date, in Pacific time, that the bank receives the request. Keep this in mind if you are in a different time zone and want the tax calculated with the rates that are applicable on a specific date.  #### Tax Calculation Optional field for U.S., Canadian, international tax, and value added taxes.  | [optional] 
**costCenter** | **String** | Cost centre of the merchant | [optional] 
**issuerMessage** | **String** | Text message from the issuer. If you give the customer a receipt, display this value on the receipt. | [optional] 
**productDescription** | **String** | Brief description of item. | [optional] 


