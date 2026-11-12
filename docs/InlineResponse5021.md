# CyberSource.InlineResponse5021

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**submitTimeUtc** | **String** | Time verification was requested  Format: `YYYY-MM-DDThhmmssZ`, where: - `T`:  Separates the date and the time - `Z`:  Indicates Coordinated Universal Time (UTC), also known as Greenwich Mean Time (GMT)  Example:  `2020-01-11T224757Z` equals January 11, 2020, at 22:47:57 (10:47:57 p.m.)  | [optional] 
**status** | **String** | The status of the submitted transaction. Possible values:   - `SERVER_ERROR`  | [optional] 
**message** | **String** | The detail message related to the status and reason | [optional] 
**reason** | **String** | The reason of the status.  Possible values:   - `SYSTEM_ERROR`   - `SERVER_TIMEOUT`   - `SERVICE_TIMEOUT`  | [optional] 


