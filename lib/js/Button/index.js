'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(props) {
    var type = props.type || 'primary';
    var size = props.size || 'medium';
    var className = type + ' ' + size;

    return _react2.default.createElement(
        'button',
        { className: className },
        props.content
    );
};

Button.propTypes = {
    type: _propTypes2.default.string,
    content: _propTypes2.default.string.isRequired,
    size: _propTypes2.default.string
};

exports.default = Button;