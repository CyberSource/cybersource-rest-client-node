# CyberSource.InlineResponse2011PaymentAccountInformationCardBrands

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | This field contains the 3-digit value that indicates the card type.  Possible values: - `001`: Visa. For card-present transactions on all processors except SIX, the Visa Electron card type is processed the same way that the Visa debit card is processed. Use card type value `001` for Visa Electron. - `002`: Mastercard, Eurocard[^1], which is a European regional brand of Mastercard. - `003`: American Express - `004`: Discover - `005`: Diners Club - `006`: Carte Blanche[^1] - `007`: JCB[^1] - `008`: Optima - `011`: Twinpay Credit Card - `012`: Twinpay Debit Card - `013`: Walmart - `014`: Enroute[^1] - `015`: Lowes Consumer - `016`: Home Depot Consumer - `017`: MBNA - `018`: Dick's Sportwear - `019`: Casual Corner - `020`: Sears - `021`: JAL[^1] - `023`: Disney Card - `024`: Switch/Solo - `025`: Sams Club Consumer - `026`: Sams Club Business - `027`: Nicos - `029`: Bebe - `030`: Restoration Hardware - `031`: Delta[^1]: Use this value only for Ingenico ePayments. For other processors, use `001` for all Visa card types. - `032`: Solo - `033`: Visa Electron[^1]. Use this value only for Ingenico ePayments and SIX. For other processors, use `001` for all Visa card types. - `034`: Dankort[^1] - `035`: Laser - `036`: Cartes Bancaires[^1] - `037`: Carta Si[^1] - `039`: Encoded account number[^1] - `040`: UATP[^1] - `041`: HOUSEHOLD - `042`: Maestro (International)[^1] - `043`: GE MONEY - `044`: Korean Cards - `045`: Style - `046`: J.Crew - `050`: Hipercard[^2,3] - `051`: Aura - `052`: Redecard - `053`: Orico Card - `054`: Elo[^3] - `055`: Capital One Private Label - `058`: Carnet - `059`: ValueLink - `061`: RuPay - `062`: China UnionPay - `063`: Falabella Private Label - `064`: Prompt Card - `065`: Korean Domestic - `066`: Banricompras  [^1]: For this card type, you must include the `paymentInformation.card.type` or `paymentInformation.tokenizedCard.type` field in your request for an authorization or a stand-alone credit.  [^2]: For this card type on Cielo 3.0, you must include the `paymentInformation.card.type` or `paymentInformation.tokenizedCard.type` field in a request for an authorization or a stand-alone credit. This card type is not supported on Cielo 1.5.  [^3]: For this card type on Getnet and Rede, you must include the `paymentInformation.card.type` or `paymentInformation.tokenizedCard.type` field in a request for an authorization or a stand-alone credit.  | [optional] 
**brandName** | **String** | This field contains the card brand name.   Some of the possible values (not an exhaustive list) are -    - VISA   - MASTERCARD   - AMERICAN EXPRESS   - DISCOVER   - DINERS CLUB   - CARTE BLANCHE   - JCB   - OPTIMA   - TWINPAY CREDIT CARD   - TWINPAY DEBIT CARD   - WALMART   - ENROUTE   - LOWES CONSUMER   - HOME DEPOT CONSUMER   - MBNA   - DICKS SPORTWEAR   - CASUAL CORNER   - SEARS   - JAL   - DISNEY CARD   - SWITCH/SOLO   - SAMS CLUB CONSUMER   - SAMS CLUB BUSINESS   - NICOS HOUSE CARD   - BEBE   - RESTORATION HARDWARE   - DELTA ONLINE   - SOLO   - VISA ELECTRON   - DANKORT   - LASER   - CARTE BANCAIRE   - CARTA SI   - ENCODED ACCOUNT   - UATP   - HOUSEHOLD   - MAESTRO   - GE CAPITAL   - KOREAN CARDS   - STYLE CARDS   - JCREW   - MEIJER   - HIPERCARD   - AURA   - REDECARD   - ORICO HOUSE CARD   - ELO   - CAPITAL ONE PRIVATE LABEL   - CARNET   - RUPAY   - CHINA UNION PAY   - FALABELLA PRIVATE LABEL   - PROMPTCARD   - KOREAN DOMESTIC   - BANRICOMPRAS  | [optional] 

