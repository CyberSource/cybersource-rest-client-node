# CyberSource.UnifiedriskPaymentCheck

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checkNumber** | **String** | Serial number printed on the physical check, used for duplicate detection, check fraud prevention, and reconciliation | [optional] 
**depositSlipId** | **String** | Unique identifier for the deposit slip associated with the check deposit, used for linking deposited checks to branch transactions | [optional] 
**depositLocation** | [**UnifiedriskPaymentCheckDepositLocation**](UnifiedriskPaymentCheckDepositLocation.md) |  | [optional] 
**micrAccountNumber** | **String** | Account number encoded in the MICR (Magnetic Ink Character Recognition) line at the bottom of the check, used for automated account identification | [optional] 
**routingTransitNumber** | **String** | Bank routing and transit number (RTN) encoded in the MICR line of the check, identifying the financial institution on which the check is drawn | [optional] 
**splitDepositFlag** | **Boolean** | Indicates whether the check deposit has been split across multiple accounts. Split deposits may indicate structuring or kiting attempts | [optional] 
**splitAccountId1** | **String** | First destination account ID in a split check deposit, used for tracking the allocation of funds across multiple accounts | [optional] 
**splitAccountId2** | **String** | Second destination account ID in a split check deposit | [optional] 
**splitAccountId3** | **String** | Third destination account ID in a split check deposit | [optional] 
**splitAccountId4** | **String** | Fourth destination account ID in a split check deposit | [optional] 


