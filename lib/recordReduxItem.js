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

var _class, _temp2;

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  recordReduxItem: {
    displayName: 'recordReduxItem'
  }
};

var _CUsersFuckdevDocumentsReactNpmPackageBoilerplateNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'app/containers/recordRedux/recordReduxItem.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _CUsersFuckdevDocumentsReactNpmPackageBoilerplateNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'app/containers/recordRedux/recordReduxItem.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _CUsersFuckdevDocumentsReactNpmPackageBoilerplateNode_modulesReactTransformHmrLibIndexJs2(_CUsersFuckdevDocumentsReactNpmPackageBoilerplateNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var recordReduxItem = _wrapComponent('recordReduxItem')((_temp2 = _class = function (_React$Component) {
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
    }, _this.toggleMode = function () {
      var _this2;

      return (_this2 = _this).__toggleMode__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(recordReduxItem, [{
    key: '__toggleMode__REACT_HOT_LOADER__',
    value: function __toggleMode__REACT_HOT_LOADER__(mode, name) {
      (0, _helpers.saveData)('RECORDING', mode);
      var recordMode = mode === 'recording' ? 'stop' : 'recording';
      this.setState({
        mode: recordMode
      });
      (0, _helpers.saveData)('RECORD_CURRENT', name);
      console.log('dataname', (0, _helpers.getData)(name));
      if ((0, _helpers.getData)(name) === null) {
        (0, _helpers.saveData)(name, []);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var mode = this.state.mode;
      var _props = this.props,
          recordName = _props.recordName,
          replayRecord = _props.replayRecord,
          deleteRecord = _props.deleteRecord;

      return _react3.default.createElement(
        'div',
        { className: 'record-redux-item' },
        _react3.default.createElement(
          'div',
          { className: 'item name' },
          recordName
        ),
        _react3.default.createElement(
          'div',
          { className: 'box-action-record' },
          _react3.default.createElement(
            'div',
            { className: 'btn ' + (mode !== 'recording' && 'red'), onClick: function onClick() {
                return _this3.toggleMode(mode, recordName);
              } },
            mode === 'recording' ? '⬤' : '⬤'
          ),
          _react3.default.createElement(
            'div',
            { className: 'btn', onClick: replayRecord },
            '\u25B7'
          ),
          _react3.default.createElement(
            'div',
            { className: 'btn', onClick: deleteRecord },
            '\u2212'
          )
        )
      );
    }
  }]);

  return recordReduxItem;
}(_react3.default.Component), _class.propTypes = {
  recordName: _react3.default.PropTypes.string,
  replayRecord: _react3.default.PropTypes.func,
  deleteRecord: _react3.default.PropTypes.func
}, _temp2));

var _default = recordReduxItem;
exports.default = _default;
;

var _temp3 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(recordReduxItem, 'recordReduxItem', 'app/containers/recordRedux/recordReduxItem.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'app/containers/recordRedux/recordReduxItem.js');
}();

;