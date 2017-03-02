'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var saveJSON = exports.saveJSON = function saveJSON(data, filename) {
  if (!data) {
    console.error('No data');
    return;
  }

  if (!filename) filename = 'console.json';

  if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
    data = JSON.stringify(data, undefined, 4);
  }

  var blob = new Blob([data], { type: 'text/json' });

  // check browser type
  var isIE = false || !!document.documentMode;
  var isEdge = !isIE && !!window.StyleMedia;

  // create link and popup download file dialog
  if (isIE || isEdge) {
    window.navigator.msSaveBlob(blob, filename);
  } else {
    var e = document.createEvent('MouseEvents');
    var a = document.createElement('a');

    a.download = filename;
    a.href = window.URL.createObjectURL(blob);
    a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    a.dispatchEvent(e);
  }
};

var getData = exports.getData = function getData(name) {
  return JSON.parse(window.localStorage.getItem(name));
};

var saveData = exports.saveData = function saveData(name, data) {
  window.localStorage.setItem(name, JSON.stringify(data));
};

var deleteData = exports.deleteData = function deleteData(name) {
  window.localStorage.removeItem(name);
};

var getRecordAll = exports.getRecordAll = function getRecordAll() {
  var recordNameList = getData('RECORD_NAME_LIST');
  return recordNameList.map(function (name) {
    return {
      recordName: name,
      record: getData(name)
    };
  });
};