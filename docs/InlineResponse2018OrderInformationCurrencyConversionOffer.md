# CyberSource.InlineResponse2018OrderInformationCurrencyConversionOffer

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**originalAmount** | **String** | The amount of the sale in the merchant's currency.  For DCC this should be the same value as the request. For MCP will be 1 major unit of the merchant's base currency.  | [optional] 
**originalCurrency** | **String** | Currency of the transaction in the merchant's currency.  For DCC this should be the same value as the request.  For MCP will be the merchant's base currency as configured on the currency conversion provider's system. Use three-character alphabetic [ISO 4271 Currency Codes.](https://developer.cybersource.com/docs/cybs/en-us/currency-codes/reference/all/na/currency-codes/currency-codes.html)  | [optional] 
**amount** | **String** | The offer amount, calculated using the originalAmount and the exchangeRate. For DCC this is the amount in the card issuer's currency.  | [optional] 
**currency** | **String** | Currency of the offer. For DCC this is the card's issuers currency. Use three-character alphabetic  [ISO 4271 Currency Codes.](https://developer.cybersource.com/docs/cybs/en-us/currency-codes/reference/all/na/currency-codes/currency-codes.html)  | [optional] 
**exchangeRate** | **String** | The exchange rate of the offer from 1 major unit of the sale currency including margin. This will be printed on the receipt. For example, if a USD consumer is purchasing in EUR, this field should return the amount of 1 EUR in USD including mark-up. The receipt will contain the following: `EUR 1.00 = USD 1.09998900010999` - where 1.09998900010999 is the value returned in this field.  | [optional] 
**exchangeRateInverted** | **Boolean** | An inverted exchange rate is the base currency amount divided by the converted currency amount. Ex. If a USD customer is purchasing in EUR, this field should return the value of USD divided by EUR.  | [optional] 
**marginRate** | **String** | The margin between the offer exchange rate and wholesale rates, i.e. the mark up. Expressed as a percentage of 100, e.g. 3.75  | [optional] 
**rateSource** | **String** | The source of the rate (excluding mark up). Optional field.  | [optional] 
**exchangeRateTimeUtc** | **String** | The date and time of exchange rate in UTC. Format: `YYYY-MM-DDThh:mm:ssZ` **Example** `2023-05-17T23:47:57Z` equals May 17, 2023, at 23:47:57 (11:47:57 PM). The `T` separates the date and the time. The `Z` indicates UTC.  | [optional] 
**exchangeRateExpirationTimeUtc** | **String** | The expiration time of the exchange rate in UTC. Format: `YYYY-MM-DDThh:mm:ssZ`  | [optional] 
**rateId** | **String** | A unique MCP rate identifier.  | [optional] 


