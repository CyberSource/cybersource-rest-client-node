# CyberSource.MerchantDefinedFieldsApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMerchantDefinedFieldDefinition**](MerchantDefinedFieldsApi.md#createMerchantDefinedFieldDefinition) | **POST** /invoicing/v2/{referenceType}/merchantDefinedFields | Create merchant defined field for a given reference type
[**createPblMerchantDefinedFieldDefinition**](MerchantDefinedFieldsApi.md#createPblMerchantDefinedFieldDefinition) | **POST** /ipl/v2/{referenceType}/merchantDefinedFields | Create a PayByLink merchant defined field for a given reference type
[**deleteMerchantDefinedFieldsDefinitions**](MerchantDefinedFieldsApi.md#deleteMerchantDefinedFieldsDefinitions) | **DELETE** /invoicing/v2/{referenceType}/merchantDefinedFields/{id} | Delete a MerchantDefinedField by ID
[**deletePblMerchantDefinedFieldsDefinitions**](MerchantDefinedFieldsApi.md#deletePblMerchantDefinedFieldsDefinitions) | **DELETE** /ipl/v2/{referenceType}/merchantDefinedFields/{id} | Delete a PayByLink MerchantDefinedField by ID
[**getMerchantDefinedFieldsDefinitions**](MerchantDefinedFieldsApi.md#getMerchantDefinedFieldsDefinitions) | **GET** /invoicing/v2/{referenceType}/merchantDefinedFields | Get all merchant defined fields for a given reference type
[**getPblMerchantDefinedFieldsDefinitions**](MerchantDefinedFieldsApi.md#getPblMerchantDefinedFieldsDefinitions) | **GET** /ipl/v2/{referenceType}/merchantDefinedFields | Get all PayByLink merchant defined fields for a given reference type
[**putMerchantDefinedFieldsDefinitions**](MerchantDefinedFieldsApi.md#putMerchantDefinedFieldsDefinitions) | **PUT** /invoicing/v2/{referenceType}/merchantDefinedFields/{id} | Update a MerchantDefinedField by ID
[**putPblMerchantDefinedFieldsDefinitions**](MerchantDefinedFieldsApi.md#putPblMerchantDefinedFieldsDefinitions) | **PUT** /ipl/v2/{referenceType}/merchantDefinedFields/{id} | Update a PayByLink MerchantDefinedField by ID


<a name="createMerchantDefinedFieldDefinition"></a>
# **createMerchantDefinedFieldDefinition**
> [InlineResponse2004] createMerchantDefinedFieldDefinition(referenceType, merchantDefinedFieldDefinitionRequest)

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

[**[InlineResponse2004]**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createPblMerchantDefinedFieldDefinition"></a>
# **createPblMerchantDefinedFieldDefinition**
> [InlineResponse2004] createPblMerchantDefinedFieldDefinition(referenceType, merchantDefinedFieldDefinitionRequest)

Create a PayByLink merchant defined field for a given reference type

Creates a merchant defined field for the given reference type (`Purchase` or `Donation`). The field type is independent of the reference type: both `Purchase` and `Donation` support both `Text` and `Select` fields. Set `fieldType` to `Text` or `Select` accordingly. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.MerchantDefinedFieldsApi();

var referenceType = "referenceType_example"; // String | The reference type for which the merchant defined field is to be created. Available values are Purchase and Donation

var merchantDefinedFieldDefinitionRequest = new CyberSource.MerchantDefinedFieldDefinitionRequest1(); // MerchantDefinedFieldDefinitionRequest1 | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPblMerchantDefinedFieldDefinition(referenceType, merchantDefinedFieldDefinitionRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceType** | **String**| The reference type for which the merchant defined field is to be created. Available values are Purchase and Donation | 
 **merchantDefinedFieldDefinitionRequest** | [**MerchantDefinedFieldDefinitionRequest1**](MerchantDefinedFieldDefinitionRequest1.md)|  | 

### Return type

[**[InlineResponse2004]**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteMerchantDefinedFieldsDefinitions"></a>
# **deleteMerchantDefinedFieldsDefinitions**
> deleteMerchantDefinedFieldsDefinitions(referenceType, id)

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
apiInstance.deleteMerchantDefinedFieldsDefinitions(referenceType, id, callback);
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

<a name="deletePblMerchantDefinedFieldsDefinitions"></a>
# **deletePblMerchantDefinedFieldsDefinitions**
> deletePblMerchantDefinedFieldsDefinitions(referenceType, id)

Delete a PayByLink MerchantDefinedField by ID

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
apiInstance.deletePblMerchantDefinedFieldsDefinitions(referenceType, id, callback);
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

<a name="getMerchantDefinedFieldsDefinitions"></a>
# **getMerchantDefinedFieldsDefinitions**
> [InlineResponse2004] getMerchantDefinedFieldsDefinitions(referenceType)

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

[**[InlineResponse2004]**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPblMerchantDefinedFieldsDefinitions"></a>
# **getPblMerchantDefinedFieldsDefinitions**
> [InlineResponse2004] getPblMerchantDefinedFieldsDefinitions(referenceType)

Get all PayByLink merchant defined fields for a given reference type

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.MerchantDefinedFieldsApi();

var referenceType = "referenceType_example"; // String | The reference type for which merchant defined fields are to be fetched. Available values are Purchase, Donation and PayByLink. PayByLink returns the merchant defined fields for both Purchase and Donation combined.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPblMerchantDefinedFieldsDefinitions(referenceType, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceType** | **String**| The reference type for which merchant defined fields are to be fetched. Available values are Purchase, Donation and PayByLink. PayByLink returns the merchant defined fields for both Purchase and Donation combined. | 

### Return type

[**[InlineResponse2004]**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putMerchantDefinedFieldsDefinitions"></a>
# **putMerchantDefinedFieldsDefinitions**
> [InlineResponse2004] putMerchantDefinedFieldsDefinitions(referenceType, id, merchantDefinedFieldCore)

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
apiInstance.putMerchantDefinedFieldsDefinitions(referenceType, id, merchantDefinedFieldCore, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceType** | **String**|  | 
 **id** | **Number**|  | 
 **merchantDefinedFieldCore** | [**MerchantDefinedFieldCore**](MerchantDefinedFieldCore.md)|  | 

### Return type

[**[InlineResponse2004]**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="putPblMerchantDefinedFieldsDefinitions"></a>
# **putPblMerchantDefinedFieldsDefinitions**
> [InlineResponse2004] putPblMerchantDefinedFieldsDefinitions(referenceType, id, merchantDefinedFieldCore)

Update a PayByLink MerchantDefinedField by ID

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.MerchantDefinedFieldsApi();

var referenceType = "referenceType_example"; // String | 

var id = 789; // Number | 

var merchantDefinedFieldCore = new CyberSource.MerchantDefinedFieldCore1(); // MerchantDefinedFieldCore1 | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putPblMerchantDefinedFieldsDefinitions(referenceType, id, merchantDefinedFieldCore, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceType** | **String**|  | 
 **id** | **Number**|  | 
 **merchantDefinedFieldCore** | [**MerchantDefinedFieldCore1**](MerchantDefinedFieldCore1.md)|  | 

### Return type

[**[InlineResponse2004]**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

