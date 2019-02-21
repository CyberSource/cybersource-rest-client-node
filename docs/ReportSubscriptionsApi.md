# CyberSource.ReportSubscriptionsApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSubscription**](ReportSubscriptionsApi.md#createSubscription) | **PUT** /reporting/v3/report-subscriptions | Create Report Subscription for a report name by organization
[**deleteSubscription**](ReportSubscriptionsApi.md#deleteSubscription) | **DELETE** /reporting/v3/report-subscriptions/{reportName} | Delete subscription of a report name by organization
[**getAllSubscriptions**](ReportSubscriptionsApi.md#getAllSubscriptions) | **GET** /reporting/v3/report-subscriptions | Retrieve all subscriptions by organization
[**getSubscription**](ReportSubscriptionsApi.md#getSubscription) | **GET** /reporting/v3/report-subscriptions/{reportName} | Retrieve subscription for a report name by organization


<a name="createSubscription"></a>
# **createSubscription**
> createSubscription(requestBody)

Create Report Subscription for a report name by organization



### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.ReportSubscriptionsApi();

var requestBody = new CyberSource.RequestBody(); // RequestBody | Report subscription request payload


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createSubscription(requestBody, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestBody** | [**RequestBody**](RequestBody.md)| Report subscription request payload | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/hal+json

<a name="deleteSubscription"></a>
# **deleteSubscription**
> deleteSubscription(reportName)

Delete subscription of a report name by organization



### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.ReportSubscriptionsApi();

var reportName = "reportName_example"; // String | Name of the Report to Delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteSubscription(reportName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportName** | **String**| Name of the Report to Delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json

<a name="getAllSubscriptions"></a>
# **getAllSubscriptions**
> ReportingV3ReportSubscriptionsGet200Response getAllSubscriptions()

Retrieve all subscriptions by organization



### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.ReportSubscriptionsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllSubscriptions(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ReportingV3ReportSubscriptionsGet200Response**](ReportingV3ReportSubscriptionsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json

<a name="getSubscription"></a>
# **getSubscription**
> ReportingV3ReportSubscriptionsGet200ResponseSubscriptions getSubscription(reportName)

Retrieve subscription for a report name by organization



### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.ReportSubscriptionsApi();

var reportName = "reportName_example"; // String | Name of the Report to Retrieve


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSubscription(reportName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportName** | **String**| Name of the Report to Retrieve | 

### Return type

[**ReportingV3ReportSubscriptionsGet200ResponseSubscriptions**](ReportingV3ReportSubscriptionsGet200ResponseSubscriptions.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json

