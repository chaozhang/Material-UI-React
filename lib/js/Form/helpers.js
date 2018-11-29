'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createValidationSchema = createValidationSchema;

var _yup = require('yup');

var yup = _interopRequireWildcard(_yup);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function createValidationSchema(fields) {
    var schema = {};
    // debugger
    _lodash2.default.forEach(fields, function (field) {
        var name = field.name,
            label = field.label,
            _field$type = field.type,
            type = _field$type === undefined ? 'text' : _field$type,
            min = field.min,
            max = field.max,
            validate = field.validate,
            required = field.required;
        // debugger

        if (validate) {
            var scheme = yup;

            // Note that each of the following validation schemes take in a string as the error message to show.
            // Initialize the yup object as a number or string scheme
            if (type.toLowerCase().includes('number')) scheme = scheme.number();else scheme = scheme.string();

            // Append additional scheme properties as desired
            if (type.toLowerCase().includes('email') || name.toLowerCase().includes('email')) scheme = scheme.email();
            if (min) scheme = scheme.min(min, (label || name) + ' must be at least ' + min + ' character long!');
            if (max) scheme = scheme.max(max, (label || name) + ' cannot be more than ' + max + ' character long!');
            if (name == 'verifyPassword') {
                scheme = scheme.oneOf([yup.ref('password'), null], 'The passwords must match!');
            }
            if (name == 'image') {
                scheme = scheme.max(82000, 'The image cannot be more than 60KB!');
            }
            if (required) scheme = scheme.required((label || name) + ' is required!');

            // Add in the current scheme to the final schema object
            schema[name] = scheme;
        } else {
            return;
        }
        // console.log(field)
    });

    return yup.object().shape(schema);
}