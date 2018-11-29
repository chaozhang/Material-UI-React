'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
// import 'react-select/dist/react-select.css'


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _formik = require('formik');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _uuid = require('uuid');

var _ = require('../');

var _lodashEs = require('lodash-es');

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MultiTextInput(props) {
  var DeleteIcon = _.Icons.Clear;
  var AddIcon = _.Icons.Add;
  var name = props.name,
      fields = props.fields,
      onChange = props.onChange,
      _props$values = props.values,
      values = _props$values === undefined ? {} : _props$values;


  function renderInputFields(fields, topLevelIndex, baseName) {
    return (0, _lodashEs.map)(fields, function (field, index) {
      var name = baseName + '.[' + topLevelIndex + '].' + (field.name || field);
      if ((typeof field === 'undefined' ? 'undefined' : _typeof(field)) == 'object') {
        var initialValues = (0, _lodashEs.get)(values, name, []);
        var inputFields = (0, _lodashEs.map)(initialValues, function (valueCollection, index) {
          return renderInputFields(field.fields, index, name);
        });

        return _react2.default.createElement(_formik.FieldArray, {
          name: name,
          render: function render(arrayHelpers) {
            return _react2.default.createElement(
              _react2.default.Fragment,
              null,
              _react2.default.createElement(
                'button',
                { type: 'button', onClick: function onClick() {
                    console.log('values', values);
                    arrayHelpers.push({ uuid: (0, _uuid.v4)() });
                  } },
                'Add ',
                (0, _lodashEs.startCase)(field.name)
              ),
              inputFields
            );
          }
        });
      } else {
        return (0, _helpers.renderField)(name);
      }
    });
  }

  function renderFieldArray(fields, baseName) {
    var fieldComponents = renderInputFields(fields, baseName);

    return _react2.default.createElement(_formik.FieldArray, {
      name: baseName,
      render: function render(arrayHelpers) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'button',
            { type: 'button', onClick: function onClick() {
                console.log('values', values);
                arrayHelpers.push({ uuid: (0, _uuid.v4)() });
              } },
            '+ Add ',
            (0, _lodashEs.startCase)(baseName)
          ),
          (0, _lodashEs.map)(values[name] || [], function (value, index) {
            return renderInputFields(fields, index, baseName);
          })
        );
      }
    });
  }

  return renderFieldArray(props.fields, props.name);
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
  name: _propTypes2.default.string.isRequired,
  fields: _propTypes2.default.array.isRequired
};

exports.default = MultiTextInput;