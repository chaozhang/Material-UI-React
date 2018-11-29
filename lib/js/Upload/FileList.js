'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodashEs = require('lodash-es');

var _filesize = require('filesize');

var _filesize2 = _interopRequireDefault(_filesize);

var _ = require('../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InvalidFiles(props) {
  var FileIcon = _.Icons['Description'];
  var CheckIcon = _.Icons['CheckCircle'];
  var XIcon = _.Icons['Cancel'];

  function showValidFiles() {
    var files = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var options = {
      subheading: 'These files will be uploaded',
      StatusIcon: CheckIcon
    };

    return showFiles(files, options);
  }

  function showInvalidFiles() {
    var files = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var options = {
      subheading: 'These files cannot be uploaded',
      StatusIcon: XIcon
    };

    return showFiles(files, options);
  }

  function showFiles() {
    var files = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var StatusIcon = options.StatusIcon;

    var fileList = (0, _lodashEs.map)(files, function (file) {
      return _react2.default.createElement(
        _.ListItem,
        null,
        _react2.default.createElement(
          _.ListItemIcon,
          null,
          StatusIcon ? _react2.default.createElement(StatusIcon, null) : null
        ),
        _react2.default.createElement(
          _.ListItemIcon,
          null,
          _react2.default.createElement(FileIcon, null)
        ),
        _react2.default.createElement(_.ListItemText, {
          primary: file.name,
          secondary: 'Size: (' + (0, _filesize2.default)(file.size) + ')'
        })
      );
    });

    return _react2.default.createElement(
      _.List,
      {
        className: 'doc-list',
        subheader: _react2.default.createElement(
          _.ListSubheader,
          { component: 'div' },
          options.subheading
        )
      },
      fileList
    );
  }

  return _react2.default.createElement(
    'div',
    null,
    'The following files are invalid:',
    showInvalidFiles(props.acceptedFiles),
    'Files to be uploaded:',
    showValidFiles(props.rejectedFiles)
  );
}

exports.default = InvalidFiles;