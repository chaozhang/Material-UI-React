'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _ = require('../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createNavItem = function createNavItem(_ref) {
    var name = _ref.name,
        iconId = _ref.iconId;

    var Icon = _.Icons[iconId];

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(Icon, null),
        _react2.default.createElement(
            'span',
            { className: 'text' },
            name
        )
    );
};

var SideNav = function SideNav(props) {
    var navItems = props.navItems.map(function (item, index) {
        var navItem = createNavItem(item);

        return _react2.default.createElement(
            'li',
            { key: index },
            item.url === '/' ? _react2.default.createElement(
                _reactRouterDom.NavLink,
                { exact: true, to: item.url, activeClassName: 'active' },
                navItem
            ) : _react2.default.createElement(
                _reactRouterDom.NavLink,
                { to: item.url, activeClassName: 'active' },
                navItem
            )
        );
    });

    return _react2.default.createElement(
        'div',
        { className: 'sidenav' },
        _react2.default.createElement(
            _reactRouterDom.NavLink,
            { to: props.logoUrl, activeClassName: 'active' },
            _react2.default.createElement(
                'div',
                { className: 'logo-container' },
                _react2.default.createElement(
                    'span',
                    { className: 'text' },
                    props.title
                )
            )
        ),
        _react2.default.createElement(
            'ul',
            null,
            navItems
        )
    );
};

SideNav.propTypes = {
    navItems: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        url: _propTypes2.default.string.isRequired,
        name: _propTypes2.default.string.isRequired,
        iconId: _propTypes2.default.string.isRequired
    })).isRequired,
    title: _propTypes2.default.string.isRequired,
    logoUrl: _propTypes2.default.string.isRequired
};

exports.default = SideNav;