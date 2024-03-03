# CyberSource.Ptsv2creditsSenderInformationAccount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_number** | **String** | Account number of the sender of the funds. For Gaming Payment of Winnings transactions this is the merchant account number. * Required for Mastercard Payment of Winnings (POW) transactions. * Must contain only ASCII characters in range 32-122. * Must not be greater than 50 characters. * Required for POW on Barclays.  | [optional] 
**fundsSource** | **String** | Source of funds for the sender. For Gaming Payment of Winnings transactions this is the merchant account type. * Required for Mastercard Payment of Winnings (POW) transactions. * Valid values:   * 00 - Other   * 01 - RTN + Bank Account   * 02 - IBAN   * 03 - Card Account   * 04 - Email   * 05 - PhoneNumber   * 06 - Bank account number (BAN) + Bank Identification Code (BIC)   * 07 - Wallet ID   * 08 - Social Network ID  | [optional] 


