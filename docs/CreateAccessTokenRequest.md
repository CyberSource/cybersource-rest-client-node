# CyberSource.CreateAccessTokenRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientId** | **String** | The client ID that you received when you registered your application in the CyberSource Business Center. This identifies your client application. | 
**clientSecret** | **String** | The client secret that you received when you registered your application in the CyberSource Business Center. | 
**grantType** | **String** | The grant type value determines which type of flow is used to obtain the access token. The first time your application requests a token, use the value &#x60;authorization_code&#x60;. When you use this value, you must also include the &#x60;code&#x60; field in the request. For subsequent request, use &#x60;refresh_token&#x60;. When you use this value, you must also include the &#x60;refresh_token&#x60; field in the request. Valid values: - authorization_code - refresh_token  | [optional] 
**code** | **String** | This value is sent by CyberSource in the redirect URL. For security reasons, the code expires in 10 minutes. If it expires, you must repeat the redirect to request another. Conditional. This value is equired if grant_type is &#x60;authorization_code&#x60;. | [optional] 
**refreshToken** | **String** | Conditional. Required if grant_type is &#x60;refresh_token&#x60;. | [optional] 


