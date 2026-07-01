# CyberSource.Ucv1sessionsPaymentConfigurationsPAYPAL

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vaultingEnabled** | **Boolean** | Enables PayPal's Vaulted Payments flow within Unified Checkout.  This provides a seamless checkout experience by storing payment methods for high-frequency and low average-order-value services such as rides, meal pickups, and other quick purchases.<br><br>  The allowedPaymentTypes field must also include PAYPAL as shown below for the PayPal button to show in Unified Checkout:    \"allowedPaymentTypes\": [\"PAYPAL\"] <br><br>  Optional field:<br> This field cannot be configured through the Merchant Experience screens in the Business Center and must be provided on a per‑transaction basis in the uc/v1/sessions API request.  | [optional] 
**tokenizedPaymentMethod** | [**Ucv1sessionsPaymentConfigurationsPAYPALTokenizedPaymentMethod**](Ucv1sessionsPaymentConfigurationsPAYPALTokenizedPaymentMethod.md) |  | [optional] 
**industryType** | **String** | Indicates the industry type. <br><br> Possible Values: - \"Events\" - \"Ticketing\" - \"Fuel\" - \"GAMING\" - \"DIGITAL GOODS\" - \"TELCO\" - \"Token Service Providers\" - \"Gambling\" - \"CFDs\" - \"car rental\" - \"hotel\" - \"transportation\" - \"travel package\" - \"Cruise Line\" - \"P2P\" - \"Retail\" - \"Food\" - \"Groceries\" - \"Ride Sharing\" - \"Taxi\" - \"Remittance\" - \"Crypto\" - \"Marketplaces\"<br><br>  Required field:<br> This field cannot be configured through the Merchant Experience screens in the Business Center and must be provided on a per‑transaction basis in the uc/v1/sessions API request when using PayPal Vaulting.  | [optional] 


