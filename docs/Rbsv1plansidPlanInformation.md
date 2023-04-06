# CyberSource.Rbsv1plansidPlanInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | Plan code is an optional field, If not provided system generates and assign one  | [optional] 
**name** | **String** | Plan name  | [optional] 
**description** | **String** | Plan description  | [optional] 
**status** | **String** | Updating to &#x60;DRAFT&#x60; is not allowed from &#x60;ACTIVE&#x60; and &#x60;INACTIVE&#x60; status.  Plan Status:  - &#x60;DRAFT&#x60;  - &#x60;ACTIVE&#x60;  - &#x60;INACTIVE&#x60;  | [optional] 
**billingPeriod** | [**InlineResponse200PlanInformationBillingPeriod**](InlineResponse200PlanInformationBillingPeriod.md) |  | [optional] 
**billingCycles** | [**Rbsv1plansPlanInformationBillingCycles**](Rbsv1plansPlanInformationBillingCycles.md) |  | [optional] 


