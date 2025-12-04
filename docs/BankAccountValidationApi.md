# CyberSource.BankAccountValidationApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bankAccountValidationRequest**](BankAccountValidationApi.md#bankAccountValidationRequest) | **POST** /bavs/v1/account-validations | Visa Bank Account Validation Service


<a name="bankAccountValidationRequest"></a>
# **bankAccountValidationRequest**
> InlineResponse20014 bankAccountValidationRequest(accountValidationsRequest)

Visa Bank Account Validation Service

The Visa Bank Account Validation Service is a new standalone product designed to validate customer's routing and bank account number combination for ACH transactions. Merchant's can use this standalone product to validate their customer's account prior to processing an ACH transaction against the customer's account to comply with Nacha's account validation mandate for Web-debit transactions. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.BankAccountValidationApi();

var accountValidationsRequest = new CyberSource.AccountValidationsRequest(); // AccountValidationsRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bankAccountValidationRequest(accountValidationsRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountValidationsRequest** | [**AccountValidationsRequest**](AccountValidationsRequest.md)|  | 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

