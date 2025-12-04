# CyberSource.InlineResponse4009

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**submitTimeUtc** | **String** | Time verification was requested  Format: `YYYY-MM-DDThhmmssZ`, where: - `T`:  Separates the date and the time - `Z`:  Indicates Coordinated Universal Time (UTC), also known as Greenwich Mean Time (GMT)  Example:  `2020-01-11T224757Z` equals January 11, 2020, at 22:47:57 (10:47:57 p.m.)  | [optional] 
**status** | **String** | Possible values:   - `INVALID_REQUEST`  | [optional] 
**message** | **String** | The detail message related to the status and reason | [optional] 
**reason** | **String** | The reason of the status.  Possible values:   - `INVALID_REQUEST`  | [optional] 
**details** | [**[InlineResponse4009Details]**](InlineResponse4009Details.md) |  | [optional] 


