'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var repoUrl = 'https://bitbucket.org/zapchao/zapwebcommon'; // header data


var headerData = {
    repo: '' + repoUrl,
    issues: repoUrl + '/issues',
    logo: _react2.default.createElement('div', { className: 'img' })
};

exports.default = headerData;