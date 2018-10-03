# CyberSource.InlineResponse2002OrderInformationShipTo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firstName** | **String** | First name of the recipient.  **Processor specific maximum length**  - Litle: 25 - All other processors: 60  | [optional] 
**lastName** | **String** | Last name of the recipient.  **Processor specific maximum length**  - Litle: 25 - All other processors: 60  | [optional] 
**company** | **String** | TBD | [optional] 
**address1** | **String** | First line of the shipping address. | [optional] 
**address2** | **String** | Second line of the shipping address. | [optional] 
**locality** | **String** | City of the shipping address. | [optional] 
**administrativeArea** | **String** | State or province of the shipping address. Use the State, Province, and Territory Codes for the United States and Canada.  | [optional] 
**postalCode** | **String** | Postal code for the shipping address. The postal code must consist of 5 to 9 digits.  When the billing country is the U.S., the 9-digit postal code must follow this format: [5 digits][dash][4 digits]  Example 12345-6789  When the billing country is Canada, the 6-digit postal code must follow this format: [alpha][numeric][alpha][space][numeric][alpha][numeric]  Example A1B 2C3  | [optional] 
**county** | **String** | TBD | [optional] 
**country** | **String** | Country of the shipping address. Use the two character ISO Standard Country Codes. | [optional] 
**email** | **String** | TBD | [optional] 
**phoneNumber** | **String** | Phone number for the shipping address. | [optional] 


