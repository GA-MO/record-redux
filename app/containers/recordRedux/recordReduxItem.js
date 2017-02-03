import React from 'react';
import { getData, saveData } from './helpers';

export default class recordReduxItem extends React.Component {
  static propTypes = {
    recordName: React.PropTypes.string,
    replayRecord: React.PropTypes.func,
    deleteRecord: React.PropTypes.func,
  };

  state = {
    // mode: 'recording',
  }

  // toggleMode = (mode, name) => {
  //   saveData('RECORDING', mode)
  //   const recordMode = mode === 'recording' ? 'stop' : 'recording';
  //   this.setState({
  //     mode: recordMode,
  //   })
  //   saveData('RECORD_CURRENT', name)
  //   console.log('dataname', getData(name));
  //   if (getData(name) === null) {
  //     saveData(name, [])
  //   }
  // }

  render() {
    const { mode } = this.state;
    const { recordName, replayRecord, deleteRecord, active, toggleMode, disabled } = this.props;
    return (
      <div className={`record-redux-item ${disabled && 'disabled'} ${active && 'active'}`}>
        <div className="item name">{recordName}</div>
        <div className="box-action-record">
          <div className={`btn ${active && 'red'}`} onClick={() => toggleMode()} title={`Click to ${active ? 'stop' : 'start'} record`}>{active ? '⬤' : '⬤'}</div>
          <div className="btn play" onClick={!disabled && !active && replayRecord}>▷</div>
          <div className="btn delete" onClick={deleteRecord} title="Delete record">⨯</div>
        </div>
      </div>
    );
  }
}
