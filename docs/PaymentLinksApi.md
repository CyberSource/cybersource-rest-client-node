# CyberSource.PaymentLinksApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPaymentLink**](PaymentLinksApi.md#createPaymentLink) | **POST** /ipl/v2/payment-links | Create a Payment Link
[**getAllPaymentLinks**](PaymentLinksApi.md#getAllPaymentLinks) | **GET** /ipl/v2/payment-links | Get a List of Payment Links
[**getPaymentLink**](PaymentLinksApi.md#getPaymentLink) | **GET** /ipl/v2/payment-links/{id} | Get Payment Link Details
[**updatePaymentLink**](PaymentLinksApi.md#updatePaymentLink) | **PATCH** /ipl/v2/payment-links/{id} | Update a Payment Link


<a name="createPaymentLink"></a>
# **createPaymentLink**
> PblPaymentLinksPost201Response createPaymentLink(createPaymentLinkRequest)

Create a Payment Link

Pay by Link is an easy and fast way to securely sell products or receive donations online. This solution is ideal for distributing the same payment link to multiple customers.   Links for making purchases are referred to as fixed-price links, and links for making donations are referred to as customer-set price links. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PaymentLinksApi();

var createPaymentLinkRequest = new CyberSource.CreatePaymentLinkRequest(); // CreatePaymentLinkRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPaymentLink(createPaymentLinkRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPaymentLinkRequest** | [**CreatePaymentLinkRequest**](CreatePaymentLinkRequest.md)|  | 

### Return type

[**PblPaymentLinksPost201Response**](PblPaymentLinksPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json, application/hal+json, application/json;charset=utf-8, application/hal+json;charset=utf-8

<a name="getAllPaymentLinks"></a>
# **getAllPaymentLinks**
> PblPaymentLinksAllGet200Response getAllPaymentLinks(offset, limit, opts)

Get a List of Payment Links

Provides a (filtered) list of payment links that have been created in your account. You can filter the list based on the following status types:  - ACTIVE  - INACTIVE 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PaymentLinksApi();

var offset = 56; // Number | Page offset number.

var limit = 56; // Number | Maximum number of items you would like returned.   Maximum limit: 1000 

var opts = { 
  'status': "status_example" // String | The status of the purchase or donation link.  Possible values:   - ACTIVE   - INACTIVE 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllPaymentLinks(offset, limit, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| Page offset number. | 
 **limit** | **Number**| Maximum number of items you would like returned.   Maximum limit: 1000  | 
 **status** | **String**| The status of the purchase or donation link.  Possible values:   - ACTIVE   - INACTIVE  | [optional] 

### Return type

[**PblPaymentLinksAllGet200Response**](PblPaymentLinksAllGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json, application/hal+json, application/json;charset=utf-8, application/hal+json;charset=utf-8

<a name="getPaymentLink"></a>
# **getPaymentLink**
> PblPaymentLinksGet200Response getPaymentLink(id)

Get Payment Link Details

You can retrieve details of a specific payment link. For each payment transaction you can use the Transaction Details API to get more details on the payment transaction.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PaymentLinksApi();

var id = "id_example"; // String | The purchase number.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPaymentLink(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The purchase number. | 

### Return type

[**PblPaymentLinksGet200Response**](PblPaymentLinksGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json, application/hal+json, application/json;charset=utf-8, application/hal+json;charset=utf-8

<a name="updatePaymentLink"></a>
# **updatePaymentLink**
> PblPaymentLinksPost201Response updatePaymentLink(id, updatePaymentLinkRequest)

Update a Payment Link

You can update all information except the payment link number for a payment link. Changes made to amount/price will apply to new payments made using the payment link. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PaymentLinksApi();

var id = "id_example"; // String | The purchase number.

var updatePaymentLinkRequest = new CyberSource.UpdatePaymentLinkRequest(); // UpdatePaymentLinkRequest | Updating the purchase or donation link does not resend the link automatically. You must resend the purchase or donation link separately.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updatePaymentLink(id, updatePaymentLinkRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The purchase number. | 
 **updatePaymentLinkRequest** | [**UpdatePaymentLinkRequest**](UpdatePaymentLinkRequest.md)| Updating the purchase or donation link does not resend the link automatically. You must resend the purchase or donation link separately. | 

### Return type

[**PblPaymentLinksPost201Response**](PblPaymentLinksPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json, application/hal+json, application/json;charset=utf-8, application/hal+json;charset=utf-8

