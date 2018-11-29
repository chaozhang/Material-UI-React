'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDropzone = require('react-dropzone');

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FileList = require('./FileList');

var _FileList2 = _interopRequireDefault(_FileList);

var _mime = require('mime');

var _mime2 = _interopRequireDefault(_mime);

var _lodashEs = require('lodash-es');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Upload = function (_Component) {
  _inherits(Upload, _Component);

  function Upload(props) {
    _classCallCheck(this, Upload);

    var _this = _possibleConstructorReturn(this, (Upload.__proto__ || Object.getPrototypeOf(Upload)).call(this, props));

    _this.state = {
      acceptedFiles: [],
      rejectedFiles: []
    };
    return _this;
  }

  _createClass(Upload, [{
    key: 'onDrop',
    value: function onDrop() {
      var acceptedFiles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var rejectedFiles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var _props$onDrop = this.props.onDrop,
          onDrop = _props$onDrop === undefined ? function () {} : _props$onDrop;


      this.setState(function (prevState, props) {
        return {
          acceptedFiles: (0, _lodashEs.unionBy)(prevState.acceptedFiles, acceptedFiles, 'name'),
          rejectedFiles: (0, _lodashEs.unionBy)(prevState.rejectedFiles, rejectedFiles, 'name')
        };
      });
      onDrop(acceptedFiles, rejectedFiles);
    }
  }, {
    key: 'onDropAccepted',
    value: function onDropAccepted() {
      var files = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var _props$onDropAccepted = this.props.onDropAccepted,
          onDropAccepted = _props$onDropAccepted === undefined ? function () {} : _props$onDropAccepted;

      // console.log('acceptedFiles', files)
    }
  }, {
    key: 'onDropRejected',
    value: function onDropRejected() {
      var files = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var _props$onDropRejected = this.props.onDropRejected,
          onDropRejected = _props$onDropRejected === undefined ? function () {} : _props$onDropRejected;

      // console.log('rejectedFiles', files)
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          onDrop = _props.onDrop,
          onDropAccepted = _props.onDropAccepted,
          onDropRejected = _props.onDropRejected,
          _props$accept = _props.accept,
          accept = _props$accept === undefined ? [] : _props$accept,
          others = _props.others;


      var acceptedFormats = Array.isArray(accept) ? accept : [accept];
      acceptedFormats = accept.map(function (format) {
        return _mime2.default.getType(format) || format;
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_FileList2.default, { acceptedFiles: this.state.acceptedFiles, rejectedFiles: this.state.rejectedFiles }),
        _react2.default.createElement(_reactDropzone2.default, _extends({
          accept: acceptedFormats,
          onDrop: function onDrop(acceptedFiles, rejectedFiles) {
            return _this2.onDrop(acceptedFiles, rejectedFiles);
          },
          onDropAccepted: function onDropAccepted(files) {
            return _this2.onDropAccepted(files);
          },
          onDropRejected: function onDropRejected(files) {
            return _this2.onDropRejected(files);
          }
        }, others))
      );
    }
  }]);

  return Upload;
}(_react.Component);

exports.default = Upload;