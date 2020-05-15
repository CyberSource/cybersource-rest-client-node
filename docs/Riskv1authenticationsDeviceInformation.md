# CyberSource.Riskv1authenticationsDeviceInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ipAddress** | **String** | IP address of the customer.  #### Used by **Authorization, Capture, and Credit** Optional field.  | [optional] 
**rawData** | [**[Ptsv2paymentsDeviceInformationRawData]**](Ptsv2paymentsDeviceInformationRawData.md) |  | [optional] 
**httpAcceptBrowserValue** | **String** | Value of the Accept header sent by the customer’s web browser. **Note** If the customer’s browser provides a value, you must include it in your request.  | [optional] 
**httpAcceptContent** | **String** | The exact content of the HTTP accept header.  | [optional] 
**httpBrowserLanguage** | **String** | Value represents the browser language as defined in IETF BCP47. Example:en-US, refer  https://en.wikipedia.org/wiki/IETF_language_tag for more details.  | [optional] 
**httpBrowserJavaEnabled** | **Boolean** | A Boolean value that represents the ability of the cardholder browser to execute Java. Value is returned from the navigator.javaEnabled property. Possible Values:True/False  | [optional] 
**httpBrowserJavaScriptEnabled** | **Boolean** | A Boolean value that represents the ability of the cardholder browser to execute JavaScript. Possible Values:True/False. **Note**: Merchants should be able to know the values from fingerprint details of cardholder&#39;s browser.  | [optional] 
**httpBrowserColorDepth** | **String** | Value represents the bit depth of the color palette for displaying images, in bits per pixel. Example : 24, refer https://en.wikipedia.org/wiki/Color_depth for more details  | [optional] 
**httpBrowserScreenHeight** | **String** | Total height of the Cardholder&#39;s scree in pixels, example: 864.  | [optional] 
**httpBrowserScreenWidth** | **String** | Total width of the cardholder&#39;s screen in pixels. Example: 1536.  | [optional] 
**httpBrowserTimeDifference** | **String** | Time difference between UTC time and the cardholder browser local time, in minutes, Example:300  | [optional] 
**userAgentBrowserValue** | **String** | Value of the User-Agent header sent by the customer’s web browser. Note If the customer’s browser provides a value, you must include it in your request.  | [optional] 


