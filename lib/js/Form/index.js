"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // import "babel-polyfill";


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _formik = require("formik");

var _Form = require("./Form");

var _Form2 = _interopRequireDefault(_Form);

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// A form component based off of Redux Forms
// Props:
// name - Name of the form. If present, will create a FormHeader component
// fields - Array of field objects to render
// handleSubmit - A function to call when the submit button is clicked
// submit - Text to put inside the submit button.
// disableOnSubmit - Disable the submit button while the callback is being called.
// If the callback returns a promise, button will be disabled until Promise resolves
// initialValues - An object to populate the form with initially. The key should be the field name.

// The field object should be in the form of:
// [{
//   name: 'Name of the field',
//   type: 'Type of the input field, defaulting to text',
//   placeholder: 'Any placeholder text',
//   label: 'Any label to go with the input field'
// }, {
//   name: 'numberFieldExample',
//   type: 'number',
//   placeholder: '0',
//   min: '3' //You can use standard input attribtues for a given input type.
// }, {
//   name: 'textAreaExample',
//   type: 'textarea',
//   placeholder: '0',
//   min: '3',
//   validate: true,
//   required: true
// }]

// The "formikBag" consists of the following:
// props(props passed to the wrapped component)
// resetForm
// setErrors
// setFieldError
// setFieldTouched
// setFieldValue
// setStatus
// setSubmitting
// setTouched
// setValues

var defaultOptions = {
  // enableReinitialize: true,
  disableOnSubmit: true,
  resetOnSubmit: true, // Assumes successful submission
  showErrorBeforeSubmit: false // Doesn't work yet

  // ====================
  // REACT COMPONENT
  // ====================
};var CustomForm = function CustomForm(props) {
  var initialValues = props.initialValues,
      handleSubmit = props.handleSubmit,
      enableReinitialize = props.enableReinitialize;


  var options = Object.assign({}, defaultOptions, props.options);

  // Warnings
  if (enableReinitialize) console.warn('enableReinitialize has been deprecated. Please specify it in the options props in the future.');

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(_formik.Formik, {
      initialValues: initialValues,
      onSubmit: function onSubmit(values, formikBag) {
        return _onSubmit(values, formikBag, handleSubmit, options);
      },
      render: function render(formikProps) {
        return _react2.default.createElement(_Form2.default, _extends({}, props, formikProps, options));
      },
      validationSchema: (0, _helpers.createValidationSchema)(props.fields),
      enableReinitialize: enableReinitialize || options.enableReinitialize
    })
  );
};

function _onSubmit(values, _ref, callback, options) {
  var resetForm = _ref.resetForm,
      setSubmitting = _ref.setSubmitting,
      setFieldError = _ref.setFieldError;


  var cb = callback(values);

  if (options.resetOnSubmit) {
    var reset = function reset() {
      var success = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      setSubmitting(false);
      if (success) resetForm();
    };

    // If the callback returned a Promise, reset only after Promise resolves
    // Otherwise immediately reset.


    setSubmitting(true);

    if (cb && typeof cb.then === 'function') {
      cb.then(function (data) {
        // if (data.status == 'error') setFieldError('form', data.message)
        reset();
      }).catch(function (err) {
        setFieldError('form', err);
        reset(false);
      });
    } else {
      resetForm();
    }
  }
}

exports.default = CustomForm;