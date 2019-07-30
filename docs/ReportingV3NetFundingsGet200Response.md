# CyberSource.ReportingV3NetFundingsGet200Response

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**startTime** | **Date** | Valid report Start Date in **ISO 8601 format**. Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example:** - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZZ  | [optional] 
**endTime** | **Date** | Valid report End Date in **ISO 8601 format** **Example date format:** - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZZ  | [optional] 
**netFundingSummaries** | [**[ReportingV3NetFundingsGet200ResponseNetFundingSummaries]**](ReportingV3NetFundingsGet200ResponseNetFundingSummaries.md) | List of Netfunding summary objects | [optional] 
**totalPurchases** | [**[ReportingV3NetFundingsGet200ResponseTotalPurchases]**](ReportingV3NetFundingsGet200ResponseTotalPurchases.md) | List of total purchases currency wise | [optional] 
**totalRefunds** | [**[ReportingV3NetFundingsGet200ResponseTotalPurchases]**](ReportingV3NetFundingsGet200ResponseTotalPurchases.md) | List of total refunds currency wise | [optional] 
**totalFees** | [**[ReportingV3NetFundingsGet200ResponseTotalPurchases]**](ReportingV3NetFundingsGet200ResponseTotalPurchases.md) | List of total fees currency wise | [optional] 
**totalChargebacks** | [**[ReportingV3NetFundingsGet200ResponseTotalPurchases]**](ReportingV3NetFundingsGet200ResponseTotalPurchases.md) | List of total chargebacks currency wise | [optional] 
**netTotal** | [**[ReportingV3NetFundingsGet200ResponseTotalPurchases]**](ReportingV3NetFundingsGet200ResponseTotalPurchases.md) | List of new total currency wise | [optional] 


