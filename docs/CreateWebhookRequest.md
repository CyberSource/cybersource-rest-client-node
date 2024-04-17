# CyberSource.CreateWebhookRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Client friendly webhook name. | [optional] 
**description** | **String** | Client friendly webhook description. | [optional] 
**organizationId** | **String** | Organization Identifier (OrgId) or Merchant Identifier (MID). | [optional] 
**productId** | **String** | To see the valid productId and eventTypes, call the \"Create and Manage Webhooks - Retrieve a list of event types\" endpoint. | [optional] 
**eventTypes** | **[String]** | Array of the different events for a given product id. | [optional] 
**webhookUrl** | **String** | The client's endpoint (URL) to receive webhooks. | [optional] 
**healthCheckUrl** | **String** | The client's health check endpoint (URL). This should be as close as possible to the actual webhookUrl. If the user does not provide the health check URL, it is the user's responsibility to re-activate the webhook if it is deactivated by calling the test endpoint.  | [optional] 
**notificationScope** | **String** | The webhook scope. 1. SELF The Webhook is used to deliver webhooks for only this Organization (or Merchant). 2. DESCENDANTS The Webhook is used to deliver webhooks for this Organization and its children. 3. CUSTOM The Webhook is used to deliver webhooks for the OrgIds (or MiDs) explicitly listed in scopeData field.  | [optional] 
**retryPolicy** | [**Notificationsubscriptionsv1webhooksRetryPolicy**](Notificationsubscriptionsv1webhooksRetryPolicy.md) |  | [optional] 
**securityPolicy** | [**Notificationsubscriptionsv1webhooksSecurityPolicy1**](Notificationsubscriptionsv1webhooksSecurityPolicy1.md) |  | [optional] 


