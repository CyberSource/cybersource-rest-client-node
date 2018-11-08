# CyberSource.ReportingV3ReportsIdGet200Response

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organizationId** | **String** | CyberSource merchant id | [optional] 
**reportId** | **String** | Report ID Value | [optional] 
**reportDefinitionId** | **String** | Report definition Id | [optional] 
**reportName** | **String** | Report Name | [optional] 
**reportMimeType** | **String** | Report Format | [optional] 
**reportFrequency** | **String** | Report Frequency Value | [optional] 
**reportFields** | **[String]** | List of Integer Values | [optional] 
**reportStatus** | **String** | Report Status Value | [optional] 
**reportStartTime** | **Date** | Report Start Time Value | [optional] 
**reportEndTime** | **Date** | Report End Time Value | [optional] 
**timezone** | **String** | Time Zone Value | [optional] 
**reportFilters** | **{String: [String]}** | Report Filters | [optional] 
**reportPreferences** | [**ReportingV3ReportSubscriptionsGet200ResponseReportPreferences**](ReportingV3ReportSubscriptionsGet200ResponseReportPreferences.md) |  | [optional] 
**selectedMerchantGroupName** | **String** | Selected Merchant Group name | [optional] 


<a name="ReportMimeTypeEnum"></a>
## Enum: ReportMimeTypeEnum


* `application/xml` (value: `"application/xml"`)

* `text/csv` (value: `"text/csv"`)




<a name="ReportFrequencyEnum"></a>
## Enum: ReportFrequencyEnum


* `DAILY` (value: `"DAILY"`)

* `WEEKLY` (value: `"WEEKLY"`)

* `MONTHLY` (value: `"MONTHLY"`)




<a name="ReportStatusEnum"></a>
## Enum: ReportStatusEnum


* `COMPLETED` (value: `"COMPLETED"`)

* `PENDING` (value: `"PENDING"`)

* `QUEUED` (value: `"QUEUED"`)

* `RUNNING` (value: `"RUNNING"`)

* `ERROR` (value: `"ERROR"`)

* `NO_DATA` (value: `"NO_DATA"`)

* `RERUN` (value: `"RERUN"`)




