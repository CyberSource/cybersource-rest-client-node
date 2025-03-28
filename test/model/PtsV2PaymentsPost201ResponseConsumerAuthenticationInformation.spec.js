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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CyberSource);
  }
}(this, function(expect, CyberSource) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation', function() {
    it('should create an instance of PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation', function() {
      // uncomment below and update the code to test PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be.a(CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation);
    });

    it('should have the property accessToken (base name: "accessToken")', function() {
      // uncomment below and update the code to test the property accessToken
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property acsRenderingType (base name: "acsRenderingType")', function() {
      // uncomment below and update the code to test the property acsRenderingType
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property acsTransactionId (base name: "acsTransactionId")', function() {
      // uncomment below and update the code to test the property acsTransactionId
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property acsUrl (base name: "acsUrl")', function() {
      // uncomment below and update the code to test the property acsUrl
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property authenticationPath (base name: "authenticationPath")', function() {
      // uncomment below and update the code to test the property authenticationPath
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property authorizationPayload (base name: "authorizationPayload")', function() {
      // uncomment below and update the code to test the property authorizationPayload
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property authenticationTransactionId (base name: "authenticationTransactionId")', function() {
      // uncomment below and update the code to test the property authenticationTransactionId
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property cardholderMessage (base name: "cardholderMessage")', function() {
      // uncomment below and update the code to test the property cardholderMessage
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property cavv (base name: "cavv")', function() {
      // uncomment below and update the code to test the property cavv
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property cavvAlgorithm (base name: "cavvAlgorithm")', function() {
      // uncomment below and update the code to test the property cavvAlgorithm
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property challengeCancelCode (base name: "challengeCancelCode")', function() {
      // uncomment below and update the code to test the property challengeCancelCode
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property challengeRequired (base name: "challengeRequired")', function() {
      // uncomment below and update the code to test the property challengeRequired
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property decoupledAuthenticationIndicator (base name: "decoupledAuthenticationIndicator")', function() {
      // uncomment below and update the code to test the property decoupledAuthenticationIndicator
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property directoryServerErrorCode (base name: "directoryServerErrorCode")', function() {
      // uncomment below and update the code to test the property directoryServerErrorCode
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property directoryServerErrorDescription (base name: "directoryServerErrorDescription")', function() {
      // uncomment below and update the code to test the property directoryServerErrorDescription
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property ecommerceIndicator (base name: "ecommerceIndicator")', function() {
      // uncomment below and update the code to test the property ecommerceIndicator
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property eci (base name: "eci")', function() {
      // uncomment below and update the code to test the property eci
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property eciRaw (base name: "eciRaw")', function() {
      // uncomment below and update the code to test the property eciRaw
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property effectiveAuthenticationType (base name: "effectiveAuthenticationType")', function() {
      // uncomment below and update the code to test the property effectiveAuthenticationType
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property ivr (base name: "ivr")', function() {
      // uncomment below and update the code to test the property ivr
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property strongAuthentication (base name: "strongAuthentication")', function() {
      // uncomment below and update the code to test the property strongAuthentication
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property networkScore (base name: "networkScore")', function() {
      // uncomment below and update the code to test the property networkScore
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property pareq (base name: "pareq")', function() {
      // uncomment below and update the code to test the property pareq
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property paresStatus (base name: "paresStatus")', function() {
      // uncomment below and update the code to test the property paresStatus
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property proofXml (base name: "proofXml")', function() {
      // uncomment below and update the code to test the property proofXml
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property proxyPan (base name: "proxyPan")', function() {
      // uncomment below and update the code to test the property proxyPan
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property sdkTransactionId (base name: "sdkTransactionId")', function() {
      // uncomment below and update the code to test the property sdkTransactionId
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property signedParesStatusReason (base name: "signedParesStatusReason")', function() {
      // uncomment below and update the code to test the property signedParesStatusReason
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property specificationVersion (base name: "specificationVersion")', function() {
      // uncomment below and update the code to test the property specificationVersion
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property stepUpUrl (base name: "stepUpUrl")', function() {
      // uncomment below and update the code to test the property stepUpUrl
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property threeDSServerTransactionId (base name: "threeDSServerTransactionId")', function() {
      // uncomment below and update the code to test the property threeDSServerTransactionId
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property ucafAuthenticationData (base name: "ucafAuthenticationData")', function() {
      // uncomment below and update the code to test the property ucafAuthenticationData
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property ucafCollectionIndicator (base name: "ucafCollectionIndicator")', function() {
      // uncomment below and update the code to test the property ucafCollectionIndicator
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property veresEnrolled (base name: "veresEnrolled")', function() {
      // uncomment below and update the code to test the property veresEnrolled
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property whiteListStatusSource (base name: "whiteListStatusSource")', function() {
      // uncomment below and update the code to test the property whiteListStatusSource
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property xid (base name: "xid")', function() {
      // uncomment below and update the code to test the property xid
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property directoryServerTransactionId (base name: "directoryServerTransactionId")', function() {
      // uncomment below and update the code to test the property directoryServerTransactionId
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property dataQualityIndicator (base name: "dataQualityIndicator")', function() {
      // uncomment below and update the code to test the property dataQualityIndicator
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property authenticationResult (base name: "authenticationResult")', function() {
      // uncomment below and update the code to test the property authenticationResult
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property authenticationStatusMsg (base name: "authenticationStatusMsg")', function() {
      // uncomment below and update the code to test the property authenticationStatusMsg
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property indicator (base name: "indicator")', function() {
      // uncomment below and update the code to test the property indicator
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property interactionCounter (base name: "interactionCounter")', function() {
      // uncomment below and update the code to test the property interactionCounter
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property whiteListStatus (base name: "whiteListStatus")', function() {
      // uncomment below and update the code to test the property whiteListStatus
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

  });

}));
