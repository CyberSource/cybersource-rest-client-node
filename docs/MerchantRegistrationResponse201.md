# CyberSource.MerchantRegistrationResponse201

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique merchant identifier (UUID) | 
**merchantName** | **String** | Doing business as (DBA) name | 
**merchantUrl** | **String** | Base merchant URL | 
**vmid** | **String** | Visa Merchant ID | [optional] 
**cryptogramType** | **String** | Authentication cryptogram type  Possible values: - TAVV - DAVV | [optional] 
**paymentPayloadType** | **String** | Credential delivery format  Possible values: - ENCRYPTED - UNENCRYPTED | [optional] 
**indicator** | **String** | Transaction processing type  Possible values: - TAP - ACG - BOTH | 
**merchantMetadata** | **Object** | Additional merchant metadata | [optional] 
**acceptanceRelationships** | **[String]** | List of acceptance network relationships | [optional] 
**protocolInteractions** | [**[Iccv1merchantsProtocolInteractions]**](Iccv1merchantsProtocolInteractions.md) | List of protocol interaction configurations (ucp, acp, x402) | [optional] 
**webIntegrations** | [**Iccv1merchantsWebIntegrations**](Iccv1merchantsWebIntegrations.md) |  | [optional] 
**apiIntegrations** | [**Iccv1merchantsApiIntegrations**](Iccv1merchantsApiIntegrations.md) |  | [optional] 
**isActive** | **Boolean** | Whether the merchant is active | 
**createdAt** | **Date** | Creation timestamp | 
**updatedAt** | **Date** | Last update timestamp | 
**keys** | [**[MerchantRegistrationResponse201Keys]**](MerchantRegistrationResponse201Keys.md) | List of encryption keys associated with the merchant | [optional] 


