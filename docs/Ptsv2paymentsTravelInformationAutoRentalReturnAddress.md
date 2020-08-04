# CyberSource.Ptsv2paymentsTravelInformationAutoRentalReturnAddress

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **String** | City where the auto was returned to the rental agency.  | [optional] 
**state** | **String** | State in which the auto was returned to the rental agency. Use the [State, Province, and Territory Codes for the United States and Canada](https://developer.cybersource.com/library/documentation/sbc/quickref/states_and_provinces.pdf).  For authorizations, this field is supported for Visa, MasterCard, and American Express.  For captures, this field is supported only for MasterCard and American Express.  | [optional] 
**country** | **String** | Country where the auto was returned to the rental agency. Use the [ISO Standard Country Codes](https://developer.cybersource.com/library/documentation/sbc/quickref/countries_alpha_list.pdf).  | [optional] 
**locationId** | **String** | Code, address, phone number, etc. used to identify the location of the auto rental return. This field is supported only for MasterCard and American Express.  | [optional] 
**location** | **String** | This field contains the location where the taxi passenger was dropped off or where the auto rental vehicle was returned.  | [optional] 


