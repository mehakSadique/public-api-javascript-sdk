/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.0.17
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
    define(['ApiClient', 'model/LicenseEditorialContent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LicenseEditorialContent'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.LicenseEditorialContentRequest = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.LicenseEditorialContent);
  }
}(this, function(ApiClient, LicenseEditorialContent) {
  'use strict';




  /**
   * The LicenseEditorialContentRequest model module.
   * @module model/LicenseEditorialContentRequest
   * @version 1.0.17
   */

  /**
   * Constructs a new <code>LicenseEditorialContentRequest</code>.
   * License editorial content request
   * @alias module:model/LicenseEditorialContentRequest
   * @class
   * @param country {String} 3-letter ISO 3166-1 alpha-3 country code for where the editorial content will be distributed; this mandatory value is used for rights checks
   * @param editorial {Array.<module:model/LicenseEditorialContent>} Editorial content to license
   */
  var exports = function(country, editorial) {
    var _this = this;

    _this['country'] = country;
    _this['editorial'] = editorial;
  };

  /**
   * Constructs a <code>LicenseEditorialContentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LicenseEditorialContentRequest} obj Optional instance to populate.
   * @return {module:model/LicenseEditorialContentRequest} The populated <code>LicenseEditorialContentRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('editorial')) {
        obj['editorial'] = ApiClient.convertToType(data['editorial'], [LicenseEditorialContent]);
      }
    }
    return obj;
  }

  /**
   * 3-letter ISO 3166-1 alpha-3 country code for where the editorial content will be distributed; this mandatory value is used for rights checks
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * Editorial content to license
   * @member {Array.<module:model/LicenseEditorialContent>} editorial
   */
  exports.prototype['editorial'] = undefined;



  return exports;
}));


