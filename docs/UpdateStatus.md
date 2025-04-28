# CyberSource.UpdateStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | The status the user intends to update the subscription to. The supported values are ACTIVE & INACTIVE. If the subscription status is INACTIVE, webhook notifications will not be sent. Webhooks will resume being sent once the subscription is ACTIVE again.  Possible values: - ACTIVE - INACTIVE | [optional] [default to 'INACTIVE']


