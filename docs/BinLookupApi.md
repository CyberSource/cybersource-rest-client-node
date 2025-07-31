# CyberSource.BinLookupApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountInfo**](BinLookupApi.md#getAccountInfo) | **POST** /bin/v1/binlookup | BIN Lookup API


<a name="getAccountInfo"></a>
# **getAccountInfo**
> InlineResponse2012 getAccountInfo(createBinLookupRequest)

BIN Lookup API

The BIN Lookup Service is a versatile business tool that provides card network agnostic solution designed to ensure frictionless transaction experience by utilizing up-to-date Bank Identification Number (BIN) attributes sourced from multiple global and regional data sources. This service helps to improve authorization rates by helping to route transactions to the best-suited card network, minimizes fraud through card detail verification and aids in regulatory compliance by identifying card properties. The service is flexible and provides businesses with a flexible choice of inputs such as primary account number (PAN), network token from major networks (such as Visa, American Express, Discover and several regional networks) which includes device PAN (DPAN), and all types of tokens generated via CyberSource Token Management Service (TMS). Currently, the range of available credentials is contingent on the networks enabled for the business entity. Therefore, the network information specified in this documentation is illustrative and subject to personalized offerings for each reseller or merchant. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.BinLookupApi();

var createBinLookupRequest = new CyberSource.CreateBinLookupRequest(); // CreateBinLookupRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAccountInfo(createBinLookupRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createBinLookupRequest** | [**CreateBinLookupRequest**](CreateBinLookupRequest.md)|  | 

### Return type

[**InlineResponse2012**](InlineResponse2012.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

