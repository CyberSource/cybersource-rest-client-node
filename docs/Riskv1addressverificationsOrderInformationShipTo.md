# CyberSource.Riskv1addressverificationsOrderInformationShipTo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address1** | **String** | First line of the shipping address.  Required field for authorization if any shipping address information is included in the request; otherwise, optional.  | 
**address2** | **String** | Second line of the shipping address.  Optional field.  | [optional] 
**address3** | **String** | Third line of the shipping address. | [optional] 
**address4** | **String** | Fourth line of the shipping address. | [optional] 
**administrativeArea** | **String** | State or province of the shipping address. Use the [State, Province, and Territory Codes for the United States and Canada](https://developer.cybersource.com/library/documentation/sbc/quickref/states_and_provinces.pdf)  Required field for authorization if any shipping address information is included in the request and shipping to the U.S. or Canada; otherwise, optional.  | [optional] 
**country** | **String** | Country of the shipping address. Use the two-character [ISO Standard Country Codes.](http://apps.cybersource.com/library/documentation/sbc/quickref/countries_alpha_list.pdf)  Required field for authorization if any shipping address information is included in the request; otherwise, optional.  | 
**locality** | **String** | City of the shipping address.  Required field for authorization if any shipping address information is included in the request and shipping to the U.S. or Canada; otherwise, optional.  | [optional] 
**postalCode** | **String** | Postal code for the shipping address. The postal code must consist of 5 to 9 digits.  Required field for authorization if any shipping address information is included in the request and shipping to the U.S. or Canada; otherwise, optional.  When the billing country is the U.S., the 9-digit postal code must follow this format: [5 digits][dash][4 digits]  Example 12345-6789  When the billing country is Canada, the 6-digit postal code must follow this format: [alpha][numeric][alpha][space][numeric][alpha][numeric]  Example A1B 2C3  #### American Express Direct Before sending the postal code to the processor, all nonalphanumeric characters are removed and, if the remaining value is longer than nine characters, the value is truncated starting from the right side.  | [optional] 


