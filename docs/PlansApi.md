# CyberSource.PlansApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activatePlan**](PlansApi.md#activatePlan) | **POST** /rbs/v1/plans/{id}/activate | Activate a Plan
[**createPlan**](PlansApi.md#createPlan) | **POST** /rbs/v1/plans | Create a Plan
[**deactivatePlan**](PlansApi.md#deactivatePlan) | **POST** /rbs/v1/plans/{id}/deactivate | Deactivate a Plan
[**deletePlan**](PlansApi.md#deletePlan) | **DELETE** /rbs/v1/plans/{id} | Delete a Plan
[**getPlan**](PlansApi.md#getPlan) | **GET** /rbs/v1/plans/{id} | Get a Plan
[**getPlanCode**](PlansApi.md#getPlanCode) | **GET** /rbs/v1/plans/code | Get a Plan Code
[**getPlans**](PlansApi.md#getPlans) | **GET** /rbs/v1/plans | Get a List of Plans
[**updatePlan**](PlansApi.md#updatePlan) | **PATCH** /rbs/v1/plans/{id} | Update a Plan


<a name="activatePlan"></a>
# **activatePlan**
> ActivateDeactivatePlanResponse activatePlan(id)

Activate a Plan

Activate a Plan

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PlansApi();

var id = "id_example"; // String | Plan Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.activatePlan(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Plan Id | 

### Return type

[**ActivateDeactivatePlanResponse**](ActivateDeactivatePlanResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json, application/hal+json, application/json;charset=utf-8, application/hal+json;charset=utf-8

<a name="createPlan"></a>
# **createPlan**
> CreatePlanResponse createPlan(createPlanRequest)

Create a Plan

The recurring billing service enables you to manage payment plans and subscriptions for recurring payment schedules. It securely stores your customer's payment information and personal data within secure Visa data centers, reducing storage risks and PCI DSS scope through the use of *Token Management* (*TMS*).  The three key elements of *Cybersource* Recurring Billing are:  -  **Token**: stores customer billing, shipping, and payment details.  -  **Plan**: stores the billing schedule.  -  **Subscription**: combines the token and plan, and defines the subscription start date, name, and description.  The APIs in this section demonstrate the management of the Plans and Subscriptions. For Tokens please refer to [Token Management](#token-management) The availability of API features for a merchant can depend on the portfolio configuration and may need to be enabled at the portfolio level before they can be added to merchant accounts. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PlansApi();

var createPlanRequest = new CyberSource.CreatePlanRequest(); // CreatePlanRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPlan(createPlanRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPlanRequest** | [**CreatePlanRequest**](CreatePlanRequest.md)|  | 

### Return type

[**CreatePlanResponse**](CreatePlanResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json, application/hal+json, application/json;charset=utf-8, application/hal+json;charset=utf-8

<a name="deactivatePlan"></a>
# **deactivatePlan**
> ActivateDeactivatePlanResponse deactivatePlan(id)

Deactivate a Plan

Deactivate a Plan

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PlansApi();

var id = "id_example"; // String | Plan Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deactivatePlan(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Plan Id | 

### Return type

[**ActivateDeactivatePlanResponse**](ActivateDeactivatePlanResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json, application/hal+json, application/json;charset=utf-8, application/hal+json;charset=utf-8

<a name="deletePlan"></a>
# **deletePlan**
> DeletePlanResponse deletePlan(id)

Delete a Plan

Delete a Plan is only allowed: - plan status is in `DRAFT` - plan status is in `ACTIVE`, and `INACTIVE` only allowed when no subscriptions attached to a plan in the lifetime of a plan 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PlansApi();

var id = "id_example"; // String | Plan Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deletePlan(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Plan Id | 

### Return type

[**DeletePlanResponse**](DeletePlanResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json, application/hal+json, application/json;charset=utf-8, application/hal+json;charset=utf-8

<a name="getPlan"></a>
# **getPlan**
> GetPlanResponse getPlan(id)

Get a Plan

Retrieve a Plan details by Plan Id.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PlansApi();

var id = "id_example"; // String | Plan Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPlan(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Plan Id | 

### Return type

[**GetPlanResponse**](GetPlanResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json, application/hal+json, application/json;charset=utf-8, application/hal+json;charset=utf-8

<a name="getPlanCode"></a>
# **getPlanCode**
> GetPlanCodeResponse getPlanCode()

Get a Plan Code

Get a Unique Plan Code

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PlansApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPlanCode(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetPlanCodeResponse**](GetPlanCodeResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json, application/hal+json, application/json;charset=utf-8, application/hal+json;charset=utf-8

<a name="getPlans"></a>
# **getPlans**
> GetAllPlansResponse getPlans(opts)

Get a List of Plans

Retrieve Plans by Plan Code & Plan Status. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PlansApi();

var opts = { 
  'offset': 56, // Number | Page offset number.
  'limit': 56, // Number | Number of items to be returned. Default - `20`, Max - `100` 
  'code': "code_example", // String | Filter by Plan Code
  'status': "status_example", // String | Filter by Plan Status
  'name': "name_example" // String | Filter by Plan Name. (First sub string or full string) **[Not Recommended]** 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPlans(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| Page offset number. | [optional] 
 **limit** | **Number**| Number of items to be returned. Default - `20`, Max - `100`  | [optional] 
 **code** | **String**| Filter by Plan Code | [optional] 
 **status** | **String**| Filter by Plan Status | [optional] 
 **name** | **String**| Filter by Plan Name. (First sub string or full string) **[Not Recommended]**  | [optional] 

### Return type

[**GetAllPlansResponse**](GetAllPlansResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json, application/hal+json, application/json;charset=utf-8, application/hal+json;charset=utf-8

<a name="updatePlan"></a>
# **updatePlan**
> UpdatePlanResponse updatePlan(id, updatePlanRequest)

Update a Plan

Update a Plan  Plan in `DRAFT` status - All updates are allowed on Plan with `DRAFT` status  Plan in `ACTIVE` status [Following fields are **Not Updatable**] - `planInformation.billingPeriod` - `planInformation.billingCycles` [Update is only allowed to **increase** billingCycles] - `orderInformation.amountDetails.currency` 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PlansApi();

var id = "id_example"; // String | Plan Id

var updatePlanRequest = new CyberSource.UpdatePlanRequest(); // UpdatePlanRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updatePlan(id, updatePlanRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Plan Id | 
 **updatePlanRequest** | [**UpdatePlanRequest**](UpdatePlanRequest.md)|  | 

### Return type

[**UpdatePlanResponse**](UpdatePlanResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json, application/hal+json, application/json;charset=utf-8, application/hal+json;charset=utf-8

