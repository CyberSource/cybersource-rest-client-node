# CyberSource.UpdateWebhook

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Client friendly webhook name. | [optional] 
**organizationId** | **String** | Organization Id. | [optional] 
**description** | **String** | Client friendly webhook description. | [optional] 
**products** | [**[Notificationsubscriptionsv2webhooksProducts]**](Notificationsubscriptionsv2webhooksProducts.md) |  | [optional] 
**webhookUrl** | **String** | The client's endpoint (URL) to receive webhooks. | [optional] 
**healthCheckUrl** | **String** | The client's health check endpoint (URL). This should be as close as possible to the actual webhookUrl. | [optional] 
**securityPolicy** | [**Notificationsubscriptionsv2webhooksSecurityPolicy**](Notificationsubscriptionsv2webhooksSecurityPolicy.md) |  | [optional] 
**additionalAttributes** | **[{String: String}]** | Additional, free form configuration data. | [optional] 


