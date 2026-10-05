# CyberSource.BoardingPayoutsConfigurationsProcessors

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **Boolean** | Indicates if the payment route is enabled. Allows the acquirer to enable/disable processing based on the config setting but to retain the configuration profile.  | [optional] 
**acquirer** | [**BoardingPayoutsConfigurationsAcquirer**](BoardingPayoutsConfigurationsAcquirer.md) |  | [optional] 
**currencies** | **[String]** | List of supported [ISO 4217](https://developer.cybersource.com/docs/cybs/en-us/currency-codes/reference/all/na/currency-codes/currency-codes.html) alpha-3 currency codes. | [optional] 
**countries** | **[String]** | List of [ISO 3166-1](https://developer.cybersource.com/docs/cybs/en-us/country-codes/reference/all/na/country-codes/country-codes.html) alpha-2 country codes | [optional] 
**merchantId** | **String** | A unique identifier value assigned by Visa for each merchant included in the identification program. | [optional] 
**terminalId** | **String** | This field contains a code that identifies a terminal at the card acceptor location. This field is used in all messages related to a transaction. If sending transactions from a card not present environment, use the same value for all transactions. | [optional] 
**businessCategoryValidation** | **Boolean** | Default: false  Override Business Application Indicator and Merchant Category Code validations for payout transaction types.  | [optional] 
**payoutsTransactionTypes** | **[String]** | The supported Payouts transaction types for the processor.  | [optional] 
**merchantPseudoAbaNumber** | **String** | This is a number that uniquely identifies the merchant for PPGS transactions.  | [optional] 
**binLookupEligibilityCheck** | **[String]** | List of transaction types eligible for BIN Lookup Payouts Eligibility Check.  Supports \"PULL_FUNDS_TRANSFER\" and \"PUSH_FUNDS_TRANSFER\".  | [optional] 
**feeProgramId** | **String** | This field identifies the interchange fee program applicable to each financial transaction. Fee program indicator (FPI) values correspond to the fee descriptor and rate for each existing fee program.  This field can be regarded as informational only in all authorization messages.  | [optional] 
**cpsAuthorizationCharacteristicsId** | **String** | The Authorization Characteristics Indicator (ACI) is a code used by the acquirer to request CPS qualification. If applicable, Visa changes the code to reflect the results of its CPS evaluation. | [optional] 
**nationalReimbursementFee** | **String** | A client-supplied interchange amount. | [optional] 
**settlementServiceId** | **String** | This flag enables the merchant to request for a particular settlement service to be used for settling the transaction.  Note: The default value is VIP. This field is only relevant for specific countries where the acquirer has to select National Settlement in order to settle in the national net settlement service.change   Possible values: - INTERNATIONAL_SETTLEMENT - VIP_TO_DECIDE - NATIONAL_SETTLEMENT | [optional] 
**sharingGroupCode** | **String** | This U.S.-only field is optionally used by PIN Debit Gateway Service participants (merchants and acquirers) to specify the network access priority. VisaNet checks to determine if there are issuer routing preferences for a network specified by the sharing group code. If an issuer preference exists for one of the specified debit networks, VisaNet makes a routing selection based on issuer preference. If an preference exists for multiple specified debit networks, or if no issuer preference exists, VisaNet makes a selection based on acquirer routing priorities.  Possible values: - ACCEL_EXCHANGE_E - CU24_C - INTERLINK_G - MAESTRO_8 - NYCE_Y - NYCE_F - PULSE_S - PULSE_L - PULSE_H - STAR_N - STAR_W - STAR_Z - STAR_Q - STAR_M - VISA_V | [optional] 
**allowCryptoCurrencyPurchase** | **Boolean** | This field allows a merchant to send a flag that specifies whether the payment is for the purchase of cryptocurrency. | [optional] 
**merchantMvv** | **String** | Merchant Verification Value (MVV) is used to identify merchants that participate in a variety of programs. The MVV is unique to the merchant. | [optional] 
**electronicCommerceId** | **String** | This code identifies the level of security used in an electronic commerce transaction over an open network (for example, the Internet).  Possible values: - INTERNET - RECURRING - RECURRING_INTERNET - VBV_FAILURE - VBV_ATTEMPTED - VBV - SPA_FAILURE - SPA_ATTEMPTED - SPA | [optional] 
**merchantDescriptor** | [**BoardingPayoutsConfigurationsMerchantDescriptor**](BoardingPayoutsConfigurationsMerchantDescriptor.md) |  | [optional] 
**operatingEnvironment** | **String** | Initiation channel of the transfer request.     Possible values: - WEB - MOBILE - BANK - KIOSK | [optional] 
**interchangeRateDesignator** | **String** | The IRD used for clearing the transaction on the Mastercard network. | [optional] 
**partnerIdentifier** | **String** | Mastercard-assigned unique ID for registered partner. Mastercard Send Only. | [optional] 


