# CyberSource.Ptsv2paymentsidcapturesBuyerInformationPersonalIdentification

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The value of the identification type. This field is supported only on the following processors.  #### ComercioLatino Set this field to the Cadastro de Pessoas Fisicas (CPF).  #### CyberSource Latin American Processing Supported for Redecard in Brazil. Set this field to the Cadastro de Pessoas Fisicas (CPF), which is required for AVS for Redecard in Brazil. **Note** CyberSource Latin American Processing is the name of a specific processing connection that CyberSource supports. In the CyberSource API documentation, CyberSource Latin American Processing does not refer to the general topic of processing in Latin America. The information in this field description is for the specific processing connection called CyberSource Latin American Processing. It is not for any other Latin American processors that CyberSource supports.  For processor-specific information, see the &#x60;personal_id&#x60; field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html)    If &#x60;type &#x3D; PASSPORT&#x60;, this is the cardholder&#39;s passport number. Recommended for Discover ProtectBuy.  | [optional] 


