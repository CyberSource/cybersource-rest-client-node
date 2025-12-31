# CyberSource.Acpv1tokensAuthenticatedIdentities

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **String** | Data related to the authenticated identity. | [optional] 
**provider** | **String** | Provider of the authenticated identity. | [optional] 
**id** | **String** | This is a distinctive and non-transparent identifier provided by VISA for correlation purposes in the previous, related API.   Field Mapping when authenticationMethodType is 'FIDO2':     - On Success: FidoResponse.identifier   - On Error: AuthContext.identifier  | 


