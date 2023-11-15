# CyberSource.Boardingv1registrationsOrganizationInformationBusinessInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | 
**doingBusinessAs** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**startDate** | **Date** | &#x60;Format: YYYY-MM-DD&#x60; Example 2016-08-11 equals August 11, 2016  | [optional] 
**address** | [**Boardingv1registrationsOrganizationInformationBusinessInformationAddress**](Boardingv1registrationsOrganizationInformationBusinessInformationAddress.md) |  | [optional] 
**timeZone** | **String** | Merchant perferred time zone Possible Values: - &#39;Pacific/Pago_Pago&#39; - &#39;Pacific/Honolulu&#39; - &#39;America/Anchorage&#39; - &#39;America/Vancouver&#39; - &#39;America/Los_Angeles&#39; - &#39;America/Phoenix&#39; - &#39;America/Edmonton&#39; - &#39;America/Denver&#39; - &#39;America/Winnipeg&#39; - &#39;America/Mexico_City&#39; - &#39;America/Chicago&#39; - &#39;America/Bogota&#39; - &#39;America/Indianapolis&#39; - &#39;America/New_York&#39; - &#39;America/La_Paz&#39; - &#39;America/Halifax&#39; - &#39;America/St_Johns&#39; - &#39;America/Buenos_Aires&#39; - &#39;America/Godthab&#39; - &#39;America/Sao_Paulo&#39; - &#39;America/Noronha&#39; - &#39;Atlantic/Cape_Verde&#39; - &#39;GMT&#39; - &#39;Europe/Dublin&#39; - &#39;Europe/Lisbon&#39; - &#39;Europe/London&#39; - &#39;Africa/Tunis&#39; - &#39;Europe/Vienna&#39; - &#39;Europe/Brussels&#39; - &#39;Europe/Zurich&#39; - &#39;Europe/Prague&#39; - &#39;Europe/Berlin&#39; - &#39;Europe/Copenhagen&#39; - &#39;Europe/Madrid&#39; - &#39;Europe/Budapest&#39; - &#39;Europe/Rome&#39; - &#39;Africa/Tripoli&#39; - &#39;Europe/Monaco&#39; - &#39;Europe/Malta&#39; - &#39;Europe/Amsterdam&#39; - &#39;Europe/Oslo&#39; - &#39;Europe/Warsaw&#39; - &#39;Europe/Stockholm&#39; - &#39;Europe/Belgrade&#39; - &#39;Europe/Paris&#39; - &#39;Africa/Johannesburg&#39; - &#39;Europe/Minsk&#39; - &#39;Africa/Cairo&#39; - &#39;Europe/Helsinki&#39; - &#39;Europe/Athens&#39; - &#39;Asia/Jerusalem&#39; - &#39;Europe/Riga&#39; - &#39;Europe/Bucharest&#39; - &#39;Europe/Istanbul&#39; - &#39;Asia/Riyadh&#39; - &#39;Europe/Moscow&#39; - &#39;Asia/Dubai&#39; - &#39;Asia/Baku&#39; - &#39;Asia/Tbilisi&#39; - &#39;Asia/Calcutta&#39; - &#39;Asia/Katmandu&#39; - &#39;Asia/Dacca&#39; - &#39;Asia/Rangoon&#39; - &#39;Asia/Jakarta&#39; - &#39;Asia/Saigon&#39; - &#39;Asia/Bangkok&#39; - &#39;Australia/Perth&#39; - &#39;Asia/Hong_Kong&#39; - &#39;Asia/Macao&#39; - &#39;Asia/Kuala_Lumpur&#39; - &#39;Asia/Manila&#39; - &#39;Asia/Singapore&#39; - &#39;Asia/Taipei&#39; - &#39;Asia/Shanghai&#39; - &#39;Asia/Seoul&#39; - &#39;Asia/Tokyo&#39; - &#39;Asia/Yakutsk&#39; - &#39;Australia/Adelaide&#39; - &#39;Australia/Brisbane&#39; - &#39;Australia/Broken_Hill&#39; - &#39;Australia/Darwin&#39; - &#39;Australia/Eucla&#39; - &#39;Australia/Hobart&#39; - &#39;Australia/Lindeman&#39; - &#39;Australia/Sydney&#39; - &#39;Australia/Lord_Howe&#39; - &#39;Australia/Melbourne&#39; - &#39;Asia/Magadan&#39; - &#39;Pacific/Norfolk&#39; - &#39;Pacific/Auckland&#39;  | [optional] 
**websiteUrl** | **String** |  | [optional] 
**type** | **String** | Business type Possible Values:   - &#39;PARTNERSHIP&#39;   - &#39;SOLE_PROPRIETORSHIP&#39;   - &#39;CORPORATION&#39;   - &#39;LLC&#39;   - &#39;NON_PROFIT&#39;   - &#39;TRUST&#39;  | [optional] 
**taxId** | **String** |  | [optional] 
**phoneNumber** | **String** |  | [optional] 
**businessContact** | [**Boardingv1registrationsOrganizationInformationBusinessInformationBusinessContact**](Boardingv1registrationsOrganizationInformationBusinessInformationBusinessContact.md) |  | [optional] 
**technicalContact** | [**Boardingv1registrationsOrganizationInformationBusinessInformationBusinessContact**](Boardingv1registrationsOrganizationInformationBusinessInformationBusinessContact.md) |  | [optional] 
**emergencyContact** | [**Boardingv1registrationsOrganizationInformationBusinessInformationBusinessContact**](Boardingv1registrationsOrganizationInformationBusinessInformationBusinessContact.md) |  | [optional] 
**merchantCategoryCode** | **String** | Industry standard Merchant Category Code (MCC) | [optional] 


