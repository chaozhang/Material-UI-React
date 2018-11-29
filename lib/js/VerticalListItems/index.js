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

var VerticalListItems = function VerticalListItems(props) {
    var listItems = props.listItems.map(function (item, index) {
        var Icon = item.iconId ? _.Icons[item.iconId] : null;

        return _react2.default.createElement(
            'li',
            { key: index },
            _react2.default.createElement(
                _reactRouterDom.NavLink,
                { exact: true, to: item.url, activeClassName: 'active' },
                _react2.default.createElement(Icon, null),
                _react2.default.createElement(
                    'span',
                    null,
                    item.name
                )
            )
        );
    });

    return _react2.default.createElement(
        'div',
        { className: 'vertical-list-items' },
        _react2.default.createElement(
            'ul',
            null,
            listItems
        )
    );
};

VerticalListItems.propTypes = {
    listItems: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        url: _propTypes2.default.string.isRequired,
        name: _propTypes2.default.string.isRequired,
        iconId: _propTypes2.default.string.isRequired
    })).isRequired
};

exports.default = VerticalListItems;