import { getData, saveData } from './helpers';

saveData('RECORDING', 'stop')
saveData('RECORD_CURRENT', '')
if (getData('RECORD_NAME_LIST') === null) {
  saveData('RECORD_NAME_LIST', [])
}

const recordData = (name, data) => {
  const datas = getData(name)
  datas.push(data)
  saveData(name, datas)
}

export default store => dispatch => action => {
  if (action.type === 'RECORD_REDUX') {
    saveData('RECORDING', action.mode)
  } else if (getData('RECORDING') === 'recording') {
    const name = getData('RECORD_CURRENT')
    recordData(name, action)
  }
  return dispatch(action);
}