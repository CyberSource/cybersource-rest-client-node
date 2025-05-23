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
    define(['ApiClient', 'model/InvoicingV2InvoicesAllGet200ResponseCustomerInformation', 'model/InvoicingV2InvoicesAllGet200ResponseInvoiceInformation', 'model/InvoicingV2InvoicesAllGet200ResponseLinks', 'model/InvoicingV2InvoicesAllGet200ResponseOrderInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InvoicingV2InvoicesAllGet200ResponseCustomerInformation'), require('./InvoicingV2InvoicesAllGet200ResponseInvoiceInformation'), require('./InvoicingV2InvoicesAllGet200ResponseLinks'), require('./InvoicingV2InvoicesAllGet200ResponseOrderInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InvoicingV2InvoicesAllGet200ResponseInvoices = factory(root.CyberSource.ApiClient, root.CyberSource.InvoicingV2InvoicesAllGet200ResponseCustomerInformation, root.CyberSource.InvoicingV2InvoicesAllGet200ResponseInvoiceInformation, root.CyberSource.InvoicingV2InvoicesAllGet200ResponseLinks, root.CyberSource.InvoicingV2InvoicesAllGet200ResponseOrderInformation);
  }
}(this, function(ApiClient, InvoicingV2InvoicesAllGet200ResponseCustomerInformation, InvoicingV2InvoicesAllGet200ResponseInvoiceInformation, InvoicingV2InvoicesAllGet200ResponseLinks, InvoicingV2InvoicesAllGet200ResponseOrderInformation) {
  'use strict';




  /**
   * The InvoicingV2InvoicesAllGet200ResponseInvoices model module.
   * @module model/InvoicingV2InvoicesAllGet200ResponseInvoices
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InvoicingV2InvoicesAllGet200ResponseInvoices</code>.
   * A list of invoices.
   * @alias module:model/InvoicingV2InvoicesAllGet200ResponseInvoices
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>InvoicingV2InvoicesAllGet200ResponseInvoices</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InvoicingV2InvoicesAllGet200ResponseInvoices} obj Optional instance to populate.
   * @return {module:model/InvoicingV2InvoicesAllGet200ResponseInvoices} The populated <code>InvoicingV2InvoicesAllGet200ResponseInvoices</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_links')) {
        obj['_links'] = InvoicingV2InvoicesAllGet200ResponseLinks.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('createdDate')) {
        obj['createdDate'] = ApiClient.convertToType(data['createdDate'], 'String');
      }
      if (data.hasOwnProperty('customerInformation')) {
        obj['customerInformation'] = InvoicingV2InvoicesAllGet200ResponseCustomerInformation.constructFromObject(data['customerInformation']);
      }
      if (data.hasOwnProperty('invoiceInformation')) {
        obj['invoiceInformation'] = InvoicingV2InvoicesAllGet200ResponseInvoiceInformation.constructFromObject(data['invoiceInformation']);
      }
      if (data.hasOwnProperty('orderInformation')) {
        obj['orderInformation'] = InvoicingV2InvoicesAllGet200ResponseOrderInformation.constructFromObject(data['orderInformation']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/InvoicingV2InvoicesAllGet200ResponseLinks} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * An unique identification number generated by Cybersource to identify the submitted request. Returned by all services. It is also appended to the endpoint of the resource. On incremental authorizations, this value with be the same as the identification number returned in the original authorization response. 
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The status of the invoice.  Possible values: - DRAFT - CREATED - SENT - PARTIAL - PAID - CANCELED - PENDING 
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Date and time (UTC) the invoice was created.  Format: YYYY-MM-DDThh:mm:ssZ Example 2016-08-11T22:47:57Z equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The T separates the date and the time. The Z indicates UTC. 
   * @member {String} createdDate
   */
  exports.prototype['createdDate'] = undefined;
  /**
   * @member {module:model/InvoicingV2InvoicesAllGet200ResponseCustomerInformation} customerInformation
   */
  exports.prototype['customerInformation'] = undefined;
  /**
   * @member {module:model/InvoicingV2InvoicesAllGet200ResponseInvoiceInformation} invoiceInformation
   */
  exports.prototype['invoiceInformation'] = undefined;
  /**
   * @member {module:model/InvoicingV2InvoicesAllGet200ResponseOrderInformation} orderInformation
   */
  exports.prototype['orderInformation'] = undefined;



  return exports;
}));


