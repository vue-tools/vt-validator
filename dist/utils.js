'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getElementByInput = exports.getElementByForm = exports.parseRules = exports.guid = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _rule = require('./rule');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    return '' + s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

function parseRules(element, validators) {
    var rules = [];

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = (0, _getIterator3.default)((0, _from2.default)(element.attributes)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var attr = _step.value;

            if (attr.name.indexOf('data-') === -1 && attr.name !== 'class') {
                if (validators && validators[attr.name] || (0, _rule.getRule)(attr.name)) {
                    rules = [].concat((0, _toConsumableArray3.default)(rules), [attr.name, attr.value]);
                    element.removeAttribute(attr.name);
                }
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return rules;
}

function getElementByForm(el) {
    if (!el.tagName) {
        return;
    }

    if (el.tagName.toUpperCase() === 'FORM') {
        return el;
    }

    return getElementByForm(el.parentNode);
}

function getElementByInput(el) {
    return el.querySelector('input') || el.querySelector('select') || el.querySelector('textarea');
}

exports.guid = guid;
exports.parseRules = parseRules;
exports.getElementByForm = getElementByForm;
exports.getElementByInput = getElementByInput;