# CyberSource.Kmsv2keyssymverifiKeyInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organizationId** | **String** | Merchant Id  | 
**referenceNumber** | **String** | Reference number is a unique identifier provided by the client along with the organization Id. This is an optional field provided solely for the client's convenience. If client specifies value for this field in the request, it is expected to be available in the response.  | [optional] 
**digestAlgorithm** | **String** | Algorithm for message signature authentication  | [optional] [default to 'HMACSHA2']


<a name="DigestAlgorithmEnum"></a>
## Enum: DigestAlgorithmEnum


* `hMACSHA1` (value: `"HMACSHA1"`)

* `hMACSHA2` (value: `"HMACSHA2"`)




