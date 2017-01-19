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
      let i = 0;
      const maxDelay = getData('MAX_DELAY')
      const loop = () => {
        const delay = recordToReplay[i].delay > maxDelay ? maxDelay : recordToReplay[i].delay
        setTimeout(() => {
          dispath(recordToReplay[i])
          i = i + 1;
          if (i < recordToReplay.length) loop()
        }, delay)
      }
      loop()
      // for (let i = 0; i < recordToReplay.length; i++) {
      //   const delay = recordToReplay[i].delay > 3000 ? 3000 : recordToReplay[i].delay;
      //   setTimeout(() => {
      //     dispath(recordToReplay[i])
      //   }, delay)
      // }
    }
  }
}

export const exportJSON = (name = 'recordRedux') => {
  const dataToExport = getRecordAll();
  saveJSON(dataToExport, `${name}.json`);
  saveData('RECORDING', 'stop');
}
