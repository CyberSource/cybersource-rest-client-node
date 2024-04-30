# CyberSource.Ptsv2paymentsOrderInformationPassenger

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Passenger classification associated with the price of the ticket. You can use one of the following values: - `ADT`: Adult - `CNN`: Child - `INF`: Infant - `YTH`: Youth - `STU`: Student - `SCR`: Senior Citizen - `MIL`: Military  | [optional] 
**status** | **String** | Your company's passenger classification, such as with a frequent flyer program. In this case, you might use values such as `standard`, `gold`, or `platinum`.  | [optional] 
**phone** | **String** | Passenger's phone number. If the order is from outside the U.S., CyberSource recommends that you include the [ISO Standard Country Codes](https://developer.cybersource.com/library/documentation/sbc/quickref/countries_alpha_list.pdf).  | [optional] 
**firstName** | **String** | Passenger's first name. | [optional] 
**lastName** | **String** | Passenger's last name. | [optional] 
**id** | **String** | ID of the passenger to whom the ticket was issued. For example, you can use this field for the frequent flyer number.  | [optional] 
**email** | **String** | Passenger's email address, including the full domain name, such as jdoe@example.com. | [optional] 
**nationality** | **String** | Passenger's nationality country. Use the two character [ISO Standard Country Codes](https://developer.cybersource.com/library/documentation/sbc/quickref/countries_alpha_list.pdf). | [optional] 


