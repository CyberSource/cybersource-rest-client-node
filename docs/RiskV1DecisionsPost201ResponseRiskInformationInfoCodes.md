# CyberSource.RiskV1DecisionsPost201ResponseRiskInformationInfoCodes

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**velocity** | **[String]** | List of information codes triggered by the order. These information codes were generated when you created the order and product velocity rules and are returned so that you can associate them with the rules.  | [optional] 
**address** | **[String]** | Indicates a mismatch between the customer’s billing and shipping addresses. | [optional] 
**customerList** | **[String]** | Indicates that customer information is associated with transactions that are either on the negative or the positive list.  | [optional] 
**identityChange** | **[String]** | Indicates excessive identity changes. The threshold is variable depending on the identity elements being compared. This field can contain one or more information codes, separated by carets (^).  | [optional] 
**internet** | **[String]** | Indicates a problem with the customer’s email address, IP address, or billing address. | [optional] 
**phone** | **[String]** | Indicates a problem with the customer’s phone number. | [optional] 
**suspicious** | **[String]** | Indicates that the customer provided potentially suspicious information. | [optional] 
**globalVelocity** | **[String]** | Indicates that the customer has a high purchase frequency. | [optional] 


