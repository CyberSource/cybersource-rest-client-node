# CyberSource.Ptsv2paymentsOrderInformationBillToCompany

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the customer’s company.  **CyberSource through VisaNet** Credit card networks cannot process transactions that contain non-ASCII characters. CyberSource through VisaNet accepts and stores non-ASCII characters correctly and displays them correctly in reports. However, the limitations of the credit card networks prevent CyberSource through VisaNet from transmitting non-ASCII characters to the credit card networks. Therefore, CyberSource through VisaNet replaces non-ASCII characters with meaningless ASCII characters for transmission to the credit card networks.  For processor-specific information, see the &#x60;company_name&#x60; field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html)  | [optional] 
**address1** | **String** | First line in the street address of the company purchasing the product. | [optional] 
**address2** | **String** | Additional address information for the company purchasing the product. | [optional] 
**locality** | **String** | City in the address of the company purchasing the product. | [optional] 
**administrativeArea** | **String** | State or province in the address of the company purchasing the product. Use the State, Province, and Territory Codes for the United States and Canada.  | [optional] 
**postalCode** | **String** | Postal code in the address of the company purchasing the product. The postal code must consist of 5 to 9 digits.  When the company country is the U.S., the 9-digit postal code must follow this format: **[5 digits][dash][4 digits]** #### Example &#x60;12345-6789&#x60;  When the company country is Canada, the 6-digit postal code must follow this format: **[alpha][numeric][alpha][space][numeric][alpha][numeric]** #### Example &#x60;A1B 2C3&#x60;  | [optional] 
**country** | **String** | Country in the address of the company purchasing the product. Use the [ISO Standard Country Codes](https://developer.cybersource.com/library/documentation/sbc/quickref/countries_alpha_list.pdf).  | [optional] 