<a name="TimeZoneEnum"></a>
## Enum: TimeZoneEnum


* `Pacific/Pago_Pago` (value: `"Pacific/Pago_Pago"`)

* `Pacific/Honolulu` (value: `"Pacific/Honolulu"`)

* `America/Anchorage` (value: `"America/Anchorage"`)

* `America/Vancouver` (value: `"America/Vancouver"`)

* `America/Los_Angeles` (value: `"America/Los_Angeles"`)

* `America/Phoenix` (value: `"America/Phoenix"`)

* `America/Edmonton` (value: `"America/Edmonton"`)

* `America/Denver` (value: `"America/Denver"`)

* `America/Winnipeg` (value: `"America/Winnipeg"`)

* `America/Mexico_City` (value: `"America/Mexico_City"`)

* `America/Chicago` (value: `"America/Chicago"`)

* `America/Bogota` (value: `"America/Bogota"`)

* `America/Indianapolis` (value: `"America/Indianapolis"`)

* `America/New_York` (value: `"America/New_York"`)

* `America/La_Paz` (value: `"America/La_Paz"`)

* `America/Halifax` (value: `"America/Halifax"`)

* `America/St_Johns` (value: `"America/St_Johns"`)

* `America/Buenos_Aires` (value: `"America/Buenos_Aires"`)

* `America/Godthab` (value: `"America/Godthab"`)

* `America/Sao_Paulo` (value: `"America/Sao_Paulo"`)

* `America/Noronha` (value: `"America/Noronha"`)

* `Atlantic/Cape_Verde` (value: `"Atlantic/Cape_Verde"`)

* `GMT` (value: `"GMT"`)

* `Europe/Dublin` (value: `"Europe/Dublin"`)

* `Europe/Lisbon` (value: `"Europe/Lisbon"`)

* `Europe/London` (value: `"Europe/London"`)

* `Africa/Tunis` (value: `"Africa/Tunis"`)

* `Europe/Vienna` (value: `"Europe/Vienna"`)

* `Europe/Brussels` (value: `"Europe/Brussels"`)

* `Europe/Zurich` (value: `"Europe/Zurich"`)

* `Europe/Prague` (value: `"Europe/Prague"`)

* `Europe/Berlin` (value: `"Europe/Berlin"`)

* `Europe/Copenhagen` (value: `"Europe/Copenhagen"`)

* `Europe/Madrid` (value: `"Europe/Madrid"`)

* `Europe/Budapest` (value: `"Europe/Budapest"`)

* `Europe/Rome` (value: `"Europe/Rome"`)

* `Africa/Tripoli` (value: `"Africa/Tripoli"`)

* `Europe/Monaco` (value: `"Europe/Monaco"`)

