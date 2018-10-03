# CyberSource.ReversalApi

All URIs are relative to *https://api.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authReversal**](ReversalApi.md#authReversal) | **POST** /v2/payments/{id}/reversals | Process an Authorization Reversal
[**getAuthReversal**](ReversalApi.md#getAuthReversal) | **GET** /v2/reversals/{id} | Retrieve an Authorization Reversal


<a name="authReversal"></a>
# **authReversal**
> InlineResponse2011 authReversal(id, authReversalRequest)

Process an Authorization Reversal

Include the payment ID in the POST request to reverse the payment amount.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.ReversalApi();

var id = "id_example"; // String | The payment ID returned from a previous payment request.

var authReversalRequest = new CyberSource.AuthReversalRequest(); // AuthReversalRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authReversal(id, authReversalRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The payment ID returned from a previous payment request. | 
 **authReversalRequest** | [**AuthReversalRequest**](AuthReversalRequest.md)|  | 

### Return type

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAuthReversal"></a>
# **getAuthReversal**
> InlineResponse2003 getAuthReversal(id)

Retrieve an Authorization Reversal

Include the authorization reversal ID in the GET request to retrieve the authorization reversal details. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.ReversalApi();

var id = "id_example"; // String | The authorization reversal ID returned from a previous authorization reversal request.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAuthReversal(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The authorization reversal ID returned from a previous authorization reversal request. | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

