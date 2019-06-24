/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.0.9
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
    define(['ApiClient', 'model/Album', 'model/Artist', 'model/AudioAssets', 'model/Contributor', 'model/ModelRelease'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Album'), require('./Artist'), require('./AudioAssets'), require('./Contributor'), require('./ModelRelease'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.Audio = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.Album, root.ShutterstockApiReference.Artist, root.ShutterstockApiReference.AudioAssets, root.ShutterstockApiReference.Contributor, root.ShutterstockApiReference.ModelRelease);
  }
}(this, function(ApiClient, Album, Artist, AudioAssets, Contributor, ModelRelease) {
  'use strict';




  /**
   * The Audio model module.
   * @module model/Audio
   * @version 1.0.9
   */

  /**
   * Constructs a new <code>Audio</code>.
   * Audio metadata
   * @alias module:model/Audio
   * @class
   * @param contributor {module:model/Contributor} 
   * @param id {String} Shutterstock ID of this track
   * @param media_type {String} Media type of this track; should always be \"audio\"
   */
  var exports = function(contributor, id, media_type) {
    var _this = this;







    _this['contributor'] = contributor;




    _this['id'] = id;







    _this['media_type'] = media_type;











  };

  /**
   * Constructs a <code>Audio</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Audio} obj Optional instance to populate.
   * @return {module:model/Audio} The populated <code>Audio</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('added_date')) {
        obj['added_date'] = ApiClient.convertToType(data['added_date'], 'Date');
      }
      if (data.hasOwnProperty('affiliate_url')) {
        obj['affiliate_url'] = ApiClient.convertToType(data['affiliate_url'], 'String');
      }
      if (data.hasOwnProperty('album')) {
        obj['album'] = Album.constructFromObject(data['album']);
      }
      if (data.hasOwnProperty('artists')) {
        obj['artists'] = ApiClient.convertToType(data['artists'], [Artist]);
      }
      if (data.hasOwnProperty('assets')) {
        obj['assets'] = AudioAssets.constructFromObject(data['assets']);
      }
      if (data.hasOwnProperty('bpm')) {
        obj['bpm'] = ApiClient.convertToType(data['bpm'], 'Number');
      }
      if (data.hasOwnProperty('contributor')) {
        obj['contributor'] = Contributor.constructFromObject(data['contributor']);
      }
      if (data.hasOwnProperty('deleted_time')) {
        obj['deleted_time'] = ApiClient.convertToType(data['deleted_time'], 'Date');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('duration')) {
        obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');
      }
      if (data.hasOwnProperty('genres')) {
        obj['genres'] = ApiClient.convertToType(data['genres'], ['String']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('instruments')) {
        obj['instruments'] = ApiClient.convertToType(data['instruments'], ['String']);
      }
      if (data.hasOwnProperty('is_adult')) {
        obj['is_adult'] = ApiClient.convertToType(data['is_adult'], 'Boolean');
      }
      if (data.hasOwnProperty('is_instrumental')) {
        obj['is_instrumental'] = ApiClient.convertToType(data['is_instrumental'], 'Boolean');
      }
      if (data.hasOwnProperty('isrc')) {
        obj['isrc'] = ApiClient.convertToType(data['isrc'], 'String');
      }
      if (data.hasOwnProperty('keywords')) {
        obj['keywords'] = ApiClient.convertToType(data['keywords'], ['String']);
      }
      if (data.hasOwnProperty('language')) {
        obj['language'] = ApiClient.convertToType(data['language'], 'String');
      }
      if (data.hasOwnProperty('lyrics')) {
        obj['lyrics'] = ApiClient.convertToType(data['lyrics'], 'String');
      }
      if (data.hasOwnProperty('media_type')) {
        obj['media_type'] = ApiClient.convertToType(data['media_type'], 'String');
      }
      if (data.hasOwnProperty('model_releases')) {
        obj['model_releases'] = ApiClient.convertToType(data['model_releases'], [ModelRelease]);
      }
      if (data.hasOwnProperty('moods')) {
        obj['moods'] = ApiClient.convertToType(data['moods'], ['String']);
      }
      if (data.hasOwnProperty('published_time')) {
        obj['published_time'] = ApiClient.convertToType(data['published_time'], 'Date');
      }
      if (data.hasOwnProperty('recording_version')) {
        obj['recording_version'] = ApiClient.convertToType(data['recording_version'], 'String');
      }
      if (data.hasOwnProperty('releases')) {
        obj['releases'] = ApiClient.convertToType(data['releases'], ['String']);
      }
      if (data.hasOwnProperty('similar_artists')) {
        obj['similar_artists'] = ApiClient.convertToType(data['similar_artists'], [Artist]);
      }
      if (data.hasOwnProperty('submitted_time')) {
        obj['submitted_time'] = ApiClient.convertToType(data['submitted_time'], 'Date');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('updated_time')) {
        obj['updated_time'] = ApiClient.convertToType(data['updated_time'], 'Date');
      }
      if (data.hasOwnProperty('vocal_description')) {
        obj['vocal_description'] = ApiClient.convertToType(data['vocal_description'], 'String');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
    }
    return obj;
  }

  /**
   * Date this track was added to the Shutterstock library, in the format: YYYY-MM-DD
   * @member {Date} added_date
   */
  exports.prototype['added_date'] = undefined;
  /**
   * Affiliate referral link; appears only for registered affiliate partners
   * @member {String} affiliate_url
   */
  exports.prototype['affiliate_url'] = undefined;
  /**
   * @member {module:model/Album} album
   */
  exports.prototype['album'] = undefined;
  /**
   * List of artists
   * @member {Array.<module:model/Artist>} artists
   */
  exports.prototype['artists'] = undefined;
  /**
   * @member {module:model/AudioAssets} assets
   */
  exports.prototype['assets'] = undefined;
  /**
   * BPM (beats per minute) of this track
   * @member {Number} bpm
   */
  exports.prototype['bpm'] = undefined;
  /**
   * @member {module:model/Contributor} contributor
   */
  exports.prototype['contributor'] = undefined;
  /**
   * @member {Date} deleted_time
   */
  exports.prototype['deleted_time'] = undefined;
  /**
   * Description of this track
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Duration of this track in seconds
   * @member {Number} duration
   */
  exports.prototype['duration'] = undefined;
  /**
   * List of all genres for this track
   * @member {Array.<String>} genres
   */
  exports.prototype['genres'] = undefined;
  /**
   * Shutterstock ID of this track
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * List of all instruments that appear in this track
   * @member {Array.<String>} instruments
   */
  exports.prototype['instruments'] = undefined;
  /**
   * Whether or not this track contains adult content
   * @member {Boolean} is_adult
   */
  exports.prototype['is_adult'] = undefined;
  /**
   * Whether or not this track is purely instrumental (lacking lyrics)
   * @member {Boolean} is_instrumental
   */
  exports.prototype['is_instrumental'] = undefined;
  /**
   * 
   * @member {String} isrc
   */
  exports.prototype['isrc'] = undefined;
  /**
   * List of all keywords for this track
   * @member {Array.<String>} keywords
   */
  exports.prototype['keywords'] = undefined;
  /**
   * Language of this track's lyrics
   * @member {String} language
   */
  exports.prototype['language'] = undefined;
  /**
   * Lyrics of this track
   * @member {String} lyrics
   */
  exports.prototype['lyrics'] = undefined;
  /**
   * Media type of this track; should always be \"audio\"
   * @member {String} media_type
   */
  exports.prototype['media_type'] = undefined;
  /**
   * List of all model releases for this track
   * @member {Array.<module:model/ModelRelease>} model_releases
   */
  exports.prototype['model_releases'] = undefined;
  /**
   * List of all moods of this track
   * @member {Array.<String>} moods
   */
  exports.prototype['moods'] = undefined;
  /**
   * Time this track was published, in the format YYYY-MM-DDThh:mm:ssZ
   * @member {Date} published_time
   */
  exports.prototype['published_time'] = undefined;
  /**
   * Recording version of this track
   * @member {String} recording_version
   */
  exports.prototype['recording_version'] = undefined;
  /**
   * List of all releases of this track
   * @member {Array.<String>} releases
   */
  exports.prototype['releases'] = undefined;
  /**
   * List of all similar artists of this track
   * @member {Array.<module:model/Artist>} similar_artists
   */
  exports.prototype['similar_artists'] = undefined;
  /**
   * Time this track was submitted, in the format YYYY-MM-DDThh:mm:ssZ
   * @member {Date} submitted_time
   */
  exports.prototype['submitted_time'] = undefined;
  /**
   * Title of this track
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * Time this track was last updated, in the format YYYY-MM-DDThh:mm:ssZ
   * @member {Date} updated_time
   */
  exports.prototype['updated_time'] = undefined;
  /**
   * Vocal description of this track
   * @member {String} vocal_description
   */
  exports.prototype['vocal_description'] = undefined;
  /**
   * Link to track information page; included only for certain accounts
   * @member {String} url
   */
  exports.prototype['url'] = undefined;



  return exports;
}));


