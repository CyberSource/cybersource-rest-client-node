# CyberSource.RiskV1DecisionsPost201ResponseRiskInformationProfile

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the active profile chosen by the profile selector. If no profile selector exists, the default active profile is chosen.  **Note** By default, your default profile is the active profile, or the Profile Selector chooses the active profile. Use this field only if you want to specify the name of a different profile. The passed-in profile will then become the active profile.  | [optional] 
**desinationQueue** | **String** | Name of the queue where orders that are not automatically accepted are sent.  | [optional] 
**selectorRule** | **String** | Name of the profile selector rule that chooses the profile to use for the transaction. If no profile selector exists, the value is Default Active Profile.  | [optional] 


