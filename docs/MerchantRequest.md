# CyberSource.MerchantRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchantName** | **String** | Doing business as (DBA) name | 
**merchantUrl** | **String** | Base merchant URL (must use HTTPS) | 
**vmid** | **String** | Visa Merchant ID — unique identifier | [optional] 
**indicator** | **String** | Transaction processing type  Possible values: - TAP - ACG - BOTH | 
**cryptogramType** | **String** | Authentication cryptogram type (defaults to DAVV)  Possible values: - TAVV - DAVV | [optional] 
**paymentPayloadType** | **String** | Credential delivery format (defaults to UNENCRYPTED)  Possible values: - ENCRYPTED - UNENCRYPTED | [optional] 
**encryptionKey** | [**Iccv1merchantsEncryptionKey**](Iccv1merchantsEncryptionKey.md) |  | [optional] 
**acceptanceRelationships** | **[String]** | List of acceptance network relationships | [optional] 
**protocolInteractions** | [**[Iccv1merchantsProtocolInteractions]**](Iccv1merchantsProtocolInteractions.md) | List of protocol configurations (ucp, acp, x402) with HTTPS URLs | [optional] 
**webIntegrations** | [**Iccv1merchantsWebIntegrations**](Iccv1merchantsWebIntegrations.md) |  | [optional] 
**apiIntegrations** | [**Iccv1merchantsApiIntegrations**](Iccv1merchantsApiIntegrations.md) |  | [optional] 


