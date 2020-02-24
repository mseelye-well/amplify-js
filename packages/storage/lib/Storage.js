'use strict';
/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
var __assign =
	(this && this.__assign) ||
	function() {
		__assign =
			Object.assign ||
			function(t) {
				for (var s, i = 1, n = arguments.length; i < n; i++) {
					s = arguments[i];
					for (var p in s)
						if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
				}
				return t;
			};
		return __assign.apply(this, arguments);
	};
var __awaiter =
	(this && this.__awaiter) ||
	function(thisArg, _arguments, P, generator) {
		function adopt(value) {
			return value instanceof P
				? value
				: new P(function(resolve) {
						resolve(value);
				  });
		}
		return new (P || (P = Promise))(function(resolve, reject) {
			function fulfilled(value) {
				try {
					step(generator.next(value));
				} catch (e) {
					reject(e);
				}
			}
			function rejected(value) {
				try {
					step(generator['throw'](value));
				} catch (e) {
					reject(e);
				}
			}
			function step(result) {
				result.done
					? resolve(result.value)
					: adopt(result.value).then(fulfilled, rejected);
			}
			step((generator = generator.apply(thisArg, _arguments || [])).next());
		});
	};
var __generator =
	(this && this.__generator) ||
	function(thisArg, body) {
		var _ = {
				label: 0,
				sent: function() {
					if (t[0] & 1) throw t[1];
					return t[1];
				},
				trys: [],
				ops: [],
			},
			f,
			y,
			t,
			g;
		return (
			(g = { next: verb(0), throw: verb(1), return: verb(2) }),
			typeof Symbol === 'function' &&
				(g[Symbol.iterator] = function() {
					return this;
				}),
			g
		);
		function verb(n) {
			return function(v) {
				return step([n, v]);
			};
		}
		function step(op) {
			if (f) throw new TypeError('Generator is already executing.');
			while (_)
				try {
					if (
						((f = 1),
						y &&
							(t =
								op[0] & 2
									? y['return']
									: op[0]
									? y['throw'] || ((t = y['return']) && t.call(y), 0)
									: y.next) &&
							!(t = t.call(y, op[1])).done)
					)
						return t;
					if (((y = 0), t)) op = [op[0] & 2, t.value];
					switch (op[0]) {
						case 0:
						case 1:
							t = op;
							break;
						case 4:
							_.label++;
							return { value: op[1], done: false };
						case 5:
							_.label++;
							y = op[1];
							op = [0];
							continue;
						case 7:
							op = _.ops.pop();
							_.trys.pop();
							continue;
						default:
							if (
								!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
								(op[0] === 6 || op[0] === 2)
							) {
								_ = 0;
								continue;
							}
							if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
								_.label = op[1];
								break;
							}
							if (op[0] === 6 && _.label < t[1]) {
								_.label = t[1];
								t = op;
								break;
							}
							if (t && _.label < t[2]) {
								_.label = t[2];
								_.ops.push(op);
								break;
							}
							if (t[2]) _.ops.pop();
							_.trys.pop();
							continue;
					}
					op = body.call(thisArg, _);
				} catch (e) {
					op = [6, e];
					y = 0;
				} finally {
					f = t = 0;
				}
			if (op[0] & 5) throw op[1];
			return { value: op[0] ? op[1] : void 0, done: true };
		}
	};
Object.defineProperty(exports, '__esModule', { value: true });
var core_1 = require('@aws-amplify/core');
var AWSS3Provider_1 = require('./Providers/AWSS3Provider');
var logger = new core_1.ConsoleLogger('StorageClass');
var DEFAULT_PROVIDER = 'AWSS3';
/**
 * Provide storage methods to use AWS S3
 */
