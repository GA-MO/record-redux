'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp2;
// import './style.scss'


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _actions = require('./actions');

var Action = _interopRequireWildcard(_actions);

var _recordReduxItem = require('./recordReduxItem');

var _recordReduxItem2 = _interopRequireDefault(_recordReduxItem);

var _helpers = require('./helpers');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// State
function mapStateToProps(state) {
  return {
    // myState: state.myState,
  };
}

// Action
var actions = {
  replayRecord: Action.replayRecord,
  recordMode: Action.recordMode,
  exportJSON: Action.exportJSON
};

function mapDispatchToProps(dispatch) {
  return { actions: (0, _redux.bindActionCreators)(actions, dispatch) };
}

var RecordRedux = (_dec = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _dec(_class = (_temp2 = _class2 = function (_React$Component) {
  _inherits(RecordRedux, _React$Component);

  function RecordRedux() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RecordRedux);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RecordRedux.__proto__ || Object.getPrototypeOf(RecordRedux)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      show: false,
      recordCount: 0
    }, _this.componentDidMount = function () {
      (0, _helpers.saveData)('MAX_DELAY', _this.props.maxDelay);
      var recordData = (0, _helpers.getData)('RECORD_NAME_LIST');
      _this.setState({
        recordCount: recordData.length
      });
    }, _this.togglePanal = function (mode) {
      _this.setState({
        show: !_this.state.show
      });
    }, _this.addRecord = function (e) {
      /**
       * If user Enter
       */
      if (e.keyCode === 13 && e.target.value !== '') {
        var recordList = (0, _helpers.getData)('RECORD_NAME_LIST');
        recordList.push(e.target.value);
        (0, _helpers.saveData)('RECORD_NAME_LIST', recordList);
        _this.setState({
          recordCount: _this.state.recordCount + 1
        });
        /**
         * Clear value
         * @type {String}
         */
        e.target.value = '';
      }
    }, _this.deleteRecord = function (name) {
      var recordList = (0, _helpers.getData)('RECORD_NAME_LIST');
      recordList = recordList.filter(function (record) {
        return record !== name;
      });
      (0, _helpers.saveData)('RECORD_NAME_LIST', recordList);
      _this.setState({
        recordCount: _this.state.recordCount - 1
      });
    }, _this.uploadJSON = function () {
      var files = document.getElementById('uploadJSONRecordRedux').files;
      if (files.length <= 0) {
        return false;
      }

      var fr = new FileReader();

      fr.onload = function (e) {
        var dataFile = JSON.parse(e.target.result);
        // const dataFile = JSON.stringify(result, null, 2);
        // const dataFile = JSON.parse(result);
        var nameListFile = dataFile.map(function (name) {
          return name.recordName;
        });

        (0, _helpers.saveData)('RECORD_NAME_LIST', nameListFile);
        for (var i = 0; i < dataFile.length; i++) {
          (0, _helpers.saveData)(dataFile[i].recordname, dataFile[i].record);
        }

        var recordData = (0, _helpers.getData)('RECORD_NAME_LIST');
        _this.setState({
          recordCount: recordData.length
        });
      };

      fr.readAsText(files.item(0));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RecordRedux, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          show = _state.show,
          recordCount = _state.recordCount;
      var actions = this.props.actions;

      var recordList = (0, _helpers.getData)('RECORD_NAME_LIST');
      return _react2.default.createElement(
        'div',
        { className: 'box-record-redux ' + (show && 'active') },
        _react2.default.createElement(
          'div',
          { className: 'toggle-record', onClick: function onClick() {
              return _this2.togglePanal();
            } },
          '' + (show ? 'Record ❯' : '❮ Record')
        ),
        _react2.default.createElement('input', {
          onKeyUp: function onKeyUp(e) {
            return _this2.addRecord(e);
          },
          type: 'text',
          className: 'input',
          placeholder: 'Add new record'
        }),
        _react2.default.createElement(
          'div',
          { className: 'box-record-list' },
          recordList.map(function (record, i) {
            return _react2.default.createElement(_recordReduxItem2.default, {
              key: record + '-' + i,
              recordName: record,
              replayRecord: function replayRecord() {
                return actions.replayRecord(record);
              },
              deleteRecord: function deleteRecord() {
                return _this2.deleteRecord(record);
              }
            });
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'record-bar' },
          _react2.default.createElement('input', { type: 'file', id: 'uploadJSONRecordRedux' }),
          _react2.default.createElement(
            'ul',
            { className: 'actions-list' },
            _react2.default.createElement(
              'li',
              { onClick: function onClick() {
                  return _this2.uploadJSON();
                } },
              'import'
            ),
            _react2.default.createElement(
              'li',
              { onClick: function onClick() {
                  return actions.exportJSON();
                } },
              'Export'
            )
          )
        )
      );
    }
  }]);

  return RecordRedux;
}(_react2.default.Component), _class2.propTypes = {
  maxDelay: _react2.default.PropTypes.number
}, _class2.defaultProps = {
  maxDelay: 10000
}, _temp2)) || _class);
exports.default = RecordRedux;