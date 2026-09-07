# CyberSource.UnifiedriskCustomerPersonalIdentification

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dateOfBirth** | **String** | The customer's date of birth. **Format**: `YYYYMMDD`.This field is a `pass-through`, which means that CyberSource ensures that the value is eight numeric characters but otherwise does not verify the value or modify it in any way before sending it to the processor. If the field is not required for the transaction, CyberSource does not forward it to the processor. | [optional] 
**firstName** | **String** | The customer's first name. | [optional] 
**lastName** | **String** | The customer's last name. | [optional] 
**email** | **String** | The customer's email address. | [optional] 
**phone** | **String** | The customer's phone number. | [optional] 
**phoneNumber** | **String** | The customer's mobile or primary phone number used for contact or SMS-based verification, preferably in E.164 format (e.g., +15551234567) | [optional] 
**workPhoneNumber** | **String** | The customer's work or office phone number used as an alternative contact method for identity verification purposes | [optional] 
**taxId** | **String** | The customer's government-issued tax identification number used for regulatory compliance and identity verification (e.g., SSN in the US, NIF in Spain, PAN in India) | [optional] 


