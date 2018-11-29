import * as yup from 'yup';
import _ from 'lodash';


export function createValidationSchema(fields) {
    const schema = {}
    // debugger
    _.forEach(fields, (field) => {
        const {
            name,
            label,
            type = 'text',
            min,
            max,
            validate,
            required,
        } = field;
        // debugger
        if (validate) {
            let scheme = yup;

            // Note that each of the following validation schemes take in a string as the error message to show.
            // Initialize the yup object as a number or string scheme
            if (type.toLowerCase().includes('number')) scheme = scheme.number()
            else scheme = scheme.string()
    
            // Append additional scheme properties as desired
            if (type.toLowerCase().includes('email') || name.toLowerCase().includes('email')) scheme = scheme.email()
            if (min) scheme = scheme.min(min, `${label || name} must be at least ${min} character long!`)
            if (max) scheme = scheme.max(max, `${label || name} cannot be more than ${max} character long!`)
            if (name == 'verifyPassword') {
                scheme = scheme.oneOf([yup.ref('password'), null], 'The passwords must match!')
            }
            if (name == 'image') {
                scheme = scheme.max(82000, 'The image cannot be more than 60KB!')
            }
            if (required) scheme = scheme.required(`${label || name} is required!`)
    
            // Add in the current scheme to the final schema object
            schema[name] = scheme;


        } else {
            return
        }
        // console.log(field)

    })

    return yup.object().shape(schema)
}
