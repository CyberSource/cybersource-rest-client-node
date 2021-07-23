# CyberSource.AccessTokenResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessToken** | **String** | Created JWT token. | [optional] 
**tokenType** | **String** | Bearer. | [optional] 
**refreshToken** | **String** | Newly created JWT token for initial request or if refresh token expired, else the same refresh token as in the request. | [optional] 
**expiresIn** | **Number** | Number of seconds left till the access token gets expired. | [optional] 
**scope** | **String** | List of permissions for APIs. | [optional] 
**refreshTokenExpiresIn** | **Number** | Number of seconds left till the refresh token gets expired. | [optional] 
**clientStatus** | **String** | Successful response can be returned only if client status is active. | [optional] 


