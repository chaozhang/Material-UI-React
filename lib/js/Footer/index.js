'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
    var year = new Date().getFullYear().toString();

    return _react2.default.createElement(
        'footer',
        null,
        _react2.default.createElement(
            'p',
            null,
            'Zap Surgical Systems, Inc \xA9 ',
            year,
            ', All rights reserved.'
        )
    );
};

exports.default = Footer;