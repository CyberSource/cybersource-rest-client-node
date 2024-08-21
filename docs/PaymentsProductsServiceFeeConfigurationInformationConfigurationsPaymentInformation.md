# CyberSource.PaymentsProductsServiceFeeConfigurationInformationConfigurationsPaymentInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentType** | **String** | Payment types accepted by this merchant. The supported values are: MASTERDEBIT, MASTERCREDIT, VISACREDIT, VISADEBIT, DISCOVERCREDIT, AMEXCREDIT, ECHECK | [optional] 
**feeType** | **String** | Fee type for the selected payment type. Supported values are: Flat or Percentage.  | [optional] 
**feeAmount** | **Number** | Fee Amount of the selected payment type if you chose Flat fee type.  | [optional] 
**percentage** | **Number** | Percentage of the selected payment type if you chose Percentage Fee type. Supported values use numbers with decimals. For example, 1.0  | [optional] 
**feeCap** | **Number** | Fee cap for the selected payment type. Supported values use numbers with decimals. For example, 1.0  | [optional] 


<a name="PaymentTypeEnum"></a>
## Enum: PaymentTypeEnum


* `MASTERDEBIT` (value: `"MASTERDEBIT"`)

* `MASTERCREDIT` (value: `"MASTERCREDIT"`)

* `VISACREDIT` (value: `"VISACREDIT"`)

* `VISADEBIT` (value: `"VISADEBIT"`)

* `DISCOVERCREDIT` (value: `"DISCOVERCREDIT"`)

* `AMEXCREDIT` (value: `"AMEXCREDIT"`)

* `ECHECK` (value: `"ECHECK"`)




<a name="FeeTypeEnum"></a>
## Enum: FeeTypeEnum


* `FLAT` (value: `"FLAT"`)

* `PERCENTAGE` (value: `"PERCENTAGE"`)




