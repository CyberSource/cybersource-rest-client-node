# CyberSource.ManageWebhooksApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteWebhookSubscription**](ManageWebhooksApi.md#deleteWebhookSubscription) | **DELETE** /notification-subscriptions/v1/webhooks/{webhookId} | Delete a Webhook Subscription
[**getAllWebhooks**](ManageWebhooksApi.md#getAllWebhooks) | **GET** /notification-subscriptions/v1/webhooks | Get Details On All Created Webhooks
[**getWebhookDetails**](ManageWebhooksApi.md#getWebhookDetails) | **GET** /notification-subscriptions/v1/webhooks/{webhookId} | Get Details On a Single Webhook
[**replayPreviousWebhook**](ManageWebhooksApi.md#replayPreviousWebhook) | **POST** /nrtf/v1/webhooks/{webhookId}/replays | Replay Previous Webhooks
[**saveAsymEgressKey**](ManageWebhooksApi.md#saveAsymEgressKey) | **POST** /kms/egress/v2/keys-asym | Message Level Encryption
[**updateWebhookSubscription**](ManageWebhooksApi.md#updateWebhookSubscription) | **PATCH** /notification-subscriptions/v1/webhooks/{webhookId} | Update a Webhook Subscription


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

<a name="getAllWebhooks"></a>
# **getAllWebhooks**
> [InlineResponse2004] getAllWebhooks(organizationId, productId, eventType)

Get Details On All Created Webhooks

Retrieve a list of all previously created webhooks.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.ManageWebhooksApi();

var organizationId = "organizationId_example"; // String | The Organization Identifier.

var productId = "productId_example"; // String | The Product Identifier.

var eventType = "eventType_example"; // String | The Event Type.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllWebhooks(organizationId, productId, eventType, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| The Organization Identifier. | 
 **productId** | **String**| The Product Identifier. | 
 **eventType** | **String**| The Event Type. | 

### Return type

[**[InlineResponse2004]**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="getWebhookDetails"></a>
# **getWebhookDetails**
> InlineResponse2004 getWebhookDetails(webhookId)

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
apiInstance.getWebhookDetails(webhookId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookId** | **String**| The webhook Identifier | 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="replayPreviousWebhook"></a>
# **replayPreviousWebhook**
> replayPreviousWebhook(webhookId, opts)

Replay Previous Webhooks

Initiate a webhook replay request to replay transactions that happened in the past.  Cannot execute more than 1 replay request at a time. While one request is processing, you will not be allowed to execute another replay.  The difference between Start and End time cannot exceed a 24 hour window, and 1 month is the farthest date back that is eligible for replay. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.ManageWebhooksApi();

var webhookId = "webhookId_example"; // String | The webhook uuid identifier.

var opts = { 
  'replayWebhooks': new CyberSource.ReplayWebhooks() // ReplayWebhooks | The request query
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.replayPreviousWebhook(webhookId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookId** | **String**| The webhook uuid identifier. | 
 **replayWebhooks** | [**ReplayWebhooks**](ReplayWebhooks.md)| The request query | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="saveAsymEgressKey"></a>
# **saveAsymEgressKey**
> InlineResponse2014 saveAsymEgressKey(vCSenderOrganizationId, vCPermissions, saveAsymEgressKey, opts)

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

[**InlineResponse2014**](InlineResponse2014.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="updateWebhookSubscription"></a>
# **updateWebhookSubscription**
> updateWebhookSubscription(webhookId, opts)

Update a Webhook Subscription

Update the webhook subscription using PATCH.

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
    console.log('API called successfully.');
  }
};
apiInstance.updateWebhookSubscription(webhookId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookId** | **String**| The Webhook Identifier. | 
 **updateWebhook** | [**UpdateWebhook**](UpdateWebhook.md)| The webhook payload or changes to apply. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

