# CyberSource.CreateNewWebhooksApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWebhookSubscription**](CreateNewWebhooksApi.md#createWebhookSubscription) | **POST** /notification-subscriptions/v1/webhooks | Create a Webhook
[**findProductsToSubscribe**](CreateNewWebhooksApi.md#findProductsToSubscribe) | **GET** /notification-subscriptions/v1/products/{organizationId} | Find Products You Can Subscribe To
[**saveSymEgressKey**](CreateNewWebhooksApi.md#saveSymEgressKey) | **POST** /kms/egress/v2/keys-sym | Create Webhook Security Keys


<a name="createWebhookSubscription"></a>
# **createWebhookSubscription**
> InlineResponse2014 createWebhookSubscription(opts)

Create a Webhook

Create a new webhook subscription. Before creating a webhook, ensure that a security key has been created at the top of this developer center section. You will not need to pass us back the key during the creation of the webhook, but you will receive an error if you did not already create a key or store one on file. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.CreateNewWebhooksApi();

var opts = { 
  'createWebhookRequest': new CyberSource.CreateWebhookRequest() // CreateWebhookRequest | The webhook payload
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createWebhookSubscription(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createWebhookRequest** | [**CreateWebhookRequest**](CreateWebhookRequest.md)| The webhook payload | [optional] 

### Return type

[**InlineResponse2014**](InlineResponse2014.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

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
 - **Accept**: application/json;charset=utf-8

<a name="saveSymEgressKey"></a>
# **saveSymEgressKey**
> InlineResponse2013 saveSymEgressKey(vCSenderOrganizationId, vCPermissions, opts)

Create Webhook Security Keys

Create security keys that CyberSource will use internally to connect to your servers and validate messages using a digital signature.  Select the CREATE example for CyberSource to generate the key on our server and maintain it for you as well. Remeber to save the key in the API response, so that you can use it to validate messages later. 

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

[**InlineResponse2013**](InlineResponse2013.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

