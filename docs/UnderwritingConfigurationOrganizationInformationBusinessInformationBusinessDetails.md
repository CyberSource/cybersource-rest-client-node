# CyberSource.UnderwritingConfigurationOrganizationInformationBusinessInformationBusinessDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customerType** | **String** | Who is the business interacting with? Business to Business, Business to Consumer, Both  Possible values: - B2B - B2C - Both | [optional] 
**percentageSplitByB2B** | **Number** | % Split | [optional] 
**percentageSplitByB2C** | **Number** | % Split | [optional] 
**interactionTypes** | **String** | Merchant Facing: Face to Face, Card Not Present, Both  Possible values: - F2F - CNP - Both | 
**percentageSplitByF2F** | **Number** | % Split | 
**percentageSplitByCNP** | **Number** | % Split | 
**whenIsCustomerCharged** | **String** | When is the customer charged?  Possible values: - OneTimeBeforeServiceDelivery - OneTimeAfterServiceDelivery - Other | 
**whenIsCustomerChargedDescription** | **String** |  | [optional] 
**offerSubscriptions** | **Boolean** | Does Merchant Offer Subscriptions? | 
**monthlySubscriptionPercent** | **Number** | % of business is monthly subscriptions | [optional] 
**quarterlySubscriptionPercent** | **Number** | % of business is quarterly subscriptions | [optional] 
**semiannualSubscriptionPercent** | **Number** | % of business is semi-annual subscriptions | [optional] 
**annualSubscriptionPercent** | **Number** | % of business is annual subscriptions | [optional] 
**currencyType** | **String** | Processing Currency. ISO 4217, 3 characters.  Possible values: - USD - CAD - EUR - GBP - CHF | [optional] 
**estimatedMonthlySales** | **Number** | Merchant's estimated monthly sales | [optional] 
**averageOrderAmount** | **Number** | Merchant's average order amount | [optional] 
**largestExpectedOrderAmount** | **Number** | Merchant's largest expected order amount | [optional] 
**primaryAccountUsage** | **String** | Primary purpose of account usage  Possible values: - Paying for goods / services - Repatriating overseas earnings - Intercompany transfers - Collecting funds from clients - Liquidity / FX - Payment to an individual - Investment activity - Property purchase/sale - Other | [optional] 
**sourceOfFunds** | **String** | Source of Funds  Possible values: - Business revenue - External or shareholder investment - Loan, advance or other borrowing - Donations or grants - Inter-company transfers - Proceeds of sales of assests - Other | [optional] 
**receiveMoney3rdParties** | **Boolean** | Will you recieve money from 3rd parties into your account? | [optional] 
**receiveTransactionFrequency** | **String** | Roughly how often do you expect to send or receive transactions?  Possible values: - One-off or infrequently - 1-20 per month - 20-50 per month - 50-100 per month - 100+ per month | [optional] 
**estimatedMonthlySpend** | **String** | What is your estimated total monthly spend?  Possible values: - <$10,000 - $10,000 - $50,000 - $50,000 - $100,000 - $100,000 - $500,000 - $500,000+ | [optional] 
**countryTransactions** | **[String]** |  | [optional] 
**currenciesIn** | **[String]** |  | [optional] 
**currenciesOut** | **[String]** |  | [optional] 
**productServicesSubscription** | [**[UnderwritingConfigurationOrganizationInformationBusinessInformationBusinessDetailsProductServicesSubscription]**](UnderwritingConfigurationOrganizationInformationBusinessInformationBusinessDetailsProductServicesSubscription.md) |  | [optional] 


