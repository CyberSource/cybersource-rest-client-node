# CyberSource.PayerAuthConfigCardTypesVerifiedByVisaCurrencies

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currencyCodes** | **[String]** | Supported currency codes are numeric ISO 4217 codes, such as 840 for US Dollar and 978 for Euro.  For backward compatibility, we also support the 'ALL' code, which represents all currencies.  In the UI, 'ALL' is displayed as 'Default'.  | [optional] 
**acquirerId** | **String** | The Acquirer ID value, often referred to as the Acquirer BIN, is specific to an Acquirer. The value is created by Cardinal in their system and the Acquirer may not know that the Acquirer ID is different from their Acquiring BIN. It is most often the Acquiring BIN + \"-1000\" but the trailing character can be different. **Note** We will need to double check with Cardinal before setting up the Portfolio Template in production.  | [optional] 
**processorMerchantId** | **String** | Processor Merchant ID is the Merchant ID assigned by your acquiring bank. This Merchant ID should also be used by your bank to register your account to the card scheme Directory Server for processing Payer Authentication services.  | [optional] 


