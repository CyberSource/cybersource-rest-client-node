# CyberSource.Riskv1decisionsBuyerInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **String** | Specifies the customer account user name. | [optional] 
**hashedPassword** | **String** | The merchant&#39;s password that CyberSource hashes and stores as a hashed password.  For details about this field, see the &#x60;customer_password&#x60; field description in [Decision Manager Developer Guide Using the SCMP API.](https://www.cybersource.com/developers/documentation/fraud_management/)  | [optional] 
**dateOfBirth** | **String** | Recipient’s date of birth. **Format**: &#x60;YYYYMMDD&#x60;.  This field is a &#x60;pass-through&#x60;, which means that CyberSource ensures that the value is eight numeric characters but otherwise does not verify the value or modify it in any way before sending it to the processor. If the field is not required for the transaction, CyberSource does not forward it to the processor.  For more details, see &#x60;recipient_date_of_birth&#x60; field description in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/wwhelp/wwhimpl/js/html/wwhelp.htm)  | [optional] 
**personalIdentification** | [**[Ptsv2paymentsBuyerInformationPersonalIdentification]**](Ptsv2paymentsBuyerInformationPersonalIdentification.md) |  | [optional] 


