# CyberSource.TssV2TransactionsPost201ResponseEmbeddedRiskInformationProvidersFingerprint

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trueIpaddress** | **String** | Customer's true IP address detected by the application.  For details, see the `true_ipaddress` field description in _Device Fingerprinting Guide_ on the [CyberSource Business Center.](https://ebc2.cybersource.com/ebc2/) Click **Decision Manager** > **Documentation** > **Guides** > _Device Fingerprinting Guide_ (PDF link).  | [optional] 
**hash** | **String** | The unique identifier of the device that is returned in the `riskInformation.providers.fingerprint.device_fingerprint_hash` API reply field. For more details about this field, see the `device_fingerprint_hash` field description in the _Device Fingerprinting Guide_ on the [CyberSource Business Center.](https://ebc2.cybersource.com/ebc2/) Click **Decision Manager** > **Documentation** > **Guides** > _Device Fingerprinting Guide_ (PDF link).  | [optional] 
**smartId** | **String** | The device identifier generated from attributes collected during profiling. Returned by a 3rd party when you use device fingerprinting.  For details, see the `device_fingerprint_smart_id` field description in [CyberSource Decision Manager Device Fingerprinting Guide.](https://www.cybersource.com/developers/documentation/fraud_management)  | [optional] 


