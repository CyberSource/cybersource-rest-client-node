# CyberSource.AddAgentKeyResponse201

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique key identifier. Generated from VARS. | 
**agentId** | **String** | Agent identifier | 
**agentName** | **String** | Agent name | 
**agentType** | **String** | Agent classification  Possible values: - trusted - known | 
**keyName** | **String** | Unique identifier for the key | 
**publicKey** | **String** | Base64-encoded public key | 
**algorithm** | **String** | Signing algorithm  Possible values: - RSA-SHA256 - RSA-SHA512 - ECDSA-SHA256 - ECDSA-SHA512 - EdDSA | 
**expirationDate** | **Date** | Key expiration date in UTC | 
**status** | **String** | Key lifecycle status  Possible values: - active - deactivated - expired | 
**createdAt** | **Date** | Creation timestamp | 
**updatedAt** | **Date** | Last update timestamp | 


