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

      const maxDelay = getData('MAX_DELAY')

      if (maxDelay == '0') {
        for (let c = 0; c < recordToReplay.length; c++) {
          dispath(recordToReplay[c])
        }
      } else {
        let i = 0;
        const loop = () => {
          const delay = recordToReplay[i].delay > maxDelay ? maxDelay : recordToReplay[i].delay
          setTimeout(() => {
            dispath(recordToReplay[i])
            i = i + 1;
            if (i < recordToReplay.length) loop()
          }, delay)
        }
        loop()
      }
    }
  }
}

export const exportJSON = (name = 'recordRedux') => {
  const dataToExport = getRecordAll();
  saveJSON(dataToExport, `${name}.json`);
  saveData('RECORDING', 'stop');
}
