# CyberSource.Invoicingv2invoicesOrderInformationAmountDetailsTaxDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Indicates the type of tax data for the _taxDetails_ object.  Possible values:  - `alternate` - `local` - `national` - `vat` - `other` - `green`  | [optional] 
**amount** | **String** | Indicates the amount of tax based on the `type` field as described in the table below:  | type      | type description | | ------------- |:-------------:| | `alternate` | Total amount of alternate tax for the order. | | `local`     | Sales tax for the order. | | `national`  | National tax for the order. | | `vat`       | Total amount of value added tax (VAT) included in the order. | | `other`     | Other tax. | | `green`     | Green tax amount for Korean Processing. |  | [optional] 
**rate** | **String** | Rate of VAT or other tax for the order.  Example 0.040 (=4%)  Valid range: 0.01 to 0.99 (1% to 99%, with only whole percentage values accepted; values with additional decimal places will be truncated)  | [optional] 


