# CyberSource.ReportingV3ReportSubscriptionsGet200ResponseSubscriptions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organizationId** | **String** | Selected Organization Id | [optional] 
**reportDefinitionId** | **String** | Report Definition Id | [optional] 
**reportDefinitionName** | **String** | Report Definition Class | [optional] 
**reportMimeType** | **String** | Report Format                          Valid values: - application/xml - text/csv  | [optional] 
**reportFrequency** | **String** | &#39;Report Frequency&#39; **NOTE: Do not document USER_DEFINED Frequency field in developer center**  Valid values: - DAILY - WEEKLY - MONTHLY - USER_DEFINED  | [optional] 
**reportInterval** | **String** | If the reportFrequency is User-defined, reportInterval should be in **ISO 8601 time format** Please refer the following link to know more about ISO 8601 format.[Rfc Time Format](https://en.wikipedia.org/wiki/ISO_8601#Durations)  **Example time format for 2 hours and 30 Mins:**   - PT2H30M **NOTE: Do not document reportInterval field in developer center**  | [optional] 
**reportName** | **String** | Report Name | [optional] 
**timezone** | **String** | Time Zone | [optional] 
**startTime** | **Date** | Start Time | [optional] 
**startDay** | **Number** | Start Day | [optional] 
**reportFields** | **[String]** | List of all fields String values | [optional] 
**reportFilters** | **{String: [String]}** | List of filters to apply | [optional] 
**reportPreferences** | [**Reportingv3reportsReportPreferences**](Reportingv3reportsReportPreferences.md) |  | [optional] 
**groupId** | **String** | Id for the selected group. | [optional] 


