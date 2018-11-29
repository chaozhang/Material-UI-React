'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formik = require('formik');

var _Field = require('./Field');

var _Field2 = _interopRequireDefault(_Field);

var _2 = require('../');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Form = function Form(props) {
    var name = props.name,
        fields = props.fields,
        submitButton = props.submitButton,
        disableOnSubmit = props.disableOnSubmit,
        isSubmitting = props.isSubmitting,
        errors = props.errors,
        setFieldError = props.setFieldError,
        other = _objectWithoutProperties(props, ['name', 'fields', 'submitButton', 'disableOnSubmit', 'isSubmitting', 'errors', 'setFieldError']);

    // console.log(props);

    function renderSubmitButton() {
        var submit = {};

        if (typeof submitButton == 'string') {
            submit = { text: submitButton };
        } else {
            submit = submitButton;
        }

        if (submitButton) {
            return _react2.default.createElement(
                _2.Button,
                {
                    type: 'submit',
                    disabled: disableOnSubmit && isSubmitting,
                    color: 'primary',
                    variant: 'contained'
                },
                submit.text
            );
        } else {
            return null;
        }
    }

    function renderFields() {
        return _lodash2.default.map(fields, function (field) {
            return _react2.default.createElement(_Field2.default, _extends({ key: 'field-' + JSON.stringify(field), field: field, errors: errors }, other));
        });
    }

    return _react2.default.createElement(
        _formik.Form,
        null,
        name && _react2.default.createElement(
            'h2',
            null,
            name
        ),
        _react2.default.createElement(
            'div',
            { style: {
                    display: 'flex',
                    flexWrap: 'wrap'
                } },
            props.children,
            renderFields()
        ),
        renderSubmitButton()
    );
};

exports.default = Form;