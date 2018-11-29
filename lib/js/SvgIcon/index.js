'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(props) {
    var htmlString = {
        __html: '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="' + (props.assetPath || '') + '#' + props.id + '"></use>'
    };

    return _react2.default.createElement('svg', { dangerouslySetInnerHTML: htmlString });
};

Icon.propTypes = {
    id: _propTypes2.default.string.isRequired,
    assetPath: _propTypes2.default.string
};

exports.default = Icon;