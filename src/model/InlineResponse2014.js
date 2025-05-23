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
    define(['ApiClient', 'model/Notificationsubscriptionsv2webhooksProducts', 'model/Notificationsubscriptionsv2webhooksRetryPolicy', 'model/Notificationsubscriptionsv2webhooksSecurityPolicy'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Notificationsubscriptionsv2webhooksProducts'), require('./Notificationsubscriptionsv2webhooksRetryPolicy'), require('./Notificationsubscriptionsv2webhooksSecurityPolicy'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InlineResponse2014 = factory(root.CyberSource.ApiClient, root.CyberSource.Notificationsubscriptionsv2webhooksProducts, root.CyberSource.Notificationsubscriptionsv2webhooksRetryPolicy, root.CyberSource.Notificationsubscriptionsv2webhooksSecurityPolicy);
  }
}(this, function(ApiClient, Notificationsubscriptionsv2webhooksProducts, Notificationsubscriptionsv2webhooksRetryPolicy, Notificationsubscriptionsv2webhooksSecurityPolicy) {
  'use strict';




  /**
   * The InlineResponse2014 model module.
   * @module model/InlineResponse2014
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse2014</code>.
   * @alias module:model/InlineResponse2014
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>InlineResponse2014</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2014} obj Optional instance to populate.
   * @return {module:model/InlineResponse2014} The populated <code>InlineResponse2014</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('webhookId')) {
        obj['webhookId'] = ApiClient.convertToType(data['webhookId'], 'String');
      }
      if (data.hasOwnProperty('organizationId')) {
        obj['organizationId'] = ApiClient.convertToType(data['organizationId'], 'String');
      }
      if (data.hasOwnProperty('products')) {
        obj['products'] = ApiClient.convertToType(data['products'], [Notificationsubscriptionsv2webhooksProducts]);
      }
      if (data.hasOwnProperty('webhookUrl')) {
        obj['webhookUrl'] = ApiClient.convertToType(data['webhookUrl'], 'String');
      }
      if (data.hasOwnProperty('healthCheckUrl')) {
        obj['healthCheckUrl'] = ApiClient.convertToType(data['healthCheckUrl'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('retryPolicy')) {
        obj['retryPolicy'] = Notificationsubscriptionsv2webhooksRetryPolicy.constructFromObject(data['retryPolicy']);
      }
      if (data.hasOwnProperty('securityPolicy')) {
        obj['securityPolicy'] = Notificationsubscriptionsv2webhooksSecurityPolicy.constructFromObject(data['securityPolicy']);
      }
      if (data.hasOwnProperty('createdOn')) {
        obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'String');
      }
      if (data.hasOwnProperty('updatedOn')) {
        obj['updatedOn'] = ApiClient.convertToType(data['updatedOn'], 'String');
      }
    }
    return obj;
  }

  /**
   * Webhook Id. This is generated by the server.
   * @member {String} webhookId
   */
  exports.prototype['webhookId'] = undefined;
  /**
   * Organization ID.
   * @member {String} organizationId
   */
  exports.prototype['organizationId'] = undefined;
  /**
   * @member {Array.<module:model/Notificationsubscriptionsv2webhooksProducts>} products
   */
  exports.prototype['products'] = undefined;
  /**
   * The client's endpoint (URL) to receive webhooks.
   * @member {String} webhookUrl
   */
  exports.prototype['webhookUrl'] = undefined;
  /**
   * The client's health check endpoint (URL). This should be as close as possible to the actual webhookUrl.
   * @member {String} healthCheckUrl
   */
  exports.prototype['healthCheckUrl'] = undefined;
  /**
   * Webhook status.
   * @member {String} status
   * @default 'INACTIVE'
   */
  exports.prototype['status'] = 'INACTIVE';
  /**
   * Client friendly webhook name.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Client friendly webhook description.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {module:model/Notificationsubscriptionsv2webhooksRetryPolicy} retryPolicy
   */
  exports.prototype['retryPolicy'] = undefined;
  /**
   * @member {module:model/Notificationsubscriptionsv2webhooksSecurityPolicy} securityPolicy
   */
  exports.prototype['securityPolicy'] = undefined;
  /**
   * Date on which webhook was created/registered.
   * @member {String} createdOn
   */
  exports.prototype['createdOn'] = undefined;
  /**
   * Date on which webhook was most recently updated.
   * @member {String} updatedOn
   */
  exports.prototype['updatedOn'] = undefined;



  return exports;
}));


