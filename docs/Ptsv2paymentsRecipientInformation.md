# CyberSource.Ptsv2paymentsRecipientInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountId** | **String** | Identifier for the recipient’s account. Use the first six digits and last four digits of the recipient’s account number. This field is a _pass-through_, which means that CyberSource does not verify the value or modify it in any way before sending it to the processor. If the field is not required for the transaction, CyberSource does not forward it to the processor.  For details, see the &#x60;recipient_account_id&#x60; field description in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  | [optional] 
**lastName** | **String** | Recipient’s last name. This field is a _passthrough_, which means that CyberSource does not verify the value or modify it in any way before sending it to the processor. If the field is not required for the transaction, CyberSource does not forward it to the processor.  For details, see the &#x60;recipient_lastname&#x60; field description in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  | [optional] 
**postalCode** | **String** | Partial postal code for the recipient’s address. For example, if the postal code is **NN5 7SG**, the value for this field should be the first part of the postal code: **NN5**. This field is a _pass-through_, which means that CyberSource does not verify the value or modify it in any way before sending it to the processor. If the field is not required for the transaction, CyberSource does not forward it to the processor.  For details, see the &#x60;recipient_postal_code&#x60; field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  | [optional] 


