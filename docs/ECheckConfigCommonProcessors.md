# CyberSource.ECheckConfigCommonProcessors

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**companyEntryDescription** | **String** | *EXISTING* Company (merchant) defined description of entry to receive.  For e.g. PAYROLL, GAS BILL, INS PREM. This field is alphanumeric | 
**companyId** | **String** | *EXISTING* company ID assigned to merchant by Acquiring bank. This field is alphanumeric | [optional] 
**batchGroup** | **String** | *EXISTING* Capture requests are grouped into a batch bound for your payment processor. The batch time can be identified by reading the last 2-digits as military time. E.g., &lt;processor&gt;_16 &#x3D; your processing cutoff is 4PM PST. Please note if you are in a different location you may then need to convert time zone as well. | [optional] 
**enableAccuityForAvs** | **Boolean** | *NEW* Accuity is the original validation service that checks the account/routing number for formatting issues. Used by WF and set to \&quot;Yes\&quot; unless told otherwise | [optional] [default to true]
**setCompletedState** | **Boolean** | *Moved* When set to Yes we will automatically update transactions to a completed status X-number of days after the transaction comes through; if no failure notification is received. When set to No means we will not update transaction status in this manner. For BAMS/Bank of America merchants, they should be set to No unless we are explicitly asked to set a merchant to YES. | [optional] [default to false]


