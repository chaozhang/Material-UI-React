'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ = require('../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderTitle = function renderTitle(title) {
    if (!title) return;

    return _react2.default.createElement(
        _.DialogTitle,
        null,
        title
    );
};

var renderContent = function renderContent(content) {
    if (!content) return;

    return _react2.default.createElement(
        _.DialogContent,
        null,
        _react2.default.createElement(
            _.DialogContentText,
            null,
            content
        )
    );
};

var renderActions = function renderActions(actions) {
    if (!actions) return;

    var actionBtns = actions.map(function (_ref) {
        var label = _ref.label,
            onClick = _ref.onClick;
        return _react2.default.createElement(
            _.Button,
            { onClick: onClick, color: 'primary', key: label },
            label
        );
    });

    return _react2.default.createElement(
        _.DialogActions,
        null,
        actionBtns
    );
};

var ConfirmDialog = function ConfirmDialog(props) {
    var open = props.open,
        onClose = props.onClose,
        actions = props.actions,
        title = props.title,
        content = props.content;


    return _react2.default.createElement(
        _.Dialog,
        {
            open: open,
            onClose: onClose
        },
        renderTitle(title),
        renderContent(content),
        renderActions(actions)
    );
};

ConfirmDialog.propTypes = {
    actions: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        label: _propTypes2.default.string.isRequired,
        onClick: _propTypes2.default.func.isRequired
    })),
    title: _propTypes2.default.string,
    open: _propTypes2.default.bool.isRequired,
    onClose: _propTypes2.default.func.isRequired,
    content: _propTypes2.default.string
};

exports.default = ConfirmDialog;