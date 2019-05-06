# CyberSource.Riskv1decisionsDeviceInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cookiesAccepted** | **String** | Boolean that indicates whether the customer’s browser accepts cookies. This field can contain one of the following values:   - &#x60;yes&#x60;: The customer’s browser accepts cookies.   - &#x60;no&#x60;: The customer’s browser does not accept cookies.  | [optional] 
**ipAddress** | **String** | Customer’s IP address, such as 10.1.27.63, reported by your Web server via socket information.  | [optional] 
**hostName** | **String** | Host name reported by the customer’s browser to your Web server identified via the HTTP header. | [optional] 
**fingerprintSessionId** | **String** | Contains the session ID that you send to Decision Manager to obtain the device fingerprint information. The string can contain uppercase and lowercase letters, digits, hyphen (-), and underscore (_). However, do not use the same uppercase and lowercase letters to indicate different session IDs. The session ID must be unique for each merchant ID. You can use any string that you are already generating, such as an order number or web session ID.The session ID must be unique for each page load, regardless of an individual’s web session ID. If the same user navigates to a profiled page and is assigned a web session, navigates away from the profiled page, then navigates back to the profiled page, the generated session ID should be different and unique. An example of an ideal session ID would be a web session ID plus the timestamp. This measure ensures that a unique ID is generated every time the page is loaded, even if it is the same user reloading the page.  | [optional] 
**httpBrowserEmail** | **String** | Email address set in the customer’s browser, which may differ from customer email.  | [optional] 
**userAgent** | **String** | Customer’s browser as identified from the HTTP header data. For example, Mozilla is the value that identifies the Netscape browser.  | [optional] 


