# CyberSource.Invoicingv2invoicesOrderInformationAmountDetailsTaxDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Indicates the type of tax data for the _taxDetails_ object.  Possible values:  - `alternate` - `local` - `national` - `vat` - `other` - `green`  For processor-specific details, see the `alternate_tax_amount`, `local_tax`, `national_tax` or `vat_tax_amount` field descriptions in [Level II and Level III Processing Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/Level_2_3_SCMP_API/html/)  | [optional] 
**amount** | **String** | Indicates the amount of tax based on the `type` field as described in the table below:  | type      | type description | | ------------- |:-------------:| | `alternate` | Total amount of alternate tax for the order. | | `local`     | Sales tax for the order. | | `national`  | National tax for the order. | | `vat`       | Total amount of value added tax (VAT) included in the order. | | `other`     | Other tax. | | `green`     | Green tax amount for Korean Processing. |  | [optional] 
**rate** | **String** | Rate of VAT or other tax for the order.  Example 0.040 (=4%)  Valid range: 0.01 to 0.99 (1% to 99%, with only whole percentage values accepted; values with additional decimal places will be truncated)  For processor-specific details, see the `alternate_tax_amount`, `vat_rate`, `vat_tax_rate`, `local_tax`, `national_tax`, `vat_tax_amount` or `other_tax#_rate` field descriptions in the [Level II and Level III Processing Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/Level_2_3_SCMP_API/html/)  | [optional] 