* `Europe/Malta` (value: `"Europe/Malta"`)

* `Europe/Amsterdam` (value: `"Europe/Amsterdam"`)

* `Europe/Oslo` (value: `"Europe/Oslo"`)

* `Europe/Warsaw` (value: `"Europe/Warsaw"`)

* `Europe/Stockholm` (value: `"Europe/Stockholm"`)

* `Europe/Belgrade` (value: `"Europe/Belgrade"`)

* `Europe/Paris` (value: `"Europe/Paris"`)

* `Africa/Johannesburg` (value: `"Africa/Johannesburg"`)

* `Europe/Minsk` (value: `"Europe/Minsk"`)

* `Africa/Cairo` (value: `"Africa/Cairo"`)

* `Europe/Helsinki` (value: `"Europe/Helsinki"`)

* `Europe/Athens` (value: `"Europe/Athens"`)

* `Asia/Jerusalem` (value: `"Asia/Jerusalem"`)

* `Europe/Riga` (value: `"Europe/Riga"`)

* `Europe/Bucharest` (value: `"Europe/Bucharest"`)

* `Europe/Istanbul` (value: `"Europe/Istanbul"`)

* `Asia/Riyadh` (value: `"Asia/Riyadh"`)

* `Europe/Moscow` (value: `"Europe/Moscow"`)

* `Asia/Dubai` (value: `"Asia/Dubai"`)

* `Asia/Baku` (value: `"Asia/Baku"`)

* `Asia/Tbilisi` (value: `"Asia/Tbilisi"`)

* `Asia/Calcutta` (value: `"Asia/Calcutta"`)

* `Asia/Katmandu` (value: `"Asia/Katmandu"`)

* `Asia/Dacca` (value: `"Asia/Dacca"`)

* `Asia/Rangoon` (value: `"Asia/Rangoon"`)

* `Asia/Jakarta` (value: `"Asia/Jakarta"`)

* `Asia/Saigon` (value: `"Asia/Saigon"`)

* `Asia/Bangkok` (value: `"Asia/Bangkok"`)

* `Australia/Perth` (value: `"Australia/Perth"`)

* `Asia/Hong_Kong` (value: `"Asia/Hong_Kong"`)

* `Asia/Macao` (value: `"Asia/Macao"`)

* `Asia/Kuala_Lumpur` (value: `"Asia/Kuala_Lumpur"`)

* `Asia/Manila` (value: `"Asia/Manila"`)

* `Asia/Singapore` (value: `"Asia/Singapore"`)

* `Asia/Taipei` (value: `"Asia/Taipei"`)

* `Asia/Shanghai` (value: `"Asia/Shanghai"`)

* `Asia/Seoul` (value: `"Asia/Seoul"`)

* `Asia/Tokyo` (value: `"Asia/Tokyo"`)

* `Asia/Yakutsk` (value: `"Asia/Yakutsk"`)

* `Australia/Adelaide` (value: `"Australia/Adelaide"`)

* `Australia/Brisbane` (value: `"Australia/Brisbane"`)

* `Australia/Broken_Hill` (value: `"Australia/Broken_Hill"`)

* `Australia/Darwin` (value: `"Australia/Darwin"`)

* `Australia/Eucla` (value: `"Australia/Eucla"`)

* `Australia/Hobart` (value: `"Australia/Hobart"`)

* `Australia/Lindeman` (value: `"Australia/Lindeman"`)

* `Australia/Sydney` (value: `"Australia/Sydney"`)

* `Australia/Lord_Howe` (value: `"Australia/Lord_Howe"`)

* `Australia/Melbourne` (value: `"Australia/Melbourne"`)

* `Asia/Magadan` (value: `"Asia/Magadan"`)

* `Pacific/Norfolk` (value: `"Pacific/Norfolk"`)

* `Pacific/Auckland` (value: `"Pacific/Auckland"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `PARTNERSHIP` (value: `"PARTNERSHIP"`)

* `SOLE_PROPRIETORSHIP` (value: `"SOLE_PROPRIETORSHIP"`)

* `CORPORATION` (value: `"CORPORATION"`)

* `LLC` (value: `"LLC"`)

* `NON_PROFIT` (value: `"NON_PROFIT"`)

* `TRUST` (value: `"TRUST"`)




