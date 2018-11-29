'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Nav = function Nav(props) {
    var navItems = props.navItems.map(function (item, index) {
        return _react2.default.createElement(
            'li',
            { key: index },
            item.url === '/' ? _react2.default.createElement(
                _reactRouterDom.NavLink,
                { exact: true, to: item.url, activeClassName: 'active' },
                item.name
            ) : _react2.default.createElement(
                _reactRouterDom.NavLink,
                { to: item.url, activeClassName: 'active' },
                item.name
            )
        );
    });

    return _react2.default.createElement(
        'nav',
        null,
        _react2.default.createElement(
            'ul',
            null,
            navItems
        )
    );
};

Nav.propTypes = {
    navItems: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        url: _propTypes2.default.string.isRequired,
        name: _propTypes2.default.string.isRequired
    })).isRequired
};

exports.default = Nav;