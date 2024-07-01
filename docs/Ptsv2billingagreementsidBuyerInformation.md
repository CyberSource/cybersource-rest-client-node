# CyberSource.Ptsv2billingagreementsidBuyerInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dateOfBirth** | **String** | Recipient's date of birth. **Format**: `YYYYMMDD`.  This field is a `pass-through`, which means that CyberSource ensures that the value is eight numeric characters but otherwise does not verify the value or modify it in any way before sending it to the processor. If the field is not required for the transaction, CyberSource does not forward it to the processor.  | [optional] 
**gender** | **String** | Customer's gender. Possible values are F (female), M (male), O (other). | [optional] 
**language** | **String** | language setting of the user | [optional] 


