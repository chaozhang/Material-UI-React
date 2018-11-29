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

var AppHeader = function (_Component) {
    _inherits(AppHeader, _Component);

    function AppHeader(props) {
        _classCallCheck(this, AppHeader);

        var _this = _possibleConstructorReturn(this, (AppHeader.__proto__ || Object.getPrototypeOf(AppHeader)).call(this, props));

        _this.state = {
            anchorEl: null
        };
        return _this;
    }

    _createClass(AppHeader, [{
        key: 'onClickMenuOpen',
        value: function onClickMenuOpen(e) {
            this.setState({ anchorEl: e.currentTarget });
        }
    }, {
        key: 'onClickMenuClose',
        value: function onClickMenuClose() {
            this.setState({ anchorEl: null });
        }
    }, {
        key: 'renderActions',
        value: function renderActions() {
            return _react2.default.createElement(
                'div',
                { className: 'actions' },
                this.props.children
            );
        }
    }, {
        key: 'renderMenuItem',
        value: function renderMenuItem(data) {
            var _this2 = this;

            var label = data.label,
                icon = data.icon,
                onClick = data.onClick,
                url = data.url;

            var Icon = _.Icons[icon];

            if (onClick) {
                var click = function click() {
                    _this2.onClickMenuClose();

                    onClick();
                };

                return _react2.default.createElement(
                    _.MenuItem,
                    {
                        onClick: click,
                        className: 'app-header-menu-item',
                        key: label
                    },
                    _react2.default.createElement(Icon, null),
                    label
                );
            }

            if (url) {
                return _react2.default.createElement(
                    _.MenuItem,
                    {
                        className: 'app-header-menu-item',
                        key: label
                    },
                    _react2.default.createElement(
                        'a',
                        { href: url },
                        _react2.default.createElement(Icon, null),
                        label
                    )
                );
            }

            return;
        }
    }, {
        key: 'renderAvatar',
        value: function renderAvatar(menu) {
            if (menu.profileImage) {
                return _react2.default.createElement(_.Avatar, {
                    onClick: this.onClickMenuOpen.bind(this),
                    src: menu.profileImage
                });
            } else if (menu.icon) {
                var MenuIcon = _.Icons[menu.icon];

                return _react2.default.createElement(
                    _.Avatar,
                    {
                        onClick: this.onClickMenuOpen.bind(this)
                    },
                    _react2.default.createElement(MenuIcon, null)
                );
            }
        }
    }, {
        key: 'renderMenu',
        value: function renderMenu() {
            var menu = this.props.menu;
            var anchorEl = this.state.anchorEl;

            var open = Boolean(anchorEl);
            var avatar = this.renderAvatar(menu);

            var menuItems = menu.menuItems.map(this.renderMenuItem.bind(this));

            return _react2.default.createElement(
                'div',
                { className: 'menu' },
                avatar,
                _react2.default.createElement(
                    _.Menu,
                    {
                        anchorEl: anchorEl,
                        open: open,
                        onClose: this.onClickMenuClose.bind(this)
                    },
                    menuItems
                )
            );
        }
    }, {
        key: 'renderNavMenu',
        value: function renderNavMenu() {
            var appNav = this.props.appNav;


            if (!appNav) return;

            var Icon = _.Icons[appNav.icon];

            return _react2.default.createElement(
                _.IconButton,
                { onClick: appNav.onClick },
                _react2.default.createElement(Icon, null)
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                logo = _props.logo,
                app = _props.app;


            return _react2.default.createElement(
                _.AppBar,
                { color: 'default', className: 'top' },
                _react2.default.createElement(
                    _.Toolbar,
                    { className: 'toolbar' },
                    _react2.default.createElement(
                        'div',
                        { className: 'left' },
                        this.renderNavMenu(),
                        _react2.default.createElement('a', { className: 'home', href: logo.url }),
                        _react2.default.createElement(
                            _reactRouterDom.NavLink,
                            { to: app.url, className: 'app' },
                            _react2.default.createElement(
                                'div',
                                { className: 'logo-container' },
                                _react2.default.createElement(
                                    _.Typography,
                                    { variant: 'title' },
                                    app.title
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'right' },
                        this.renderActions(),
                        this.renderMenu()
                    )
                )
            );
        }
    }]);

    return AppHeader;
}(_react.Component);

AppHeader.propTypes = {
    logo: _propTypes2.default.shape({
        url: _propTypes2.default.string.isRequired
    }),
    app: _propTypes2.default.shape({
        url: _propTypes2.default.string.isRequired,
        title: _propTypes2.default.string.isRequired
    }),
    actions: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        onClick: _propTypes2.default.func,
        icon: _propTypes2.default.string
    })),
    menu: _propTypes2.default.shape({
        icon: _propTypes2.default.string.isRequired,
        menuItems: _propTypes2.default.arrayOf(_propTypes2.default.shape({
            label: _propTypes2.default.string.isRequired,
            onClick: _propTypes2.default.func,
            icon: _propTypes2.default.string.isRequired,
            url: _propTypes2.default.string
        }))
    })
};

exports.default = AppHeader;