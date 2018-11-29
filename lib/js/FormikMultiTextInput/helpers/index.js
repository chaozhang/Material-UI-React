'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderFields = renderFields;
exports.renderField = renderField;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodashEs = require('lodash-es');

var _formik = require('formik');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderFields() {
  var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var fieldComponents = (0, _lodashEs.map)(fields, function (field) {
    return renderField(field);
  });
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement('br', null),
    fieldComponents,
    _react2.default.createElement('br', null)
  );
}

function renderField(field) {
  return _react2.default.createElement(
    'label',
    null,
    field.label || (0, _lodashEs.startCase)(field),
    _react2.default.createElement(_formik.Field, {
      name: field.name || field,
      placeholder: field.placeholder || (0, _lodashEs.startCase)(field)
    }),
    _react2.default.createElement('br', null)
  );
}