# CyberSource.TssV2TransactionsGet200ResponseApplicationInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | The status of the submitted transaction. | [optional] 
**reasonCode** | **String** | Indicates the reason why a request succeeded or failed and possible action to take if a request fails.  For details, see the appendix of reason codes in the documentation for the relevant payment method.  | [optional] 
**rCode** | **String** | Indicates whether the service request was successful. Possible values:  - &#x60;-1&#x60;: An error occurred. - &#x60;0&#x60;: The request was declined. - &#x60;1&#x60;: The request was successful.  | [optional] 
**rFlag** | **String** | One-word description of the result of the application.  | [optional] 
**applications** | [**[TssV2TransactionsGet200ResponseApplicationInformationApplications]**](TssV2TransactionsGet200ResponseApplicationInformationApplications.md) |  | [optional] 


