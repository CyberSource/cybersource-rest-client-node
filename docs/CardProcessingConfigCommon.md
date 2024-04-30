# CyberSource.CardProcessingConfigCommon

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**processors** | [**{String: CardProcessingConfigCommonProcessors}**](CardProcessingConfigCommonProcessors.md) | e.g. * amexdirect * barclays2 * CUP * EFTPOS * fdiglobal * gpngsapv3 * gpx * smartfdc * tsys * vero * VPC  For VPC, CUP and EFTPOS processors, replace the processor name from VPC or CUP or EFTPOS to the actual processor name in the sample request. e.g. replace VPC with &lt;your vpc processor&gt;  | [optional] 
**amexVendorCode** | **String** | Vendor code assigned by American Express. Applicable for TSYS (tsys) processor. | [optional] 
**defaultAuthTypeCode** | **String** | Authorization Finality indicator. Please note that the input can be in small case or capitals but response is in small case as of now. It will be made capitals everywhere in the next version. Applicable for Elavon Americas (elavonamericas), TSYS (tsys), Barclays (barclays2), Streamline (streamline2), Six (six), Barclays HISO (barclayshiso), GPN (gpn), FDI Global (fdiglobal), GPX (gpx), Paymentech Tampa (paymentechtampa), FDC Nashville (smartfdc), VPC and Chase Paymentech Salem (chasepaymentechsalem) processors.  Validation details (for selected processors)...  <table> <thead><tr><th>Processor</th><th>Acceptance Type</th><th>Required</th><th>Default Value</th></tr></thead> <tr><td>Barclays</td><td>cnp, cp, hybrid</td><td>No</td><td>FINAL</td></tr> <tr><td>Barclays HISO</td><td>cnp, cp, hybrid</td><td>Yes</td><td>FINAL</td></tr> </table>  | [optional] 
**masterCardAssignedId** | **String** | MAID aka MasterCard assigned ID, MasterCard equivalent of Merchant Verification Value by Visa. Applicable for VPC, GPX (gpx) and FDI Global (fdiglobal) processors. | [optional] 
**enablePartialAuth** | **Boolean** | Allow merchants to accept partial authorization approvals. Applicable for Elavon Americas (elavonamericas), VPC, GPX (gpx), FDI Global (fdiglobal), FDC Nashville (smartfdc), GPN (gpn), TSYS (tsys), American Express Direct (amexdirect), Paymentech Tampa (paymentechtampa) and Chase Paymentech Salem (chasepaymentechsalem) processors.  Validation details (for selected processors)...  <table> <thead><tr><th>Processor</th><th>Acceptance Type</th><th>Required</th><th>Default Value</th></tr></thead> <tr><td>American Express Direct</td><td>cnp, cp, hybrid</td><td>No</td><td>No</td></tr> </table>  | [optional] 
**merchantCategoryCode** | **String** | Indicates type of business product or service of the merchant. Applicable for Chase Paymentech Salem (chasepaymentechsalem), FDI Global (fdiglobal), RUPAY, Elavon Americas (elavonamericas), American Express Direct (amexdirect), CMCIC (cmcic), GPX (gpx), VPC, TSYS (tsys), EFTPOS, CUP, Paymentech Tampa (paymentechtampa), CB2A, Barclays (barclays2), Prisma (prisma) and GPN (gpn) processors.  Validation details (for selected processors)...  <table> <thead><tr><th>Processor</th><th>Acceptance Type</th><th>Required</th><th>Min. Length</th><th>Max. Length</th><th>Regex</th></tr></thead> <tr><td>Barclays</td><td>cnp</td><td>No</td><td>4</td><td>4</td><td>^[0-9]+$</td></tr> <tr><td>American Express Direct</td><td>cnp, cp, hybrid</td><td>Yes</td><td>4</td><td>4</td><td>^[0-9]+$</td></tr> </table>  | [optional] 
**sicCode** | **String** | The Standard Industrial Classification (SIC) are four-digit codes that categorize the industries that companies belong to based on their business activities. Standard Industrial Classification codes were mostly replaced by the six-digit North American Industry Classification System (NAICS). Applicable for VPC and GPX (gpx) processors. | [optional] 
**foodAndConsumerServiceId** | **String** | Food and Consumer Service ID. Identifies the merchant as being certified and approved to accept Food Stamps. Applicable for GPX (gpx) processor. | [optional] 
**enableSplitShipment** | **Boolean** | Enables you to split an order into multiple shipments with multiple captures. This feature is provided by CyberSource and supports three different scenarios:  * multiple authorizations * multiple captures * multiple authorizations with multiple captures  Applicable for VPC processors.  | [optional] 
**enableInterchangeOptimization** | **Boolean** | Reduces your interchange fees by using automatic authorization refresh and automatic partial authorization reversal. Applicable for VPC processors. | [optional] 
**visaDelegatedAuthenticationId** | **String** | Identifier provided to merchants who opt for Visa's delegated authorization program. Applicable for VPC processors. | [optional] 
**creditCardRefundLimitPercent** | **String** | Blocks over-refunds when the aggregated refund amount is higher than the percentage set for this field. Applicable for GPX (gpx), VPC and Chase Paymentech Salem (chasepaymentechsalem) processors. | [optional] 
**businessCenterCreditCardRefundLimitPercent** | **String** | Limits refunds to the percentage set in this field. Applicable for GPX (gpx) and VPC processors. | [optional] 
**allowCapturesGreaterThanAuthorizations** | **Boolean** | Enables this merchant account to capture amounts greater than the authorization amount. Applicable for GPX (gpx), VPC, Paymentech Tampa (paymentechtampa) and Chase Paymentech Salem (chasepaymentechsalem) processors. | [optional] 
**enableDuplicateMerchantReferenceNumberBlocking** | **Boolean** | Helps prevent duplicate transactions. Applicable for VPC, GPX (gpx) and Chase Paymentech Salem (chasepaymentechsalem) processors. | [optional] 
**domesticMerchantId** | **Boolean** | This is a local merchant ID used by merchants in addition to the conventional merchant ID. This value is sent to the issuer. Applicable for VPC and Prisma (prisma) processors. | [optional] 
**processLevel3Data** | **String** | Indicates whether merchant processes Level 3 transactions. Applicable for TSYS (tsys), Barclays (barclays2), Paymentech Tampa (paymentechtampa), FDI Global (fdiglobal), Elavon Americas (elavonamericas) and Chase Paymentech Salem (chasepaymentechsalem) processors.  Validation details (for selected processors)...  <table> <thead><tr><th>Processor</th><th>Acceptance Type</th><th>Required</th></tr></thead> <tr><td>Barclays</td><td>cnp</td><td>No</td></tr> </table>  | [optional] 
**subMerchantId** | **String** | The ID assigned to the sub-merchant. Applicable for American Express Direct (amexdirect) processor.  Validation details (for selected processors)...  <table> <thead><tr><th>Processor</th><th>Acceptance Type</th><th>Required</th><th>Min. Length</th><th>Max. Length</th><th>Regex</th></tr></thead> <tr><td>American Express Direct</td><td>cnp, cp, hybrid</td><td>No</td><td>1</td><td>20</td><td>^[0-9a-zA-Z&#92;-&#92;_&#92;,\\s.]+$</td></tr> </table>  | [optional] 
**subMerchantBusinessName** | **String** | Sub-merchant's business name. Applicable for American Express Direct (amexdirect) processor.  Validation details (for selected processors)...  <table> <thead><tr><th>Processor</th><th>Acceptance Type</th><th>Required</th><th>Min. Length</th><th>Max. Length</th><th>Regex</th></tr></thead> <tr><td>American Express Direct</td><td>cnp, cp, hybrid</td><td>No</td><td>1</td><td>37</td><td>^[0-9a-zA-Z&#92;-&#92;_&#92;,\\s.]+$</td></tr> </table>  | [optional] 
**preferCobadgedSecondaryBrand** | **Boolean** | It denotes merchant's preference on secondary brand for routing in case of co-branded cards. Applicable for EFTPOS processors. | [optional] 
**merchantDescriptorInformation** | [**CardProcessingConfigCommonMerchantDescriptorInformation**](CardProcessingConfigCommonMerchantDescriptorInformation.md) |  | [optional] 


<a name="DefaultAuthTypeCodeEnum"></a>
## Enum: DefaultAuthTypeCodeEnum


* `PRE` (value: `"PRE"`)

* `FINAL` (value: `"FINAL"`)

* `UNDEFINED` (value: `"UNDEFINED"`)




