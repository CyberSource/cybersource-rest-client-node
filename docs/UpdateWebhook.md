# CyberSource.UpdateWebhook

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Client friendly webhook name. | [optional] 
**description** | **String** | Client friendly webhook description.\\ | [optional] 
**organizationId** | **String** | Organization Id. | [optional] 
**productId** | **String** | The product you are receiving a webhook for. | [optional] 
**eventTypes** | **[String]** | Array of the different events for a given product id. | [optional] 
**webhookUrl** | **String** | The client&#39;s endpoint (URL) to receive webhooks. | [optional] 
**healthCheckUrl** | **String** | The client&#39;s health check endpoint (URL). This should be as close as possible to the actual webhookUrl. | [optional] 
**status** | **String** | Webhook status. | [optional] [default to &#39;INACTIVE&#39;]
**notificationScope** | [**Notificationsubscriptionsv1webhooksNotificationScope**](Notificationsubscriptionsv1webhooksNotificationScope.md) |  | [optional] 
**retryPolicy** | [**Notificationsubscriptionsv1webhooksRetryPolicy**](Notificationsubscriptionsv1webhooksRetryPolicy.md) |  | [optional] 
**securityPolicy** | [**Notificationsubscriptionsv1webhooksSecurityPolicy**](Notificationsubscriptionsv1webhooksSecurityPolicy.md) |  | [optional] 
**additionalAttributes** | **[{String: String}]** | Additional, free form configuration data. | [optional] 


