# CyberSource.Ptsv2paymentsOrderInformationDigitalCurrency

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Currently, Visa uses a broad \"cryptocurrency\" indicator. The enhancement will introduce specific values to identify the type of digital currency or coin involved, such as Central Bank Digital Currency (CBDC), stable coins, blockchain-native tokens, and Non-Fungible Tokens (NFTs). Values: - 1: CBDC_TOKENDEPOSIT - 2: STABLE_COIN - 3: BLOCKCHAIN_NATIVE_TOKEN - 4: NFT | [optional] 
**rampProviderCountry** | **String** | Ramp is a platform where we can buy Digital currency, for example Coinbase. This value identifies the country where the Ramp provider is registered. | [optional] 
**conversionAffiliate** | **String** | Affiliate is the platform for the digital currency transactions. The merchant provides the Affiliate country for transaction processing. The combination of affiliate country and ramp country helps to derive the foreign retail indicator. | [optional] 


