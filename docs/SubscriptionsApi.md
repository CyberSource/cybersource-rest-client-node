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
> ActivateSubscriptionResponse activateSubscription(id, opts)

Activate a Subscription

Activate a `SUSPENDED` Subscription 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.SubscriptionsApi();

var id = "id_example"; // String | Subscription Id

var opts = { 
  'processSkippedPayments': true // Boolean | Indicates if skipped payments should be processed from the period when the subscription was suspended. By default, this is set to true.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.activateSubscription(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Subscription Id | 
 **processSkippedPayments** | **Boolean**| Indicates if skipped payments should be processed from the period when the subscription was suspended. By default, this is set to true. | [optional] [default to true]

### Return type

[**ActivateSubscriptionResponse**](ActivateSubscriptionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json, application/hal+json, application/json;charset=utf-8, application/hal+json;charset=utf-8

<a name="cancelSubscription"></a>
# **cancelSubscription**
> CancelSubscriptionResponse cancelSubscription(id)

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

[**CancelSubscriptionResponse**](CancelSubscriptionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json, application/hal+json, application/json;charset=utf-8, application/hal+json;charset=utf-8

<a name="createSubscription"></a>
# **createSubscription**
> CreateSubscriptionResponse createSubscription(createSubscriptionRequest)

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

[**CreateSubscriptionResponse**](CreateSubscriptionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json, application/hal+json, application/json;charset=utf-8, application/hal+json;charset=utf-8

<a name="getAllSubscriptions"></a>
# **getAllSubscriptions**
> GetAllSubscriptionsResponse getAllSubscriptions(opts)

Get a List of Subscriptions

Retrieve Subscriptions by Subscription Code & Subscription Status. 

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
 **limit** | **Number**| Number of items to be returned. Default - `20`, Max - `100`  | [optional] 
 **code** | **String**| Filter by Subscription Code | [optional] 
 **status** | **String**| Filter by Subscription Status | [optional] 

### Return type

[**GetAllSubscriptionsResponse**](GetAllSubscriptionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json, application/hal+json, application/json;charset=utf-8, application/hal+json;charset=utf-8

<a name="getSubscription"></a>
# **getSubscription**
> GetSubscriptionResponse getSubscription(id)

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

[**GetSubscriptionResponse**](GetSubscriptionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json, application/hal+json, application/json;charset=utf-8, application/hal+json;charset=utf-8

<a name="getSubscriptionCode"></a>
# **getSubscriptionCode**
> GetSubscriptionCodeResponse getSubscriptionCode()

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

[**GetSubscriptionCodeResponse**](GetSubscriptionCodeResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json, application/hal+json, application/json;charset=utf-8, application/hal+json;charset=utf-8

<a name="suspendSubscription"></a>
# **suspendSubscription**
> SuspendSubscriptionResponse suspendSubscription(id)

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

[**SuspendSubscriptionResponse**](SuspendSubscriptionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json, application/hal+json, application/json;charset=utf-8, application/hal+json;charset=utf-8

<a name="updateSubscription"></a>
# **updateSubscription**
> UpdateSubscriptionResponse updateSubscription(id, updateSubscription)

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

[**UpdateSubscriptionResponse**](UpdateSubscriptionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json, application/hal+json, application/json;charset=utf-8, application/hal+json;charset=utf-8

