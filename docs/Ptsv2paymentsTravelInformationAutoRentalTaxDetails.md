# CyberSource.Ptsv2paymentsTravelInformationAutoRentalTaxDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **String** | Indicates the amount of tax based on the `type` field as described in the table below:  | [optional] 
**rate** | **String** | Rate of VAT or other tax for the order.  Example 0.040 (=4%)  Valid range: 0.01 to 0.99 (1% to 99%, with only whole percentage values accepted; values with additional decimal places will be truncated)  | [optional] 
**applied** | **Boolean** | Flag that indicates whether the tax amount (`travelInformation.autoRental.taxDetails.amount`) is included in the request.  Possible values: - `false`: tax amount is not included in the request. - `true`:  tax amount is included in the request.  | [optional] 
**exemptionCode** | **String** | Status code for exemption from sales and use tax. This field is a pass-through, which means that CyberSource does not verify the value or modify it in any way before sending it to the processor.  | [optional] 
**taxType** | **String** | Different taxes the rental agency applies to the rental agreement such as tourist tax, airport tax, or rental tax.  | [optional] 
**taxSummary** | **String** | Summary of all tax types  | [optional] 


