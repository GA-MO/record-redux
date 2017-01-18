import React from 'react';
import { getData, saveData } from './helpers';

export default class recordReduxItem extends React.Component {
  static propTypes = {
    recordName: React.PropTypes.string,
    replayRecord: React.PropTypes.func,
    deleteRecord: React.PropTypes.func,
  };

  state = {
    mode: 'recording',
  }

  toggleMode = (mode, name) => {
    saveData('RECORDING', mode)
    const recordMode = mode === 'recording' ? 'stop' : 'recording';
    this.setState({
      mode: recordMode,
    })
    saveData('RECORD_CURRENT', name)
    console.log('dataname', getData(name));
    if (getData(name) === null) {
      saveData(name, [])
    }
  }

  render() {
    const { mode } = this.state;
    const { recordName, replayRecord, deleteRecord } = this.props;
    return (
      <div className="record-redux-item">
        <div className="item name">{recordName}</div>
        <div className="box-action-record">
          <div className={`btn ${mode !== 'recording' && 'red'}`} onClick={() => this.toggleMode(mode, recordName)}>{mode === 'recording' ? '⬤' : '⬤'}</div>
          <div className="btn" onClick={replayRecord}>▷</div>
          <div className="btn" onClick={deleteRecord}>−</div>
        </div>
      </div>
    );
  }
}
