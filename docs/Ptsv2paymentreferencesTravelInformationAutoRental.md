# CyberSource.Ptsv2paymentreferencesTravelInformationAutoRental

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**companyName** | **String** | Merchant to send their auto rental company name  | [optional] 
**affiliateName** | **String** | When merchant wants to send the affiliate name.  | [optional] 
**rentalAddress** | [**Ptsv2paymentsTravelInformationAutoRentalRentalAddress**](Ptsv2paymentsTravelInformationAutoRentalRentalAddress.md) |  | [optional] 
**returnAddress** | [**Ptsv2paymentsTravelInformationAutoRentalReturnAddress**](Ptsv2paymentsTravelInformationAutoRentalReturnAddress.md) |  | [optional] 
**returnDateTime** | **String** | Date/time the auto was returned to the rental agency. Format: ``yyyy-MM-dd HH-mm-ss z`` This field is supported for Visa, MasterCard, and American Express.  | [optional] 
**rentalDateTime** | **String** | Date/time the auto was picked up from the rental agency. Format: `yyyy-MM-dd HH-mm-ss z` This field is supported for Visa, MasterCard, and American Express.  | [optional] 
**customerName** | **String** | Name of the individual making the rental agreement.  Valid data lengths by card:  |Card Specific Validation|VISA|MasterCard|Discover|AMEX| |--- |--- |--- |--- | | Filed Length| 40| 40| 29| 26| | Field Type| AN| ANS| AN| AN| | M/O/C| O| M| M| M|  | [optional] 


