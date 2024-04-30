# CyberSource.Vasv2taxOrderInformationBillTo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address1** | **String** | First line of the billing street address.  #### Tax Calculation Required for U.S. and Canadian taxes. Not applicable to international and value added taxes.  | [optional] 
**address2** | **String** | Second line of the billing street address.  #### Tax Calculation Optional for U.S. and Canadian taxes. Not applicable to international and value added taxes.  | [optional] 
**locality** | **String** | Credit card billing city.  #### Tax Calculation Required for U.S. and Canadian taxes only. Not applicable to international and value added taxes.  | [optional] 
**administrativeArea** | **String** | Credit card billing state or province.  #### Tax Calculation Required for U.S. and Canadian taxes. Not applicable to international and value added taxes.  | [optional] 
**postalCode** | **String** | Postal code for the billing address. The postal code must consist of 5 to 9 digits. If the billing country is the U.S., the 9-digit postal code must follow this format:  [5 digits][dash][4 digits]  **Example**: 12345-6789  If the billing country is Canada, the 6-digit postal code must follow this format:  [alpha][numeric][alpha] [numeric][alpha][numeric]  **Example**: A1B 2C3  #### Tax Calculation Required for U.S. and Canadian taxes. Not applicable to international and value added taxes.  | [optional] 
**country** | **String** | Credit card billing country. Use the [ISO Standard Country Codes](https://developer.cybersource.com/library/documentation/sbc/quickref/countries_alpha_list.pdf).  If `orderInformation.shipTo.country` is not provided, `orderInformation.billTo.country` is used in its place. If  `orderInformation.billTo.country` is set to `US` or `CA`, then `orderInformation.billTo.postalCode` and `orderInformation.billTo.administrativeArea` are also required.  #### Tax Calculation Required for U.S., Canadian, international and value added taxes.  | [optional] 


