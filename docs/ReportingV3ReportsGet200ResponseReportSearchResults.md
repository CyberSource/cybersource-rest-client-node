# CyberSource.ReportingV3ReportsGet200ResponseReportSearchResults

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reportDefinitionId** | **String** | Unique Report Identifier of each report type | [optional] 
**reportName** | **String** | Name of the report specified by merchant while creating the report | [optional] 
**reportMimeType** | **String** | Format of the report to get generated  Valid values: - application/xml - text/csv  | [optional] 
**reportFrequency** | **String** | Frequency of the report to get generated  Valid values: - DAILY - WEEKLY - MONTHLY - ADHOC  | [optional] 
**status** | **String** | Status of the report  Valid values: - COMPLETED - PENDING - QUEUED - RUNNING - ERROR - NO_DATA  | [optional] 
**reportStartTime** | **Date** | Specifies the report start time in ISO 8601 format | [optional] 
**reportEndTime** | **Date** | Specifies the report end time in ISO 8601 format | [optional] 
**timezone** | **String** | Time Zone | [optional] 
**reportId** | **String** | Unique identifier generated for every reports | [optional] 
**organizationId** | **String** | CyberSource Merchant Id | [optional] 
**queuedTime** | **Date** | Specifies the time of the report in queued  in ISO 8601 format | [optional] 
**reportGeneratingTime** | **Date** | Specifies the time of the report started to generate  in ISO 8601 format | [optional] 
**reportCompletedTime** | **Date** | Specifies the time of the report completed the generation  in ISO 8601 format | [optional] 
**subscriptionType** | **String** | Specifies whether the subscription created is either Custom, Standard or Classic  | [optional] 
**groupId** | **String** | Id for selected group. | [optional] 


