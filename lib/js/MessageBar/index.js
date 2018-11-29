'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ = require('../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var variantIcon = {
  success: 'CheckCircle',
  warning: 'Warning',
  error: 'Error',
  info: 'Info'
};

var MessageBar = function MessageBar(props) {
  var message = props.message,
      onClose = props.onClose,
      variant = props.variant,
      other = _objectWithoutProperties(props, ['message', 'onClose', 'variant']);

  var Icon = _.Icons[variantIcon[variant]];
  var CloseIcon = _.Icons.Close;

  return _react2.default.createElement(_.SnackbarContent, _extends({
    message: _react2.default.createElement(
      'span',
      { className: 'content' },
      _react2.default.createElement(Icon, null),
      message
    ),
    className: 'message-bar ' + variant,
    action: [_react2.default.createElement(
      _.IconButton,
      {
        key: 'close',
        className: 'close',
        color: 'inherit',
        onClick: onClose
      },
      _react2.default.createElement(CloseIcon, null)
    )]
  }, other));
};

MessageBar.propTypes = {
  message: _propTypes2.default.node,
  onClose: _propTypes2.default.func,
  variant: _propTypes2.default.oneOf(['success', 'warning', 'error', 'info']).isRequired
};

exports.default = MessageBar;