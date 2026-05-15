# CyberSource.Ptsv2paymentsidreversalsPaymentInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentType** | [**Ptsv2paymentsidreversalsPaymentInformationPaymentType**](Ptsv2paymentsidreversalsPaymentInformationPaymentType.md) |  | [optional] 
**merchantLimitedAcceptanceIndicator** | **String** | Mastercard One Credential merchant limited acceptance indicator. Mastercard One Credential connects multiple Mastercard payment methods and allows cardhollers to access various options and set payment preferences.  This field indicates which Mastercard One Credential funding PAN acceptance brands should NOT be assigned for this transaction.  This field flows in ISO field 34, DSID 02 tag DB, mapped to Mastercard Data Element (DE) 48, Sub element 02, Subfield 01.  Possible values: - `C`: Do not assign a Mastercard One Credential funding PAN containing the Mastercard Credit Acceptance Brand for this transaction - `D`: Do not assign a Mastercard One Credential funding PAN containing the Debit Mastercard Acceptance Brand for this transaction - `M`: Do not assign a Mastercard One Credential funding PAN containing the Maestro Acceptance Brand for this transaction  This field is supported for Authorization reversal request.  #### Used by **Authorization Reversal Request** Optional field.  | [optional] 


