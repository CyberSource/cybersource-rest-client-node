# CyberSource.CardProcessingConfigCommonAcquirer

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**institutionId** | **String** | Identifier of the acquirer. This number is usually assigned by Visa. Applicable for VPC, GPX (gpx), CMCIC (cmcic), EFTPOS, CB2A, CUP, American Express Direct (amexdirect) and Six (six) processors.  Validation details (for selected processors)...  <table> <thead><tr><th>Processor</th><th>Acceptance Type</th><th>Required</th><th>Min. Length</th><th>Max. Length</th><th>Regex</th><th>Default Value</th></tr></thead> <tr><td>American Express Direct</td><td>cnp, cp, hybrid</td><td>Yes</td><td>1</td><td>13</td><td>^[0-9]+$</td><td>1111</td></tr> </table>  | [optional] 
**interbankCardAssociationId** | **String** | Number assigned by MasterCard to banks to identify the member in transactions. Applicable for VPC and GPX (gpx) processors. | [optional] 
**discoverInstitutionId** | **String** | Assigned by Discover to identify the acquirer. Applicable for VPC and GPX (gpx) processors. | [optional] 
**unionPayInstitutionId** | **String** | Assigned by China Union Pay to identify the acquirer. Applicable for VPC processors. | [optional] 
**dinersClubInstitutionId** | **String** | Assigned by Diners Club to identify the acquirer. Applicable for VPC processors. | [optional] 
**countryCode** | **String** | ISO 4217 format. Applicable for VPC, GPX (gpx), EFTPOS, RUPAY, Prisma (prisma) and CUP processors. | [optional] 
**fileDestinationBin** | **String** | The BIN to which this capturefile is sent. This field must contain a valid BIN. Applicable for VPC and GPX (gpx) processors. | [optional] 


