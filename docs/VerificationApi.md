# CyberSource.VerificationApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**validateExportCompliance**](VerificationApi.md#validateExportCompliance) | **POST** /risk/v1/export-compliance-inquiries | Validate export compliance
[**verifyCustomerAddress**](VerificationApi.md#verifyCustomerAddress) | **POST** /risk/v1/address-verifications | Verify customer address


<a name="validateExportCompliance"></a>
# **validateExportCompliance**
> RiskV1ExportComplianceInquiriesPost201Response validateExportCompliance(validateExportComplianceRequest)

Validate export compliance

This call checks customer data against specified watch lists to ensure export compliance. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.VerificationApi();

var validateExportComplianceRequest = new CyberSource.ValidateExportComplianceRequest(); // ValidateExportComplianceRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.validateExportCompliance(validateExportComplianceRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validateExportComplianceRequest** | [**ValidateExportComplianceRequest**](ValidateExportComplianceRequest.md)|  | 

### Return type

[**RiskV1ExportComplianceInquiriesPost201Response**](RiskV1ExportComplianceInquiriesPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="verifyCustomerAddress"></a>
# **verifyCustomerAddress**
> RiskV1AddressVerificationsPost201Response verifyCustomerAddress(verifyCustomerAddressRequest)

Verify customer address

This call verifies that the customer address submitted is valid.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.VerificationApi();

var verifyCustomerAddressRequest = new CyberSource.VerifyCustomerAddressRequest(); // VerifyCustomerAddressRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.verifyCustomerAddress(verifyCustomerAddressRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **verifyCustomerAddressRequest** | [**VerifyCustomerAddressRequest**](VerifyCustomerAddressRequest.md)|  | 

### Return type

[**RiskV1AddressVerificationsPost201Response**](RiskV1AddressVerificationsPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

