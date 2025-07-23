# CyberSource.CreateNewWebhooksApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findProductsToSubscribe**](CreateNewWebhooksApi.md#findProductsToSubscribe) | **GET** /notification-subscriptions/v2/products/{organizationId} | Find Products You Can Subscribe To
[**notificationSubscriptionsV2WebhooksPost**](CreateNewWebhooksApi.md#notificationSubscriptionsV2WebhooksPost) | **POST** /notification-subscriptions/v2/webhooks | Create a New Webhook Subscription
[**saveSymEgressKey**](CreateNewWebhooksApi.md#saveSymEgressKey) | **POST** /kms/egress/v2/keys-sym | Create Webhook Security Keys


<a name="findProductsToSubscribe"></a>
# **findProductsToSubscribe**
> [InlineResponse2003] findProductsToSubscribe(organizationId)

Find Products You Can Subscribe To

Retrieve a list of products and event types that your account is eligible for. These products and events are the ones that you may subscribe to in the next step of creating webhooks.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.CreateNewWebhooksApi();

var organizationId = "organizationId_example"; // String | The Organization Identifier.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findProductsToSubscribe(organizationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| The Organization Identifier. | 

### Return type

[**[InlineResponse2003]**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="notificationSubscriptionsV2WebhooksPost"></a>
# **notificationSubscriptionsV2WebhooksPost**
> InlineResponse2015 notificationSubscriptionsV2WebhooksPost(opts)

Create a New Webhook Subscription

Create a new webhook subscription. Before creating a webhook, ensure that a signature key has been created.  For the example \"Create Webhook using oAuth with Client Credentials\" - for clients who have more than one oAuth Provider and have different client secrets that they would like to config for a given webhook, they may do so by overriding the keyId inside security config of webhook subscription. See the Developer Center examples section titled \"Webhook Security - Create or Store Egress Symmetric Key - Store oAuth Credentials For Symmetric Key\" to store these oAuth credentials that CYBS will need for oAuth.  For JWT authentication, attach your oAuth details to the webhook subscription. See the example \"Create Webhook using oAuth with JWT\" 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.CreateNewWebhooksApi();

var opts = { 
  'createWebhook': new CyberSource.CreateWebhook() // CreateWebhook | The webhook payload
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.notificationSubscriptionsV2WebhooksPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createWebhook** | [**CreateWebhook**](CreateWebhook.md)| The webhook payload | [optional] 

### Return type

[**InlineResponse2015**](InlineResponse2015.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="saveSymEgressKey"></a>
# **saveSymEgressKey**
> InlineResponse2014 saveSymEgressKey(vCSenderOrganizationId, vCPermissions, opts)

Create Webhook Security Keys

Create security keys that CyberSource will use internally to connect to your servers and validate messages using a digital signature.  Select the CREATE example for CyberSource to generate the key on our server and maintain it for you as well. Remember to save the key in the API response, so that you can use it to validate messages later. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.CreateNewWebhooksApi();

var vCSenderOrganizationId = "vCSenderOrganizationId_example"; // String | Sender organization id

var vCPermissions = "vCPermissions_example"; // String | Encoded user permissions returned by the CGK, for the entity user who initiated the boarding

var opts = { 
  'vCCorrelationId': "vCCorrelationId_example", // String | A globally unique id associated with your request
  'saveSymEgressKey': new CyberSource.SaveSymEgressKey() // SaveSymEgressKey | Provide egress Symmetric key information to save (create or store or refresh)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveSymEgressKey(vCSenderOrganizationId, vCPermissions, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vCSenderOrganizationId** | **String**| Sender organization id | 
 **vCPermissions** | **String**| Encoded user permissions returned by the CGK, for the entity user who initiated the boarding | 
 **vCCorrelationId** | **String**| A globally unique id associated with your request | [optional] 
 **saveSymEgressKey** | [**SaveSymEgressKey**](SaveSymEgressKey.md)| Provide egress Symmetric key information to save (create or store or refresh) | [optional] 

### Return type

[**InlineResponse2014**](InlineResponse2014.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