var StorageClass = /** @class */ (function() {
	/**
	 * Initialize Storage
	 * @param {Object} config - Configuration object for storage
	 */
	function StorageClass() {
		this._config = {};
		this._pluggables = [];
		logger.debug('Storage Options', this._config);
		this.get = this.get.bind(this);
		this.put = this.put.bind(this);
		this.remove = this.remove.bind(this);
		this.list = this.list.bind(this);
	}
	StorageClass.prototype.getModuleName = function() {
		return 'Storage';
	};
	/**
	 * add plugin into Storage category
	 * @param {Object} pluggable - an instance of the plugin
	 */
	StorageClass.prototype.addPluggable = function(pluggable) {
		if (pluggable && pluggable.getCategory() === 'Storage') {
			this._pluggables.push(pluggable);
			var config = {};
			config = pluggable.configure(this._config[pluggable.getProviderName()]);
			return config;
		}
	};
	/**
	 * Get the plugin object
	 * @param providerName - the name of the plugin
	 */
	StorageClass.prototype.getPluggable = function(providerName) {
		var pluggable = this._pluggables.find(function(pluggable) {
			return pluggable.getProviderName() === providerName;
		});
		if (pluggable === undefined) {
			logger.debug('No plugin found with providerName', providerName);
			return null;
		} else return pluggable;
	};
	/**
	 * Remove the plugin object
	 * @param providerName - the name of the plugin
	 */
	StorageClass.prototype.removePluggable = function(providerName) {
		this._pluggables = this._pluggables.filter(function(pluggable) {
			return pluggable.getProviderName() !== providerName;
		});
		return;
	};
	/**
	 * Configure Storage
	 * @param {Object} config - Configuration object for storage
	 * @return {Object} - Current configuration
	 */
	StorageClass.prototype.configure = function(config) {
		var _this = this;
		logger.debug('configure Storage');
		if (!config) return this._config;
		var amplifyConfig = core_1.Parser.parseMobilehubConfig(config);
		var storageKeysFromConfig = Object.keys(amplifyConfig.Storage);
		var storageArrayKeys = [
			'bucket',
			'region',
			'level',
			'track',
			'customPrefix',
			'serverSideEncryption',
			'SSECustomerAlgorithm',
			'SSECustomerKey',
			'SSECustomerKeyMD5',
			'SSEKMSKeyId',
		];
		var isInStorageArrayKeys = function(k) {
			return storageArrayKeys.some(function(x) {
				return x === k;
			});
		};
		var checkConfigKeysFromArray = function(k) {
			return k.find(function(k) {
				return isInStorageArrayKeys(k);
			});
		};
		if (
			storageKeysFromConfig &&
			checkConfigKeysFromArray(storageKeysFromConfig) &&
			!amplifyConfig.Storage[DEFAULT_PROVIDER]
		) {
			amplifyConfig.Storage[DEFAULT_PROVIDER] = {};
		}
		Object.entries(amplifyConfig.Storage).map(function(_a) {
			var key = _a[0],
				value = _a[1];
			if (key && isInStorageArrayKeys(key) && value !== undefined) {
				amplifyConfig.Storage[DEFAULT_PROVIDER][key] = value;
				delete amplifyConfig.Storage[key];
			}
		});
		// only update new values for each provider
		Object.keys(amplifyConfig.Storage).forEach(function(providerName) {
			if (typeof amplifyConfig.Storage[providerName] !== 'string') {
				_this._config[providerName] = __assign(
					__assign({}, _this._config[providerName]),
					amplifyConfig.Storage[providerName]
				);
			}
		});
		this._pluggables.forEach(function(pluggable) {
			pluggable.configure(_this._config[pluggable.getProviderName()]);
		});
		if (this._pluggables.length === 0) {
			this.addPluggable(new AWSS3Provider_1.default());
		}
		return this._config;
	};
	/**
	 * Get a presigned URL of the file or the object data when download:true
	 *
	 * @param {String} key - key of the object
	 * @param {Object} [config] - { level : private|protected|public, download: true|false }
	 * @return - A promise resolves to either a presigned url or the object
	 */
	StorageClass.prototype.get = function(key, config) {
		return __awaiter(this, void 0, void 0, function() {
			var _a, provider, prov;
			return __generator(this, function(_b) {
				(_a = (config || {}).provider),
					(provider = _a === void 0 ? DEFAULT_PROVIDER : _a);
				prov = this._pluggables.find(function(pluggable) {
					return pluggable.getProviderName() === provider;
				});
				if (prov === undefined) {
					logger.debug('No plugin found with providerName', provider);
					Promise.reject('No plugin found in Storage for the provider');
				}
				return [2 /*return*/, prov.get(key, config)];
			});
		});
	};
	/**
	 * Put a file in storage bucket specified to configure method
	 * @param {String} key - key of the object
	 * @param {Object} object - File to be put in bucket
	 * @param {Object} [config] - { level : private|protected|public, contentType: MIME Types,
	 *  progressCallback: function }
	 * @return - promise resolves to object on success
	 */
	StorageClass.prototype.put = function(key, object, config) {
		return __awaiter(this, void 0, void 0, function() {
			var _a, provider, prov;
			return __generator(this, function(_b) {
				(_a = (config || {}).provider),
					(provider = _a === void 0 ? DEFAULT_PROVIDER : _a);
				prov = this._pluggables.find(function(pluggable) {
					return pluggable.getProviderName() === provider;
				});
				if (prov === undefined) {
					logger.debug('No plugin found with providerName', provider);
					Promise.reject('No plugin found in Storage for the provider');
				}
				return [2 /*return*/, prov.put(key, object, config)];
			});
		});
	};
	/**
	 * Remove the object for specified key
	 * @param {String} key - key of the object
	 * @param {Object} [config] - { level : private|protected|public }
	 * @return - Promise resolves upon successful removal of the object
	 */
	StorageClass.prototype.remove = function(key, config) {
		return __awaiter(this, void 0, void 0, function() {
			var _a, provider, prov;
			return __generator(this, function(_b) {
				(_a = (config || {}).provider),
					(provider = _a === void 0 ? DEFAULT_PROVIDER : _a);
				prov = this._pluggables.find(function(pluggable) {
					return pluggable.getProviderName() === provider;
				});
				if (prov === undefined) {
					logger.debug('No plugin found with providerName', provider);
					Promise.reject('No plugin found in Storage for the provider');
				}
				return [2 /*return*/, prov.remove(key, config)];
			});
		});
	};
	/**
	 * List bucket objects relative to the level and prefix specified
	 * @param {String} path - the path that contains objects
	 * @param {Object} [config] - { level : private|protected|public, maxKeys: NUMBER }
	 * @return - Promise resolves to list of keys for all objects in path
	 */
	StorageClass.prototype.list = function(path, config) {
		return __awaiter(this, void 0, void 0, function() {
			var _a, provider, prov;
			return __generator(this, function(_b) {
				(_a = (config || {}).provider),
					(provider = _a === void 0 ? DEFAULT_PROVIDER : _a);
				prov = this._pluggables.find(function(pluggable) {
					return pluggable.getProviderName() === provider;
				});
				if (prov === undefined) {
					logger.debug('No plugin found with providerName', provider);
					Promise.reject('No plugin found in Storage for the provider');
				}
				return [2 /*return*/, prov.list(path, config)];
			});
		});
	};
	return StorageClass;
})();
exports.default = StorageClass;
//# sourceMappingURL=Storage.js.map
