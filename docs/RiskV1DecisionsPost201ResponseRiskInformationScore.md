# CyberSource.RiskV1DecisionsPost201ResponseRiskInformationScore

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**factorCodes** | **[String]** |  | [optional] 
**modelUsed** | **String** | Name of the score model used for the transaction. If you did not include a custom model in your request, this field contains the name of CyberSource’s default model.  For all possible values, see the &#x60;score_model_used&#x60; field description in the _Decision Manager Using the SCMP API Developer Guide_ on the [CyberSource Business Center.](https://ebc2.cybersource.com/ebc2/) Click **Decision Manager** &gt; **Documentation** &gt; **Guides** &gt; _Decision Manager Using the SCMP API Developer Guide_ (PDF link).  | [optional] 
**result** | **String** | Total score calculated for this order. The value cannot be negative.  For all possible values, see the &#x60;score_score_result&#x60; field description in the _Decision Manager Using the SCMP API Developer Guide_ on the [CyberSource Business Center.](https://ebc2.cybersource.com/ebc2/) Click **Decision Manager** &gt; **Documentation** &gt; **Guides** &gt; _Decision Manager Using the SCMP API Developer Guide_ (PDF link).  | [optional] 


