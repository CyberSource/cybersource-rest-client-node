# CyberSource.PtsV2PaymentsPost201ResponseRiskInformationInfoCodes

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**velocity** | **[String]** | List of information codes triggered by the order. These information codes were generated when you created the order and product velocity rules and are returned so that you can associate them with the rules.  Returned by Decision Manager service.  | [optional] 
**address** | **[String]** | Indicates a mismatch between the customer’s billing and shipping addresses.  Returned by scoring service.  | [optional] 
**customerList** | **[String]** | Indicates that customer information is associated with transactions that are either on the negative or the positive list.  Returned by scoring service.  | [optional] 
**identityChange** | **[String]** | Indicates excessive identity changes. The threshold is variable depending on the identity elements being compared. This field can contain one or more information codes, separated by carets (^).  Returned by scoring service.  | [optional] 
**internet** | **[String]** | Indicates a problem with the customer’s email address, IP address, or billing address.  Returned by scoring service.  | [optional] 
**phone** | **[String]** | Indicates a problem with the customer’s phone number.  Returned by scoring service.  | [optional] 
**suspicious** | **[String]** | Indicates that the customer provided potentially suspicious information.  Returned by scoring service.  | [optional] 
**globalVelocity** | **[String]** | Indicates that the customer has a high purchase frequency.  Returned by scoring service.  | [optional] 


