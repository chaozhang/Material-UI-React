"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormHeader = function FormHeader(props) {
  var name = props.name;


  return _react2.default.createElement(
    "h2",
    null,
    name
  );
};

exports.default = FormHeader;