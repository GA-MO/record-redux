import { getData, saveData, deleteData } from './helpers'

saveData('RECORDING', 'stop')
saveData('RECORD_CURRENT', '')
if (getData('RECORD_NAME_LIST') === null) {
  saveData('RECORD_NAME_LIST', [])
}

const recordNameList = getData('RECORD_NAME_LIST')
const listKeyBase = ['RECORDING', 'RECORD_CURRENT', 'RECORD_NAME_LIST', 'MAX_DELAY']
for (const key in window.localStorage) {
  if (recordNameList.indexOf(key) === -1 && listKeyBase.indexOf(key) === -1) {
    deleteData(key)
  }
}

const recordData = (name, data) => {
  const datas = getData(name)
  datas.push(data)
  saveData(name, datas)
}

let lastTime = 0

export default store => next => action => {
  if (action.type === 'RECORD_REDUX') {
    saveData('RECORDING', action.mode)
  } else if (getData('RECORDING') === 'recording') {
    const name = getData('RECORD_CURRENT')
    const now = new Date()
    action.delay = (now - lastTime)
    recordData(name, action)
    lastTime = now
  }

  if (typeof action === 'function') {
    return action(store.dispatch, store.getState)
  }

  return next(action)
}
