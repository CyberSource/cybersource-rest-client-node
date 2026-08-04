# CyberSource.Iccv1merchantsEncryptionKey

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keyName** | **String** | Unique name for the key | 
**encryptionKey** | **String** | Base64-encoded public key (JWE key wrap public key) | 
**algorithm** | **String** | JWE key wrap algorithm  Possible values: - RSA-OAEP - RSA-OAEP-256 - RSA-OAEP-384 - RSA-OAEP-512 | [optional] 
**encryptionType** | **String** | JWE content encryption algorithm (defaults to A256GCM)  Possible values: - A256GCM - A128GCM - C20P - A256CBC-HS512 - A128CBC-HS256 - A256CCM - A128CCM | [optional] 
**expirationDate** | **Date** | Key expiration date in UTC (defaults to 14 days from now if not provided) | [optional] 


