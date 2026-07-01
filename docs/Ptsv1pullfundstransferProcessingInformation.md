# CyberSource.Ptsv1pullfundstransferProcessingInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commerceIndicator** | **String** | Type of transaction. This field identifies the level of security used in an electronic commerce transaction over an open network (for example, the internet).  Values for a Payouts transaction:   `INTERNET`, `RECURRING`, `RECURRING_INTERNET`, `VBV_FAILURE`, `VBV_ATTEMPTED`, `VBV`, `SPA_FAILURE`, `SPA_ATTEMPTED`, `SPA`    If no value is entered this field will set a default value = `INTERNET`.  | [optional] 
**fundingOptions** | [**AftFundingOptions**](AftFundingOptions.md) |  | [optional] 
**recurringOptions** | [**Ptsv1pullfundstransferProcessingInformationRecurringOptions**](Ptsv1pullfundstransferProcessingInformationRecurringOptions.md) |  | [optional] 
**businessApplicationId** | **String** | Payouts transaction type.  Possible Values: - `AA` = Account to account - `PP` = Person to person - `TU` = Top-up for enhanced prepaid loads - `WT` = Wallet transfer - `BI` = Bank-Initiated - `FT` = Funds Transfer - `FD` = Funds Disbursement - `MP` = Merchant Payment - `PD` = Payroll Disbursement - `LA` = Liquid Assets  | 
**purposeOfPayment** | **String** | Visa Direct   Purpose of payment is required in certain markets to clearly identify the purpose of the payment based on the standard values defined for respective market.  | [optional] 
**payoutsOptions** | [**Ptsv1pullfundstransferProcessingInformationPayoutsOptions**](Ptsv1pullfundstransferProcessingInformationPayoutsOptions.md) |  | [optional] 
**languageCode** | **String** | Contains the ISO 639-2 defined language Code  | [optional] 
**accountVerificationCode** | **[String]** | Account verification code will inform what Payment Account Verification should be performed. With this array of codes, a merchant can choose à la carte what verifications to run. This field is optional, and the default is 1 if it is not passed in. This means that a full validation of the fields will be performed. Valid verification codes: - `1` = Full Account Verification (Card Account, CVN, CAVV, TAVV, Address, Name, eMail, Phone, Identity) - `2` = Card Account Verification - `3` = Address Verification - `4` = Card Authentication Method (CAM) (Cryptogram) - `5` = Cardholder Authentication Verification (CAVV) - `6` = Cardholder Identity Verification - `7` = CVV2 Verification - `8` = eMail Verification - `9` = Name Verification - `10` = Phone Verification  | [optional] 


