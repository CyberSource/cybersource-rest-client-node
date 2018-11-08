# CyberSource.Ptsv2paymentsOrderInformationLineItems

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**productCode** | **String** | Type of product. This value is used to determine the category that the product is in: electronic, handling, physical, service, or shipping. The default value is **default**.  For a payment, when you set this field to a value other than default or any of the values related to shipping and handling, below fields _quantity_, _productName_, and _productSKU_ are required.  | [optional] 
**productName** | **String** | For PAYMENT and CAPTURE API, this field is required when above _productCode_ is not **default** or one of the values related to shipping and handling.  | [optional] 
**productSku** | **String** | Identification code for the product. For PAYMENT and CAPTURE API, this field is required when above _productCode_ is not **default** or one of the values related to shipping and/or handling.  | [optional] 
**quantity** | **Number** | For a payment or capture, this field is required when _productCode_ is not **default** or one of the values related to shipping and handling.  | [optional] 
**unitPrice** | **String** | Per-item price of the product. This value cannot be negative. You can include a decimal point (.), but you cannot include any other special characters. CyberSource truncates the amount to the correct number of decimal places.  For processor-specific information, see the amount field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html)  | [optional] 
**unitOfMeasure** | **String** | Unit of measure, or unit of measure code, for the item.  | [optional] 
**totalAmount** | **String** | Total amount for the item. Normally calculated as the unit price x quantity.  | [optional] 
**taxAmount** | **String** | Total tax to apply to the product. This value cannot be negative. The tax amount and the offer amount must be in the same currency. The tax amount field is additive.  The following example uses a two-exponent currency such as USD:   1. You include each line item in your request.  ..- 1st line item has amount&#x3D;10.00, quantity&#x3D;1, and taxAmount&#x3D;0.80  ..- 2nd line item has amount&#x3D;20.00, quantity&#x3D;1, and taxAmount&#x3D;1.60  2. The total amount authorized will be 32.40, not 30.00 with 2.40 of tax included.  This field is frequently used for Level II and Level III transactions.  | [optional] 
**taxRate** | **String** | Tax rate applied to the item. See \&quot;Numbered Elements,\&quot; page 14.  Visa: Valid range is 0.01 to 0.99 (1% to 99%, with only whole percentage values accepted; values with additional decimal places will be truncated).  Mastercard: Valid range is 0.00001 to 0.99999 (0.001% to 99.999%).  | [optional] 
**taxAppliedAfterDiscount** | **String** | Flag to indicate how you handle discount at the line item level.   - 0: no line level discount provided  - 1: tax was calculated on the post-discount line item total  - 2: tax was calculated on the pre-discount line item total  &#x60;Note&#x60; Visa will inset 0 (zero) if an invalid value is included in this field.  This field relates to the value in the _lineItems[].discountAmount_ field.  | [optional] 
**taxStatusIndicator** | **String** | Flag to indicate whether tax is exempted or not included.   - 0: tax not included  - 1: tax included  - 2: transaction is not subject to tax  | [optional] 
**taxTypeCode** | **String** | Type of tax being applied to the item. Possible values:  Below values are used by **RBS WorldPay Atlanta**, **FDC Nashville Global**, **Litle**   - 0000: unknown tax type  - 0001: federal/national sales tax  - 0002: state sales tax  - 0003: city sales tax  - 0004: local sales tax  - 0005: municipal sales tax  - 0006: other tax  - 0010: value-added tax  - 0011: goods and services tax  - 0012: provincial sales tax  - 0013: harmonized sales tax  - 0014: Quebec sales tax (QST)  - 0020: room tax  - 0021: occupancy tax  - 0022: energy tax  - Blank: Tax not supported on line item.  | [optional] 
**amountIncludesTax** | **Boolean** | Flag that indicates whether the tax amount is included in the Line Item Total.  | [optional] 
**typeOfSupply** | **String** | Flag to indicate whether the purchase is categorized as goods or services. Possible values:   - 00: goods  - 01: services  | [optional] 
**commodityCode** | **String** | Commodity code or International description code used to classify the item. Contact your acquirer for a list of codes.  | [optional] 
**discountAmount** | **String** | Discount applied to the item. | [optional] 
**discountApplied** | **Boolean** | Flag that indicates whether the amount is discounted.  If you do not provide a value but you set Discount Amount to a value greater than zero, then CyberSource sets this field to **true**.  | [optional] 
**discountRate** | **String** | Rate the item is discounted. Maximum of 2 decimal places.  Example 5.25 (&#x3D;5.25%)  | [optional] 
**invoiceNumber** | **String** | Field to support an invoice number for a transaction. You must specify the number of line items that will include an invoice number. By default, the first line item will include an invoice number field. The invoice number field can be included for up to 10 line items.  | [optional] 
**taxDetails** | [**[Ptsv2paymentsOrderInformationAmountDetailsTaxDetails]**](Ptsv2paymentsOrderInformationAmountDetailsTaxDetails.md) |  | [optional] 
**fulfillmentType** | **String** | TODO | [optional] 


