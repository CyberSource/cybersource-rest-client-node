# CyberSource.UnifiedriskInitiatingParty

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | ID of the initiating party, where this is not the account ID. This would be expected to be mandatory for commercial use cases. It refers to the initiatingParty involved in the original transaction and | [optional] 
**name** | **String** | A human readable string identifying the initiator as indentified in the intiatiatingPartyId attribute. | [optional] 
**type** | **String** | The initiatingPartyId typically represents an individual user in the commercial banking setting. However it can also be used to represent the open banking entity that initiating the action. This attri | [optional] 
**entityId** | **String** | Unique identifier for the legal or organizational entity initiating the transaction on behalf of the customer, used for commercial or open banking flows (e.g., payment service provider or corporate entity ID) | [optional] 


