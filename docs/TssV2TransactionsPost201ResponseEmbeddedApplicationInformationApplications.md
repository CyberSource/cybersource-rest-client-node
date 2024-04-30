# CyberSource.TssV2TransactionsPost201ResponseEmbeddedApplicationInformationApplications

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the CyberSource transaction type (such as CC settlement or CC authorization) that the merchant wants to process in a transaction request. More than one transaction type can included in a transaction request. Each transaction type separately returns their own status, reasonCode, rCode, and rFlag messages.  | [optional] 
**reasonCode** | **String** | 3-digit reason code that indicates why the customer profile payment succeeded or failed. | [optional] 
**status** | **String** | The status of the submitted transaction. Note: This field may not be returned for all transactions.  | [optional] 
**reason** | **String** | Description of why a request failed. Note: This field may not be returned for all transactions.  | [optional] 
**rCode** | **String** | Indicates whether the service request was successful. Possible values:  - `-1`: An error occurred. - `0`: The request was declined. - `1`: The request was successful.  | [optional] 
**rFlag** | **String** | One-word description of the result of the application.  | [optional] 
**reconciliationId** | **String** | Reference number that you use to reconcile your CyberSource reports with your processor reports.  | [optional] 
**rMessage** | **String** | Message that explains the reply flag for the application.  | [optional] 
**returnCode** | **Number** | The description for this field is not available. | [optional] 


