# CyberSource.Ptsv2paymentsDeviceInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hostName** | **String** | DNS resolved hostname from &#x60;ipAddress&#x60;. | [optional] 
**ipAddress** | **String** | IP address of the customer.  #### Used by **Authorization, Capture, and Credit** Optional field.  | [optional] 
**userAgent** | **String** | Customer’s browser as identified from the HTTP header data. For example, &#x60;Mozilla&#x60; is the value that identifies the Netscape browser.  | [optional] 
**fingerprintSessionId** | **String** | Field that contains the session ID that you send to Decision Manager to obtain the device fingerprint information. The string can contain uppercase and lowercase letters, digits, hyphen (-), and underscore (_). However, do not use the same uppercase and lowercase letters to indicate different session IDs.  The session ID must be unique for each merchant ID. You can use any string that you are already generating, such as an order number or web session ID.  The session ID must be unique for each page load, regardless of an individual’s web session ID. If a user navigates to a profiled page and is assigned a web session, navigates away from the profiled page, then navigates back to the profiled page, the generated session ID should be different and unique. You may use a web session ID, but it is preferable to use an application GUID (Globally Unique Identifier). This measure ensures that a unique ID is generated every time the page is loaded, even if it is the same user reloading the page.  | [optional] 
**useRawFingerprintSessionId** | **Boolean** | Boolean that indicates whether request contains the device fingerprint information. Values: - &#x60;true&#x60;: Use raw fingerprintSessionId when looking up device details. - &#x60;false&#x60; (default): Use merchant id + fingerprintSessionId as the session id for Device detail collection.  | [optional] 
**deviceType** | **String** | The device type at the client side. | [optional] 
**rawData** | [**[Ptsv2paymentsDeviceInformationRawData]**](Ptsv2paymentsDeviceInformationRawData.md) |  | [optional] 
**httpAcceptBrowserValue** | **String** | Value of the Accept header sent by the customer’s web browser. **Note** If the customer’s browser provides a value, you must include it in your request.  | [optional] 
**httpAcceptContent** | **String** | The exact content of the HTTP accept header.  | [optional] 
**httpBrowserEmail** | **String** | Email address set in the customer’s browser, which may differ from customer email.  | [optional] 
**httpBrowserLanguage** | **String** | Value represents the browser language as defined in IETF BCP47. Example:en-US, refer  https://en.wikipedia.org/wiki/IETF_language_tag for more details.  | [optional] 
**httpBrowserJavaEnabled** | **Boolean** | A Boolean value that represents the ability of the cardholder browser to execute Java. Value is returned from the navigator.javaEnabled property. Possible Values:True/False  | [optional] 
**httpBrowserJavaScriptEnabled** | **Boolean** | A Boolean value that represents the ability of the cardholder browser to execute JavaScript. Possible Values:True/False. **Note**: Merchants should be able to know the values from fingerprint details of cardholder&#39;s browser.  | [optional] 
**httpBrowserColorDepth** | **String** | Value represents the bit depth of the color palette for displaying images, in bits per pixel. Example : 24, refer https://en.wikipedia.org/wiki/Color_depth for more details  | [optional] 
**httpBrowserScreenHeight** | **String** | Total height of the Cardholder&#39;s scree in pixels, example: 864.  | [optional] 
**httpBrowserScreenWidth** | **String** | Total width of the cardholder&#39;s screen in pixels. Example: 1536.  | [optional] 
**httpBrowserTimeDifference** | **String** | Time difference between UTC time and the cardholder browser local time, in minutes, Example:300  | [optional] 
**userAgentBrowserValue** | **String** | Value of the User-Agent header sent by the customer’s web browser. Note If the customer’s browser provides a value, you must include it in your request.  | [optional] 


