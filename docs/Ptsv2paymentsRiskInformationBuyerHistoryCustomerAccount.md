# CyberSource.Ptsv2paymentsRiskInformationBuyerHistoryCustomerAccount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lastChangeDate** | **String** | Date the cardholder’s account was last changed. This includes changes to the billing or shipping address, new payment accounts or new users added. Recommended for Discover ProtectBuy.  | [optional] 
**creationHistory** | **String** | The values from the enum can be: - GUEST - NEW_ACCOUNT - EXISTING_ACCOUNT  | [optional] 
**modificationHistory** | **String** | This field is applicable only in case of EXISTING_ACCOUNT in creationHistory. Possible values: - ACCOUNT_UPDATED_NOW - ACCOUNT_UPDATED_PAST  | [optional] 
**passwordHistory** | **String** | This only applies for EXISTING_ACCOUNT in creationHistory. The values from the enum can be: - PASSWORD_CHANGED_NOW - PASSWORD_CHANGED_PAST - PASSWORD_NEVER_CHANGED  | [optional] 
**createDate** | **String** | Date the cardholder opened the account. Recommended for Discover ProtectBuy. This only applies for EXISTING_ACCOUNT in creationHistory.  | [optional] 
**passwordChangeDate** | **String** | Date the cardholder last changed or reset password on account. Recommended for Discover ProtectBuy. This only applies for PASSWORD_CHANGED_PAST in passwordHistory.  | [optional] 


