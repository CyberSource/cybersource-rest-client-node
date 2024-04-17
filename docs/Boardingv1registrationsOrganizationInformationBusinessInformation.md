# CyberSource.Boardingv1registrationsOrganizationInformationBusinessInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | 
**doingBusinessAs** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**startDate** | **Date** | `Format: YYYY-MM-DD` Example 2016-08-11 equals August 11, 2016  | [optional] 
**address** | [**Boardingv1registrationsOrganizationInformationBusinessInformationAddress**](Boardingv1registrationsOrganizationInformationBusinessInformationAddress.md) |  | [optional] 
**timeZone** | **String** | Merchant perferred time zone Possible Values: - 'Pacific/Pago_Pago' - 'Pacific/Honolulu' - 'America/Anchorage' - 'America/Vancouver' - 'America/Los_Angeles' - 'America/Phoenix' - 'America/Edmonton' - 'America/Denver' - 'America/Winnipeg' - 'America/Mexico_City' - 'America/Chicago' - 'America/Bogota' - 'America/Indianapolis' - 'America/New_York' - 'America/La_Paz' - 'America/Halifax' - 'America/St_Johns' - 'America/Buenos_Aires' - 'America/Godthab' - 'America/Sao_Paulo' - 'America/Noronha' - 'Atlantic/Cape_Verde' - 'GMT' - 'Europe/Dublin' - 'Europe/Lisbon' - 'Europe/London' - 'Africa/Tunis' - 'Europe/Vienna' - 'Europe/Brussels' - 'Europe/Zurich' - 'Europe/Prague' - 'Europe/Berlin' - 'Europe/Copenhagen' - 'Europe/Madrid' - 'Europe/Budapest' - 'Europe/Rome' - 'Africa/Tripoli' - 'Europe/Monaco' - 'Europe/Malta' - 'Europe/Amsterdam' - 'Europe/Oslo' - 'Europe/Warsaw' - 'Europe/Stockholm' - 'Europe/Belgrade' - 'Europe/Paris' - 'Africa/Johannesburg' - 'Europe/Minsk' - 'Africa/Cairo' - 'Europe/Helsinki' - 'Europe/Athens' - 'Asia/Jerusalem' - 'Europe/Riga' - 'Europe/Bucharest' - 'Europe/Istanbul' - 'Asia/Riyadh' - 'Europe/Moscow' - 'Asia/Dubai' - 'Asia/Baku' - 'Asia/Tbilisi' - 'Asia/Calcutta' - 'Asia/Katmandu' - 'Asia/Dacca' - 'Asia/Rangoon' - 'Asia/Jakarta' - 'Asia/Saigon' - 'Asia/Bangkok' - 'Australia/Perth' - 'Asia/Hong_Kong' - 'Asia/Macao' - 'Asia/Kuala_Lumpur' - 'Asia/Manila' - 'Asia/Singapore' - 'Asia/Taipei' - 'Asia/Shanghai' - 'Asia/Seoul' - 'Asia/Tokyo' - 'Asia/Yakutsk' - 'Australia/Adelaide' - 'Australia/Brisbane' - 'Australia/Broken_Hill' - 'Australia/Darwin' - 'Australia/Eucla' - 'Australia/Hobart' - 'Australia/Lindeman' - 'Australia/Sydney' - 'Australia/Lord_Howe' - 'Australia/Melbourne' - 'Asia/Magadan' - 'Pacific/Norfolk' - 'Pacific/Auckland'  | [optional] 
**websiteUrl** | **String** |  | [optional] 
**type** | **String** | Business type Possible Values:   - 'PARTNERSHIP'   - 'SOLE_PROPRIETORSHIP'   - 'CORPORATION'   - 'LLC'   - 'NON_PROFIT'   - 'TRUST'  | [optional] 
**taxId** | **String** |  | [optional] 
**phoneNumber** | **String** |  | [optional] 
**businessContact** | [**Boardingv1registrationsOrganizationInformationBusinessInformationBusinessContact**](Boardingv1registrationsOrganizationInformationBusinessInformationBusinessContact.md) |  | [optional] 
**technicalContact** | [**Boardingv1registrationsOrganizationInformationBusinessInformationBusinessContact**](Boardingv1registrationsOrganizationInformationBusinessInformationBusinessContact.md) |  | [optional] 
**emergencyContact** | [**Boardingv1registrationsOrganizationInformationBusinessInformationBusinessContact**](Boardingv1registrationsOrganizationInformationBusinessInformationBusinessContact.md) |  | [optional] 
**merchantCategoryCode** | **String** | Industry standard Merchant Category Code (MCC) | [optional] 


<a name="TimeZoneEnum"></a>
## Enum: TimeZoneEnum


* `pacificPagoPago` (value: `"Pacific/Pago_Pago"`)

* `pacificHonolulu` (value: `"Pacific/Honolulu"`)

* `americaAnchorage` (value: `"America/Anchorage"`)

* `americaVancouver` (value: `"America/Vancouver"`)

* `americaLosAngeles` (value: `"America/Los_Angeles"`)

* `americaPhoenix` (value: `"America/Phoenix"`)

* `americaEdmonton` (value: `"America/Edmonton"`)

* `americaDenver` (value: `"America/Denver"`)

* `americaWinnipeg` (value: `"America/Winnipeg"`)

* `americaMexicoCity` (value: `"America/Mexico_City"`)

* `americaChicago` (value: `"America/Chicago"`)

* `americaBogota` (value: `"America/Bogota"`)

* `americaIndianapolis` (value: `"America/Indianapolis"`)

