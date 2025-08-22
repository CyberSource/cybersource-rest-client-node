# CyberSource.CreateWebhook

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Client friendly webhook name. | [optional] 
**description** | **String** | Client friendly webhook description. | [optional] 
**organizationId** | **String** | Organization Identifier (OrgId) or Merchant Identifier (MID). | [optional] 
**products** | [**[Notificationsubscriptionsv2webhooksProducts1]**](Notificationsubscriptionsv2webhooksProducts1.md) | To see the valid productId and eventTypes, call the \"Create and Manage Webhooks - Retrieve a list of event types\" endpoint. | [optional] 
**webhookUrl** | **String** | The client's endpoint (URL) to receive webhooks. | [optional] 
**healthCheckUrl** | **String** | The client's health check endpoint (URL). If the user does not provide the health check URL, it is the user's responsibility to re-activate the webhook if it is deactivated by calling the test endpoint.  | [optional] 
**retryPolicy** | [**Notificationsubscriptionsv2webhooksRetryPolicy**](Notificationsubscriptionsv2webhooksRetryPolicy.md) |  | [optional] 
**notificationScope** | **String** | The webhook scope. 1. SELF The Webhook is used to deliver webhooks for only this Organization (or Merchant). 2. DESCENDANTS The Webhook is used to deliver webhooks for this Organization and its children. This field is optional.    Possible values: - SELF - DESCENDANTS | [optional] [default to 'DESCENDANTS']
**securityPolicy** | [**Notificationsubscriptionsv2webhooksSecurityPolicy**](Notificationsubscriptionsv2webhooksSecurityPolicy.md) |  | [optional] 


