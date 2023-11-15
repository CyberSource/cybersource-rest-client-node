# CyberSource.Nrtfv1webhookswebhookIdreplaysByDeliveryStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | The status of the webhook. Options are FAILED or RETRY | [optional] 
**startTime** | **Date** | The start time in yyyy-mm-dd hh:mm:ss.ms format. Maximum value is 1 month prior to todays system time.  The difference between Start Time and End Time cannot exceed a 24 hour window within the last month.  | [optional] 
**endTime** | **Date** | The end time in yyyy-mm-dd hh:mm:ss.ms format.  The difference between Start Time and End Time cannot exceed a 24 hour window within the last month.  | [optional] 
**hoursBack** | **Number** | Alternative parameter to startTime/endTime.  It evaluates the startTime using the current system time (endTime) and the hoursBack value (default &#x3D; 24hrs).  | [optional] 
**productId** | **String** |  | [optional] 
**eventType** | **String** |  | [optional] 


