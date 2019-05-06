# CyberSource.TssV2TransactionsGet200ResponseOrderInformationShipTo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firstName** | **String** | First name of the recipient.  **Processor specific maximum length**  - Litle: 25 - All other processors: 60  | [optional] 
**lastName** | **String** | Last name of the recipient.  **Processor-specific maximum length**  - Litle: 25 - All other processors: 60  | [optional] 
**address1** | **String** | First line of the shipping address. | [optional] 
**address2** | **String** | Second line of the shipping address. | [optional] 
**locality** | **String** | City of the shipping address. | [optional] 
**administrativeArea** | **String** | State or province of the billing address. Use the State, Province, and Territory Codes for the United States and Canada.  For Payouts: This field may be sent only for FDC Compass.  **CyberSource through VisaNet** Credit card networks cannot process transactions that contain non-ASCII characters. CyberSource through VisaNet accepts and stores non-ASCII characters correctly and displays them correctly in reports. However, the limitations of the credit card networks prevent CyberSource through VisaNet from transmitting non-ASCII characters to the credit card networks. Therefore, CyberSource through VisaNet replaces non-ASCII characters with meaningless ASCII characters for transmission to the credit card networks.  ccAuthService (Required when the billing country is the U.S. or Canada; otherwise, optional.) This field is optional if your CyberSource account is configured for relaxed requirements for address data and expiration date. See \&quot;Relaxed Requirements for Address Data and Expiration Date,\&quot; page 75. Important It is your responsibility to determine whether a field is required for the transaction you are requesting.  For processor-specific information, see the bill_state field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html)  | [optional] 
**postalCode** | **String** | Postal code for the shipping address. The postal code must consist of 5 to 9 digits.  When the billing country is the U.S., the 9-digit postal code must follow this format: [5 digits][dash][4 digits]  Example 12345-6789  When the billing country is Canada, the 6-digit postal code must follow this format: [alpha][numeric][alpha][space][numeric][alpha][numeric]  Example A1B 2C3  **American Express Direct**\\ Before sending the postal code to the processor, CyberSource removes all nonalphanumeric characters and, if the remaining value is longer than nine characters, truncates the value starting from the right side.  | [optional] 
**company** | **String** | Name of the customer’s company.  For processor-specific information, see the company_name field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html)  | [optional] 
**country** | **String** | Country of the shipping address. Use the two-character ISO Standard Country Codes. | [optional] 
**phoneNumber** | **String** | Phone number associated with the shipping address. | [optional] 


