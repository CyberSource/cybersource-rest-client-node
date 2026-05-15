# CyberSource.Tmsv2TokenizedCardVerificationResults

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**securityCode** | **String** | Indicates whether the security code (CVV/CVC) was verified by the issuer during the provisioning request. Supported only for VTS tokens.  Possible Values: - MATCH: Verified, CVV2 data matched. - NO_MATCH: Verified, CVV2 data did not match. - NOT_SUPPORTED: Verification not supported by card issuer. - SKIPPED: Verification was not performed.  | [optional] 
**address** | **String** | Indicates whether the billing address was verified by the issuer during the provisioning request. Supported only for VTS tokens.  Possible Values: - MATCH: Verified, address and postal code data matched. - PARTIAL_MATCH: Verified, either address data matched or postal code data matched. - PARTIAL_MATCH_FORMAT_UNSUPPORTED: Verified, either address data matched or postal code data matched, but the other could not be verified due to format issues. - NO_MATCH: Verified, address and postal code data did not match. - NOT_SUPPORTED: Verification not supported by card issuer. - SKIPPED: Verification was not performed.  | [optional] 


