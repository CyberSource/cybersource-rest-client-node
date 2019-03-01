# CyberSource.RequestBody1

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organizationId** | **String** | Valid CyberSource organizationId | [optional] 
**reportDefinitionName** | **String** | Valid Report Definition Name | 
**reportFields** | **[String]** |  | 
**reportMimeType** | **String** |  | 
**reportFrequency** | **String** | The frequency for which subscription is created. | 
**reportName** | **String** |  | 
**timezone** | **String** |  | 
**startTime** | **String** | The hour at which the report generation should start. It should be in hhmm format. | 
**startDay** | **Number** | This is the start day if the frequency is WEEKLY or MONTHLY. The value varies from 1-7 for WEEKLY and 1-31 for MONTHLY. For WEEKLY 1 means Sunday and 7 means Saturday. By default the value is 1. | [optional] 
**reportFilters** | **{String: [String]}** | List of filters to apply | [optional] 
**reportPreferences** | [**ReportingV3ReportsIdGet200ResponseReportPreferences**](ReportingV3ReportsIdGet200ResponseReportPreferences.md) |  | [optional] 
**groupName** | **String** | Valid GroupName | [optional] 


<a name="ReportMimeTypeEnum"></a>
## Enum: ReportMimeTypeEnum


* `application/xml` (value: `"application/xml"`)

* `text/csv` (value: `"text/csv"`)




<a name="ReportFrequencyEnum"></a>
## Enum: ReportFrequencyEnum


* `DAILY` (value: `"DAILY"`)

* `WEEKLY` (value: `"WEEKLY"`)

* `MONTHLY` (value: `"MONTHLY"`)




