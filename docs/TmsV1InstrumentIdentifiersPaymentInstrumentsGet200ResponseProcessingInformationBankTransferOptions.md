# CyberSource.TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseProcessingInformationBankTransferOptions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sECCode** | **String** | **Important** This field is required if your processor is TeleCheck.  Code that specifies the authorization method for the transaction. Possible values:  - **CCD**: corporate cash disbursement. Charge or credit against a business checking account. You can use one-time or recurring CCD transactions to transfer funds to or from a corporate entity. A standing authorization is required for recurring transactions. - **PPD**: prearranged payment and deposit entry. Charge or credit against a personal checking or savings account. You can originate a PPD entry only when the payment and deposit terms between you and the customer are prearranged. A written authorization from the customer is required for one-time transactions and a written standing authorization is required for recurring transactions. - **TEL**: telephone-initiated entry. One-time charge against a personal checking or savings account. You can originate a TEL entry only when there is a business relationship between you and the customer or when the customer initiates a telephone call to you. For a TEL entry, you must obtain a payment authorization from the customer over the telephone. There is no recurring billing option for TEL. - **WEB**: internet-initiated entry—charge against a personal checking or savings account. You can originate a one-time or recurring WEB entry when the customer initiates the transaction over the Internet. For a WEB entry, you must obtain payment authorization from the customer over the Internet.  | [optional] 


<a name="SECCodeEnum"></a>
## Enum: SECCodeEnum


* `CCD` (value: `"CCD"`)

* `PPD` (value: `"PPD"`)

* `TEL` (value: `"TEL"`)

* `WEB` (value: `"WEB"`)




