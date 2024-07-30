# CyberSource.Invoicingv2invoicesOrderInformationAmountDetailsFreight

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **String** | Total freight or shipping and handling charges for the order. When you include this field in your request, you must also include the **totalAmount** field.  | [optional] 
**taxable** | **Boolean** | Flag that indicates whether an order is taxable. This value must be true if the sum of all _lineItems[].taxAmount_ values > 0.  If you do not include any `lineItems[].taxAmount` values in your request, CyberSource does not include `invoiceDetails.taxable` in the data it sends to the processor.  Possible values:  - **true**  - **false**  | [optional] 
**taxRate** | **String** | Shipping Tax rate applied to the freight amount.  **Visa**: Valid range is 0.01 to 0.99 (1% to 99%, with only whole percentage values accepted; values with additional decimal places will be truncated).  **Mastercard**: Valid range is 0.00001 to 0.99999 (0.001% to 99.999%).  | [optional] 


