'use strict';
/*
 * Copyright 2017-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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
var Kinesis = require('aws-sdk/clients/kinesis');
var logger = new core_1.ConsoleLogger('AWSKineisProvider');
// events buffer
var BUFFER_SIZE = 1000;
var FLUSH_SIZE = 100;
var FLUSH_INTERVAL = 5 * 1000; // 5s
var RESEND_LIMIT = 5;
var AWSKinesisProvider = /** @class */ (function() {
	function AWSKinesisProvider(config) {
		this._buffer = [];
		this._config = config || {};
		this._config.bufferSize = this._config.bufferSize || BUFFER_SIZE;
		this._config.flushSize = this._config.flushSize || FLUSH_SIZE;
		this._config.flushInterval = this._config.flushInterval || FLUSH_INTERVAL;
		this._config.resendLimit = this._config.resendLimit || RESEND_LIMIT;
		this._setupTimer();
	}
	AWSKinesisProvider.prototype._setupTimer = function() {
		var _this = this;
		if (this._timer) {
			clearInterval(this._timer);
		}
		var _a = this._config,
			flushSize = _a.flushSize,
			flushInterval = _a.flushInterval;
		this._timer = setInterval(function() {
			var size =
				_this._buffer.length < flushSize ? _this._buffer.length : flushSize;
			var events = [];
			for (var i = 0; i < size; i += 1) {
				var params = _this._buffer.shift();
				events.push(params);
			}
			_this._sendFromBuffer(events);
		}, flushInterval);
	};
	/**
	 * get the category of the plugin
	 */
	AWSKinesisProvider.prototype.getCategory = function() {
		return 'Analytics';
	};
	/**
	 * get provider name of the plugin
	 */
	AWSKinesisProvider.prototype.getProviderName = function() {
		return 'AWSKinesis';
	};
	/**
	 * configure the plugin
	 * @param {Object} config - configuration
	 */
	AWSKinesisProvider.prototype.configure = function(config) {
		logger.debug('configure Analytics', config);
		var conf = config || {};
		this._config = Object.assign({}, this._config, conf);
		this._setupTimer();
		return this._config;
	};
	/**
	 * record an event
	 * @param {Object} params - the params of an event
	 */
	AWSKinesisProvider.prototype.record = function(params) {
		return __awaiter(this, void 0, void 0, function() {
			var credentials;
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0:
						return [4 /*yield*/, this._getCredentials()];
					case 1:
						credentials = _a.sent();
						if (!credentials) return [2 /*return*/, Promise.resolve(false)];
						Object.assign(params, {
							config: this._config,
							credentials: credentials,
						});
						return [2 /*return*/, this._putToBuffer(params)];
				}
			});
		});
	};
	AWSKinesisProvider.prototype.updateEndpoint = function(params) {
		logger.debug('updateEndpoint is not implemented in Kinesis provider');
		return Promise.resolve(true);
	};
	/**
	 * @private
	 * @param params - params for the event recording
	 * Put events into buffer
	 */
	AWSKinesisProvider.prototype._putToBuffer = function(params) {
		if (this._buffer.length < BUFFER_SIZE) {
			this._buffer.push(params);
			return Promise.resolve(true);
		} else {
			logger.debug('exceed analytics events buffer size');
			return Promise.reject(false);
		}
	};
	AWSKinesisProvider.prototype._sendFromBuffer = function(events) {
		var _this = this;
		// collapse events by credentials
		// events = [ {params} ]
		var eventsGroups = [];
		var preCred = null;
		var group = [];
		for (var i = 0; i < events.length; i += 1) {
			var cred = events[i].credentials;
			if (i === 0) {
				group.push(events[i]);
				preCred = cred;
			} else {
				if (
					cred.sessionToken === preCred.sessionToken &&
					cred.identityId === preCred.identityId
				) {
					logger.debug('no change for cred, put event in the same group');
					group.push(events[i]);
				} else {
					eventsGroups.push(group);
					group = [];
					group.push(events[i]);
					preCred = cred;
				}
			}
		}
		eventsGroups.push(group);
		eventsGroups.map(function(evts) {
			_this._sendEvents(evts);
		});
	};
	AWSKinesisProvider.prototype._sendEvents = function(group) {
		var _this = this;
		if (group.length === 0) {
			return;
		}
		var _a = group[0],
			config = _a.config,
			credentials = _a.credentials;
		var initClients = this._init(config, credentials);
		if (!initClients) return false;
		var records = {};
		group.map(function(params) {
			// spit by streamName
			var evt = params.event;
			var streamName = evt.streamName;
			if (records[streamName] === undefined) {
				records[streamName] = [];
			}
			var Data = JSON.stringify(evt.data);
			var PartitionKey =
				evt.partitionKey || 'partition-' + credentials.identityId;
			var record = { Data: Data, PartitionKey: PartitionKey };
			records[streamName].push(record);
		});
		Object.keys(records).map(function(streamName) {
			logger.debug(
				'putting records to kinesis with records',
				records[streamName]
			);
			_this._kinesis.putRecords(
				{
					Records: records[streamName],
					StreamName: streamName,
				},
				function(err, data) {
					if (err) logger.debug('Failed to upload records to Kinesis', err);
					else logger.debug('Upload records to stream', streamName);
				}
			);
		});
	};
	AWSKinesisProvider.prototype._init = function(config, credentials) {
		logger.debug('init clients');
		if (
			this._kinesis &&
			this._config.credentials &&
			this._config.credentials.sessionToken === credentials.sessionToken &&
			this._config.credentials.identityId === credentials.identityId
		) {
			logger.debug('no change for analytics config, directly return from init');
			return true;
		}
		this._config.credentials = credentials;
		var region = config.region;
		return this._initKinesis(region, credentials);
	};
	AWSKinesisProvider.prototype._initKinesis = function(region, credentials) {
		logger.debug('initialize kinesis with credentials', credentials);
		this._kinesis = new Kinesis({
			apiVersion: '2013-12-02',
			region: region,
			credentials: credentials,
		});
		return true;
	};
	/**
	 * @private
	 * check if current credentials exists
	 */
	AWSKinesisProvider.prototype._getCredentials = function() {
		var _this = this;
		return core_1.Credentials.get()
			.then(function(credentials) {
				if (!credentials) return null;
				logger.debug(
					'set credentials for analytics',
					_this._config.credentials
				);
				return core_1.Credentials.shear(credentials);
			})
			.catch(function(err) {
				logger.debug('ensure credentials error', err);
				return null;
			});
	};
	return AWSKinesisProvider;
})();
exports.default = AWSKinesisProvider;
//# sourceMappingURL=AWSKinesisProvider.js.map
