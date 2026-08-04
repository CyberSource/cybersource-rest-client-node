# CyberSource.InlineResponse2013ResultsRISKINSIGHTS

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestId** | **String** | Echoes the unique identifier from the original label request. | [optional] 
**responseTimestamp** | **Date** | ISO 8601 timestamp when the VPRI service processed the label submission. | [optional] 
**status** | **String** | Processing status of the label submission.  Possible values: - COMPLETED - INVALID_REQUEST - SERVER_ERROR | [optional] 
**reason** | **String** | Machine-readable reason code when status is not COMPLETED. | [optional] 
**message** | **String** | Human-readable message when status is not COMPLETED. | [optional] 


