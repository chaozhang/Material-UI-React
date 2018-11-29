import React from 'react'
import {map, startCase, snakeCase} from 'lodash-es'
import {Field} from 'formik'

export function renderFields(fields=[]) {
  const fieldComponents = map(fields, field => renderField(field))
  return (
    <React.Fragment>
    <br/>
      {fieldComponents}
    <br/>
    </React.Fragment>
  )
}

export function renderField(field) {
  return (
    <label>
      {field.label || startCase(field)}
      <Field
        name={field.name || field}
        placeholder={field.placeholder || startCase(field)}
      />
      <br/>
    </label>
  )
}