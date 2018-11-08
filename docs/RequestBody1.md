# CyberSource.RequestBody1

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organizationId** | **String** | Valid CyberSource Organization Id | [optional] 
**reportDefinitionName** | **String** |  | [optional] 
**reportFields** | **[String]** | List of fields which needs to get included in a report | [optional] 
**reportMimeType** | **String** |  Format of the report | [optional] 
**reportName** | **String** | Name of the report | [optional] 
**timezone** | **String** | Timezone of the report | [optional] 
**reportStartTime** | **Date** | Start time of the report | [optional] 
**reportEndTime** | **Date** | End time of the report | [optional] 
**reportFilters** | **{String: [String]}** |  | [optional] 
**reportPreferences** | [**ReportingV3ReportSubscriptionsGet200ResponseReportPreferences**](ReportingV3ReportSubscriptionsGet200ResponseReportPreferences.md) |  | [optional] 
**selectedMerchantGroupName** | **String** | Specifies the group name | [optional] 


<a name="ReportMimeTypeEnum"></a>
## Enum: ReportMimeTypeEnum


* `application/xml` (value: `"application/xml"`)

* `text/csv` (value: `"text/csv"`)




