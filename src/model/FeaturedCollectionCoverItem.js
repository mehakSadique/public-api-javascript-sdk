/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.0.4
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.FeaturedCollectionCoverItem = factory(root.ShutterstockApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FeaturedCollectionCoverItem model module.
   * @module model/FeaturedCollectionCoverItem
   * @version 1.0.4
   */

  /**
   * Constructs a new <code>FeaturedCollectionCoverItem</code>.
   * Featured collection cover item metadata
   * @alias module:model/FeaturedCollectionCoverItem
   * @class
   * @param url {String} URL of the collection cover item
   */
  var exports = function(url) {
    var _this = this;

    _this['url'] = url;
  };

  /**
   * Constructs a <code>FeaturedCollectionCoverItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FeaturedCollectionCoverItem} obj Optional instance to populate.
   * @return {module:model/FeaturedCollectionCoverItem} The populated <code>FeaturedCollectionCoverItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
    }
    return obj;
  }

  /**
   * URL of the collection cover item
   * @member {String} url
   */
  exports.prototype['url'] = undefined;



  return exports;
}));


