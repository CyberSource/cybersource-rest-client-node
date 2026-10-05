# CyberSource.KeyRequest1

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keyName** | **String** | Unique  name for this encryption key within the merchant. | 
**encryptionKey** | **String** | Base64-encoded public key used for JWE key wrapping. Supported formats are PEM (PKCS#8 or PKCS#1) and JWK. | 
**algorithm** | **String** | JWE key wrap algorithm used to encrypt the content encryption key:  - ***RSA-OAEP*** — RSA-OAEP with SHA-1  - ***RSA-OAEP-256*** — RSA-OAEP with SHA-256  - ***RSA-OAEP-384*** — RSA-OAEP with SHA-384  - ***RSA-OAEP-512*** — RSA-OAEP with SHA-512   Possible values: - RSA-OAEP - RSA-OAEP-256 - RSA-OAEP-384 - RSA-OAEP-512 | [optional] 
**encryptionType** | **String** | JWE content encryption algorithm used to encrypt the payment payload. Defaults to ***A256GCM*** if not provided.  Possible values: - A256GCM - A128GCM - C20P - A256CBC_HS512 - A128CBC_HS256 - A256CCM - A128CCM | [optional] 
**expirationDate** | **Date** | Key expiration date-time in UTC. Defaults to 14 days from registration if omitted. | [optional] 


