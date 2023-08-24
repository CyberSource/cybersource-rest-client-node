# CyberSource.BillingAgreementsApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**billingAgreementsDeRegistration**](BillingAgreementsApi.md#billingAgreementsDeRegistration) | **PATCH** /pts/v2/billing-agreements/{id} | Standing Instruction Cancellation or Modification
[**billingAgreementsIntimation**](BillingAgreementsApi.md#billingAgreementsIntimation) | **POST** /pts/v2/billing-agreements/{id}/intimations | Standing Instruction intimation
[**billingAgreementsRegistration**](BillingAgreementsApi.md#billingAgreementsRegistration) | **POST** /pts/v2/billing-agreements | Standing Instruction completion registration


<a name="billingAgreementsDeRegistration"></a>
# **billingAgreementsDeRegistration**
> PtsV2CreditsPost201Response1 billingAgreementsDeRegistration(modifyBillingAgreement, id)

Standing Instruction Cancellation or Modification

Standing Instruction with or without Token

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.BillingAgreementsApi();

var modifyBillingAgreement = new CyberSource.ModifyBillingAgreement(); // ModifyBillingAgreement | 

var id = "id_example"; // String | ID for de-registration or cancellation of Billing Agreement


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.billingAgreementsDeRegistration(modifyBillingAgreement, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modifyBillingAgreement** | [**ModifyBillingAgreement**](ModifyBillingAgreement.md)|  | 
 **id** | **String**| ID for de-registration or cancellation of Billing Agreement | 

### Return type

[**PtsV2CreditsPost201Response1**](PtsV2CreditsPost201Response1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="billingAgreementsIntimation"></a>
# **billingAgreementsIntimation**
> PtsV2CreditsPost201Response1 billingAgreementsIntimation(intimateBillingAgreement, id)

Standing Instruction intimation

Standing Instruction with or without Token.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.BillingAgreementsApi();

var intimateBillingAgreement = new CyberSource.IntimateBillingAgreement(); // IntimateBillingAgreement | 

var id = "id_example"; // String | ID for intimation of Billing Agreement


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.billingAgreementsIntimation(intimateBillingAgreement, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **intimateBillingAgreement** | [**IntimateBillingAgreement**](IntimateBillingAgreement.md)|  | 
 **id** | **String**| ID for intimation of Billing Agreement | 

### Return type

[**PtsV2CreditsPost201Response1**](PtsV2CreditsPost201Response1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="billingAgreementsRegistration"></a>
# **billingAgreementsRegistration**
> PtsV2CreditsPost201Response1 billingAgreementsRegistration(createBillingAgreement)

Standing Instruction completion registration

Standing Instruction with or without Token. Transaction amount in case First payment is coming along with registration. Only 2 decimal places allowed

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.BillingAgreementsApi();

var createBillingAgreement = new CyberSource.CreateBillingAgreement(); // CreateBillingAgreement | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.billingAgreementsRegistration(createBillingAgreement, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createBillingAgreement** | [**CreateBillingAgreement**](CreateBillingAgreement.md)|  | 

### Return type

[**PtsV2CreditsPost201Response1**](PtsV2CreditsPost201Response1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

