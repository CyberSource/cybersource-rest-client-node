# CyberSource.TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedCard

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expirationMonth** | **String** | Two-digit month in which the credit card expires. Format: &#x60;MM&#x60; Possible values: &#x60;01&#x60; through &#x60;12&#x60;  This field is optional if your CyberSource account is configured for relaxed requirements for address data and expiration date. For more information about relaxed requirements, see the TMS REST API Developer Guide.  Important: It is your responsibility to determine whether a field is required for the transaction you are requesting.  | [optional] 
**expirationYear** | **String** | Four-digit year in which the credit card expires. Format: &#x60;YYYY&#x60;. Possible values: &#x60;1900&#x60; through &#x60;2099&#x60;.  **FDC Nashville Global and FDMS South** You can send in 2 digits or 4 digits. When you send in 2 digits, they must be the last 2 digits of the year.  This field is optional if your CyberSource account is configured for relaxed requirements for address data and expiration date. See Relaxed Requirements for Address Data and Expiration Date page.  Important: It is your responsibility to determine whether a field is required for the transaction you are requesting.&#39;  | [optional] 
**type** | **String** | Type of credit card. Possible values:   * Visa (001)   * Mastercard (002) - Eurocard—European regional brand of Mastercard   * American Express (003)   * Discover (004)   * Diners Club (005)   * Carte Blanche (006)   * JCB (007)   * Optima (008)   * Twinpay Credit (011)   * Twinpay Debit (012)   * Walmart (013)   * EnRoute (014)   * Lowes consumer (015)   * Home Depot consumer (016)   * MBNA (017)   * Dicks Sportswear (018)   * Casual Corner (019)   * Sears (020)   * JAL (021)   * Disney (023)   * Maestro (024) - UK Domestic   * Sams Club consumer (025)   * Sams Club business (026)   * Nicos (027)   * Bill me later (028)   * Bebe (029)   * Restoration Hardware (030)   * Delta (031) — use this value only for Ingenico ePayments. For other processors, use 001 for all Visa card types.   * Solo (032)   * Visa Electron (033)   * Dankort (034)   * Laser (035)   * Carte Bleue (036) — formerly Cartes Bancaires   * Cartes Bancaires (036)   * Carta Si (037)   * pinless debit (038)   * encoded account (039)   * UATP (040)   * Household (041)   * Maestro (042) - International   * GE Money UK (043)   * Korean cards (044)   * Style (045)   * JCrew (046)   * PayEase China processing eWallet (047)   * PayEase China processing bank transfer (048)   * Meijer Private Label (049)   * Hipercard (050) — supported only by the Comercio Latino processor.   * Aura (051) — supported only by the Comercio Latino processor.   * Redecard (052)   * ORICO (053)   * Elo (054) — supported only by the Comercio Latino processor.   * Capital One Private Label (055)   * Synchrony Private Label (056)   * Costco Private Label (057)   * mada (060)   * China Union Pay (062)   * Falabella private label (063)  | 
**issueNumber** | **String** | Number of times a Maestro (UK Domestic) card has been issued to the account holder. | [optional] 
**startMonth** | **String** | Month of the start of the Maestro (UK Domestic) card validity period.  Format: &#x60;MM&#x60;. Possible values: &#x60;01&#x60; through &#x60;12&#x60;.  | [optional] 
**startYear** | **String** | Year of the start of the Maestro (UK Domestic) card validity period.  Format: &#x60;YYYY&#x60;. Possible values: &#x60;1900&#x60; through &#x60;2099&#x60;.  | [optional] 
**useAs** | **String** | Card Use As Field. Supported value of &#x60;pinless debit&#x60; only. Only for use with Pinless Debit tokens. | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `visa` (value: `"visa"`)

* `mastercard` (value: `"mastercard"`)

* `american express` (value: `"american express"`)

* `discover` (value: `"discover"`)

* `diners club` (value: `"diners club"`)

* `carte blanche` (value: `"carte blanche"`)

* `jcb` (value: `"jcb"`)

* `optima` (value: `"optima"`)

* `twinpay credit` (value: `"twinpay credit"`)

* `twinpay debit` (value: `"twinpay debit"`)

* `walmart` (value: `"walmart"`)

* `enroute` (value: `"enroute"`)

* `lowes consumer` (value: `"lowes consumer"`)

* `home depot consumer` (value: `"home depot consumer"`)

* `mbna` (value: `"mbna"`)

* `dicks sportswear` (value: `"dicks sportswear"`)

* `casual corner` (value: `"casual corner"`)

* `sears` (value: `"sears"`)

* `jal` (value: `"jal"`)

* `disney` (value: `"disney"`)

* `maestro uk domestic` (value: `"maestro uk domestic"`)

* `sams club consumer` (value: `"sams club consumer"`)

* `sams club business` (value: `"sams club business"`)

* `nicos` (value: `"nicos"`)

* `bill me later` (value: `"bill me later"`)

* `bebe` (value: `"bebe"`)

* `restoration hardware` (value: `"restoration hardware"`)

* `delta online` (value: `"delta online"`)

* `solo` (value: `"solo"`)

* `visa electron` (value: `"visa electron"`)

* `dankort` (value: `"dankort"`)

* `laser` (value: `"laser"`)

* `carte bleue` (value: `"carte bleue"`)

* `carta si` (value: `"carta si"`)

* `pinless debit` (value: `"pinless debit"`)

* `encoded account` (value: `"encoded account"`)

* `uatp` (value: `"uatp"`)

* `household` (value: `"household"`)

* `maestro international` (value: `"maestro international"`)

* `ge money uk` (value: `"ge money uk"`)

* `korean cards` (value: `"korean cards"`)

* `style` (value: `"style"`)

* `jcrew` (value: `"jcrew"`)

* `payease china processing ewallet` (value: `"payease china processing ewallet"`)

* `payease china processing bank transfer` (value: `"payease china processing bank transfer"`)

* `meijer private label` (value: `"meijer private label"`)

* `hipercard` (value: `"hipercard"`)

* `aura` (value: `"aura"`)

* `redecard` (value: `"redecard"`)

* `orico` (value: `"orico"`)

* `elo` (value: `"elo"`)

* `capital one private label` (value: `"capital one private label"`)

* `synchrony private label` (value: `"synchrony private label"`)

* `china union pay` (value: `"china union pay"`)

* `costco private label` (value: `"costco private label"`)

* `mada` (value: `"mada"`)

* `falabella private label` (value: `"falabella private label"`)




