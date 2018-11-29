import React, {Component} from 'react'
import Select from 'react-select'
// import 'react-select/dist/react-select.css'
import {Field} from 'formik'
import PropTypes from 'prop-types'
import {map} from 'lodash-es'

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
  const {
    name,
    options,
    isMulti,
    onChange=()=>{},
    values={},
    customLabel,
    formatFunction,
    ...originalProps
  } = props

  return (
    <Field
      name={name}
      render={({
        field: {value},
        form: {setFieldValue},
        ...formikProps
      }) => (
      <Select
        options={options}
        isMulti={isMulti}
        onChange={(value) => {
          value = formatValues(value, formatFunction)
          console.log('formatted', value)
          setFieldValue(name, value)
          onChange(value, name)
        }}
        value={formatValues(value, formatFunction)}
        getOptionLabel={(option) => {
          return (option.label && option.value) ? option.label : JSON.stringify(option.value || option)
        }}
        {...formikProps}
        {...originalProps}
      />
      )}
    />
  )
}

MultiSelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default MultiSelectInput

function formatValues(values, formatFunc) {
  console.log('formatting', values)
  if (!values) {return values}
  if (values.value && values.label) {return values}
  if (Array.isArray(values)) {
    if (formatFunc) { return map(values, formatFunc) }
    return map(values, value => (value.value && value.label ? value : {value: value, label: value.label || value.name || value}))
  } else if (typeof values == 'object') {
    return values
  } else {
    return {value: values, label: values}
  }
}