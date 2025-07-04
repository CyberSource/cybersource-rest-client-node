/**
 * CyberSource Merged Spec
 * All CyberSource API specs merged together. These are available at https://developer.cybersource.com/api/reference/api-reference.html
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.38
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Upv1capturecontextsCaptureMandate = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Upv1capturecontextsCaptureMandate model module.
   * @module model/Upv1capturecontextsCaptureMandate
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Upv1capturecontextsCaptureMandate</code>.
   * @alias module:model/Upv1capturecontextsCaptureMandate
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>Upv1capturecontextsCaptureMandate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Upv1capturecontextsCaptureMandate} obj Optional instance to populate.
   * @return {module:model/Upv1capturecontextsCaptureMandate} The populated <code>Upv1capturecontextsCaptureMandate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('billingType')) {
        obj['billingType'] = ApiClient.convertToType(data['billingType'], 'String');
      }
      if (data.hasOwnProperty('requestEmail')) {
        obj['requestEmail'] = ApiClient.convertToType(data['requestEmail'], 'Boolean');
      }
      if (data.hasOwnProperty('requestPhone')) {
        obj['requestPhone'] = ApiClient.convertToType(data['requestPhone'], 'Boolean');
      }
      if (data.hasOwnProperty('requestShipping')) {
        obj['requestShipping'] = ApiClient.convertToType(data['requestShipping'], 'Boolean');
      }
      if (data.hasOwnProperty('shipToCountries')) {
        obj['shipToCountries'] = ApiClient.convertToType(data['shipToCountries'], ['String']);
      }
      if (data.hasOwnProperty('showAcceptedNetworkIcons')) {
        obj['showAcceptedNetworkIcons'] = ApiClient.convertToType(data['showAcceptedNetworkIcons'], 'Boolean');
      }
      if (data.hasOwnProperty('showConfirmationStep')) {
        obj['showConfirmationStep'] = ApiClient.convertToType(data['showConfirmationStep'], 'Boolean');
      }
      if (data.hasOwnProperty('requestSaveCard')) {
        obj['requestSaveCard'] = ApiClient.convertToType(data['requestSaveCard'], 'Boolean');
      }
      if (data.hasOwnProperty('comboCard')) {
        obj['comboCard'] = ApiClient.convertToType(data['comboCard'], 'Boolean');
      }
      if (data.hasOwnProperty('CPF')) {
        obj['CPF'] = ApiClient.convertToType(data['CPF'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Configure Unified Checkout to capture billing address information.  Possible values: - FULL: Capture complete billing address information. - PARTIAL: Capture first name, last name, country and postal/zip code only. - NONE: Capture only first name and last name. 
   * @member {String} billingType
   */
  exports.prototype['billingType'] = undefined;
  /**
   * Configure Unified Checkout to capture customer email address.  Possible values:  - True  - False 
   * @member {Boolean} requestEmail
   */
  exports.prototype['requestEmail'] = undefined;
  /**
   * Configure Unified Checkout to capture customer phone number.  Possible values: - True - False 
   * @member {Boolean} requestPhone
   */
  exports.prototype['requestPhone'] = undefined;
  /**
   * Configure Unified Checkout to capture customer shipping details.  Possible values: - True - False 
   * @member {Boolean} requestShipping
   */
  exports.prototype['requestShipping'] = undefined;
  /**
   * List of countries available to ship to.   Use the two-character ISO Standard Country Codes. 
   * @member {Array.<String>} shipToCountries
   */
  exports.prototype['shipToCountries'] = undefined;
  /**
   * Configure Unified Checkout to display the list of accepted card networks beneath the payment button  Possible values: - True - False 
   * @member {Boolean} showAcceptedNetworkIcons
   */
  exports.prototype['showAcceptedNetworkIcons'] = undefined;
  /**
   * Configure Unified Checkout to display the final confirmation screen when using Click to Pay.<br> Where 'BillingType'= NONE and 'requestShipping'= FALSE and the customer is using an existing Click to Pay card as their chosen payment method, a final confirmation screen can be removed allowing the customer to check out as soon as they have selected their payment method from within their Click to Pay card tray.  Possible values: - True - False 
   * @member {Boolean} showConfirmationStep
   */
  exports.prototype['showConfirmationStep'] = undefined;
  /**
   * Configure Unified Checkout to display the \"Save card for future use\" checkbox.<br>  Configurable check box that will show in a Manual card entry flow to allow a Cardholder to give consent to store their manually entered credential with the Merchant that they are paying.<br>  Applicable when manually entering the details and not enrolling in Click to Pay.  Possible values:  - True   - False<br><br>  **Use Cases:**  **Offer consumers option to save their card in Unified Checkout:**  - Include the captureMandate.requestSaveCard field in the capture context request and set it to true. - When set to true, this will show a checkbox with the message 'Save card for future use' in Unified Checkout. - When selected this provides a response in both the Transient Token and Get Credentials API response.<br><br>  **Do not offer consumers the option to save their card in Unified Checkout:**  - Include the captureMandate.requestSaveCard field in the capture context request and set it to false OR omit the field from the capture context request. - When set to false, the save card option is not shown to consumers when manually entering card details. 
   * @member {Boolean} requestSaveCard
   */
  exports.prototype['requestSaveCard'] = undefined;
  /**
   * Configure Unified Checkout to display combo card at checkout.<br>  A combo debit/credit card is a single card that functions both as a Debit/Credit card.  Unified Checkout / Click to Pay Drop-in UI allows the Cardholder to choose whether they would like the transaction to be paid for using either debit or credit card. **Important:** This is applicable to Visa cards only.  Possible values: - True  - False<br><br>  **Use Cases:**  **Offer Combo Card at Checkout:**  - Include the captureMandate.comboCard field in the capture context request and set it to true. - When set to true, Combo Card selection is shown at checkout <br><br>  **Do not offer Combo Card at Checkout:**  - Include the captureMandate.comboCard field in the capture context request and set it to false OR omit the field from the capture context request. - The Combo Card selection is not shown at checkout. 
   * @member {Boolean} comboCard
   */
  exports.prototype['comboCard'] = undefined;
  /**
   * Configure Unified Checkout to display and capture the CPF number (Cadastro de Pessoas Físicas).  The CPF number is a unique 11-digit identifier issued to Brazilian citizens and residents for tax purposes.  Possible values: - True - False<br><br>  This field is optional.   If set to true the field is required. If set to false the field is optional. If the field is not included in the capture context then it is not captured.<br><br>  **Important:**  - If PANENTRY is specified in the allowedPaymentTypes field, the CPF number will be displayed in Unified Checkout regardless of what card number is entered.  - If CLICKTOPAY is specified in the allowedPaymentTypes field, the CPF number will be displayed in Unified Checkout only when a Visa Click To Pay card is entered. 
   * @member {Boolean} CPF
   */
  exports.prototype['CPF'] = undefined;



  return exports;
}));


