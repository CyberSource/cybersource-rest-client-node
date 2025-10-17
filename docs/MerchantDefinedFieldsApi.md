# CyberSource.MerchantDefinedFieldsApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMerchantDefinedFieldDefinition**](MerchantDefinedFieldsApi.md#createMerchantDefinedFieldDefinition) | **POST** /invoicing/v2/{referenceType}/merchantDefinedFields | Create merchant defined field for a given reference type
[**getMerchantDefinedFieldsDefinitions**](MerchantDefinedFieldsApi.md#getMerchantDefinedFieldsDefinitions) | **GET** /invoicing/v2/{referenceType}/merchantDefinedFields | Get all merchant defined fields for a given reference type
[**invoicingV2ReferenceTypeMerchantDefinedFieldsIdDelete**](MerchantDefinedFieldsApi.md#invoicingV2ReferenceTypeMerchantDefinedFieldsIdDelete) | **DELETE** /invoicing/v2/{referenceType}/merchantDefinedFields/{id} | Delete a MerchantDefinedField by ID
[**invoicingV2ReferenceTypeMerchantDefinedFieldsIdPut**](MerchantDefinedFieldsApi.md#invoicingV2ReferenceTypeMerchantDefinedFieldsIdPut) | **PUT** /invoicing/v2/{referenceType}/merchantDefinedFields/{id} | Update a MerchantDefinedField by ID


<a name="createMerchantDefinedFieldDefinition"></a>
# **createMerchantDefinedFieldDefinition**
> [InlineResponse2002] createMerchantDefinedFieldDefinition(referenceType, merchantDefinedFieldDefinitionRequest)

Create merchant defined field for a given reference type

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.MerchantDefinedFieldsApi();

var referenceType = "referenceType_example"; // String | The reference type for which merchant defined fields are to be fetched. Available values are Invoice, Purchase, Donation

var merchantDefinedFieldDefinitionRequest = new CyberSource.MerchantDefinedFieldDefinitionRequest(); // MerchantDefinedFieldDefinitionRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createMerchantDefinedFieldDefinition(referenceType, merchantDefinedFieldDefinitionRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceType** | **String**| The reference type for which merchant defined fields are to be fetched. Available values are Invoice, Purchase, Donation | 
 **merchantDefinedFieldDefinitionRequest** | [**MerchantDefinedFieldDefinitionRequest**](MerchantDefinedFieldDefinitionRequest.md)|  | 

### Return type

[**[InlineResponse2002]**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMerchantDefinedFieldsDefinitions"></a>
# **getMerchantDefinedFieldsDefinitions**
> [InlineResponse2002] getMerchantDefinedFieldsDefinitions(referenceType)

Get all merchant defined fields for a given reference type

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.MerchantDefinedFieldsApi();

var referenceType = "referenceType_example"; // String | The reference type for which merchant defined fields are to be fetched. Available values are Invoice, Purchase, Donation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMerchantDefinedFieldsDefinitions(referenceType, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceType** | **String**| The reference type for which merchant defined fields are to be fetched. Available values are Invoice, Purchase, Donation | 

### Return type

[**[InlineResponse2002]**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="invoicingV2ReferenceTypeMerchantDefinedFieldsIdDelete"></a>
# **invoicingV2ReferenceTypeMerchantDefinedFieldsIdDelete**
> invoicingV2ReferenceTypeMerchantDefinedFieldsIdDelete(referenceType, id)

Delete a MerchantDefinedField by ID

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.MerchantDefinedFieldsApi();

var referenceType = "referenceType_example"; // String | 

var id = 789; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.invoicingV2ReferenceTypeMerchantDefinedFieldsIdDelete(referenceType, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceType** | **String**|  | 
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="invoicingV2ReferenceTypeMerchantDefinedFieldsIdPut"></a>
# **invoicingV2ReferenceTypeMerchantDefinedFieldsIdPut**
> [InlineResponse2002] invoicingV2ReferenceTypeMerchantDefinedFieldsIdPut(referenceType, id, merchantDefinedFieldCore)

Update a MerchantDefinedField by ID

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.MerchantDefinedFieldsApi();

var referenceType = "referenceType_example"; // String | 

var id = 789; // Number | 

var merchantDefinedFieldCore = new CyberSource.MerchantDefinedFieldCore(); // MerchantDefinedFieldCore | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.invoicingV2ReferenceTypeMerchantDefinedFieldsIdPut(referenceType, id, merchantDefinedFieldCore, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceType** | **String**|  | 
 **id** | **Number**|  | 
 **merchantDefinedFieldCore** | [**MerchantDefinedFieldCore**](MerchantDefinedFieldCore.md)|  | 

### Return type

[**[InlineResponse2002]**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

