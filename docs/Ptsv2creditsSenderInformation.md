# CyberSource.Ptsv2creditsSenderInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firstName** | **String** | First name of the sender of the funds. For Gaming Payment of Winnings transactions these are the merchant details. * Required for Mastercard Payment of Winnings (POW) transactions. * Must not be all numeric. * Must contain only ASCII characters in range 32-122. * Must not be greater than 35 characters including spaces. * Required for POW on Barclays.  | [optional] 
**lastName** | **String** | Last name of the sender of the funds. For Gaming Payment of Winnings transactions these are the merchant details. * Optional for Mastercard Payment of Winnings (POW) transactions. * Must not be all numeric. * Must contain only ASCII characters in range 32-122. * Must not be greater than 35 characters including spaces. * Optional for POW on Barclays.  | [optional] 
**address1** | **String** | Street address of the sender of the funds. For Gaming Payment of Winnings transactions these are the merchant details. * Required for Mastercard Payment of Winnings (POW) transactions. * Must not be all numeric. * Must contain only ASCII characters in range 32-122. * Must not be greater than 50 characters including spaces. * Required for POW on Barclays.  | [optional] 
**locality** | **String** | City of the sender of the funds. For Gaming Payment of Winnings transactions these are the merchant details. * Required for Mastercard Payment of Winnings (POW) transactions. * Must not be all numeric. * Must contain only ASCII characters in range 32-122. * Must not be greater than 25 characters including spaces. * Required for POW on Barclays.  | [optional] 
**countryCode** | **String** | Country of the sender of the funds. For Gaming Payment of Winnings transactions these are the merchant details. * Required for Mastercard Payment of Winnings (POW) transactions. * Must be a valid three character ISO country code as defined by ISO 3166. * Must not be greater than 3 characters. * Required for POW on Barclays.  | [optional] 
**account** | [**Ptsv2creditsSenderInformationAccount**](Ptsv2creditsSenderInformationAccount.md) |  | [optional] 


