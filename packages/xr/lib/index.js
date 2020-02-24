'use strict';
function __export(m) {
	for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, '__esModule', { value: true });
/*
 * Copyright 2017-2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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
var XR_1 = require('./XR');
exports.XRClass = XR_1.default;
var core_1 = require('@aws-amplify/core');
var logger = new core_1.ConsoleLogger('XR');
var _instance = null;
if (!_instance) {
	logger.debug('Create XR Instance');
	_instance = new XR_1.default(null);
}
var XR = _instance;
core_1.default.register(XR);
exports.default = XR;
__export(require('./Providers/SumerianProvider'));
__export(require('./Errors'));
//# sourceMappingURL=index.js.map