# CyberSource.Invoicingv2invoicesOrderInformationAmountDetailsTaxDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Indicates the type of tax data for the _taxDetails_ object.  Possible values:  - &#x60;alternate&#x60; - &#x60;local&#x60; - &#x60;national&#x60; - &#x60;vat&#x60; - &#x60;other&#x60;  For processor-specific details, see the &#x60;alternate_tax_amount&#x60;, &#x60;local_tax&#x60;, &#x60;national_tax&#x60; or &#x60;vat_tax_amount&#x60; field descriptions in [Level II and Level III Processing Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/Level_2_3_SCMP_API/html/)  | [optional] 
**amount** | **String** | Indicates the amount of tax based on the &#x60;type&#x60; field as described in the table below:  | type      | type description | | ------------- |:-------------:| | &#x60;alternate&#x60; | Total amount of alternate tax for the order. | | &#x60;local&#x60;     | Sales tax for the order. | | &#x60;national&#x60;  | National tax for the order. | | &#x60;vat&#x60;       | Total amount of value added tax (VAT) included in the order. | | &#x60;other&#x60;     | Other tax. |  | [optional] 
**rate** | **String** | Rate of VAT or other tax for the order.  Example 0.040 (&#x3D;4%)  Valid range: 0.01 to 0.99 (1% to 99%, with only whole percentage values accepted; values with additional decimal places will be truncated)  For processor-specific details, see the &#x60;alternate_tax_amount&#x60;, &#x60;vat_rate&#x60;, &#x60;vat_tax_rate&#x60;, &#x60;local_tax&#x60;, &#x60;national_tax&#x60;, &#x60;vat_tax_amount&#x60; or &#x60;other_tax#_rate&#x60; field descriptions in the [Level II and Level III Processing Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/Level_2_3_SCMP_API/html/)  | [optional] 


