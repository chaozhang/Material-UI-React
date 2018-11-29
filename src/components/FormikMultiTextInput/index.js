import React from 'react'
import Select from 'react-select'
// import 'react-select/dist/react-select.css'
import {Field, FieldArray, connect} from 'formik'
import PropTypes from 'prop-types'
import {v4 as uuid} from 'uuid'
import {Icons, Button} from '../'
import {startCase, map, filter, omit, get} from 'lodash-es'
import {renderField} from './helpers'

function MultiTextInput(props) {
  const DeleteIcon = Icons.Clear
  const AddIcon = Icons.Add
  const {
    name,
    fields,
    onChange,
    values={},
  } = props

  function renderInputFields(fields, topLevelIndex, baseName) {
    return map(fields, (field, index) => {
      let name = `${baseName}.[${topLevelIndex}].${field.name || field}`
      if (typeof field == 'object') {
        const initialValues = get(values, name, [])
        const inputFields = map(
          initialValues,
          (valueCollection, index) => {
            return renderInputFields(field.fields, index, name)
          }
        )

        return (
          <FieldArray
            name={name}
            render={(arrayHelpers) => {
              return (
              <React.Fragment>
                <button type='button' onClick={() => {
                  console.log('values', values)
                  arrayHelpers.push({uuid: uuid()})
                  }}>Add {startCase(field.name)}
                </button>
                {inputFields}
              </React.Fragment>
              )
            }}
          />
        )
      } else {
        return renderField(name)
      }
    })
  }

  function renderFieldArray(fields, baseName) {
    const fieldComponents = renderInputFields(fields, baseName)

    return (
      <FieldArray
        name={baseName}
        render={arrayHelpers => (
          <div>
          <button type='button' onClick={() => {
            console.log('values', values)
            arrayHelpers.push({uuid: uuid()})
            }}>+ Add {startCase(baseName)}
          </button>
          {map(values[name] || [], (value, index) => renderInputFields(fields, index, baseName))}
          </div>
        )}
      />
    )
  }

  return (
    renderFieldArray(props.fields, props.name)
    )
}


  // handleInputKeyDown(event, cellInfo) {
  //   const reservedKeys = ['Tab']
  //   if (!_.includes(reservedKeys, event.key)) { 
  //     this.handleInputKeyPress(event)
  //   } else {
  //     const {column: {id: columnName}, index} = cellInfo
  //     switch(event.key) {
  //       case 'Tab':
  //         // console.log(index)
  //         // console.log(this.state.software.length)
  //         if (columnName == 'version' && (index == this.state.software.length - 1)) {
  //           this.handleAddSoftwareClick()
  //         }
  //     }
  //   }
  // }


MultiTextInput.propTypes = {
  name: PropTypes.string.isRequired,
  fields: PropTypes.array.isRequired,
}



export default MultiTextInput
