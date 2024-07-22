# CyberSource.Ptsv2paymentsOrderInformationAmountDetailsTaxDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Indicates the type of tax data for the _taxDetails_ object.  Possible values:  - `alternate` - `local` - `national` - `vat` - `other` - `green`  | [optional] 
**amount** | **String** | Indicates the amount of tax based on the `type` field as described in the table below:  | type      | type description | | ------------- |:-------------:| | `alternate` | Total amount of alternate tax for the order. | | `local`     | Sales tax for the order. | | `national`  | National tax for the order. | | `vat`       | Total amount of value added tax (VAT) included in the order. | | `other`     | Other tax. | | `green`     | Green tax amount for Korean Processing. |  | [optional] 
**rate** | **String** | Rate of VAT or other tax for the order.  Example 0.040 (=4%)  Valid range: 0.01 to 0.99 (1% to 99%, with only whole percentage values accepted; values with additional decimal places will be truncated)  | [optional] 
**code** | **String** | Type of tax being applied to the item.  #### FDC Nashville Global - `alternate_tax_type_applied` - `alternate_tax_type_identifier`  #### Worldpay VAP - `alternate_tax_type_identifier`  #### RBS WorldPay Atlanta - `tax_type_applied`  #### TSYS Acquiring Solutions - `tax_type_applied` - `local_tax_indicator`  #### Chase Paymentech Solutions - `tax_type_applied`  #### Elavon Americas - `local_tax_indicator`  #### FDC Compass - `tax_type_applied`  #### OmniPay Direct - `local_tax_indicator`  | [optional] 
**taxId** | **String** | Your tax ID number to use for the alternate tax amount. Required if you set alternate tax amount to any value, including zero. You may send this field without sending alternate tax amount.  | [optional] 
**applied** | **Boolean** | Flag that indicates whether the alternate tax amount (`orderInformation.amountDetails.taxDetails[].amount`) is included in the request.  Possible values: - `false`: alternate tax amount is not included in the request. - `true`: alternate tax amount is included in the request.  | [optional] 
**exemptionCode** | **String** | Status code for exemption from sales and use tax. This field is a pass-through, which means that CyberSource does not verify the value or modify it in any way before sending it to the processor.  | [optional] 


