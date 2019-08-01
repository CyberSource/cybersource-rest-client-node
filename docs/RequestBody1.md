# CyberSource.RequestBody1

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organizationId** | **String** | Valid CyberSource organizationId | [optional] 
**reportDefinitionName** | **String** | Valid Report Definition Name | 
**reportFields** | **[String]** |  | 
**reportMimeType** | **String** | Valid values: - application/xml - text/csv  | 
**reportFrequency** | **String** | &#39;The frequency for which subscription is created.&#39;  Valid values: - &#39;DAILY&#39; - &#39;WEEKLY&#39; - &#39;MONTHLY&#39; - &#39;ADHOC&#39;  | 
**reportName** | **String** |  | 
**timezone** | **String** |  | 
**startTime** | **String** | The hour at which the report generation should start. It should be in hhmm format. | 
**startDay** | **Number** | This is the start day if the frequency is WEEKLY or MONTHLY. The value varies from 1-7 for WEEKLY and 1-31 for MONTHLY. For WEEKLY 1 means Sunday and 7 means Saturday. By default the value is 1. | [optional] 
**reportFilters** | **{String: [String]}** | List of filters to apply | [optional] 
**reportPreferences** | [**Reportingv3reportsReportPreferences**](Reportingv3reportsReportPreferences.md) |  | [optional] 
**groupName** | **String** | Valid GroupName | [optional] 


