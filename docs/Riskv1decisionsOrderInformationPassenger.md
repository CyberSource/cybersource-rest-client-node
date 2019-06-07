# CyberSource.Riskv1decisionsOrderInformationPassenger

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Passenger classification associated with the price of the ticket. You can use one of the following values: - &#x60;ADT&#x60;: Adult - &#x60;CNN&#x60;: Child - &#x60;INF&#x60;: Infant - &#x60;YTH&#x60;: Youth - &#x60;STU&#x60;: Student - &#x60;SCR&#x60;: Senior Citizen - &#x60;MIL&#x60;: Military  | [optional] 
**status** | **String** | Your company&#39;s passenger classification, such as with a frequent flyer program. In this case, you might use values such as &#x60;standard&#x60;, &#x60;gold&#x60;, or &#x60;platinum&#x60;.  | [optional] 
**phone** | **String** | Passenger&#39;s phone number. If the order is from outside the U.S., CyberSource recommends that you include the [ISO Standard Country Codes.](http://apps.cybersource.com/library/documentation/sbc/quickref/countries_alpha_list.pdf)  | [optional] 
**firstName** | **String** | Passenger&#39;s first name. | [optional] 
**lastName** | **String** | Passenger&#39;s last name. | [optional] 
**id** | **String** | ID of the passenger to whom the ticket was issued. For example, you can use this field for the frequent flyer number.  | [optional] 
**email** | **String** | Passenger&#39;s email address, including the full domain name, such as jdoe@example.com. | [optional] 
**nationality** | **String** | Passenger&#39;s nationality country. Use the two character ISO Standard Country Codes. | [optional] 


