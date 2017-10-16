'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.definition = exports.refs = undefined;

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var refs = void 0,
    definition = void 0;

exports.refs = refs = {};
exports.definition = definition = {
    bind: function bind(el, binding, vnode) {
        el.binding = binding;
        el.setAttribute('novalidate', 'novalidate');

        el.callback = function (e) {
            e.preventDefault();

            var count = void 0,
                components = void 0,
                component = void 0,
                result = void 0;

            count = 0;
            components = (0, _from2.default)(el.querySelectorAll('[data-key="validator"]'));

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = (0, _getIterator3.default)(components), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    component = _step.value;

                    if ((result = refs[component.dataset.uuid].execute()) !== true) {
                        break;
                    }

                    count += 1;
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

            el.binding.value(count === components.length ? null : result, e);
        };

        el.addEventListener('submit', el.callback, false);
    },
    componentUpdated: function componentUpdated(el, binding, vnode) {
        el.binding = binding;
    },
    unbind: function unbind(el, binding, vnode) {
        el.removeEventListener('submit', el.callback, false);
        delete el.binding;
        delete el.callback;
    }
};

exports.refs = refs;
exports.definition = definition;