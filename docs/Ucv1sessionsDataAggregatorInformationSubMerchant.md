# CyberSource.Ucv1sessionsDataAggregatorInformationSubMerchant

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cardAcceptorId** | **String** | Unique identifier assigned by the payment card company to the sub-merchant. | [optional] 
**id** | **String** | The ID you assigned to your sub-merchant.  American Express Direct: String (20)  | [optional] 
**name** | **String** | Sub-merchant's business name.  #### American Express Direct The maximum length of the sub-merchant name depends on the length of the aggregator name. The combined length for both values must not exceed 36 characters.  | [optional] 
**address1** | **String** | First line of the sub-merchant's street address.  | [optional] 
**locality** | **String** | Sub-merchant's city.  | [optional] 
**administrativeArea** | **String** | Sub-merchant's state or province.  | [optional] 
**region** | **String** | Sub-merchant's region.  **Example**\\ `NE` indicates that the sub-merchant is in the northeast region.  | [optional] 
**postalCode** | **String** | Partial postal code for the sub-merchant's address.  | [optional] 
**country** | **String** | Sub-merchant's country. Use the [ISO Standard Country Codes](https://developer.cybersource.com/library/documentation/sbc/quickref/countries_alpha_list.pdf).  | [optional] 
**email** | **String** | Sub-merchant's email address.  **Maximum length for processors**   - American Express Direct: 40  | [optional] 
**phoneNumber** | **String** | Sub-merchant's telephone number.  **Maximum length for procesors**   - American Express Direct: 20  | [optional] 


