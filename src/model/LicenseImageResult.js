/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.0.15
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.9
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Price', 'model/Url'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Price'), require('./Url'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.LicenseImageResult = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.Price, root.ShutterstockApiReference.Url);
  }
}(this, function(ApiClient, Price, Url) {
  'use strict';




  /**
   * The LicenseImageResult model module.
   * @module model/LicenseImageResult
   * @version 1.0.15
   */

  /**
   * Constructs a new <code>LicenseImageResult</code>.
   * The response to a licensing request for an image
   * @alias module:model/LicenseImageResult
   * @class
   * @param image_id {String} Image ID that was licensed
   */
  var exports = function(image_id) {
    var _this = this;




    _this['image_id'] = image_id;

  };

  /**
   * Constructs a <code>LicenseImageResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LicenseImageResult} obj Optional instance to populate.
   * @return {module:model/LicenseImageResult} The populated <code>LicenseImageResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('allotment_charge')) {
        obj['allotment_charge'] = ApiClient.convertToType(data['allotment_charge'], 'Number');
      }
      if (data.hasOwnProperty('download')) {
        obj['download'] = Url.constructFromObject(data['download']);
      }
      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'String');
      }
      if (data.hasOwnProperty('image_id')) {
        obj['image_id'] = ApiClient.convertToType(data['image_id'], 'String');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = Price.constructFromObject(data['price']);
      }
    }
    return obj;
  }

  /**
   * Number of allotments that this licensing event used
   * @member {Number} allotment_charge
   */
  exports.prototype['allotment_charge'] = undefined;
  /**
   * Information that is needed to download the image
   * @member {module:model/Url} download
   */
  exports.prototype['download'] = undefined;
  /**
   * Error message, appears only if there was an error
   * @member {String} error
   */
  exports.prototype['error'] = undefined;
  /**
   * Image ID that was licensed
   * @member {String} image_id
   */
  exports.prototype['image_id'] = undefined;
  /**
   * Wholesale price information; only for rev-share partners
   * @member {module:model/Price} price
   */
  exports.prototype['price'] = undefined;



  return exports;
}));


