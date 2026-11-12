# CyberSource.SubscriptionsFollowOnsApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFollowOnSubscription**](SubscriptionsFollowOnsApi.md#createFollowOnSubscription) | **POST** /rbs/v1/subscriptions/follow-ons/{requestId} | Create a Follow-On Subscription
[**getFollowOnSubscription**](SubscriptionsFollowOnsApi.md#getFollowOnSubscription) | **GET** /rbs/v1/subscriptions/follow-ons/{requestId} | Get a Follow-On Subscription


<a name="createFollowOnSubscription"></a>
# **createFollowOnSubscription**
> CreateSubscriptionResponse createFollowOnSubscription(requestId, createFollowOnSubscriptionRequest)

Create a Follow-On Subscription

Create a new Subscription based on the Request Id of an existing successful Transaction.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.SubscriptionsFollowOnsApi();

var requestId = "requestId_example"; // String | Request Id of an existing successful Transaction

var createFollowOnSubscriptionRequest = new CyberSource.CreateFollowOnSubscriptionRequest(); // CreateFollowOnSubscriptionRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createFollowOnSubscription(requestId, createFollowOnSubscriptionRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestId** | **String**| Request Id of an existing successful Transaction | 
 **createFollowOnSubscriptionRequest** | [**CreateFollowOnSubscriptionRequest**](CreateFollowOnSubscriptionRequest.md)|  | 

### Return type

[**CreateSubscriptionResponse**](CreateSubscriptionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json, application/hal+json, application/json;charset=utf-8, application/hal+json;charset=utf-8

<a name="getFollowOnSubscription"></a>
# **getFollowOnSubscription**
> GetFollowOnSubscriptionResponse getFollowOnSubscription(requestId)

Get a Follow-On Subscription

Get details of the Subscription being created based on the Request Id of an existing successful Transaction. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.SubscriptionsFollowOnsApi();

var requestId = "requestId_example"; // String | Request Id of an existing successful Transaction


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFollowOnSubscription(requestId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestId** | **String**| Request Id of an existing successful Transaction | 

### Return type

[**GetFollowOnSubscriptionResponse**](GetFollowOnSubscriptionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json, application/hal+json, application/json;charset=utf-8, application/hal+json;charset=utf-8

