# CyberSource.ReportingV3ReportsGet200ResponseReports

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reportDefinitionId** | **String** | Unique Report Identifier of each report type | [optional] 
**reportName** | **String** | Name of the report specified by merchant while creating the report | [optional] 
**reportMimeType** | **String** | Format of the report to get generated | [optional] 
**reportFrequency** | **String** | Frequency of the report to get generated | [optional] 
**status** | **String** | Status of the report | [optional] 
**reportStartTime** | **Date** | Specifies the report start time in ISO 8601 format | [optional] 
**reportEndTime** | **Date** | Specifies the report end time in ISO 8601 format | [optional] 
**timezone** | **String** | Time Zone | [optional] 
**reportId** | **String** | Unique identifier generated for every reports | [optional] 
**organizationId** | **String** | CyberSource Merchant Id | [optional] 
**queuedTime** | **Date** | Specifies the time of the report in queued  in ISO 8601 format | [optional] 
**reportGeneratingTime** | **Date** | Specifies the time of the report started to generate  in ISO 8601 format | [optional] 
**reportCompletedTime** | **Date** | Specifies the time of the report completed the generation  in ISO 8601 format | [optional] 
**selectedMerchantGroupName** | **String** | Selected name of the group | [optional] 


<a name="ReportMimeTypeEnum"></a>
## Enum: ReportMimeTypeEnum


* `application/xml` (value: `"application/xml"`)

* `text/csv` (value: `"text/csv"`)




<a name="ReportFrequencyEnum"></a>
## Enum: ReportFrequencyEnum


* `DAILY` (value: `"DAILY"`)

* `WEEKLY` (value: `"WEEKLY"`)

* `MONTHLY` (value: `"MONTHLY"`)

* `ADHOC` (value: `"ADHOC"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `COMPLETED` (value: `"COMPLETED"`)

* `PENDING` (value: `"PENDING"`)

* `QUEUED` (value: `"QUEUED"`)

* `RUNNING` (value: `"RUNNING"`)

* `ERROR` (value: `"ERROR"`)

* `NO_DATA` (value: `"NO_DATA"`)




