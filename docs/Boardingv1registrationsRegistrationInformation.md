# CyberSource.Boardingv1registrationsRegistrationInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boardingRegistrationId** | **String** |  | [optional] 
**submitTimeUtc** | **Date** | Time of request in UTC. `Format: YYYY-MM-DDThh:mm:ssZ`  Example 2016-08-11T22:47:57Z equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The T separates the date and the time. The Z indicates UTC.  | [optional] 
**status** | **String** | The status of Registration request Possible Values:   - 'PROCESSING': This status is for Registrations that are still in Progress, you can get the latest status by calling the GET endpoint using the Registration Id   - 'SUCCESS': This status is for Registrations that were successfull on every step of the on boarding process.   - 'FAILURE': This status is for Registrations that fail before the Organization was created; please refer to the details section in the reponse for more information.   - 'PARTIAL': This status is for Registrations that created the Organization successfully but fail in at least on step while configuring it; please refer to the details section in the response for more information.  | [optional] 
**boardingPackageId** | **String** |  | [optional] 
**boardingFlow** | **String** | Determines the boarding flow for this registration. Possible Values:   - 'ENTERPRISE'   - 'SMB'   - 'ADDPRODUCT'  | [optional] 
**mode** | **String** | In case mode is not provided the API will use COMPLETE as default Possible Values:   - 'COMPLETE'   - 'PARTIAL'  | [optional] 
**salesRepId** | **String** |  | [optional] 


