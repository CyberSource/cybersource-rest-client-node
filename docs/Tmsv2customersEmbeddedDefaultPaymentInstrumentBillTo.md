# CyberSource.Tmsv2customersEmbeddedDefaultPaymentInstrumentBillTo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firstName** | **String** | Customer’s first name. This name must be the same as the name on the card.  | [optional] 
**lastName** | **String** | Customer’s last name. This name must be the same as the name on the card.  | [optional] 
**company** | **String** | Name of the customer’s company.  | [optional] 
**address1** | **String** | Payment card billing street address as it appears on the credit card issuer’s records.  | [optional] 
**address2** | **String** | Additional address information.  | [optional] 
**locality** | **String** | Payment card billing city.  | [optional] 
**administrativeArea** | **String** | State or province of the billing address. Use the State, Province, and Territory Codes for the United States and Canada.  | [optional] 
**postalCode** | **String** | Postal code for the billing address. The postal code must consist of 5 to 9 digits.  When the billing country is the U.S., the 9-digit postal code must follow this format: [5 digits][dash][4 digits]  **Example** &#x60;12345-6789&#x60;  When the billing country is Canada, the 6-digit postal code must follow this format: [alpha][numeric][alpha][space][numeric][alpha][numeric]  **Example** &#x60;A1B 2C3&#x60;  | [optional] 
**country** | **String** | Payment card billing country. Use the two-character ISO Standard Country Codes.  | [optional] 
**email** | **String** | Customer&#39;s email address, including the full domain name.  | [optional] 
**phoneNumber** | **String** | Customer’s phone number.  | [optional] 


