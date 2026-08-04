# CyberSource.InlineResponse20113Messages

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Message severity — `info` for informational, `error` for actionable errors.  Possible values: - info - error | 
**code** | **String** | Machine-readable error code. Present only when `type` is `error`. | [optional] 
**param** | **String** | JSONPath to the request field that caused the error. Present only on validation errors. | [optional] 
**contentType** | **String** | Format of the `content` field.  Possible values: - plain - markdown | 
**content** | **String** | Human-readable message text formatted according to `content_type`. | 


