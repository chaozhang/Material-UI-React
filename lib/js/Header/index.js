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

var Header = function Header(props) {
    var logo = props.logo,
        repo = props.repo,
        issues = props.issues;


    var additionalLinks = repo && issues ? _react2.default.createElement(
        'div',
        { className: 'links' },
        _react2.default.createElement(
            'a',
            { href: repo, target: '_blank' },
            'Source Code'
        ),
        _react2.default.createElement(
            'a',
            { href: issues, target: '_blank' },
            'Submit Feedback'
        )
    ) : null;

    return _react2.default.createElement(
        'header',
        { className: 'top' },
        _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
                _reactRouterDom.Link,
                { id: 'logo', to: '/' },
                logo
            ),
            additionalLinks
        )
    );
};

Header.propTypes = {
    repo: _propTypes2.default.string,
    issues: _propTypes2.default.string,
    logo: _propTypes2.default.element.isRequired
};

exports.default = Header;