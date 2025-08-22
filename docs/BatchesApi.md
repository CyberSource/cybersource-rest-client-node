# CyberSource.BatchesApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBatchReport**](BatchesApi.md#getBatchReport) | **GET** /accountupdater/v1/batches/{batchId}/report | Retrieve a Batch Report
[**getBatchStatus**](BatchesApi.md#getBatchStatus) | **GET** /accountupdater/v1/batches/{batchId}/status | Retrieve a Batch Status
[**getBatchesList**](BatchesApi.md#getBatchesList) | **GET** /accountupdater/v1/batches | List Batches
[**postBatch**](BatchesApi.md#postBatch) | **POST** /accountupdater/v1/batches | Create a Batch


<a name="getBatchReport"></a>
# **getBatchReport**
> InlineResponse20011 getBatchReport(batchId)

Retrieve a Batch Report

**Get Batch Report**<br>This resource accepts a batch id and returns: - The batch status. - The total number of accepted, rejected, updated records. - The total number of card association responses. - The billable quantities of:   - New Account Numbers (NAN)   - New Expiry Dates (NED)   - Account Closures (ACL)   - Contact Card Holders (CCH) - Source record information including token ids, masked card number, expiration dates & card type. - Response record information including response code, reason, token ids, masked card number, expiration dates & card type. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.BatchesApi();

var batchId = "batchId_example"; // String | Unique identification number assigned to the submitted request.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBatchReport(batchId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchId** | **String**| Unique identification number assigned to the submitted request. | 

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="getBatchStatus"></a>
# **getBatchStatus**
> InlineResponse20010 getBatchStatus(batchId)

Retrieve a Batch Status

**Get Batch Status**<br>This resource accepts a batch id and returns: - The batch status. - The total number of accepted, rejected, updated records. - The total number of card association responses. - The billable quantities of:   - New Account Numbers (NAN)   - New Expiry Dates (NED)   - Account Closures (ACL)   - Contact Card Holders (CCH) 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.BatchesApi();

var batchId = "batchId_example"; // String | Unique identification number assigned to the submitted request.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBatchStatus(batchId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchId** | **String**| Unique identification number assigned to the submitted request. | 

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="getBatchesList"></a>
# **getBatchesList**
> InlineResponse2009 getBatchesList(opts)

List Batches

**List Batches**<br>This resource accepts a optional date range, record offset and limit, returning a paginated response of batches containing: - The batch id. - The batch status. - The batch created / modified dates. - The total number of accepted, rejected, updated records. - The total number of card association responses. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.BatchesApi();

var opts = { 
  'offset': 0, // Number | Starting record in zero-based dataset that should be returned as the first object in the array.
  'limit': 20, // Number | The maximum number that can be returned in the array starting from the offset record in zero-based dataset.
  'fromDate': "fromDate_example", // String | ISO-8601 format: yyyyMMddTHHmmssZ
  'toDate': "toDate_example" // String | ISO-8601 format: yyyyMMddTHHmmssZ
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBatchesList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| Starting record in zero-based dataset that should be returned as the first object in the array. | [optional] [default to 0]
 **limit** | **Number**| The maximum number that can be returned in the array starting from the offset record in zero-based dataset. | [optional] [default to 20]
 **fromDate** | **String**| ISO-8601 format: yyyyMMddTHHmmssZ | [optional] 
 **toDate** | **String**| ISO-8601 format: yyyyMMddTHHmmssZ | [optional] 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="postBatch"></a>
# **postBatch**
> InlineResponse202 postBatch(body)

Create a Batch

**Create a Batch**<br>This resource accepts TMS tokens ids of a Customer, Payment Instrument or Instrument Identifier. <br> The card numbers for the supplied tokens ids are then sent to the relevant card associations to check for updates.<br>The following type of batches can be submitted: -  **oneOff** batch containing tokens id for Visa or MasterCard card numbers. - **amexRegistration** batch containing tokens id for Amex card numbers.  A batch id will be returned on a successful response which can be used to get the batch status and the batch report. The availability of API features for a merchant may depend on the portfolio configuration and may need to be enabled at the portfolio level before they can be added to merchant accounts. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.BatchesApi();

var body = new CyberSource.Body(); // Body | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postBatch(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body**](Body.md)|  | 

### Return type

[**InlineResponse202**](InlineResponse202.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

