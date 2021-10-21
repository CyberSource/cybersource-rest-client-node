# CyberSource.PaymentBatchSummariesApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPaymentBatchSummary**](PaymentBatchSummariesApi.md#getPaymentBatchSummary) | **GET** /reporting/v3/payment-batch-summaries | Get Payment Batch Summary Data


<a name="getPaymentBatchSummary"></a>
# **getPaymentBatchSummary**
> ReportingV3PaymentBatchSummariesGet200Response getPaymentBatchSummary(startTime, endTime, opts)

Get Payment Batch Summary Data

Scope can be either account/merchant or reseller.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PaymentBatchSummariesApi();

var startTime = new Date("2013-10-20T19:20:30+01:00"); // Date | Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd'T'HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 

var endTime = new Date("2013-10-20T19:20:30+01:00"); // Date | Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd'T'HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 

var opts = { 
  'organizationId': "organizationId_example", // String | Valid Organization Id
  'rollUp': "rollUp_example", // String | Conditional - RollUp for data for day/week/month. Required while getting breakdown data for a Merchant
  'breakdown': "breakdown_example", // String | Conditional - Breakdown on account_rollup/all_merchant/selected_merchant. Required while getting breakdown data for a Merchant.
  'startDayOfWeek': 56 // Number | Optional - Start day of week to breakdown data for weeks in a month
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPaymentBatchSummary(startTime, endTime, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startTime** | **Date**| Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z)  | 
 **endTime** | **Date**| Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z)  | 
 **organizationId** | **String**| Valid Organization Id | [optional] 
 **rollUp** | **String**| Conditional - RollUp for data for day/week/month. Required while getting breakdown data for a Merchant | [optional] 
 **breakdown** | **String**| Conditional - Breakdown on account_rollup/all_merchant/selected_merchant. Required while getting breakdown data for a Merchant. | [optional] 
 **startDayOfWeek** | **Number**| Optional - Start day of week to breakdown data for weeks in a month | [optional] 

### Return type

[**ReportingV3PaymentBatchSummariesGet200Response**](ReportingV3PaymentBatchSummariesGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json, text/csv, application/xml

