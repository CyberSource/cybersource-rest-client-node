# CyberSource.InlineResponse2013OrderInformationAmountDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**markupRate** | **String** | The markup between the offer exchange rate and wholesale rates, i.e. the mark up. Expressed as a percentage of 100, e.g. 3.75.  If the markup value is not supplied in the API, and the Acquiring BIN is provided, the markup configured during onboarding will be picked up and applied to the transaction. To override any markup defaults set up on the account, always send a markup value of 0.00 to indicate 0% markup.   Supported by Visa Direct.  | [optional] 
**exchangeRate** | **String** | Exchange rate returned by the card network. | [optional] 
**originalAmount** | **String** | Amount in your original local pricing currency.  This value cannot be negative. You can include a decimal point (.) in this field to denote the currency exponent, but you cannot include any other special characters.  If needed, CyberSource truncates the amount to the correct number of decimal places.  | [optional] 
**destinationAmount** | **String** | Amount in your destination's local pricing currency.  This value cannot be negative. You can include a decimal point (.) in this field to denote the currency exponent, but you cannot include any other special characters.  If needed, CyberSource truncates the amount to the correct number of decimal places.  | [optional] 
**originalAmountWithoutMarkup** | **String** | Original Transaction Amount excluding markup in source currency. This field will be returned in a source-to-destination inquiry response when markup is applicable.  Supported by Visa Direct  | [optional] 
**settlementAmount** | **String** | The transaction amount in settlement currency. | [optional] 
**settlementCurrency** | **String** | The currency in which Visa or Mastercard settles with the acquirer/acquirer.  Use [ISO 4217 3-Alpha Currency Codes](https://developer.cybersource.com/content/dam/docs/cybs/en-us/currency-codes/reference/all/na/currency-codes.pdf).  | [optional] 
**settlementExchangeRate** | **String** | Exchange rate returned by the card network for settlement. | [optional] 


