# CyberSource.InlineResponse2004

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**webhookId** | **String** | Webhook Id. This is generated by the server. | [optional] 
**organizationId** | **String** | Organization ID. | [optional] 
**products** | [**[Notificationsubscriptionsv2webhooksProducts]**](Notificationsubscriptionsv2webhooksProducts.md) |  | [optional] 
**webhookUrl** | **String** | The client's endpoint (URL) to receive webhooks. | [optional] 
**healthCheckUrl** | **String** | The client's health check endpoint (URL). This should be as close as possible to the actual webhookUrl. | [optional] 
**status** | **String** | Webhook status. | [optional] [default to 'INACTIVE']
**name** | **String** | Client friendly webhook name. | [optional] 
**description** | **String** | Client friendly webhook description. | [optional] 
**retryPolicy** | [**Notificationsubscriptionsv2webhooksRetryPolicy**](Notificationsubscriptionsv2webhooksRetryPolicy.md) |  | [optional] 
**securityPolicy** | [**Notificationsubscriptionsv2webhooksSecurityPolicy**](Notificationsubscriptionsv2webhooksSecurityPolicy.md) |  | [optional] 
**createdOn** | **String** | Date on which webhook was created/registered. | [optional] 
**updatedOn** | **String** | Date on which webhook was most recently updated. | [optional] 


