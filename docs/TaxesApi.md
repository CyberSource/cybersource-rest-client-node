# CyberSource.TaxesApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**calculateTax**](TaxesApi.md#calculateTax) | **POST** /vas/v2/tax | Calculate Taxes
[**voidTax**](TaxesApi.md#voidTax) | **PATCH** /vas/v2/tax/{id} | Void Taxes


<a name="calculateTax"></a>
# **calculateTax**
> VasV2PaymentsPost201Response calculateTax(taxRequest)

Calculate Taxes

Get tax details for a transaction. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.TaxesApi();

var taxRequest = new CyberSource.TaxRequest(); // TaxRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.calculateTax(taxRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taxRequest** | [**TaxRequest**](TaxRequest.md)|  | 

### Return type

[**VasV2PaymentsPost201Response**](VasV2PaymentsPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="voidTax"></a>
# **voidTax**
> VasV2TaxVoid200Response voidTax(voidTaxRequest, id)

Void Taxes

Pass the Tax Request ID in the PATCH request to void the committed tax calculation.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.TaxesApi();

var voidTaxRequest = new CyberSource.VoidTaxRequest(); // VoidTaxRequest | 

var id = "id_example"; // String | The tax ID returned from a previous request.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.voidTax(voidTaxRequest, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **voidTaxRequest** | [**VoidTaxRequest**](VoidTaxRequest.md)|  | 
 **id** | **String**| The tax ID returned from a previous request. | 

### Return type

[**VasV2TaxVoid200Response**](VasV2TaxVoid200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

