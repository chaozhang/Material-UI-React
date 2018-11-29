import { TextField, Select, FormControl, FormControlLabel, InputLabel, option, Checkbox, MenuItem } from '../'
import _ from 'lodash'
import Textarea from 'react-textarea-autosize'
import React from 'react'
import Error from './Error'

const Input = (props) => {
    
    const {type, placeholder, values, name} = props
    const desiredProps = _.pick(props, [
        'type', 'name', 'label', 'values', 'errors', 'options',
        'multiple', 'handleChange', 'setFieldValue', 'disabled',
        'rows', 'placeholder', 'fullWidth', 'required'
    ])
    
    switch(type) {
        case 'checkbox':
            return renderSelectButtons(desiredProps)
        case 'select':
            return renderSelectInput(desiredProps)
        case 'textarea':
            return renderTextArea(desiredProps)
        case 'text':
        case 'password':
        case 'email':
        case 'number':
            return renderTextInput(desiredProps)
        default:
            return <input type={type} value={values[name]} {...desiredProps}/>
    }
}


function handleSelection(event, props) {
    const {name, multiple, setFieldValue, placeholder, values} = props

    let selectionValues = event.target.value
    // console.log('selection values')
    // console.log(selectionValues)
    if (selectionValues.length > 0) {
        setFieldValue(name, selectionValues)
    }
}

function renderSelectButtons(props) {
    const { name, label, values = {}, errors = {}, options, multiple, handleChange, setFieldValue, placeholder, ...other} = props
    return (<FormControlLabel
        control={
            <Checkbox checked={values[name]} value={values[name]} 
                onChange = { event => setFieldValue(name, event.target.checked) }
            />
        }
        label={label}
    />)
}

function renderOptions(options) {
    // console.log(options)
    return _.map(options, optionItem => {
        return <MenuItem value={optionItem}>{'' || (optionItem[0].toUpperCase() + optionItem.slice(1))}</MenuItem>
    })
}

function renderSelectInput(props) {
    const { name, label, errors={}, values={}, options, multiple, handleChange, placeholder, setFieldValue, ...other} = props
    // if (name == 'roles') {
        // console.log('input stats')
        // console.log('values', values[name])
        // console.log('multiple', multiple)
    // }
    return(
        <FormControl className='select'>
            <InputLabel>{label}</InputLabel>
            <Select
                id={name}
                label={label}
                error={errors[name]}
                multiple={multiple}
                value={values[name] || []}
                onChange={(event) => {handleSelection(event, props)}}
                {...other}
            >
                {renderOptions(options)}
            </Select>
        </FormControl>
    
    )
}



function renderTextArea(props) {
    const { name, label, values = {}, errors = {}, inline, setFieldValue, rows, placeholder, ...other} = props
    return (<TextField
        id={name}
        label={label}
        multiline
        rows={rows || '4'}
        rowsMax={rows || '6'}
        margin='normal'
        defaultValue={values[name]}
        error={errors[name]}
        fullWidth={!inline}
        onChange={event => setFieldValue(name, event.target.value)}
        // {...other}
    />)
    }
    
function renderTextInput(props) {
    const {name, values={}, errors={}, inline, setFieldValue, placeholder, required, ...other} = props
    // console.log(errors)
    // console.log(required)
    return (
    <React.Fragment>
        <TextField
            id={name}
            defaultValue={values[name] || ''}
            margin='normal'
            error={errors[name]}
            fullWidth={!inline}
            required={required}
            onChange={event => setFieldValue(name, event.target.value)}
            {...other}
            />
        {errors[name] && <Error>{errors[name]}</Error>}
    </React.Fragment>
    )
}


export default Input