* `americaNewYork` (value: `"America/New_York"`)

* `americaLaPaz` (value: `"America/La_Paz"`)

* `americaHalifax` (value: `"America/Halifax"`)

* `americaStJohns` (value: `"America/St_Johns"`)

* `americaBuenosAires` (value: `"America/Buenos_Aires"`)

* `americaGodthab` (value: `"America/Godthab"`)

* `americaSaoPaulo` (value: `"America/Sao_Paulo"`)

* `americaNoronha` (value: `"America/Noronha"`)

* `atlanticCapeVerde` (value: `"Atlantic/Cape_Verde"`)

* `GMT` (value: `"GMT"`)

* `europeDublin` (value: `"Europe/Dublin"`)

* `europeLisbon` (value: `"Europe/Lisbon"`)

* `europeLondon` (value: `"Europe/London"`)

* `africaTunis` (value: `"Africa/Tunis"`)

* `europeVienna` (value: `"Europe/Vienna"`)

* `europeBrussels` (value: `"Europe/Brussels"`)

* `europeZurich` (value: `"Europe/Zurich"`)

* `europePrague` (value: `"Europe/Prague"`)

* `europeBerlin` (value: `"Europe/Berlin"`)

* `europeCopenhagen` (value: `"Europe/Copenhagen"`)

* `europeMadrid` (value: `"Europe/Madrid"`)

* `europeBudapest` (value: `"Europe/Budapest"`)

* `europeRome` (value: `"Europe/Rome"`)

* `africaTripoli` (value: `"Africa/Tripoli"`)

* `europeMonaco` (value: `"Europe/Monaco"`)

* `europeMalta` (value: `"Europe/Malta"`)

* `europeAmsterdam` (value: `"Europe/Amsterdam"`)

* `europeOslo` (value: `"Europe/Oslo"`)

* `europeWarsaw` (value: `"Europe/Warsaw"`)

* `europeStockholm` (value: `"Europe/Stockholm"`)

* `europeBelgrade` (value: `"Europe/Belgrade"`)

* `europeParis` (value: `"Europe/Paris"`)

* `africaJohannesburg` (value: `"Africa/Johannesburg"`)

* `europeMinsk` (value: `"Europe/Minsk"`)

* `africaCairo` (value: `"Africa/Cairo"`)

* `europeHelsinki` (value: `"Europe/Helsinki"`)

* `europeAthens` (value: `"Europe/Athens"`)

* `asiaJerusalem` (value: `"Asia/Jerusalem"`)

* `europeRiga` (value: `"Europe/Riga"`)

* `europeBucharest` (value: `"Europe/Bucharest"`)

* `europeIstanbul` (value: `"Europe/Istanbul"`)

* `asiaRiyadh` (value: `"Asia/Riyadh"`)

* `europeMoscow` (value: `"Europe/Moscow"`)

* `asiaDubai` (value: `"Asia/Dubai"`)

* `asiaBaku` (value: `"Asia/Baku"`)

* `asiaTbilisi` (value: `"Asia/Tbilisi"`)

* `asiaCalcutta` (value: `"Asia/Calcutta"`)

* `asiaKatmandu` (value: `"Asia/Katmandu"`)

* `asiaDacca` (value: `"Asia/Dacca"`)

* `asiaRangoon` (value: `"Asia/Rangoon"`)

* `asiaJakarta` (value: `"Asia/Jakarta"`)

* `asiaSaigon` (value: `"Asia/Saigon"`)

* `asiaBangkok` (value: `"Asia/Bangkok"`)

* `australiaPerth` (value: `"Australia/Perth"`)

* `asiaHongKong` (value: `"Asia/Hong_Kong"`)

* `asiaMacao` (value: `"Asia/Macao"`)

* `asiaKualaLumpur` (value: `"Asia/Kuala_Lumpur"`)

* `asiaManila` (value: `"Asia/Manila"`)

* `asiaSingapore` (value: `"Asia/Singapore"`)

* `asiaTaipei` (value: `"Asia/Taipei"`)

* `asiaShanghai` (value: `"Asia/Shanghai"`)

* `asiaSeoul` (value: `"Asia/Seoul"`)

* `asiaTokyo` (value: `"Asia/Tokyo"`)

* `asiaYakutsk` (value: `"Asia/Yakutsk"`)

* `australiaAdelaide` (value: `"Australia/Adelaide"`)

* `australiaBrisbane` (value: `"Australia/Brisbane"`)

* `australiaBrokenHill` (value: `"Australia/Broken_Hill"`)

* `australiaDarwin` (value: `"Australia/Darwin"`)

* `australiaEucla` (value: `"Australia/Eucla"`)

* `australiaHobart` (value: `"Australia/Hobart"`)

* `australiaLindeman` (value: `"Australia/Lindeman"`)

* `australiaSydney` (value: `"Australia/Sydney"`)

* `australiaLordHowe` (value: `"Australia/Lord_Howe"`)

* `australiaMelbourne` (value: `"Australia/Melbourne"`)

* `asiaMagadan` (value: `"Asia/Magadan"`)

* `pacificNorfolk` (value: `"Pacific/Norfolk"`)

* `pacificAuckland` (value: `"Pacific/Auckland"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `PARTNERSHIP` (value: `"PARTNERSHIP"`)

* `SOLE_PROPRIETORSHIP` (value: `"SOLE_PROPRIETORSHIP"`)

* `CORPORATION` (value: `"CORPORATION"`)

* `LLC` (value: `"LLC"`)

* `NON_PROFIT` (value: `"NON_PROFIT"`)

* `TRUST` (value: `"TRUST"`)




