# CyberSource.UpdateWebhook

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Client friendly webhook name. | [optional] 
**organizationId** | **String** | Organization Id. | [optional] 
**description** | **String** | Client friendly webhook description. | [optional] 
**products** | [**[Notificationsubscriptionsv2webhooksProducts]**](Notificationsubscriptionsv2webhooksProducts.md) |  | [optional] 
**webhookUrl** | **String** | The client's endpoint (URL) to receive webhooks. | [optional] 
**notificationScope** | **String** | The webhook scope. 1. SELF The Webhook is used to deliver webhooks for only this Organization (or Merchant). 2. DESCENDANTS The Webhook is used to deliver webhooks for this Organization and its children. This field is optional.    Possible values: - SELF - DESCENDANTS | [optional] [default to 'DESCENDANTS']
**healthCheckUrl** | **String** | The client's health check endpoint (URL). | [optional] 
**securityPolicy** | [**Notificationsubscriptionsv2webhooksSecurityPolicy**](Notificationsubscriptionsv2webhooksSecurityPolicy.md) |  | [optional] 


