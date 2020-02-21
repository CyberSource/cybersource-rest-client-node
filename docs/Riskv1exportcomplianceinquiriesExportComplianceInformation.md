# CyberSource.Riskv1exportcomplianceinquiriesExportComplianceInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addressOperator** | **String** | Parts of the customer’s information that must match with an entry in the DPL (denied parties list) before a match occurs. This field can contain one of the following values: - AND: (default) The customer’s name or company and the customer’s address must appear in the database. - OR: The customer’s name must appear in the database. - IGNORE: You want the service to detect a match only of the customer’s name or company but not of the address.  | [optional] 
**weights** | [**Riskv1exportcomplianceinquiriesExportComplianceInformationWeights**](Riskv1exportcomplianceinquiriesExportComplianceInformationWeights.md) |  | [optional] 
**sanctionLists** | **[String]** | Use this field to specify which list(s) you want checked with the request. The reply will include the list name as well as the response data. To check against multiple lists, enter multiple list codes separated by a caret (^). For more information, see \&quot;Restricted and Denied Parties List,\&quot; page 68.  | [optional] 


