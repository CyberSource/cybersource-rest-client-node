# CyberSource.Acpv1tokensDeviceInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userAgent** | **String** | Base64 Encoded userAgent string of the connecting client application, with no padding.   User agent string of the connecting client application.   Conditionality:   - Required for browsers - Optional for non-browsers  | [optional] 
**applicationName** | **String** | Name of the connecting client application. | 
**fingerprintSessionId** | **String** | Device Fingerprinting Session identifier. | 
**country** | **String** | ISO 3166-1 alpha-2 country code. The country where the Consumer is accessing the service from. | [optional] 
**deviceData** | [**Acpv1tokensDeviceInformationDeviceData**](Acpv1tokensDeviceInformationDeviceData.md) |  | 
**ipAddress** | **String** | IP address of the consumer's device. | 
**clientDeviceId** | **String** | Unique identifier of the consumer's device. | [optional] 


