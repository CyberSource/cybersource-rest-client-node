# CyberSource.BillingAgreementsApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**billingAgreementsDeRegistration**](BillingAgreementsApi.md#billingAgreementsDeRegistration) | **PATCH** /pts/v2/billing-agreements/{id} | Modify a Billing Agreement
[**billingAgreementsIntimation**](BillingAgreementsApi.md#billingAgreementsIntimation) | **POST** /pts/v2/billing-agreements/{id}/intimations | Standing Instruction intimation
[**billingAgreementsRegistration**](BillingAgreementsApi.md#billingAgreementsRegistration) | **POST** /pts/v2/billing-agreements | Create a Billing Agreement


<a name="billingAgreementsDeRegistration"></a>
# **billingAgreementsDeRegistration**
> PtsV2ModifyBillingAgreementPost201Response billingAgreementsDeRegistration(modifyBillingAgreement, id)

Modify a Billing Agreement

#### Standing Instruction: Standing Instruction with or without Token.  #### Revoke Mandate: When you revoke a mandate, any pending direct debits linked to that mandate are canceled. No notifications are sent. When you revoke a mandate with no pending direct debits, the Bacs scheme or customer's bank notify you of any subsequent direct debit events. When you revoke a mandate, you cannot send a direct debit request using the mandate ID. Customer payments cannot be made against a revoked mandate. You can revoke a mandate when the customer:   - Requests that you revoke the mandate.   - Closes their account with you. Possible revoke mandate status values -   - Revoked—the revoke mandate request was successfully processed.   - Failed—the revoke mandate request was not accepted.  #### Update Mandate: In most cases, the account details of an existing mandate cannot be updated in the Bacs schema, except by creating a new mandate. However, some very limited customer information, like name and address, can be updated to the mandate without needing to revoke it first  #### Mandate Status: After the customer signs the mandate, request that the mandate status service verify the mandate status. Possible mandate status values:   - Active—the mandate is successfully created. A direct debit can be sent for this mandate ID.   - Pending—a pending mandate means the mandate is not yet signed.   - Failed—the customer did not authenticate.   - Expired—the deadline to create the mandate passed.   - Revoked—the mandate is cancelled.  #### Paypal Billing Agreement:  A billing agreement is set up between PayPal and your customer. When you collect the details of a customer's billing agreement, you are able to bill that customer without requiring an authorization for each payment.  You can bill the customer at the same time you process their PayPal Express checkout order, which simplifies your business processes. 

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

[**PtsV2ModifyBillingAgreementPost201Response**](PtsV2ModifyBillingAgreementPost201Response.md)

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
> PtsV2CreateBillingAgreementPost201Response billingAgreementsRegistration(createBillingAgreement)

Create a Billing Agreement

#### Standing Instruction: Standing Instruction with or without Token. Transaction amount in case First payment is coming along with registration. Only 2 decimal places allowed  #### Create Mandate: You can create a mandate through the direct debit mandate flow. Possible create mandate status values:   - Pending—the create mandate request was successfully processed.   - Failed—the create mandate request was not accepted.  #### Import Mandate: In the Bacs scheme, a mandate is created with a status of active. Direct debit collections can be made against it immediately. You can import a mandate to the CyberSource database when:   - You have existing customers with signed, active mandates   - You manage mandates outside of CyberSource.  When you import an existing mandate to the CyberSource database, provide a unique value for the mandate ID or the request results in an error. If an import mandate request is not accepted, the import mandate status value is failed. 

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

[**PtsV2CreateBillingAgreementPost201Response**](PtsV2CreateBillingAgreementPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

