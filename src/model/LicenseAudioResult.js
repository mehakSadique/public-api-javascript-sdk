/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.0.8
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Url'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Url'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.LicenseAudioResult = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.Url);
  }
}(this, function(ApiClient, Url) {
  'use strict';




  /**
   * The LicenseAudioResult model module.
   * @module model/LicenseAudioResult
   * @version 1.0.8
   */

  /**
   * Constructs a new <code>LicenseAudioResult</code>.
   * The response to a licensing request for an audio track
   * @alias module:model/LicenseAudioResult
   * @class
   * @param audio_id {String} ID of the track that was licensed
   */
  var exports = function(audio_id) {
    var _this = this;

    _this['audio_id'] = audio_id;


  };

  /**
   * Constructs a <code>LicenseAudioResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LicenseAudioResult} obj Optional instance to populate.
   * @return {module:model/LicenseAudioResult} The populated <code>LicenseAudioResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('audio_id')) {
        obj['audio_id'] = ApiClient.convertToType(data['audio_id'], 'String');
      }
      if (data.hasOwnProperty('download')) {
        obj['download'] = Url.constructFromObject(data['download']);
      }
      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'String');
      }
    }
    return obj;
  }

  /**
   * ID of the track that was licensed
   * @member {String} audio_id
   */
  exports.prototype['audio_id'] = undefined;
  /**
   * @member {module:model/Url} download
   */
  exports.prototype['download'] = undefined;
  /**
   * Error information if applicable
   * @member {String} error
   */
  exports.prototype['error'] = undefined;



  return exports;
}));


