# CyberSource.PaymentInstrumentApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPaymentInstrument**](PaymentInstrumentApi.md#createPaymentInstrument) | **POST** /tms/v1/paymentinstruments | Create a Payment Instrument
[**deletePaymentInstrument**](PaymentInstrumentApi.md#deletePaymentInstrument) | **DELETE** /tms/v1/paymentinstruments/{tokenId} | Delete a Payment Instrument
[**getPaymentInstrument**](PaymentInstrumentApi.md#getPaymentInstrument) | **GET** /tms/v1/paymentinstruments/{tokenId} | Retrieve a Payment Instrument
[**updatePaymentInstrument**](PaymentInstrumentApi.md#updatePaymentInstrument) | **PATCH** /tms/v1/paymentinstruments/{tokenId} | Update a Payment Instrument


<a name="createPaymentInstrument"></a>
# **createPaymentInstrument**
> TmsV1PaymentinstrumentsPatch200Response createPaymentInstrument(profileId, vCMerchantId, vCCorrelationId, createPaymentInstrumentRequest, opts)

Create a Payment Instrument

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PaymentInstrumentApi();

var profileId = "profileId_example"; // String | The id of a profile containing user specific TMS configuration.

var vCMerchantId = "vCMerchantId_example"; // String | CyberSource merchant id.

var vCCorrelationId = "vCCorrelationId_example"; // String | The mandatory correlation id passed by upstream (calling) system.

var createPaymentInstrumentRequest = new CyberSource.CreatePaymentInstrumentRequest(); // CreatePaymentInstrumentRequest | Specify the customer's payment details for card or bank account.

var opts = { 
  'clientApplication': "clientApplication_example" // String | Client application name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPaymentInstrument(profileId, vCMerchantId, vCCorrelationId, createPaymentInstrumentRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | 
 **vCMerchantId** | **String**| CyberSource merchant id. | 
 **vCCorrelationId** | **String**| The mandatory correlation id passed by upstream (calling) system. | 
 **createPaymentInstrumentRequest** | [**CreatePaymentInstrumentRequest**](CreatePaymentInstrumentRequest.md)| Specify the customer&#39;s payment details for card or bank account. | 
 **clientApplication** | **String**| Client application name | [optional] 

### Return type

[**TmsV1PaymentinstrumentsPatch200Response**](TmsV1PaymentinstrumentsPatch200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: */*

<a name="deletePaymentInstrument"></a>
# **deletePaymentInstrument**
> deletePaymentInstrument(profileId, vCMerchantId, vCCorrelationId, tokenId, opts)

Delete a Payment Instrument

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PaymentInstrumentApi();

var profileId = "profileId_example"; // String | The id of a profile containing user specific TMS configuration.

var vCMerchantId = "vCMerchantId_example"; // String | CyberSource merchant id.

var vCCorrelationId = "vCCorrelationId_example"; // String | The mandatory correlation id passed by upstream (calling) system.

var tokenId = "tokenId_example"; // String | The TokenId of a Payment Instrument.

var opts = { 
  'clientApplication': "clientApplication_example" // String | Client application name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletePaymentInstrument(profileId, vCMerchantId, vCCorrelationId, tokenId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | 
 **vCMerchantId** | **String**| CyberSource merchant id. | 
 **vCCorrelationId** | **String**| The mandatory correlation id passed by upstream (calling) system. | 
 **tokenId** | **String**| The TokenId of a Payment Instrument. | 
 **clientApplication** | **String**| Client application name | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: */*

<a name="getPaymentInstrument"></a>
# **getPaymentInstrument**
> TmsV1PaymentinstrumentsPatch200Response getPaymentInstrument(profileId, vCMerchantId, vCCorrelationId, tokenId, opts)

Retrieve a Payment Instrument

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PaymentInstrumentApi();

var profileId = "profileId_example"; // String | The id of a profile containing user specific TMS configuration.

var vCMerchantId = "vCMerchantId_example"; // String | CyberSource merchant id.

var vCCorrelationId = "vCCorrelationId_example"; // String | The mandatory correlation id passed by upstream (calling) system.

var tokenId = "tokenId_example"; // String | The TokenId of a Payment Instrument.

var opts = { 
  'clientApplication': "clientApplication_example" // String | Client application name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPaymentInstrument(profileId, vCMerchantId, vCCorrelationId, tokenId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | 
 **vCMerchantId** | **String**| CyberSource merchant id. | 
 **vCCorrelationId** | **String**| The mandatory correlation id passed by upstream (calling) system. | 
 **tokenId** | **String**| The TokenId of a Payment Instrument. | 
 **clientApplication** | **String**| Client application name | [optional] 

### Return type

[**TmsV1PaymentinstrumentsPatch200Response**](TmsV1PaymentinstrumentsPatch200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: */*

<a name="updatePaymentInstrument"></a>
# **updatePaymentInstrument**
> TmsV1PaymentinstrumentsPatch200Response updatePaymentInstrument(profileId, vCMerchantId, vCCorrelationId, tokenId, updatePaymentInstrumentRequest, opts)

Update a Payment Instrument

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PaymentInstrumentApi();

var profileId = "profileId_example"; // String | The id of a profile containing user specific TMS configuration.

var vCMerchantId = "vCMerchantId_example"; // String | CyberSource merchant id.

var vCCorrelationId = "vCCorrelationId_example"; // String | The mandatory correlation id passed by upstream (calling) system.

var tokenId = "tokenId_example"; // String | The TokenId of a Payment Instrument.

var updatePaymentInstrumentRequest = new CyberSource.UpdatePaymentInstrumentRequest(); // UpdatePaymentInstrumentRequest | Specify the customer's payment details.

var opts = { 
  'clientApplication': "clientApplication_example" // String | Client application name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updatePaymentInstrument(profileId, vCMerchantId, vCCorrelationId, tokenId, updatePaymentInstrumentRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | 
 **vCMerchantId** | **String**| CyberSource merchant id. | 
 **vCCorrelationId** | **String**| The mandatory correlation id passed by upstream (calling) system. | 
 **tokenId** | **String**| The TokenId of a Payment Instrument. | 
 **updatePaymentInstrumentRequest** | [**UpdatePaymentInstrumentRequest**](UpdatePaymentInstrumentRequest.md)| Specify the customer&#39;s payment details. | 
 **clientApplication** | **String**| Client application name | [optional] 

### Return type

[**TmsV1PaymentinstrumentsPatch200Response**](TmsV1PaymentinstrumentsPatch200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: */*

