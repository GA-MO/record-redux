'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('./helpers');

(0, _helpers.saveData)('RECORDING', 'stop');
(0, _helpers.saveData)('RECORD_CURRENT', '');
if ((0, _helpers.getData)('RECORD_NAME_LIST') === null) {
  (0, _helpers.saveData)('RECORD_NAME_LIST', []);
}

var recordData = function recordData(name, data) {
  var datas = (0, _helpers.getData)(name);
  datas.push(data);
  (0, _helpers.saveData)(name, datas);
};

var lastTime = 0;

exports.default = function (store) {
  return function (next) {
    return function (action) {
      if (action.type === 'RECORD_REDUX') {
        (0, _helpers.saveData)('RECORDING', action.mode);
      } else if ((0, _helpers.getData)('RECORDING') === 'recording') {
        var name = (0, _helpers.getData)('RECORD_CURRENT');
        var now = new Date();
        action.delay = now - lastTime;
        recordData(name, action);
        lastTime = now;
      }

      if (typeof action === 'function') {
        return action(store.dispatch, store.getState);
      }

      return next(action);
    };
  };
};