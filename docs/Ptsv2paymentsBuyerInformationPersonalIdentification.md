# CyberSource.Ptsv2paymentsBuyerInformationPersonalIdentification

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of the identification.  Possible values:   - &#x60;NATIONAL&#x60;   - &#x60;CPF&#x60;   - &#x60;CPNJ&#x60;   - &#x60;CURP&#x60;   - &#x60;SSN&#x60;   - &#x60;DRIVER_LICENSE&#x60;  This field is supported only on the following processors.  **ComercioLatino**\\ Set this field to the Cadastro de Pessoas Fisicas (CPF).  **CyberSource Latin American Processing**\\ Supported for Redecard in Brazil. Set this field to the Cadastro de Pessoas Fisicas (CPF), which is required for AVS for Redecard in Brazil. **Note** CyberSource Latin American Processing is the name of a specific processing connection that CyberSource supports. In the CyberSource API documentation, CyberSource Latin American Processing does not refer to the general topic of processing in Latin America. The information in this field description is for the specific processing connection called CyberSource Latin American Processing. It is not for any other Latin American processors that CyberSource supports.  ccAuthService (Required when the billing country is the U.S. or Canada; otherwise, optional.) This field is optional if your CyberSource account is configured for relaxed requirements for address data and expiration date. See \&quot;Relaxed Requirements for Address Data and Expiration Date,\&quot; page 75. Important It is your responsibility to determine whether a field is required for the transaction you are requesting.  | [optional] 
**id** | **String** | The value of the identification type. This field is supported only on the following processors.  **ComercioLatino** Set this field to the Cadastro de Pessoas Fisicas (CPF).  **CyberSource Latin American Processing** Supported for Redecard in Brazil. Set this field to the Cadastro de Pessoas Fisicas (CPF), which is required for AVS for Redecard in Brazil. **Note** CyberSource Latin American Processing is the name of a specific processing connection that CyberSource supports. In the CyberSource API documentation, CyberSource Latin American Processing does not refer to the general topic of processing in Latin America. The information in this field description is for the specific processing connection called CyberSource Latin American Processing. It is not for any other Latin American processors that CyberSource supports.  For processor-specific information, see the personal_id field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html)    If type &#x3D; PASSPORT, this is the cardholder&#39;s passport number. Recommended for Discover ProtectBuy.  | [optional] 
**issuedBy** | **String** | If type &#x3D; DRIVER_LICENSE, this is the State or province where the customer’s driver’s license was issued. Use the two-character State, Province, and Territory Codes for the United States and Canada.  ** TeleCheck ** Contact your TeleCheck representative to find out whether this field is required or optional.  ** All Other Processors ** Not used.  If type &#x3D; PASSPORT, this is the Issuing country for the cardholder’s passport. Recommended for Discover ProtectBuy.  | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `NATIONAL` (value: `"NATIONAL"`)

* `CPF` (value: `"CPF"`)

* `CPNJ` (value: `"CPNJ"`)

* `CURP` (value: `"CURP"`)

* `SSN` (value: `"SSN"`)

* `DRIVER_LICENSE` (value: `"DRIVER_LICENSE"`)




