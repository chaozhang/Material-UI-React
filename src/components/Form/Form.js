import React from 'react'
import {Form as FormikForm} from 'formik'
import Field from './Field'
import {Button} from '../'
import _ from 'lodash'
import {MessageBar} from '../'

const Form = (props) => {
    const {
        name,
        fields,
        submitButton,
        disableOnSubmit,
        isSubmitting,
        errors,
        // values,
        setFieldError,
        ...other
    } = props

    // console.log(props);

    function renderSubmitButton() {
        let submit = {}
        
        if (typeof submitButton == 'string') {
            submit = {text: submitButton}
        } else {
            submit = submitButton
        }

        if (submitButton) {
            return (<Button
                type='submit'
                disabled={disableOnSubmit && isSubmitting}
                color="primary"
                variant="contained"
            >
                {submit.text}
            </Button>)
        } else {
            return null
        }
    }

    function renderFields() {
        return _.map(fields, field => <Field key={`field-${JSON.stringify(field)}`} field={field} errors={errors} {...other} />) 
    }
    
  return (
    <FormikForm>
        {/* {errors.form && <MessageBar
            message={errors.form}
            variant='error'
            onClose={() => {setFieldError('form', null)}}
        />} */}
        {name && <h2>{name}</h2>}
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
        }}>
            {props.children}
            {renderFields()}
        </div>
        {renderSubmitButton()}   
    </FormikForm>
  )
}

export default Form
