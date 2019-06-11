# CyberSource.RiskV1DecisionsPost201ResponseRiskInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**profile** | [**RiskV1DecisionsPost201ResponseRiskInformationProfile**](RiskV1DecisionsPost201ResponseRiskInformationProfile.md) |  | [optional] 
**rules** | [**[RiskV1DecisionsPost201ResponseRiskInformationRules]**](RiskV1DecisionsPost201ResponseRiskInformationRules.md) |  | [optional] 
**infoCodes** | [**RiskV1DecisionsPost201ResponseRiskInformationInfoCodes**](RiskV1DecisionsPost201ResponseRiskInformationInfoCodes.md) |  | [optional] 
**velocity** | [**RiskV1DecisionsPost201ResponseRiskInformationVelocity**](RiskV1DecisionsPost201ResponseRiskInformationVelocity.md) |  | [optional] 
**casePriority** | **Number** | You receive this field only if you subscribe to the Enhanced Case Management service. The priority level ranges from 1 (highest) to 5 (lowest); the default value is 3. If you do not assign a priority to your rules or to your profiles, the default value is given to the order.  For all possible values, see the &#x60;decision_case_priority&#x60; field description in the _Decision Manager Using the SCMP API Developer Guide_ on the [CyberSource Business Center.](https://ebc2.cybersource.com/ebc2/) Click **Decision Manager** &gt; **Documentation** &gt; **Guides** &gt; _Decision Manager Using the SCMP API Developer Guide_ (PDF link).  | [optional] 
**localTime** | **String** | The customer&#39;s local time (&#x60;hh:mm:ss&#x60;), which is calculated from the transaction request time and the customer&#39;s billing address.  For details, see the &#x60;score_time_local&#x60; field description in the _Decision Manager Using the SCMP API Developer Guide_ on the [CyberSource Business Center.](https://ebc2.cybersource.com/ebc2/)  | [optional] 
**score** | [**RiskV1DecisionsPost201ResponseRiskInformationScore**](RiskV1DecisionsPost201ResponseRiskInformationScore.md) |  | [optional] 
**ipAddress** | [**RiskV1DecisionsPost201ResponseRiskInformationIpAddress**](RiskV1DecisionsPost201ResponseRiskInformationIpAddress.md) |  | [optional] 
**providers** | [**RiskV1DecisionsPost201ResponseRiskInformationProviders**](RiskV1DecisionsPost201ResponseRiskInformationProviders.md) |  | [optional] 
**travel** | [**RiskV1DecisionsPost201ResponseRiskInformationTravel**](RiskV1DecisionsPost201ResponseRiskInformationTravel.md) |  | [optional] 


