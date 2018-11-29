'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTable = require('react-table');

var _reactTable2 = _interopRequireDefault(_reactTable);

var _treeTable = require('react-table/lib/hoc/treeTable');

var _treeTable2 = _interopRequireDefault(_treeTable);

var _ = require('../');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodashEs = require('lodash-es');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var loading = function loading() {
    return _react2.default.createElement(
        'div',
        { className: '-loading -active' },
        _react2.default.createElement(
            'div',
            { className: '-loading-inner' },
            _react2.default.createElement(
                'div',
                { className: 'text' },
                'Loading...'
            ),
            _react2.default.createElement(_.LinearProgress, { color: 'primary' })
        )
    );
};

var Table = function (_Component) {
    _inherits(Table, _Component);

    function Table(props) {
        _classCallCheck(this, Table);

        var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

        _this.state = {
            mountTime: Date.now(),
            timer: null,
            timedOut: false
        };
        return _this;
    }

    _createClass(Table, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (this.props.timeOut) {
                var timeOutDuration = this.props.timeOut == true ? 60 * 1000 : this.props.timeOut;
                this.setState({
                    timer: setInterval(function () {
                        if (Date.now() - _this2.state.mountTime > timeOutDuration) {
                            clearInterval(_this2.state.timer);
                            _this2.setState({ timedOut: true });
                        }

                        if (_this2.props.data && !(0, _lodashEs.isEmpty)(_this2.props.data)) {
                            clearInterval(_this2.state.timer);
                        }
                    }, 1000)
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearInterval(this.state.timer);
        }
    }, {
        key: 'render',
        value: function render() {
            var newProps = Object.assign({}, this.props);
            var TableComp = _reactTable2.default;

            if (newProps.treeTable) {
                TableComp = (0, _treeTable2.default)(_reactTable2.default);
            }

            if (this.state.timedOut) {
                newProps.loading = false;
                newProps.NoDataComponent = newProps.TimeOutComponent || newProps.NoDataComponent;
            } else if (newProps.loading) {
                newProps.noDataText = '';
                newProps.showPagination = false;
                newProps.LoadingComponent = loading;
                newProps.NoDataComponent = undefined;
            }

            return _react2.default.createElement(TableComp, newProps);
        }
    }]);

    return Table;
}(_react.Component);

// const Table = (props) => {
// 	let newProps = {...props};

// 	if(newProps.loading) {
// 		newProps.noDataText = '';
// 		newProps.showPagination = false;
//         newProps.LoadingComponent = loading;
//         newProps.NoDataComponent= undefined
// 	}

//     let TableComp = ReactTable;

//     if(newProps.treeTable) {
//         TableComp = treeTableHOC(ReactTable);
//     }

//     return (
//         <TableComp {...newProps} />
//     )
// }

Table.propTypes = {
    timeOut: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]),
    TimeOutComponent: _propTypes2.default.element,
    NoDataComponent: _propTypes2.default.element
};

exports.default = Table;