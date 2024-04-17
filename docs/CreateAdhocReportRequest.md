# CyberSource.CreateAdhocReportRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organizationId** | **String** | Valid CyberSource Organization Id | [optional] 
**reportDefinitionName** | **String** |  | [optional] 
**reportFields** | **[String]** | List of fields which needs to get included in a report | [optional] 
**reportMimeType** | **String** | 'Format of the report'                  Valid values: - application/xml - text/csv  | [optional] 
**reportName** | **String** | Name of the report | [optional] 
**timezone** | **String** | Timezone of the report | [optional] 
**reportStartTime** | **Date** | Start time of the report | [optional] 
**reportEndTime** | **Date** | End time of the report | [optional] 
**reportFilters** | [**Reportingv3reportsReportFilters**](Reportingv3reportsReportFilters.md) |  | [optional] 
**reportPreferences** | [**Reportingv3reportsReportPreferences**](Reportingv3reportsReportPreferences.md) |  | [optional] 
**groupName** | **String** | Specifies the group name | [optional] 


