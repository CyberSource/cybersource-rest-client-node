# CyberSource.Iccv1mppcredentialsChallenge

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique challenge identifier issued by the merchant server. | 
**realm** | **String** | Merchant realm (typically the API domain). | 
**amount** | **String** | Amount in the smallest currency unit (e.g., '4999' = $49.99). | 
**currency** | **String** | Three-letter ISO 4217 currency code, lowercase (e.g., 'usd'). | 
**acceptedNetworks** | **[String]** | Card networks accepted by the merchant (e.g., ['visa', 'mastercard']). | 
**merchantId** | **String** | Merchant identifier (maps to 'recipient' in MPP spec request object). | 
**merchantName** | **String** | Human-readable merchant name. | 
**encryptionJwk** | [**Iccv1mppcredentialsChallengeEncryptionJwk**](Iccv1mppcredentialsChallengeEncryptionJwk.md) |  | 


