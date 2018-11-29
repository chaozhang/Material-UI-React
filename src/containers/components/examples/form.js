import React from 'react'
import Base from './'
import { Form } from '../../../components/'


const fields = [{
    name: 'username',
    label: 'Username'
}, {
    name: 'password',
    type: 'password',
    label: 'Password'
}, {
    name: 'rememberDevice',
    type: 'checkbox',
    label: 'Remember Device?'
}, {
    name: 'notes',
    type: 'textarea',
    label: 'Notes',
}, {
    name: 'select',
    type: 'select',
    label: 'Single Select',
    options: [
        'Option1',
        'Option2',
        'Option3',
        'Option4'
    ],
}, {
    name: 'multiSelect',
    type: 'select',
    label: 'Multi Select',
    options: [
        'Option1',
        'Option2',
        'Option3',
        'Option4'
    ],
    multiple: true
}]

const initialValues = {
    select:'option1',
    multiSelect: ['option2','option1']
}

const handleSubmit = (values) => {
    console.log('submit here with data -> ' + JSON.stringify(values))
}

const buildCode = () => {
    return (
`import { Form } from "ZapWebCommon/lib/js/"

const fields = [{
    name: 'username',
    label: 'Username'
}, {
    name: 'password',
    type: 'password',
    label: 'Password'
}, {
    name: 'rememberDevice',
    type: 'checkbox',
    label: 'Remember Device?'
}, {
    name: 'notes',
    type: 'textarea',
    label: 'Notes'
}]

const params = {
    fields,
    handleSubmit: handleSubmit,
    submit: 'Login',
    name: 'form header here'
}

<div><Form {...params} /></div>`
    )
}

const buildDemo = () => {
    const params = {
        fields,
        handleSubmit: handleSubmit,
        submitButton: 'Login',
        initialValues: initialValues,
        enableReinitialize: true,
        name: 'form header here'
    }

    return (
        <div className='form'>
            <Form {...params} />
        </div>
    )
}


class example extends Base {

    render() {
        return this.buildContent(
            'form',
            buildDemo(),
            buildCode()
        );
    }
}


export default example