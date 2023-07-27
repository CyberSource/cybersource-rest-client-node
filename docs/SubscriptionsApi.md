# CyberSource.SubscriptionsApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateSubscription**](SubscriptionsApi.md#activateSubscription) | **POST** /rbs/v1/subscriptions/{id}/activate | Activate a Subscription
[**cancelSubscription**](SubscriptionsApi.md#cancelSubscription) | **POST** /rbs/v1/subscriptions/{id}/cancel | Cancel a Subscription
[**createSubscription**](SubscriptionsApi.md#createSubscription) | **POST** /rbs/v1/subscriptions | Create a Subscription
[**getAllSubscriptions**](SubscriptionsApi.md#getAllSubscriptions) | **GET** /rbs/v1/subscriptions | Get a List of Subscriptions
[**getSubscription**](SubscriptionsApi.md#getSubscription) | **GET** /rbs/v1/subscriptions/{id} | Get a Subscription
[**getSubscriptionCode**](SubscriptionsApi.md#getSubscriptionCode) | **GET** /rbs/v1/subscriptions/code | Get a Subscription Code
[**suspendSubscription**](SubscriptionsApi.md#suspendSubscription) | **POST** /rbs/v1/subscriptions/{id}/suspend | Suspend a Subscription
[**updateSubscription**](SubscriptionsApi.md#updateSubscription) | **PATCH** /rbs/v1/subscriptions/{id} | Update a Subscription


<a name="activateSubscription"></a>
# **activateSubscription**
> InlineResponse2009 activateSubscription(id)

Activate a Subscription

Activate a &#x60;CANCELLED&#x60; Or &#x60;SUSPENDED&#x60; Subscription 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.SubscriptionsApi();

var id = "id_example"; // String | Subscription Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.activateSubscription(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Subscription Id | 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="cancelSubscription"></a>
# **cancelSubscription**
> InlineResponse202 cancelSubscription(id)

Cancel a Subscription

Cancel a Subscription

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.SubscriptionsApi();

var id = "id_example"; // String | Subscription Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cancelSubscription(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Subscription Id | 

### Return type

[**InlineResponse202**](InlineResponse202.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="createSubscription"></a>
# **createSubscription**
> InlineResponse2011 createSubscription(createSubscriptionRequest)

Create a Subscription

Create a Recurring Billing Subscription

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.SubscriptionsApi();

var createSubscriptionRequest = new CyberSource.CreateSubscriptionRequest(); // CreateSubscriptionRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createSubscription(createSubscriptionRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createSubscriptionRequest** | [**CreateSubscriptionRequest**](CreateSubscriptionRequest.md)|  | 

### Return type

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="getAllSubscriptions"></a>
# **getAllSubscriptions**
> InlineResponse2006 getAllSubscriptions(opts)

Get a List of Subscriptions

Retrieve Subscriptions by Subscription Code &amp; Subscription Status. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.SubscriptionsApi();

var opts = { 
  'offset': 56, // Number | Page offset number.
  'limit': 56, // Number | Number of items to be returned. Default - `20`, Max - `100` 
  'code': "code_example", // String | Filter by Subscription Code
  'status': "status_example" // String | Filter by Subscription Status
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllSubscriptions(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| Page offset number. | [optional] 
 **limit** | **Number**| Number of items to be returned. Default - &#x60;20&#x60;, Max - &#x60;100&#x60;  | [optional] 
 **code** | **String**| Filter by Subscription Code | [optional] 
 **status** | **String**| Filter by Subscription Status | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="getSubscription"></a>
# **getSubscription**
> InlineResponse2007 getSubscription(id)

Get a Subscription

Get a Subscription by Subscription Id

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.SubscriptionsApi();

var id = "id_example"; // String | Subscription Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSubscription(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Subscription Id | 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="getSubscriptionCode"></a>
# **getSubscriptionCode**
> InlineResponse20010 getSubscriptionCode()

Get a Subscription Code

Get a Unique Subscription Code

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.SubscriptionsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSubscriptionCode(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="suspendSubscription"></a>
# **suspendSubscription**
> InlineResponse2021 suspendSubscription(id)

Suspend a Subscription

Suspend a Subscription

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.SubscriptionsApi();

var id = "id_example"; // String | Subscription Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.suspendSubscription(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Subscription Id | 

### Return type

[**InlineResponse2021**](InlineResponse2021.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="updateSubscription"></a>
# **updateSubscription**
> InlineResponse2008 updateSubscription(id, updateSubscription)

Update a Subscription

Update a Subscription by Subscription Id

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.SubscriptionsApi();

var id = "id_example"; // String | Subscription Id

var updateSubscription = new CyberSource.UpdateSubscription(); // UpdateSubscription | Update Subscription


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateSubscription(id, updateSubscription, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Subscription Id | 
 **updateSubscription** | [**UpdateSubscription**](UpdateSubscription.md)| Update Subscription | 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

