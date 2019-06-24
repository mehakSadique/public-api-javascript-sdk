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
    define(['ApiClient', 'model/Audio', 'model/AudioDataList', 'model/AudioSearchResults', 'model/Collection', 'model/CollectionCreateRequest', 'model/CollectionCreateResponse', 'model/CollectionDataList', 'model/CollectionItemDataList', 'model/CollectionItemRequest', 'model/CollectionUpdateRequest', 'model/DownloadHistoryDataList', 'model/LicenseAudioRequest', 'model/LicenseAudioResultDataList', 'model/Url'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Audio'), require('../model/AudioDataList'), require('../model/AudioSearchResults'), require('../model/Collection'), require('../model/CollectionCreateRequest'), require('../model/CollectionCreateResponse'), require('../model/CollectionDataList'), require('../model/CollectionItemDataList'), require('../model/CollectionItemRequest'), require('../model/CollectionUpdateRequest'), require('../model/DownloadHistoryDataList'), require('../model/LicenseAudioRequest'), require('../model/LicenseAudioResultDataList'), require('../model/Url'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.AudioApi = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.Audio, root.ShutterstockApiReference.AudioDataList, root.ShutterstockApiReference.AudioSearchResults, root.ShutterstockApiReference.Collection, root.ShutterstockApiReference.CollectionCreateRequest, root.ShutterstockApiReference.CollectionCreateResponse, root.ShutterstockApiReference.CollectionDataList, root.ShutterstockApiReference.CollectionItemDataList, root.ShutterstockApiReference.CollectionItemRequest, root.ShutterstockApiReference.CollectionUpdateRequest, root.ShutterstockApiReference.DownloadHistoryDataList, root.ShutterstockApiReference.LicenseAudioRequest, root.ShutterstockApiReference.LicenseAudioResultDataList, root.ShutterstockApiReference.Url);
  }
}(this, function(ApiClient, Audio, AudioDataList, AudioSearchResults, Collection, CollectionCreateRequest, CollectionCreateResponse, CollectionDataList, CollectionItemDataList, CollectionItemRequest, CollectionUpdateRequest, DownloadHistoryDataList, LicenseAudioRequest, LicenseAudioResultDataList, Url) {
  'use strict';

  /**
   * Audio service.
   * @module api/AudioApi
   * @version 1.0.9
   */

  /**
   * Constructs a new AudioApi. 
   * @alias module:api/AudioApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Add audio tracks to collections
     * This endpoint adds one or more tracks to a collection by track IDs.
     * @param {String} id Collection ID
     * @param {module:model/CollectionItemRequest} body List of items to add to collection
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.addSoundboxItemsWithHttpInfo = function(id, body) {
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling addSoundboxItems");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addSoundboxItems");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['customer_accessCode'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/audio/collections/{id}/items', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add audio tracks to collections
     * This endpoint adds one or more tracks to a collection by track IDs.
     * @param {String} id Collection ID
     * @param {module:model/CollectionItemRequest} body List of items to add to collection
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.addSoundboxItems = function(id, body) {
      return this.addSoundboxItemsWithHttpInfo(id, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create audio collections
     * This endpoint creates one or more collections (soundboxes). To add tracks, use &#x60;POST /v2/audio/collections/{id}/items&#x60;.
     * @param {module:model/CollectionCreateRequest} body Collection metadata
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CollectionCreateResponse} and HTTP response
     */
    this.createSoundboxWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createSoundbox");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['customer_accessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CollectionCreateResponse;

      return this.apiClient.callApi(
        '/v2/audio/collections', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create audio collections
     * This endpoint creates one or more collections (soundboxes). To add tracks, use &#x60;POST /v2/audio/collections/{id}/items&#x60;.
     * @param {module:model/CollectionCreateRequest} body Collection metadata
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CollectionCreateResponse}
     */
    this.createSoundbox = function(body) {
      return this.createSoundboxWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete audio collections
     * This endpoint deletes a collection.
     * @param {String} id Collection ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteSoundboxWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteSoundbox");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['customer_accessCode'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/audio/collections/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete audio collections
     * This endpoint deletes a collection.
     * @param {String} id Collection ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteSoundbox = function(id) {
      return this.deleteSoundboxWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove audio tracks from collections
     * This endpoint removes one or more tracks from a collection.
     * @param {String} id Collection ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.item_id One or more item IDs to remove from the collection
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteSoundboxItemsWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteSoundboxItems");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
        'item_id': {
          value: opts['item_id'],
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['customer_accessCode'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/audio/collections/{id}/items', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Remove audio tracks from collections
     * This endpoint removes one or more tracks from a collection.
     * @param {String} id Collection ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.item_id One or more item IDs to remove from the collection
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteSoundboxItems = function(id, opts) {
      return this.deleteSoundboxItemsWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Download audio tracks
     * This endpoint redownloads tracks that you have already received a license for.
     * @param {String} id License ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Url} and HTTP response
     */
    this.downloadTracksWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling downloadTracks");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['customer_accessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Url;

      return this.apiClient.callApi(
        '/v2/audio/licenses/{id}/downloads', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Download audio tracks
     * This endpoint redownloads tracks that you have already received a license for.
     * @param {String} id License ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Url}
     */
    this.downloadTracks = function(id) {
      return this.downloadTracksWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List audio licenses
     * This endpoint lists existing licenses. You can filter the results according to the track ID to see if you have an existing license for a specific track.
     * @param {Object} opts Optional parameters
     * @param {String} opts.audio_id Show licenses for the specified track ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DownloadHistoryDataList} and HTTP response
     */
    this.getAudioLicenseListWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'audio_id': opts['audio_id'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['customer_accessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DownloadHistoryDataList;

      return this.apiClient.callApi(
        '/v2/audio/licenses', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List audio licenses
     * This endpoint lists existing licenses. You can filter the results according to the track ID to see if you have an existing license for a specific track.
     * @param {Object} opts Optional parameters
     * @param {String} opts.audio_id Show licenses for the specified track ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DownloadHistoryDataList}
     */
    this.getAudioLicenseList = function(opts) {
      return this.getAudioLicenseListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the details of audio collections
     * This endpoint gets more detailed information about a collection, including the number of items in it and when it was last updated. To get the tracks in collections, use &#x60;GET /v2/audio/collections/{id}/items&#x60;.
     * @param {String} id Collection ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Collection} and HTTP response
     */
    this.getSoundboxWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSoundbox");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['customer_accessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Collection;

      return this.apiClient.callApi(
        '/v2/audio/collections/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the details of audio collections
     * This endpoint gets more detailed information about a collection, including the number of items in it and when it was last updated. To get the tracks in collections, use &#x60;GET /v2/audio/collections/{id}/items&#x60;.
     * @param {String} id Collection ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Collection}
     */
    this.getSoundbox = function(id) {
      return this.getSoundboxWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the contents of audio collections
     * This endpoint lists the IDs of tracks in a collection and the date that each was added.
     * @param {String} id Collection ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number (default to 1)
     * @param {Number} opts.per_page Number of results per page (default to 100)
     * @param {module:model/String} opts.sort Sort order (default to oldest)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CollectionItemDataList} and HTTP response
     */
    this.getSoundboxItemsWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSoundboxItems");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['per_page'],
        'sort': opts['sort'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['customer_accessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = CollectionItemDataList;

      return this.apiClient.callApi(
        '/v2/audio/collections/{id}/items', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the contents of audio collections
     * This endpoint lists the IDs of tracks in a collection and the date that each was added.
     * @param {String} id Collection ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number (default to 1)
     * @param {Number} opts.per_page Number of results per page (default to 100)
     * @param {module:model/String} opts.sort Sort order (default to oldest)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CollectionItemDataList}
     */
    this.getSoundboxItems = function(id, opts) {
      return this.getSoundboxItemsWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List audio collections
     * This endpoint lists your collections of audio tracks and their basic attributes.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number (default to 1)
     * @param {Number} opts.per_page Number of results per page (default to 100)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CollectionDataList} and HTTP response
     */
    this.getSoundboxListWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['per_page'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['customer_accessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = CollectionDataList;

      return this.apiClient.callApi(
        '/v2/audio/collections', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List audio collections
     * This endpoint lists your collections of audio tracks and their basic attributes.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number (default to 1)
     * @param {Number} opts.per_page Number of results per page (default to 100)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CollectionDataList}
     */
    this.getSoundboxList = function(opts) {
      return this.getSoundboxListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get details about audio tracks
     * This endpoint shows information about a track, including its genres, instruments, and other attributes.
     * @param {String} id Audio track ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.view Amount of detail to render in the response (default to full)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Audio} and HTTP response
     */
    this.getTrackWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getTrack");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'view': opts['view'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic', 'customer_accessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Audio;

      return this.apiClient.callApi(
        '/v2/audio/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get details about audio tracks
     * This endpoint shows information about a track, including its genres, instruments, and other attributes.
     * @param {String} id Audio track ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.view Amount of detail to render in the response (default to full)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Audio}
     */
    this.getTrack = function(id, opts) {
      return this.getTrackWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List audio tracks
     * This endpoint lists information about one or more audio tracks, including the description and publication date.
     * @param {Array.<String>} id One or more audio IDs
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.view Amount of detail to render in the response (default to minimal)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AudioDataList} and HTTP response
     */
    this.getTrackListWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getTrackList");
      }


      var pathParams = {
      };
      var queryParams = {
        'view': opts['view'],
      };
      var collectionQueryParams = {
        'id': {
          value: id,
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic', 'customer_accessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = AudioDataList;

      return this.apiClient.callApi(
        '/v2/audio', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List audio tracks
     * This endpoint lists information about one or more audio tracks, including the description and publication date.
     * @param {Array.<String>} id One or more audio IDs
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.view Amount of detail to render in the response (default to minimal)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AudioDataList}
     */
    this.getTrackList = function(id, opts) {
      return this.getTrackListWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * License audio tracks
     * This endpoint gets licenses for one or more tracks.
     * @param {module:model/LicenseAudioRequest} body Tracks to license
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.license License type (default to audio_standard)
     * @param {String} opts.search_id The ID of the search that led to licensing this track
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LicenseAudioResultDataList} and HTTP response
     */
    this.licenseTrackWithHttpInfo = function(body, opts) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling licenseTrack");
      }


      var pathParams = {
      };
      var queryParams = {
        'license': opts['license'],
        'search_id': opts['search_id'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['customer_accessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LicenseAudioResultDataList;

      return this.apiClient.callApi(
        '/v2/audio/licenses', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * License audio tracks
     * This endpoint gets licenses for one or more tracks.
     * @param {module:model/LicenseAudioRequest} body Tracks to license
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.license License type (default to audio_standard)
     * @param {String} opts.search_id The ID of the search that led to licensing this track
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LicenseAudioResultDataList}
     */
    this.licenseTrack = function(body, opts) {
      return this.licenseTrackWithHttpInfo(body, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Rename audio collections
     * This endpoint sets a new name for a collection.
     * @param {String} id Collection ID
     * @param {module:model/CollectionUpdateRequest} body Collection changes
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.renameSoundboxWithHttpInfo = function(id, body) {
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling renameSoundbox");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling renameSoundbox");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['customer_accessCode'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/audio/collections/{id}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Rename audio collections
     * This endpoint sets a new name for a collection.
     * @param {String} id Collection ID
     * @param {module:model/CollectionUpdateRequest} body Collection changes
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.renameSoundbox = function(id, body) {
      return this.renameSoundboxWithHttpInfo(id, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search for tracks
     * This endpoint searches for tracks. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.artists Show tracks with one of the specified artist names or IDs
     * @param {Number} opts.bpm (Deprecated; use bpm_from and bpm_to instead) Show tracks with the specified beats per minute
     * @param {Number} opts.bpm_from Show tracks with the specified beats per minute or faster
     * @param {Number} opts.bpm_to Show tracks with the specified beats per minute or slower
     * @param {Number} opts.duration Show tracks with the specified duration (seconds)
     * @param {Number} opts.duration_from Show tracks with the specified duration or longer (seconds)
     * @param {Number} opts.duration_to Show tracks with the specified duration or shorter (seconds)
     * @param {Array.<module:model/String>} opts.genre Show tracks with each of the specified genres
     * @param {Boolean} opts.is_instrumental Show instrumental music only
     * @param {Array.<String>} opts.instruments Show tracks with each of the specified instruments
     * @param {Array.<module:model/String>} opts.moods Show tracks with each of the specified moods
     * @param {Number} opts.page Page number (default to 1)
     * @param {Number} opts.per_page Number of results per page (default to 20)
     * @param {String} opts.query One or more search terms separated by spaces
     * @param {module:model/String} opts.sort Sort by
     * @param {module:model/String} opts.sort_order Sort order, asc or desc (default to desc)
     * @param {String} opts.vocal_description Show tracks with the specified vocal description (male, female)
     * @param {module:model/String} opts.view Amount of detail to render in the response (default to minimal)
     * @param {String} opts.fields Fields to display in the response; see the documentation for the fields parameter in the overview section
     * @param {module:model/String} opts.library Which library to search (default to premier)
     * @param {String} opts.language Which language to search in
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AudioSearchResults} and HTTP response
     */
    this.searchAudioWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'bpm': opts['bpm'],
        'bpm_from': opts['bpm_from'],
        'bpm_to': opts['bpm_to'],
        'duration': opts['duration'],
        'duration_from': opts['duration_from'],
        'duration_to': opts['duration_to'],
        'is_instrumental': opts['is_instrumental'],
        'page': opts['page'],
        'per_page': opts['per_page'],
        'query': opts['query'],
        'sort': opts['sort'],
        'sort_order': opts['sort_order'],
        'vocal_description': opts['vocal_description'],
        'view': opts['view'],
        'fields': opts['fields'],
        'library': opts['library'],
        'language': opts['language'],
      };
      var collectionQueryParams = {
        'artists': {
          value: opts['artists'],
          collectionFormat: 'multi'
        },
        'genre': {
          value: opts['genre'],
          collectionFormat: 'multi'
        },
        'instruments': {
          value: opts['instruments'],
          collectionFormat: 'multi'
        },
        'moods': {
          value: opts['moods'],
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic', 'customer_accessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = AudioSearchResults;

      return this.apiClient.callApi(
        '/v2/audio/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Search for tracks
     * This endpoint searches for tracks. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.artists Show tracks with one of the specified artist names or IDs
     * @param {Number} opts.bpm (Deprecated; use bpm_from and bpm_to instead) Show tracks with the specified beats per minute
     * @param {Number} opts.bpm_from Show tracks with the specified beats per minute or faster
     * @param {Number} opts.bpm_to Show tracks with the specified beats per minute or slower
     * @param {Number} opts.duration Show tracks with the specified duration (seconds)
     * @param {Number} opts.duration_from Show tracks with the specified duration or longer (seconds)
     * @param {Number} opts.duration_to Show tracks with the specified duration or shorter (seconds)
     * @param {Array.<module:model/String>} opts.genre Show tracks with each of the specified genres
     * @param {Boolean} opts.is_instrumental Show instrumental music only
     * @param {Array.<String>} opts.instruments Show tracks with each of the specified instruments
     * @param {Array.<module:model/String>} opts.moods Show tracks with each of the specified moods
     * @param {Number} opts.page Page number (default to 1)
     * @param {Number} opts.per_page Number of results per page (default to 20)
     * @param {String} opts.query One or more search terms separated by spaces
     * @param {module:model/String} opts.sort Sort by
     * @param {module:model/String} opts.sort_order Sort order, asc or desc (default to desc)
     * @param {String} opts.vocal_description Show tracks with the specified vocal description (male, female)
     * @param {module:model/String} opts.view Amount of detail to render in the response (default to minimal)
     * @param {String} opts.fields Fields to display in the response; see the documentation for the fields parameter in the overview section
     * @param {module:model/String} opts.library Which library to search (default to premier)
     * @param {String} opts.language Which language to search in
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AudioSearchResults}
     */
    this.searchAudio = function(opts) {
      return this.searchAudioWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
