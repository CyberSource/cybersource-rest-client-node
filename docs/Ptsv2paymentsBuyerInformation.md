# CyberSource.Ptsv2paymentsBuyerInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchantCustomerId** | **String** | Your identifier for the customer.  For processor-specific information, see the customer_account_id field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html)  | [optional] 
**dateOfBirth** | **String** | Recipient’s date of birth. **Format**: &#x60;YYYYMMDD&#x60;.  This field is a pass-through, which means that CyberSource ensures that the value is eight numeric characters but otherwise does not verify the value or modify it in any way before sending it to the processor. If the field is not required for the transaction, CyberSource does not forward it to the processor.  | [optional] 
**vatRegistrationNumber** | **String** | Customer’s government-assigned tax identification number.  For processor-specific information, see the purchaser_vat_registration_number field in [Level II and Level III Processing Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/Level_2_3_SCMP_API/html)  | [optional] 
**personalIdentification** | [**[Ptsv2paymentsBuyerInformationPersonalIdentification]**](Ptsv2paymentsBuyerInformationPersonalIdentification.md) |  | [optional] 
**hashedPassword** | **String** | TODO  | [optional] 


