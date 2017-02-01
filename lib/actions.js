'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exportJSON = exports.replayRecord = exports.play = exports.recordMode = undefined;

var _helpers = require('./helpers');

var recordMode = exports.recordMode = function recordMode(mode) {
  return {
    type: 'RECORD_REDUX',
    mode: mode
  };
};

var play = exports.play = function play(action) {
  return action;
};

var replayRecord = exports.replayRecord = function replayRecord(name) {
  return function (dispath) {
    var recordToReplay = (0, _helpers.getData)(name);
    if (recordToReplay !== null) {
      (function () {

        var maxDelay = (0, _helpers.getData)('MAX_DELAY');

        if (maxDelay == '0') {
          for (var c = 0; c < recordToReplay.length; c++) {
            dispath(recordToReplay[c]);
          }
        } else {
          (function () {
            var i = 0;
            var loop = function loop() {
              var delay = recordToReplay[i].delay > maxDelay ? maxDelay : recordToReplay[i].delay;
              setTimeout(function () {
                dispath(recordToReplay[i]);
                i = i + 1;
                if (i < recordToReplay.length) loop();
              }, delay);
            };
            loop();
          })();
        }
      })();
    }
  };
};

var exportJSON = exports.exportJSON = function exportJSON() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'recordRedux';

  var dataToExport = (0, _helpers.getRecordAll)();
  (0, _helpers.saveJSON)(dataToExport, name + '.json');
  (0, _helpers.saveData)('RECORDING', 'stop');
};