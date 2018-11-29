'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _2 = require('../');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactTextareaAutosize = require('react-textarea-autosize');

var _reactTextareaAutosize2 = _interopRequireDefault(_reactTextareaAutosize);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Error = require('./Error');

var _Error2 = _interopRequireDefault(_Error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Input = function Input(props) {
    var type = props.type,
        placeholder = props.placeholder,
        values = props.values,
        name = props.name;

    var desiredProps = _lodash2.default.pick(props, ['type', 'name', 'label', 'values', 'errors', 'options', 'multiple', 'handleChange', 'setFieldValue', 'disabled', 'rows', 'placeholder', 'fullWidth', 'required']);

    switch (type) {
        case 'checkbox':
            return renderSelectButtons(desiredProps);
        case 'select':
            return renderSelectInput(desiredProps);
        case 'textarea':
            return renderTextArea(desiredProps);
        case 'text':
        case 'password':
        case 'email':
        case 'number':
            return renderTextInput(desiredProps);
        default:
            return _react2.default.createElement('input', _extends({ type: type, value: values[name] }, desiredProps));
    }
};

function handleSelection(event, props) {
    var name = props.name,
        multiple = props.multiple,
        setFieldValue = props.setFieldValue,
        placeholder = props.placeholder,
        values = props.values;


    var selectionValues = event.target.value;
    // console.log('selection values')
    // console.log(selectionValues)
    if (selectionValues.length > 0) {
        setFieldValue(name, selectionValues);
    }
}

function renderSelectButtons(props) {
    var name = props.name,
        label = props.label,
        _props$values = props.values,
        values = _props$values === undefined ? {} : _props$values,
        _props$errors = props.errors,
        errors = _props$errors === undefined ? {} : _props$errors,
        options = props.options,
        multiple = props.multiple,
        handleChange = props.handleChange,
        setFieldValue = props.setFieldValue,
        placeholder = props.placeholder,
        other = _objectWithoutProperties(props, ['name', 'label', 'values', 'errors', 'options', 'multiple', 'handleChange', 'setFieldValue', 'placeholder']);

    return _react2.default.createElement(_2.FormControlLabel, {
        control: _react2.default.createElement(_2.Checkbox, { checked: values[name], value: values[name],
            onChange: function onChange(event) {
                return setFieldValue(name, event.target.checked);
            }
        }),
        label: label
    });
}

function renderOptions(options) {
    // console.log(options)
    return _lodash2.default.map(options, function (optionItem) {
        return _react2.default.createElement(
            _2.MenuItem,
            { value: optionItem },
            '' || optionItem[0].toUpperCase() + optionItem.slice(1)
        );
    });
}

function renderSelectInput(props) {
    var name = props.name,
        label = props.label,
        _props$errors2 = props.errors,
        errors = _props$errors2 === undefined ? {} : _props$errors2,
        _props$values2 = props.values,
        values = _props$values2 === undefined ? {} : _props$values2,
        options = props.options,
        multiple = props.multiple,
        handleChange = props.handleChange,
        placeholder = props.placeholder,
        setFieldValue = props.setFieldValue,
        other = _objectWithoutProperties(props, ['name', 'label', 'errors', 'values', 'options', 'multiple', 'handleChange', 'placeholder', 'setFieldValue']);
    // if (name == 'roles') {
    // console.log('input stats')
    // console.log('values', values[name])
    // console.log('multiple', multiple)
    // }


    return _react2.default.createElement(
        _2.FormControl,
        { className: 'select' },
        _react2.default.createElement(
            _2.InputLabel,
            null,
            label
        ),
        _react2.default.createElement(
            _2.Select,
            _extends({
                id: name,
                label: label,
                error: errors[name],
                multiple: multiple,
                value: values[name] || [],
                onChange: function onChange(event) {
                    handleSelection(event, props);
                }
            }, other),
            renderOptions(options)
        )
    );
}

function renderTextArea(props) {
    var name = props.name,
        label = props.label,
        _props$values3 = props.values,
        values = _props$values3 === undefined ? {} : _props$values3,
        _props$errors3 = props.errors,
        errors = _props$errors3 === undefined ? {} : _props$errors3,
        inline = props.inline,
        setFieldValue = props.setFieldValue,
        rows = props.rows,
        placeholder = props.placeholder,
        other = _objectWithoutProperties(props, ['name', 'label', 'values', 'errors', 'inline', 'setFieldValue', 'rows', 'placeholder']);

    return _react2.default.createElement(_2.TextField, {
        id: name,
        label: label,
        multiline: true,
        rows: rows || '4',
        rowsMax: rows || '6',
        margin: 'normal',
        defaultValue: values[name],
        error: errors[name],
        fullWidth: !inline,
        onChange: function onChange(event) {
            return setFieldValue(name, event.target.value);
        }
        // {...other}
    });
}

function renderTextInput(props) {
    var name = props.name,
        _props$values4 = props.values,
        values = _props$values4 === undefined ? {} : _props$values4,
        _props$errors4 = props.errors,
        errors = _props$errors4 === undefined ? {} : _props$errors4,
        inline = props.inline,
        setFieldValue = props.setFieldValue,
        placeholder = props.placeholder,
        required = props.required,
        other = _objectWithoutProperties(props, ['name', 'values', 'errors', 'inline', 'setFieldValue', 'placeholder', 'required']);
    // console.log(errors)
    // console.log(required)


    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(_2.TextField, _extends({
            id: name,
            defaultValue: values[name] || '',
            margin: 'normal',
            error: errors[name],
            fullWidth: !inline,
            required: required,
            onChange: function onChange(event) {
                return setFieldValue(name, event.target.value);
            }
        }, other)),
        errors[name] && _react2.default.createElement(
            _Error2.default,
            null,
            errors[name]
        )
    );
}

exports.default = Input;