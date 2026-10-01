# CyberSource.ActivateMerchantKeyResponse200

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique key identifier (UUID). Generated from VMRS. | 
**merchantId** | **String** | Merchant identifier (UUID) | 
**merchantName** | **String** | Merchant name | 
**keyName** | **String** | Unique name for the key | 
**encryptionKey** | **String** | Base64-encoded public key | 
**algorithm** | **String** | JWE key wrap algorithm  Possible values: - RSA-OAEP - RSA-OAEP-256 - RSA-OAEP-384 - RSA-OAEP-512 | 
**encryptionType** | **String** | JWE content encryption algorithm  Possible values: - A256GCM - A128GCM - C20P - A256CBC_HS512 - A128CBC_HS256 - A256CCM - A128CCM | 
**expirationDate** | **Date** | Key expiration date in UTC | 
**status** | **String** | Key lifecycle status  Possible values: - active - deactivated - expired | 
**createdAt** | **Date** | Creation timestamp | 
**updatedAt** | **Date** | Last update timestamp | 


