# CyberSource.ForeignExchangeRatesApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFxRates**](ForeignExchangeRatesApi.md#createFxRates) | **POST** /pts/v2/payouts/fx-rates | Retrieve Foreign Exchange Rates


<a name="createFxRates"></a>
# **createFxRates**
> InlineResponse2013 createFxRates(body, contentType, xRequestid, vCMerchantId, vCPermissions, vCCorrelationId, vCOrganizationId)

Retrieve Foreign Exchange Rates

Retrieve current foreign exchange rates for cross-border payouts. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.ForeignExchangeRatesApi();

var body = new CyberSource.Body(); // Body | 

var contentType = "contentType_example"; // String | 

var xRequestid = "xRequestid_example"; // String | 

var vCMerchantId = "vCMerchantId_example"; // String | 

var vCPermissions = "vCPermissions_example"; // String | 

var vCCorrelationId = "vCCorrelationId_example"; // String | 

var vCOrganizationId = "vCOrganizationId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createFxRates(body, contentType, xRequestid, vCMerchantId, vCPermissions, vCCorrelationId, vCOrganizationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body**](Body.md)|  | 
 **contentType** | **String**|  | 
 **xRequestid** | **String**|  | 
 **vCMerchantId** | **String**|  | 
 **vCPermissions** | **String**|  | 
 **vCCorrelationId** | **String**|  | 
 **vCOrganizationId** | **String**|  | 

### Return type

[**InlineResponse2013**](InlineResponse2013.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

