export const saveJSON = (data, filename) => {
  if (!data) {
    console.error('No data')
    return;
  }

  if (!filename) filename = 'console.json'

  if (typeof data === 'object') {
    data = JSON.stringify(data, undefined, 4)
  }

  const blob = new Blob([data], { type: 'text/json' });

  // check browser type
  const isIE = false || !!document.documentMode;
  const isEdge = !isIE && !!window.StyleMedia;

  // create link and popup download file dialog
  if (isIE || isEdge) {
    window.navigator.msSaveBlob(blob, filename);
  } else {
    const e = document.createEvent('MouseEvents');
    const a = document.createElement('a');

    a.download = filename
    a.href = window.URL.createObjectURL(blob)
    a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    a.dispatchEvent(e)
  }
};

export const getData = (name) => {
  return JSON.parse(window.localStorage.getItem(name))
}

export const saveData = (name, data) => {
  window.localStorage.setItem(name, JSON.stringify(data))
}

export const deleteData = (name) => {
  window.localStorage.removeItem(name)
}

export const getRecordAll = () => {
  const recordNameList = getData('RECORD_NAME_LIST')
  return recordNameList.map((name) => {
    return {
      recordName: name,
      record: getData(name),
    };
  })
}
