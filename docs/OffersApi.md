# CyberSource.OffersApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOffer**](OffersApi.md#createOffer) | **POST** /vas/v1/currencyconversion | Create an Offer
[**getOffer**](OffersApi.md#getOffer) | **GET** /vas/v1/currencyconversion/{id} | Retrieve an Offer


<a name="createOffer"></a>
# **createOffer**
> InlineResponse2019 createOffer(contentType, xRequestid, vCMerchantId, vCCorrelationId, vCOrganizationId, offerRequest)

Create an Offer

Empower global transactions with transparency and choice. Our Dynamic Currency Conversion API lets merchants offer customers the option to pay in their home currency at checkout, delivering real-time exchange rates.  <div style=\"display: flex; gap: 2rem;\"> <div style=\"flex: 1;\">  **Key Benefits:** - **Enhanced Customer Experience:** Provide clarity and convenience for international shoppers. - **Real-Time Rates:** Accurate currency conversion with all the data required for acquirers and their merchants to maintain compliance with card network rules. - **Seamless Integration:** Flexible API endpoints for rate lookup, authorization, and capture. - **Regulatory Compliance:** Provides the data required for acquirers and merchants to meet and maintain card scheme requirements for disclosure and consent.  <br>  Ideal for merchants and payment partners seeking to boost trust and conversion in cross-border commerce.  <br>  **Key Features:** - **Rate Lookup:** Retrieves the most up-to-date exchange rate for eligible cards before authorization. - **Currency Choice:** Enables the merchant to offer customers the option to select between the merchant's local currency and their card's billing currency. - **Compliance:** Ensures merchants have the data required to adhere to card network regulations; exchange rates, markups, etc.  <div style=\"margin-top: 1.5rem;\">  **Supported Scenarios:** - Dynamic Currency Conversion when cardholder's billing currency differs from merchant's pricing currency. - Merchant and acquirer must support the cardholder's billing currency. </div>  <div style=\"margin-top: 1.5rem;\">  **Supported Processors:** - VPC - FDI Global </div>  <div style=\"margin-top: 1.5rem;\">  **Compliance & Disclosure:**  Merchants must: - Adhere to card network rules for Dynamic Currency Conversion (DCC) transactions. - Display the converted amount, exchange rate, and markup percentage and other required disclosures. - Obtain explicit cardholder consent before applying DCC. - Work with your acquirer to obtain full set of compliance requirements. </div>  </div> <div style=\"flex: 1;\">  **Core API Endpoints:**  **Currency Conversion API**  Returns eligibility and exchange rate details, including: - exchangeRate - marginRate - reconciliationId and Id (for subsequent payment requests)  <div style=\"margin-top: 1.5rem;\">  **Payment Authorization with DCC***  POST /pts/v2/payments  Required fields include: - orderInformation.amountDetails.currency - orderInformation.amountDetails.originalCurrency - orderInformation.amountDetails.originalAmount - orderInformation.amountDetails.exchangeRate - currencyConversion.indicator (e.g., 1 = Converted, 2 = Nonconvertible, 3 = Declined) </div>  <div style=\"margin-top: 1.5rem;\">  **Capture with DCC***  POST /pts/v2/payments/{id}/captures  Maps from original authorization and includes original and converted amounts. </div>  <div style=\"margin-top: 1.5rem;\">  **Refund with DCC***  POST /pts/v2/captures/{id}/refunds  Maps from original authorization and includes original and converted amounts.  *Note: DCC is only supported on select processors. Contact your acquirer or account manager for more information.* </div>  </div> </div>  <br>  For more information, see the [Currency Conversion Developer Guide](https://developer.cybersource.com/docs/cybs/en-us/currency-conversion/developer/all/rest/currency-conversion/cc-intro.html). 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.OffersApi();

var contentType = "contentType_example"; // String | 

var xRequestid = "xRequestid_example"; // String | 

var vCMerchantId = "vCMerchantId_example"; // String | 

var vCCorrelationId = "vCCorrelationId_example"; // String | 

var vCOrganizationId = "vCOrganizationId_example"; // String | 

var offerRequest = new CyberSource.OfferRequest(); // OfferRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createOffer(contentType, xRequestid, vCMerchantId, vCCorrelationId, vCOrganizationId, offerRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | 
 **xRequestid** | **String**|  | 
 **vCMerchantId** | **String**|  | 
 **vCCorrelationId** | **String**|  | 
 **vCOrganizationId** | **String**|  | 
 **offerRequest** | [**OfferRequest**](OfferRequest.md)|  | 

### Return type

[**InlineResponse2019**](InlineResponse2019.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="getOffer"></a>
# **getOffer**
> InlineResponse20016 getOffer(contentType, xRequestid, vCMerchantId, vCCorrelationId, vCOrganizationId, id)

Retrieve an Offer

Retrieves an offer record from the system. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.OffersApi();

var contentType = "contentType_example"; // String | 

var xRequestid = "xRequestid_example"; // String | 

var vCMerchantId = "vCMerchantId_example"; // String | 

var vCCorrelationId = "vCCorrelationId_example"; // String | 

var vCOrganizationId = "vCOrganizationId_example"; // String | 

var id = "id_example"; // String | Request ID generated by Cybersource. This was sent in the header on the request. Echo value from v-c-request-id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOffer(contentType, xRequestid, vCMerchantId, vCCorrelationId, vCOrganizationId, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | 
 **xRequestid** | **String**|  | 
 **vCMerchantId** | **String**|  | 
 **vCCorrelationId** | **String**|  | 
 **vCOrganizationId** | **String**|  | 
 **id** | **String**| Request ID generated by Cybersource. This was sent in the header on the request. Echo value from v-c-request-id | 

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

