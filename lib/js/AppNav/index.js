'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _ = require('../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppNav = function (_Component) {
    _inherits(AppNav, _Component);

    function AppNav(props) {
        _classCallCheck(this, AppNav);

        var _this = _possibleConstructorReturn(this, (AppNav.__proto__ || Object.getPrototypeOf(AppNav)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(AppNav, [{
        key: 'onClickExpand',
        value: function onClickExpand(path, value) {
            var newState = Object.assign({}, this.state);

            newState[path] = !value;

            this.setState(newState);
        }
    }, {
        key: 'renderNavItem',
        value: function renderNavItem(path, navItem) {
            var icon = navItem.icon,
                subNavItems = navItem.subNavItems,
                label = navItem.label,
                url = navItem.url;

            var Icon = _.Icons[icon];
            var ExpandLess = _.Icons.ExpandLess;
            var ExpandMore = _.Icons.ExpandMore;

            path += '-' + label;

            if (subNavItems) {
                var expand = this.state[path] === undefined ? window.location.pathname.indexOf(url) > -1 : this.state[path];

                return _react2.default.createElement(
                    _react2.default.Fragment,
                    { key: path },
                    _react2.default.createElement(
                        _.ListItem,
                        { button: true, onClick: this.onClickExpand.bind(this, path, expand) },
                        _react2.default.createElement(
                            _.ListItemIcon,
                            null,
                            _react2.default.createElement(Icon, null)
                        ),
                        _react2.default.createElement(_.ListItemText, { inset: true, primary: label }),
                        expand ? _react2.default.createElement(ExpandLess, null) : _react2.default.createElement(ExpandMore, null)
                    ),
                    _react2.default.createElement(
                        _.Collapse,
                        { 'in': expand, timeout: 'auto', unmountOnExit: true },
                        this.renderNavItems(subNavItems, true, path)
                    )
                );
            } else {
                return _react2.default.createElement(
                    _reactRouterDom.NavLink,
                    { exact: url === '/', to: url, key: path, activeClassName: 'active' },
                    _react2.default.createElement(
                        _.ListItem,
                        { button: true, className: 'nav-item' },
                        _react2.default.createElement(
                            _.ListItemIcon,
                            null,
                            _react2.default.createElement(Icon, null)
                        ),
                        _react2.default.createElement(_.ListItemText, { inset: true, primary: label })
                    )
                );
            }
        }
    }, {
        key: 'renderNavItems',
        value: function renderNavItems(navItems, nested, path) {
            return _react2.default.createElement(
                _.List,
                { className: nested ? 'nested' : '' },
                navItems.map(this.renderNavItem.bind(this, path))
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var navItems = this.props.navItems;


            return _react2.default.createElement(
                _.Drawer,
                {
                    variant: 'permanent',
                    className: 'app-nav'
                },
                this.renderNavItems(navItems, false, '')
            );
        }
    }]);

    return AppNav;
}(_react.Component);

AppNav.propTypes = {
    navItems: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        icon: _propTypes2.default.string.isRequired,
        label: _propTypes2.default.string.isRequired,
        url: _propTypes2.default.string.isRequired,
        menuItems: _propTypes2.default.arrayOf(_propTypes2.default.object)
    }))
};

exports.default = AppNav;