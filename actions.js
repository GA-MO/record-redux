import { saveJSON, getData, saveData, getRecordAll } from './helpers';

export const recordMode = (mode) => ({
  type: 'RECORD_REDUX',
  mode,
})

export const play = action => action;

export const replayRecord = (name) => {
  return (dispath) => {
    const recordToReplay = getData(name);
    if (recordToReplay !== null) {
      for (let i = 0; i < recordToReplay.length; i++) {
        console.log(recordToReplay[i]);
        dispath(recordToReplay[i])
      }
    }
  }
}

export const exportJSON = (name = 'recordRedux') => {
  const dataToExport = getRecordAll();
  saveJSON(dataToExport, `${name}.json`);
  saveData('RECORDING', 'stop');
}
