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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = recordReduxItem.__proto__ || Object.getPrototypeOf(recordReduxItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      mode: 'recording'
    }, _this.toggleMode = function (mode, name) {
      (0, _helpers.saveData)('RECORDING', mode);
      var recordMode = mode === 'recording' ? 'stop' : 'recording';
      _this.setState({
        mode: recordMode
      });
      (0, _helpers.saveData)('RECORD_CURRENT', name);
      console.log('dataname', (0, _helpers.getData)(name));
      if ((0, _helpers.getData)(name) === null) {
        (0, _helpers.saveData)(name, []);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(recordReduxItem, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var mode = this.state.mode;
      var _props = this.props,
          recordName = _props.recordName,
          replayRecord = _props.replayRecord,
          deleteRecord = _props.deleteRecord;

      return _react2.default.createElement(
        'div',
        { className: 'record-redux-item' },
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
            { className: 'btn ' + (mode !== 'recording' && 'red'), onClick: function onClick() {
                return _this2.toggleMode(mode, recordName);
              } },
            mode === 'recording' ? '⬤' : '⬤'
          ),
          _react2.default.createElement(
            'div',
            { className: 'btn', onClick: replayRecord },
            '\u25B7'
          ),
          _react2.default.createElement(
            'div',
            { className: 'btn', onClick: deleteRecord },
            '\u2212'
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