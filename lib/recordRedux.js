'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('C:\\Users\\Fuckdev\\Documents\\react-npm-package-boilerplate\\node_modules\\redbox-react\\lib\\index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('C:\\Users\\Fuckdev\\Documents\\react-npm-package-boilerplate\\node_modules\\react-transform-catch-errors\\lib\\index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('C:\\Users\\Fuckdev\\Documents\\react-npm-package-boilerplate\\node_modules\\react-transform-hmr\\lib\\index.js');

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp2;

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

var _components = {
  RecordRedux: {
    displayName: 'RecordRedux'
  }
};

var _CUsersFuckdevDocumentsReactNpmPackageBoilerplateNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'app/containers/recordRedux/recordRedux.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _CUsersFuckdevDocumentsReactNpmPackageBoilerplateNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'app/containers/recordRedux/recordRedux.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _CUsersFuckdevDocumentsReactNpmPackageBoilerplateNode_modulesReactTransformHmrLibIndexJs2(_CUsersFuckdevDocumentsReactNpmPackageBoilerplateNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}
// import './style.scss'


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

var RecordRedux = _wrapComponent('RecordRedux')((_dec = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _dec(_class = (_temp2 = _class2 = function (_React$Component) {
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
      var _this2;

      return (_this2 = _this).__componentDidMount__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.togglePanal = function () {
      var _this3;

      return (_this3 = _this).__togglePanal__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.addRecord = function () {
      var _this4;

      return (_this4 = _this).__addRecord__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _this.deleteRecord = function () {
      var _this5;

      return (_this5 = _this).__deleteRecord__REACT_HOT_LOADER__.apply(_this5, arguments);
    }, _this.uploadJSON = function () {
      var _this6;

      return (_this6 = _this).__uploadJSON__REACT_HOT_LOADER__.apply(_this6, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RecordRedux, [{
    key: '__componentDidMount__REACT_HOT_LOADER__',
    value: function __componentDidMount__REACT_HOT_LOADER__() {
      return this.__componentDidMount__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__componentDidMount__REACT_HOT_LOADER__',
    value: function __componentDidMount__REACT_HOT_LOADER__() {
      return this.__componentDidMount__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__componentDidMount__REACT_HOT_LOADER__',
    value: function __componentDidMount__REACT_HOT_LOADER__() {
      var recordData = (0, _helpers.getData)('RECORD_NAME_LIST');
      this.setState({
        recordCount: recordData.length
      });
    }
  }, {
    key: '__togglePanal__REACT_HOT_LOADER__',
    value: function __togglePanal__REACT_HOT_LOADER__() {
      return this.__togglePanal__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__togglePanal__REACT_HOT_LOADER__',
    value: function __togglePanal__REACT_HOT_LOADER__() {
      return this.__togglePanal__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__togglePanal__REACT_HOT_LOADER__',
    value: function __togglePanal__REACT_HOT_LOADER__(mode) {
      this.setState({
        show: !this.state.show
      });
    }
  }, {
    key: '__addRecord__REACT_HOT_LOADER__',
    value: function __addRecord__REACT_HOT_LOADER__() {
      return this.__addRecord__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__addRecord__REACT_HOT_LOADER__',
    value: function __addRecord__REACT_HOT_LOADER__() {
      return this.__addRecord__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__addRecord__REACT_HOT_LOADER__',
    value: function __addRecord__REACT_HOT_LOADER__(e) {
      /**
       * If user Enter
       */
      if (e.keyCode === 13 && e.target.value !== '') {
        var recordList = (0, _helpers.getData)('RECORD_NAME_LIST');
        recordList.push(e.target.value);
        (0, _helpers.saveData)('RECORD_NAME_LIST', recordList);
        this.setState({
          recordCount: this.state.recordCount + 1
        });
        /**
         * Clear value
         * @type {String}
         */
        e.target.value = '';
      }
    }
  }, {
    key: '__deleteRecord__REACT_HOT_LOADER__',
    value: function __deleteRecord__REACT_HOT_LOADER__() {
      return this.__deleteRecord__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__deleteRecord__REACT_HOT_LOADER__',
    value: function __deleteRecord__REACT_HOT_LOADER__() {
      return this.__deleteRecord__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__deleteRecord__REACT_HOT_LOADER__',
    value: function __deleteRecord__REACT_HOT_LOADER__(name) {
      var recordList = (0, _helpers.getData)('RECORD_NAME_LIST');
      recordList = recordList.filter(function (record) {
        return record !== name;
      });
      (0, _helpers.saveData)('RECORD_NAME_LIST', recordList);
      this.setState({
        recordCount: this.state.recordCount - 1
      });
    }
  }, {
    key: '__uploadJSON__REACT_HOT_LOADER__',
    value: function __uploadJSON__REACT_HOT_LOADER__() {
      return this.__uploadJSON__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__uploadJSON__REACT_HOT_LOADER__',
    value: function __uploadJSON__REACT_HOT_LOADER__() {
      return this.__uploadJSON__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__uploadJSON__REACT_HOT_LOADER__',
    value: function __uploadJSON__REACT_HOT_LOADER__() {
      var _this7 = this;

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
        _this7.setState({
          recordCount: recordData.length
        });
      };

      fr.readAsText(files.item(0));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this8 = this;

      var _state = this.state,
          show = _state.show,
          recordCount = _state.recordCount;
      var actions = this.props.actions;

      var recordList = (0, _helpers.getData)('RECORD_NAME_LIST');
      return _react3.default.createElement(
        'div',
        { className: 'box-record-redux ' + (show && 'active') },
        _react3.default.createElement(
          'div',
          { className: 'toggle-record', onClick: function onClick() {
              return _this8.togglePanal();
            } },
          '' + (show ? 'Record ❯' : '❮ Record')
        ),
        _react3.default.createElement('input', {
          onKeyUp: function onKeyUp(e) {
            return _this8.addRecord(e);
          },
          type: 'text',
          className: 'input',
          placeholder: 'Add new record'
        }),
        _react3.default.createElement(
          'div',
          { className: 'box-record-list' },
          recordList.map(function (record) {
            return _react3.default.createElement(_recordReduxItem2.default, {
              recordName: record,
              replayRecord: function replayRecord() {
                return actions.replayRecord(record);
              },
              deleteRecord: function deleteRecord() {
                return _this8.deleteRecord(record);
              }
            });
          })
        ),
        _react3.default.createElement(
          'div',
          { className: 'record-bar' },
          _react3.default.createElement('input', { type: 'file', id: 'uploadJSONRecordRedux' }),
          _react3.default.createElement(
            'ul',
            { className: 'actions-list' },
            _react3.default.createElement(
              'li',
              { onClick: function onClick() {
                  return _this8.uploadJSON();
                } },
              'import'
            ),
            _react3.default.createElement(
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
}(_react3.default.Component), _class2.propTypes = {
  // name: React.PropTypes.string,
}, _temp2)) || _class));

var _default = RecordRedux;
exports.default = _default;
;

var _temp3 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'app/containers/recordRedux/recordRedux.js');

  __REACT_HOT_LOADER__.register(actions, 'actions', 'app/containers/recordRedux/recordRedux.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', 'app/containers/recordRedux/recordRedux.js');

  __REACT_HOT_LOADER__.register(RecordRedux, 'RecordRedux', 'app/containers/recordRedux/recordRedux.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'app/containers/recordRedux/recordRedux.js');
}();

;