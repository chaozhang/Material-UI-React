'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _formik = require('formik');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodashEs = require('lodash-es');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// import 'react-select/dist/react-select.css'


// class MultiSelectInput extends Component {

//   render() {
//     const {
//       name,
//       options,
//       isMulti,
//       onChange=()=>{},
//       values={},
//     } = this.props

//     return (
//       <Field
//         name={name}
//         render={({
//           field: {value},
//           form: {setFieldValue}
//         }) => (
//         <Select
//           options={options}
//           isMulti={isMulti}
//           onChange={(value) => {
//             setFieldValue(name, value)
//             onChange(value, name)
//           }}
//           value={value}
//         />
//         )}
//       />
//     )
//   }
// }

function MultiSelectInput(props) {
  var name = props.name,
      options = props.options,
      isMulti = props.isMulti,
      _props$onChange = props.onChange,
      _onChange = _props$onChange === undefined ? function () {} : _props$onChange,
      _props$values = props.values,
      values = _props$values === undefined ? {} : _props$values,
      customLabel = props.customLabel,
      formatFunction = props.formatFunction,
      originalProps = _objectWithoutProperties(props, ['name', 'options', 'isMulti', 'onChange', 'values', 'customLabel', 'formatFunction']);

  return _react2.default.createElement(_formik.Field, {
    name: name,
    render: function render(_ref) {
      var value = _ref.field.value,
          setFieldValue = _ref.form.setFieldValue,
          formikProps = _objectWithoutProperties(_ref, ['field', 'form']);

      return _react2.default.createElement(_reactSelect2.default, _extends({
        options: options,
        isMulti: isMulti,
        onChange: function onChange(value) {
          value = formatValues(value, formatFunction);
          console.log('formatted', value);
          setFieldValue(name, value);
          _onChange(value, name);
        },
        value: formatValues(value, formatFunction),
        getOptionLabel: function getOptionLabel(option) {
          return option.label && option.value ? option.label : JSON.stringify(option.value || option);
        }
      }, formikProps, originalProps));
    }
  });
}

MultiSelectInput.propTypes = {
  name: _propTypes2.default.string.isRequired,
  options: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired
};

exports.default = MultiSelectInput;


function formatValues(values, formatFunc) {
  console.log('formatting', values);
  if (!values) {
    return values;
  }
  if (values.value && values.label) {
    return values;
  }
  if (Array.isArray(values)) {
    if (formatFunc) {
      return (0, _lodashEs.map)(values, formatFunc);
    }
    return (0, _lodashEs.map)(values, function (value) {
      return value.value && value.label ? value : { value: value, label: value.label || value.name || value };
    });
  } else if ((typeof values === 'undefined' ? 'undefined' : _typeof(values)) == 'object') {
    return values;
  } else {
    return { value: values, label: values };
  }
}