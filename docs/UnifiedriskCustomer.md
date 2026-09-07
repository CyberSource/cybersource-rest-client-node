# CyberSource.UnifiedriskCustomer

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchantCustomerId** | **String** | Your identifier for the customer.When a subscription or customer profile is being created, the maximum length for this field for most processors is 30. Otherwise, the maximum length is 100.#### Comercio Latino For recurring payments in Mexico, the value is the customer's contract number. Note Before you request the authorization, you must inform the issuer of the customer contract numbers that will be used for recurring transactions.#### Worldpay VAP For a follow-on credit with Worldpay VA | [optional] 
**username** | **String** | Specifies the customer account user name. | [optional] 
**hashedPassword** | **String** | The merchant's password that CyberSource hashes and stores as a hashed password. | [optional] 
**personalIdentification** | [**UnifiedriskCustomerPersonalIdentification**](UnifiedriskCustomerPersonalIdentification.md) |  | [optional] 
**enrollmentDate** | **Date** | The date in which the customer signed up to use Mobile/online banking | [optional] 
**flags** | **[String]** | Field to be used for specific customer flags that may determine treatment strategies. This is an array that can include free text values.  For retail customers this may be a vulnerability or a VIP mar  | [optional] 
**customerId** | **String** | A unique identifier for the customer. | A unique identifier for the customer. This field should be considered mandatory for the payments solution, but not otherwise. | [optional] 
**type** | **String** | The customer type. If the identifier in customerId represents an individual, set this attribute to \"Retail\", if it represents a business, set this attribute to \"Business\". | [optional] 
**agentType** | **String** | Type of agent initiating transaction: HUMAN, AI_AGENT, or HYBRID  Possible values: - HUMAN - AI_AGENT - HYBRID | [optional] 
**agentId** | **String** | Unique identifier for the AI agent acting on behalf of customer | [optional] 
**agentConfidenceScore** | **Number** | Confidence score (0-1) for agent's alignment with customer preferences | [optional] 
**agentDelegationScope** | **String** | Scope of authority delegated to agent: discovery, purchase, or full  Possible values: - discovery - purchase - full | [optional] 
**agentInteractionTimestamp** | **Date** | Timestamp of agent interaction with customer | [optional] 
**isBusiness** | **Boolean** | Whether customer is a business entity | [optional] 
**businessName** | **String** | Name of business if customer is a business | [optional] 
**id** | **String** | The unique id of the customer | [optional] 
**address** | [**UnifiedriskCustomerAddress**](UnifiedriskCustomerAddress.md) |  | [optional] 


