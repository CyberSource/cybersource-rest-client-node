# CyberSource.TssV2TransactionsPost201ResponseEmbeddedRiskInformationProvidersFingerprint

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trueIpaddress** | **String** | Customer’s true IP address detected by the application.  For details, see the &#x60;true_ipaddress&#x60; field description in [CyberSource Decision Manager Device Fingerprinting Guide.](https://www.cybersource.com/developers/documentation/fraud_management)  | [optional] 
**hash** | **String** | The unique identifier of the device that is returned in the &#x60;riskInformation.providers.fingerprint.device_fingerprint_hash&#x60; API reply field.  NOTE: For details about the value of this field, see the &#x60;decision_provider_#_field_#_value&#x60; field description in the _Decision Manager Using the SCMP API Developer Guide_ on the [CyberSource Business Center.](https://ebc2.cybersource.com/ebc2/) Click **Decision Manager** &gt; **Documentation** &gt; **Guides** &gt; _Decision Manager Using the SCMP API Developer Guide_ (PDF link).  For more details about this field, see the &#x60;device_fingerprint_hash&#x60; field description in the _CyberSource Decision Manager Device Fingerprinting Guide_on the [CyberSource Business Center.](https://ebc2.cybersource.com/ebc2/) Click **Decision Manager** &gt; **Documentation** &gt; **Guides** &gt; _Decision Manager Using the SCMP API Developer Guide_ (PDF link)  | [optional] 
**smartId** | **String** | The device identifier generated from attributes collected during profiling. Returned by a 3rd party when you use device fingerprinting.  For details, see the &#x60;device_fingerprint_smart_id&#x60; field description in [CyberSource Decision Manager Device Fingerprinting Guide.](https://www.cybersource.com/developers/documentation/fraud_management)  | [optional] 


