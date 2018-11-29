'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _formik = require('formik');

var _Error = require('./Error');

var _Error2 = _interopRequireDefault(_Error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Field = function Field(props) {
    // ====================
    // Extract variables from props
    // ====================
    var setFieldValue = props.setFieldValue,
        _props$errors = props.errors,
        errors = _props$errors === undefined ? {} : _props$errors,
        _props$values = props.values,
        values = _props$values === undefined ? {} : _props$values,
        field = props.field;
    // console.log(values)
    // field comes from the field attr passed to the Form component

    var name = field.name,
        label = field.label,
        _field$type = field.type,
        type = _field$type === undefined ? 'text' : _field$type,
        multiple = field.multiple,
        options = field.options,
        contentType = field.contentType,
        handleChange = field.handleChange,
        other = _objectWithoutProperties(field, ['name', 'label', 'type', 'multiple', 'options', 'contentType', 'handleChange']);

    var reservedTypes = {
        textarea: 'textarea',
        select: 'select'
    };

    switch (type) {
        case 'select':
            // If select was specified as the type, it will look through an array of strings
            // and render an option tag for each of them.
            var handleSelection = function handleSelection(event) {
                var values = _lodash2.default.map(event.target.selectedOptions, function (option) {
                    return option.value;
                });
                setFieldValue(name, values);
            };

            return _react2.default.createElement(
                'label',
                { key: label },
                _react2.default.createElement(
                    'div',
                    { className: 'input' },
                    label,
                    _react2.default.createElement(
                        _formik.Field,
                        _extends({
                            key: name,
                            name: name,
                            component: other.component || reservedTypes[type],
                            value: multiple ? values[name] || [] : values,
                            multiple: multiple,
                            onChange: multiple ? handleSelection : undefined
                        }, other),
                        options.map(function (option) {
                            return _react2.default.createElement(
                                'option',
                                {
                                    key: option.value || option,
                                    value: option.value || option },
                                option.display || option[0].toUpperCase() + option.slice(1)
                            );
                        })
                    )
                ),
                _react2.default.createElement(_Error2.default, { text: errors[name] })
            );
        case 'file':
            var getFileValue = function getFileValue(event) {
                // In this case, handleChange is a function that is passed in and takes two params:
                // The file object
                // A function that calls setFieldValue
                if (handleChange) {
                    handleChange(event.currentTarget.files[0], function (fieldValue) {
                        return setFieldValue(name, fieldValue);
                    });
                } else {
                    setFieldValue(name, event.currentTarget.files[0]);
                }
            };

            var imagePlaceHolder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAIAAAAHjs1qAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0MjY4QTU4ODI2NkRFMjExQTA5QkU3NzkzRUE5Qjc5QiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MTg5MDlGMEZFRUUxMUU0QTc2QkNEMjY5OTFDODIxMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2MTg5MDlFRkZFRUUxMUU0QTc2QkNEMjY5OTFDODIxMSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCQkY0NTk2QjEwQjRFMjExQkVBN0JFQTA3MEQ2OTg2QSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MjY4QTU4ODI2NkRFMjExQTA5QkU3NzkzRUE5Qjc5QiIvPiA8L3JkZjpEZXNjcmlwdGlv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';
            return _react2.default.createElement(
                'label',
                { key: label },
                _react2.default.createElement(
                    'div',
                    { className: 'input' },
                    label,
                    contentType === 'image' ? _react2.default.createElement('img', { alt: 'profile', src: values[name] || imagePlaceHolder }) : null,
                    _react2.default.createElement('input', _extends({
                        key: name,
                        name: name,
                        type: 'file',
                        onChange: getFileValue
                    }, other))
                ),
                _react2.default.createElement(_Error2.default, { text: errors[name] })
            );
        // Default is an input field of type text, or a text-like field.
        // If component is passed in, it will render a custom component.
        // If render is passed in, it will take the render function and execute it.
        default:
            return _react2.default.createElement(
                'label',
                { key: label },
                _react2.default.createElement(
                    'div',
                    { className: 'input' },
                    label,
                    _react2.default.createElement(_formik.Field, _extends({
                        key: name,
                        name: name,
                        type: type,
                        component: other.component || reservedTypes[type],
                        value: values[name] || '',
                        rows: other.rows || '10',
                        cols: other.cols || '40'
                    }, other))
                ),
                _react2.default.createElement(_Error2.default, { text: errors[name] })
            );
    }
};

exports.default = Field;