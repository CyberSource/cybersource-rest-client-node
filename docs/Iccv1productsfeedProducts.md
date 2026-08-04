# CyberSource.Iccv1productsfeedProducts

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**itemId** | **String** | Your unique product identifier (SKU). Must be unique within your merchant catalog. Max 100 characters.  | 
**title** | **String** | Product display name. Max 150 characters. | 
**description** | **String** | Detailed product description. Max 5000 characters. | 
**url** | **String** | Canonical URL to the product page on your storefront. Max 1000 characters. | 
**imageUrl** | **String** | URL to the primary product image. Must be publicly accessible (HTTPS). Max 1000 characters.  | 
**additionalImageUrls** | **String** | Optional. Additional product image URLs (comma-separated or single URL). Must be HTTPS. | [optional] 
**videoUrl** | **String** | Optional. URL to a product video. Must be HTTPS and publicly accessible. | [optional] 
**model3dUrl** | **String** | Optional. URL to a 3D model asset for the product (GLTF/GLB format preferred). | [optional] 
**availability** | **String** | Current stock status: - `in_stock` — available for immediate purchase - `out_of_stock` — temporarily unavailable - `preorder` or `pre_order` — not yet released - `backorder` — out of stock but accepting orders - `unknown` — availability status is not determined   Possible values: - in_stock - out_of_stock - preorder - pre_order - backorder - unknown | 
**availabilityDate** | **Date** | Optional. Date when the product becomes available (for preorder/backorder). | [optional] 
**expirationDate** | **Date** | Optional. Date after which the product listing expires. | [optional] 
**price** | **Number** | Product price as a positive decimal number. Pair with `currency` for full price representation. Must be greater than zero.  | 
**currency** | **String** | 3-letter ISO 4217 currency code for the product price (e.g. \"USD\", \"EUR\", \"GBP\").  | 
**salePrice** | **Number** | Optional. Discounted sale price. Only shown when lower than `price`. | [optional] 
**salePriceStartDate** | **Date** | Optional. Start date of the sale price window. | [optional] 
**salePriceEndDate** | **Date** | Optional. End date of the sale price window. | [optional] 
**unitPricingMeasure** | **String** | Optional. Unit measure for unit-priced items (e.g. \"1kg\", \"750ml\"). Used for per-unit price display. | [optional] 
**baseMeasure** | **String** | Optional. Base measure used for unit pricing comparison (e.g. \"100g\", \"1L\"). Enables price-per-unit comparison. | [optional] 
**pricingTrend** | **String** | Optional. Pricing trend indicator (e.g. \"dropping\", \"rising\"). Max 80 characters. | [optional] 
**geoPrice** | **String** | Optional. Geography-specific pricing overrides (JSON or structured string). | [optional] 
**geoAvailability** | **String** | Optional. Geography-specific availability overrides (JSON or structured string). | [optional] 
**brand** | **String** | Product brand or manufacturer name. Max 70 characters. | 
**gtin** | **String** | Optional. Global Trade Item Number (UPC, EAN, ISBN). Must be 8–14 digits. Required for Google Merchant Center syndication.  | [optional] 
**mpn** | **String** | Optional. Manufacturer Part Number. Max 70 characters. | [optional] 
**productCategory** | **String** | Optional. Product category hierarchy. Used for UCP validation and Google Merchant Center syndication. Max 255 characters.  | [optional] 
**condition** | **String** | Optional. Product condition. Typical values: `new`, `used`, `refurbished`. Used for UCP syndication and Google Merchant Center feed.  | [optional] 
**material** | **String** | Optional. Primary material of the product. Max 100 characters. | [optional] 
**weight** | **String** | Optional. Product weight (e.g. \"1.2kg\"). Max 100 characters. | [optional] 
**dimensions** | **String** | Optional. Combined dimension string (e.g. \"10x5x3 cm\"). Max 100 characters. | [optional] 
**length** | **String** | Optional. Product length. | [optional] 
**width** | **String** | Optional. Product width. | [optional] 
**height** | **String** | Optional. Product height. | [optional] 
**dimensionsUnit** | **String** | Optional. Unit for dimension values (e.g. \"cm\", \"in\"). | [optional] 
**itemWeightUnit** | **String** | Optional. Unit for weight value (e.g. \"kg\", \"lb\"). | [optional] 
**ageGroup** | **String** | Optional. Target age group (e.g. \"adult\", \"kids\", \"infant\", \"toddler\", \"newborn\"). | [optional] 
**color** | **String** | Optional. Product color. Max 40 characters. | [optional] 
**size** | **String** | Optional. Product size (e.g. \"M\", \"42\", \"XL\"). Max 20 characters. Used for variant filtering. | [optional] 
**sizeSystem** | **String** | Optional. Size standard used (e.g. \"US\", \"EU\", \"UK\", \"AU\"). | [optional] 
**gender** | **String** | Optional. Target gender (e.g. \"male\", \"female\", \"unisex\"). | [optional] 
**groupId** | **String** | Product variant group ID — links products that are variations of the same item. Max 70 characters.  | 
**listingHasVariations** | **Boolean** | Whether this listing has product variations. | 
**itemGroupTitle** | **String** | Optional. Display title for the variant group. Max 150 characters. | [optional] 
**offerId** | **String** | Optional. Merchant-assigned offer identifier for marketplace deduplication. | [optional] 
**variantDict** | **{String: String}** | Optional. Key-value map of variant attribute names to values (e.g. color, size). | [optional] 
**customVariant1Category** | **String** | Optional. Custom variant 1 category label. | [optional] 
**customVariant1Option** | **String** | Optional. Custom variant 1 option value. | [optional] 
**customVariant2Category** | **String** | Optional. Custom variant 2 category label. | [optional] 
**customVariant2Option** | **String** | Optional. Custom variant 2 option value. | [optional] 
**customVariant3Category** | **String** | Optional. Custom variant 3 category label. | [optional] 
**customVariant3Option** | **String** | Optional. Custom variant 3 option value. | [optional] 
**sellerName** | **String** | Merchant or seller display name. Max 70 characters.  | 
**sellerUrl** | **String** | URL to the seller's storefront. Max 1000 characters. | 
**marketplaceSeller** | **String** | Optional. Marketplace seller identifier for multi-seller platforms. Max 70 characters. | [optional] 
**sellerPrivacyPolicy** | **String** | Optional. URL to the seller's privacy policy page. | [optional] 
**sellerTos** | **String** | Optional. URL to the seller's terms of service page. | [optional] 
**shippingPrice** | **String** | Optional. Shipping price for this product (e.g. \"5.99 USD\" or \"Free\"). | [optional] 
**deliveryEstimate** | **Date** | Optional. Estimated delivery date. | [optional] 
**pickupMethod** | **String** | Optional. Available pickup method (e.g. \"in-store\", \"curbside\", \"locker\"). | [optional] 
**pickupSla** | **String** | Optional. Pickup SLA commitment (e.g. \"same-day\", \"2 hours\", \"next-day\"). | [optional] 
**isDigital** | **Boolean** | Optional. Whether this product is a digital/downloadable item. | [optional] 
**returnPolicy** | **String** | Human-readable return policy description. | 
**acceptsReturns** | **Boolean** | Optional. Whether the product is eligible for returns. | [optional] 
**returnDeadlineInDays** | **Number** | Optional. Number of days within which a return is accepted. Must be a positive integer. | [optional] 
**acceptsExchanges** | **Boolean** | Optional. Whether the product is eligible for exchanges. | [optional] 
**isEligibleSearch** | **Boolean** | Controls whether this product appears in AI agent product discovery and search results. | 
**isEligibleCheckout** | **Boolean** | Controls whether this product can be added to cart and purchased via AI agents. | 
**popularityScore** | **Number** | Optional. Numeric popularity score (higher is more popular). | [optional] 
**returnRate** | **String** | Optional. Product return rate indicator (e.g. \"low\", \"medium\", \"high\", or \"5%\"). | [optional] 
**warning** | **String** | Optional. Safety or compliance warning text for the product (e.g. Prop 65, choking hazard). | [optional] 
**warningUrl** | **String** | Optional. URL to a detailed warning or compliance information page. | [optional] 
**ageRestriction** | **Number** | Optional. Minimum age required to purchase this product (e.g. 18). | [optional] 
**reviewCount** | **Number** | Optional. Total number of customer reviews for this product. | [optional] 
**starRating** | **String** | Optional. Average star rating for this product (e.g. \"4.5\"). | [optional] 
**storeReviewCount** | **Number** | Optional. Total number of store-level reviews. | [optional] 
**storeStarRating** | **String** | Optional. Average star rating for the store (e.g. \"4.8\"). | [optional] 
**relatedProductId** | **String** | Optional. Item ID of a related product (e.g. accessory, replacement). | [optional] 
**relationshipType** | **String** | Optional. Type of relationship to `related_product_id` (e.g. \"accessory\", \"replacement\", \"bundle\").  | [optional] 
**targetCountries** | **[String]** | List of ISO 3166-1 alpha-3 country codes where this product is available. | 
**storeCountry** | **String** | ISO 3166-1 alpha-2 country code of the merchant's store. Max 2 characters. | 
**qAndA** | **[{String: Object}]** | Optional. List of Q&A entries for this product. | [optional] 
**qandA** | **[{String: Object}]** | Optional. Alias for `q_and_a`. Included for compatibility with alternate field naming conventions. | [optional] 
**reviews** | **[{String: Object}]** | Optional. List of customer review objects for this product. | [optional] 


