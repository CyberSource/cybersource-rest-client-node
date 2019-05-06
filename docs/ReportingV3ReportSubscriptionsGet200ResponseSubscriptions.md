# CyberSource.ReportingV3ReportSubscriptionsGet200ResponseSubscriptions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organizationId** | **String** | Selected Organization Id | [optional] 
**reportDefinitionId** | **String** | Report Definition Id | [optional] 
**reportDefinitionName** | **String** | Report Definition Class | [optional] 
**reportMimeType** | **String** | Report Format | [optional] 
**reportFrequency** | **String** | Report Frequency | [optional] 
**reportName** | **String** | Report Name | [optional] 
**timezone** | **String** | Time Zone | [optional] 
**startTime** | **Date** | Start Time | [optional] 
**startDay** | **Number** | Start Day | [optional] 
**reportFields** | **[String]** | List of all fields String values | [optional] 
**reportFilters** | **{String: [String]}** | List of filters to apply | [optional] 
**reportPreferences** | [**Reportingv3reportsReportPreferences**](Reportingv3reportsReportPreferences.md) |  | [optional] 
**groupId** | **String** | Id for the selected group. | [optional] 


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




