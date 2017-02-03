'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var recordReduxItem = (_temp2 = _class = function (_React$Component) {
  _inherits(recordReduxItem, _React$Component);

  function recordReduxItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, recordReduxItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = recordReduxItem.__proto__ || Object.getPrototypeOf(recordReduxItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}
    // mode: 'recording',


    // toggleMode = (mode, name) => {
    //   saveData('RECORDING', mode)
    //   const recordMode = mode === 'recording' ? 'stop' : 'recording';
    //   this.setState({
    //     mode: recordMode,
    //   })
    //   saveData('RECORD_CURRENT', name)
    //   console.log('dataname', getData(name));
    //   if (getData(name) === null) {
    //     saveData(name, [])
    //   }
    // }

    , _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(recordReduxItem, [{
    key: 'render',
    value: function render() {
      var mode = this.state.mode;
      var _props = this.props,
          recordName = _props.recordName,
          replayRecord = _props.replayRecord,
          deleteRecord = _props.deleteRecord,
          active = _props.active,
          toggleMode = _props.toggleMode,
          disabled = _props.disabled;

      return _react2.default.createElement(
        'div',
        { className: 'record-redux-item ' + (disabled && 'disabled') + ' ' + (active && 'active') },
        _react2.default.createElement(
          'div',
          { className: 'item name' },
          recordName
        ),
        _react2.default.createElement(
          'div',
          { className: 'box-action-record' },
          _react2.default.createElement(
            'div',
            { className: 'btn ' + (active && 'red'), onClick: function onClick() {
                return toggleMode();
              }, title: 'Click to ' + (active ? 'stop' : 'start') + ' record' },
            active ? '⬤' : '⬤'
          ),
          _react2.default.createElement(
            'div',
            { className: 'btn play', onClick: !disabled && !active && replayRecord },
            '\u25B7'
          ),
          _react2.default.createElement(
            'div',
            { className: 'btn delete', onClick: deleteRecord, title: 'Delete record' },
            '\u2A2F'
          )
        )
      );
    }
  }]);

  return recordReduxItem;
}(_react2.default.Component), _class.propTypes = {
  recordName: _react2.default.PropTypes.string,
  replayRecord: _react2.default.PropTypes.func,
  deleteRecord: _react2.default.PropTypes.func
}, _temp2);
exports.default = recordReduxItem;