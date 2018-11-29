// import "babel-polyfill";
import React from "react";
import {Formik} from "formik";
import Form from './Form';
import {createValidationSchema} from './helpers'

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

const defaultOptions = {
  // enableReinitialize: true,
  disableOnSubmit: true,
  resetOnSubmit: true, // Assumes successful submission
  showErrorBeforeSubmit: false // Doesn't work yet
}
// ====================
// REACT COMPONENT
// ====================
const CustomForm = (props) => {
  const {
    initialValues,
    handleSubmit,
    enableReinitialize, // Keeping here for backwards compatability
  } = props;

  const options = {...defaultOptions, ...props.options}
  
  // Warnings
  if (enableReinitialize) console.warn('enableReinitialize has been deprecated. Please specify it in the options props in the future.')

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, formikBag) => onSubmit(values, formikBag, handleSubmit, options)}
        render={(formikProps) => <Form {...props} {...formikProps} {...options}/>}
        validationSchema={createValidationSchema(props.fields)}
        enableReinitialize={enableReinitialize || options.enableReinitialize}
      />
    </div>
  )
}

function onSubmit(values, { resetForm, setSubmitting, setFieldError }, callback, options) {

  const cb = callback(values);

  if (options.resetOnSubmit) {
    setSubmitting(true);
    
    function reset(success = true) {
      setSubmitting(false);
      if (success) resetForm();
    }
  
    // If the callback returned a Promise, reset only after Promise resolves
    // Otherwise immediately reset.
    if (cb && (typeof cb.then) === 'function') {
      cb.then((data) => {
        // if (data.status == 'error') setFieldError('form', data.message)
        reset()
      })
      .catch((err) => {
        setFieldError('form', err)
        reset(false)
      })
    } else {
      resetForm()
    }
  }
}


export default CustomForm
