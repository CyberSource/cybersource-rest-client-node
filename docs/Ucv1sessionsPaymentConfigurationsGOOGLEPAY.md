# CyberSource.Ucv1sessionsPaymentConfigurationsGOOGLEPAY

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowedAuthMethods** | **[String]** | When you enable Google Pay on Unified Checkout you can specify optional parameters that define the types of card authentication you receive from Google Pay.<br><br> By default, Google sends both authentication types.  When the complete mandate is used and Google Pay does not authenticate the transaction, then Unified Checkout completes the authentication request as part of the complete mandate.<br><br> Possible values: - PAN_ONLY: Google returns primary account number (PAN) values - CRYPTOGRAM_3DS: Google returns fully authenticated network token values.<br><br>  Optional field:   This field can be configured through the Merchant Experience Screens in the Business Center.  The configured value may be overridden on a per transaction basis in the uc/v1/sessions API request.  | [optional] 


