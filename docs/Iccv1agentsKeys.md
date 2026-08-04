# CyberSource.Iccv1agentsKeys

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keyName** | **String** | Unique identifier for the key | 
**publicKey** | **String** | Base64-encoded public key. Supports PEM (PKCS#8, PKCS#1), JWK, DER, and OpenSSH formats. Max 10000 characters. | 
**algorithm** | **String** | Signing algorithm. Must match the key type (e.g., an RSA key requires RSA-SHA256 or RSA-SHA512).  Possible values: - RSA-SHA256 - RSA-SHA512 - ECDSA-SHA256 - ECDSA-SHA512 - EdDSA | 
**expirationDate** | **Date** | Key expiration date in UTC (defaults to 14 days from now if not provided) | [optional] 


