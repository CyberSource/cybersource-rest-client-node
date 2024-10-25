# CyberSource.OrdersApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrder**](OrdersApi.md#createOrder) | **POST** /pts/v2/intents | Create an Order
[**updateOrder**](OrdersApi.md#updateOrder) | **PATCH** /pts/v2/intents/{id} | Update an Order


<a name="createOrder"></a>
# **createOrder**
> PtsV2CreateOrderPost201Response createOrder(createOrderRequest)

Create an Order

A create order request enables you to send the itemized details along with the order. This API can be used by merchants initiating their transactions with the create order API.  

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.OrdersApi();

var createOrderRequest = new CyberSource.CreateOrderRequest(); // CreateOrderRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createOrder(createOrderRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrderRequest** | [**CreateOrderRequest**](CreateOrderRequest.md)|  | 

### Return type

[**PtsV2CreateOrderPost201Response**](PtsV2CreateOrderPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="updateOrder"></a>
# **updateOrder**
> PtsV2UpdateOrderPatch201Response updateOrder(id, updateOrderRequest)

Update an Order

This API can be used in two flavours - for updating the order as well as saving the order. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.OrdersApi();

var id = "id_example"; // String | The ID returned from the original create order response.

var updateOrderRequest = new CyberSource.UpdateOrderRequest(); // UpdateOrderRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateOrder(id, updateOrderRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID returned from the original create order response. | 
 **updateOrderRequest** | [**UpdateOrderRequest**](UpdateOrderRequest.md)|  | 

### Return type

[**PtsV2UpdateOrderPatch201Response**](PtsV2UpdateOrderPatch201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

