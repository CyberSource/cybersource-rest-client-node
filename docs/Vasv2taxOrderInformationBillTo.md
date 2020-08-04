# CyberSource.Vasv2taxOrderInformationBillTo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address1** | **String** | First line of the billing street address.  #### Tax Calculation Required for U.S. and Canadian taxes. Not applicable to international and value added taxes.  | [optional] 
**address2** | **String** | Second line of the billing street address.  #### Tax Calculation Optional for U.S. and Canadian taxes. Not applicable to international and value added taxes.  | [optional] 
**locality** | **String** | Credit card billing city.  #### Tax Calculation Required for U.S. and Canadian taxes only. Not applicable to international and value added taxes.  | [optional] 
**administrativeArea** | **String** | Credit card billing state or province.  #### Tax Calculation Required for U.S. and Canadian taxes. Not applicable to international and value added taxes.  | [optional] 
**postalCode** | **String** | Postal code for the billing address. The postal code must consist of 5 to 9 digits. If the billing country is the U.S., the 9-digit postal code must follow this format:  [5 digits][dash][4 digits]  **Example**: 12345-6789  If the billing country is Canada, the 6-digit postal code must follow this format:  [alpha][numeric][alpha] [numeric][alpha][numeric]  **Example**: A1B 2C3  #### Tax Calculation Required for U.S. and Canadian taxes. Not applicable to international and value added taxes.  | [optional] 
**country** | **String** | Credit card billing country. Use the [ISO Standard Country Codes](https://developer.cybersource.com/library/documentation/sbc/quickref/countries_alpha_list.pdf).  If &#x60;orderInformation.shipTo.country&#x60; is not provided, &#x60;orderInformation.billTo.country&#x60; is used in its place. If  &#x60;orderInformation.billTo.country&#x60; is set to &#x60;US&#x60; or &#x60;CA&#x60;, then &#x60;orderInformation.billTo.postalCode&#x60; and &#x60;orderInformation.billTo.administrativeArea&#x60; are also required.  #### Tax Calculation Required for U.S., Canadian, international and value added taxes.  | [optional] 


