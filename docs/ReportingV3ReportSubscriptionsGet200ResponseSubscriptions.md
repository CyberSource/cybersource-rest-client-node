# CyberSource.ReportingV3ReportSubscriptionsGet200ResponseSubscriptions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organizationId** | **String** | Selected Organization Id | [optional] 
**reportDefinitionId** | **String** | Report Definition Id | [optional] 
**reportDefinitionName** | **String** | Report Definition Class | [optional] 
**reportMimeType** | **String** | Report Format                          Valid values: - application/xml - text/csv  | [optional] 
**reportFrequency** | **String** | &#39;Report Frequency&#39;  Valid values: - DAILY - WEEKLY - MONTHLY - ADHOC  | [optional] 
**reportName** | **String** | Report Name | [optional] 
**timezone** | **String** | Time Zone | [optional] 
**startTime** | **Date** | Start Time | [optional] 
**startDay** | **Number** | Start Day | [optional] 
**reportFields** | **[String]** | List of all fields String values | [optional] 
**reportFilters** | **{String: [String]}** | List of filters to apply | [optional] 
**reportPreferences** | [**Reportingv3reportsReportPreferences**](Reportingv3reportsReportPreferences.md) |  | [optional] 
**groupId** | **String** | Id for the selected group. | [optional] 


