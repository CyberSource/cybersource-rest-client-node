# CyberSource.ManageWebhooksApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteWebhookSubscription**](ManageWebhooksApi.md#deleteWebhookSubscription) | **DELETE** /notification-subscriptions/v2/webhooks/{webhookId} | Delete a Webhook Subscription
[**getWebhookSubscriptionById**](ManageWebhooksApi.md#getWebhookSubscriptionById) | **GET** /notification-subscriptions/v2/webhooks/{webhookId} | Get Details On a Single Webhook
[**getWebhookSubscriptionsByOrg**](ManageWebhooksApi.md#getWebhookSubscriptionsByOrg) | **GET** /notification-subscriptions/v2/webhooks | Get Details On All Created Webhooks
[**notificationSubscriptionsV1WebhooksWebhookIdPost**](ManageWebhooksApi.md#notificationSubscriptionsV1WebhooksWebhookIdPost) | **POST** /notification-subscriptions/v1/webhooks/{webhookId} | Test a Webhook Configuration
[**notificationSubscriptionsV2WebhooksWebhookIdPatch**](ManageWebhooksApi.md#notificationSubscriptionsV2WebhooksWebhookIdPatch) | **PATCH** /notification-subscriptions/v2/webhooks/{webhookId} | Update a Webhook Subscription
[**notificationSubscriptionsV2WebhooksWebhookIdStatusPut**](ManageWebhooksApi.md#notificationSubscriptionsV2WebhooksWebhookIdStatusPut) | **PUT** /notification-subscriptions/v2/webhooks/{webhookId}/status | Update a Webhook Status
[**saveAsymEgressKey**](ManageWebhooksApi.md#saveAsymEgressKey) | **POST** /kms/egress/v2/keys-asym | Message Level Encryption


<a name="deleteWebhookSubscription"></a>
# **deleteWebhookSubscription**
> deleteWebhookSubscription(webhookId)

Delete a Webhook Subscription

Delete the webhook. Please note that deleting a particular webhook does not delete the history of the webhook notifications.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.ManageWebhooksApi();

var webhookId = "webhookId_example"; // String | The webhook identifier.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteWebhookSubscription(webhookId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookId** | **String**| The webhook identifier. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="getWebhookSubscriptionById"></a>
# **getWebhookSubscriptionById**
> InlineResponse2015 getWebhookSubscriptionById(webhookId)

Get Details On a Single Webhook

Retrieve the details of a specific webhook by supplying the webhook ID in the path.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.ManageWebhooksApi();

var webhookId = "webhookId_example"; // String | The webhook Identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getWebhookSubscriptionById(webhookId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookId** | **String**| The webhook Identifier | 

### Return type

[**InlineResponse2015**](InlineResponse2015.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="getWebhookSubscriptionsByOrg"></a>
# **getWebhookSubscriptionsByOrg**
> [InlineResponse2004] getWebhookSubscriptionsByOrg(organizationId, opts)

Get Details On All Created Webhooks

Retrieve a list of all previously created webhooks.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.ManageWebhooksApi();

var organizationId = "organizationId_example"; // String | The Organization Identifier.

var opts = { 
  'productId': "productId_example", // String | The Product Identifier.
  'eventType': "eventType_example" // String | The Event Type.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getWebhookSubscriptionsByOrg(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| The Organization Identifier. | 
 **productId** | **String**| The Product Identifier. | [optional] 
 **eventType** | **String**| The Event Type. | [optional] 

### Return type

[**[InlineResponse2004]**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="notificationSubscriptionsV1WebhooksWebhookIdPost"></a>
# **notificationSubscriptionsV1WebhooksWebhookIdPost**
> InlineResponse2016 notificationSubscriptionsV1WebhooksWebhookIdPost(webhookId)

Test a Webhook Configuration

Test the webhook configuration by sending a sample webhook. Calling this endpoint sends a sample webhook to the endpoint identified in the user's subscription.   It will contain sample values for the product & eventType based on values present in your subscription along with a sample message in the payload.   Based on the webhook response users can make any necessary modifications or rest assured knowing their setup is configured correctly. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.ManageWebhooksApi();

var webhookId = "webhookId_example"; // String | The Webhook Identifier.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.notificationSubscriptionsV1WebhooksWebhookIdPost(webhookId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookId** | **String**| The Webhook Identifier. | 

### Return type

[**InlineResponse2016**](InlineResponse2016.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="notificationSubscriptionsV2WebhooksWebhookIdPatch"></a>
# **notificationSubscriptionsV2WebhooksWebhookIdPatch**
> InlineResponse2005 notificationSubscriptionsV2WebhooksWebhookIdPatch(webhookId, opts)

Update a Webhook Subscription

Update a Webhook Subscription.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.ManageWebhooksApi();

var webhookId = "webhookId_example"; // String | The Webhook Identifier.

var opts = { 
  'updateWebhook': new CyberSource.UpdateWebhook() // UpdateWebhook | The webhook payload or changes to apply.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.notificationSubscriptionsV2WebhooksWebhookIdPatch(webhookId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookId** | **String**| The Webhook Identifier. | 
 **updateWebhook** | [**UpdateWebhook**](UpdateWebhook.md)| The webhook payload or changes to apply. | [optional] 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="notificationSubscriptionsV2WebhooksWebhookIdStatusPut"></a>
# **notificationSubscriptionsV2WebhooksWebhookIdStatusPut**
> notificationSubscriptionsV2WebhooksWebhookIdStatusPut(webhookId, opts)

Update a Webhook Status

Users can update the status of a webhook subscription by calling this endpoint.   The webhookId parameter in the URL path identifies the specific webhook subscription to be updated. The request body accepts the values ACTIVE or INACTIVE. If the subscription is set to INACTIVE, webhooks will not be delivered until the subscription is activated again. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.ManageWebhooksApi();

var webhookId = "webhookId_example"; // String | The Webhook Identifier.

var opts = { 
  'updateStatus': new CyberSource.UpdateStatus() // UpdateStatus | The status that the subscription should be updated to.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.notificationSubscriptionsV2WebhooksWebhookIdStatusPut(webhookId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookId** | **String**| The Webhook Identifier. | 
 **updateStatus** | [**UpdateStatus**](UpdateStatus.md)| The status that the subscription should be updated to. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="saveAsymEgressKey"></a>
# **saveAsymEgressKey**
> InlineResponse2017 saveAsymEgressKey(vCSenderOrganizationId, vCPermissions, saveAsymEgressKey, opts)

Message Level Encryption

Store and manage certificates that will be used to preform Message Level Encryption (MLE). Each new webhook will need its own unique asymmetric certificate. You can either use a digital certificate issued/signed by a CA or self-sign your own using the documentation available on the Developer Guide. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.ManageWebhooksApi();

var vCSenderOrganizationId = "vCSenderOrganizationId_example"; // String | Sender organization id

var vCPermissions = "vCPermissions_example"; // String | Encoded user permissions returned by the CGK, for the entity user who initiated the boarding

var saveAsymEgressKey = new CyberSource.SaveAsymEgressKey(); // SaveAsymEgressKey | Provide egress Asymmetric key information to save (create or store)

var opts = { 
  'vCCorrelationId': "vCCorrelationId_example" // String | A globally unique id associated with your request
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveAsymEgressKey(vCSenderOrganizationId, vCPermissions, saveAsymEgressKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vCSenderOrganizationId** | **String**| Sender organization id | 
 **vCPermissions** | **String**| Encoded user permissions returned by the CGK, for the entity user who initiated the boarding | 
 **saveAsymEgressKey** | [**SaveAsymEgressKey**](SaveAsymEgressKey.md)| Provide egress Asymmetric key information to save (create or store) | 
 **vCCorrelationId** | **String**| A globally unique id associated with your request | [optional] 

### Return type

[**InlineResponse2017**](InlineResponse2017.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

