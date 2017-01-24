import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Action from './actions'
// import './style.scss'
import RecordReduxItem from './recordReduxItem'
import { getData, saveData, deleteData } from './helpers';
// State
function mapStateToProps(state) {
  return {
    // myState: state.myState,
  }
}

// Action
const actions = {
  replayRecord: Action.replayRecord,
  recordMode: Action.recordMode,
  exportJSON: Action.exportJSON,
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class RecordRedux extends React.Component {
  static propTypes = {
    maxDelay: React.PropTypes.number,
  };

  static defaultProps = {
    maxDelay: 10000,
  }

  state = {
    show: false,
    recordCount: 0,
  }

  componentDidMount = () => {
    saveData('MAX_DELAY', this.props.maxDelay);
    const recordData = getData('RECORD_NAME_LIST');
    this.setState({
      recordCount: recordData.length,
    })
  }

  togglePanal = (mode) => {
    this.setState({
      show: !this.state.show,
    })
  }

  addRecord = (e) => {
    /**
     * If user Enter
     */
    if (e.keyCode === 13 && e.target.value !== '') {
      const recordList = getData('RECORD_NAME_LIST')
      recordList.push(e.target.value)
      saveData('RECORD_NAME_LIST', recordList)
      this.setState({
        recordCount: this.state.recordCount + 1,
      })
      /**
       * Clear value
       * @type {String}
       */
      e.target.value = '';
    }
  }

  deleteRecord = (name) => {
    let recordList = getData('RECORD_NAME_LIST')
    recordList = recordList.filter(record => record !== name)
    saveData('RECORD_NAME_LIST', recordList)
    deleteData(name)
    this.setState({
      recordCount: this.state.recordCount - 1,
    })
  }

  uploadJSON = () => {
    const files = document.getElementById('uploadJSONRecordRedux').files;
    if (files.length <= 0) {
      return false;
    }

    const fr = new FileReader();

    fr.onload = (e) => {
      const dataFile = JSON.parse(e.target.result);
      // const dataFile = JSON.stringify(result, null, 2);
      // const dataFile = JSON.parse(result);
      const nameListFile = dataFile.map(name => name.recordName);

      saveData('RECORD_NAME_LIST', nameListFile)
      for (let i = 0; i < dataFile.length; i++) {
        saveData(dataFile[i].recordName, dataFile[i].record)
      }

      const recordData = getData('RECORD_NAME_LIST');
      this.setState({
        recordCount: recordData.length,
      })
    }

    fr.readAsText(files.item(0));

  }

  render() {
    const { show, recordCount } = this.state;
    const { actions } = this.props;
    const recordList = getData('RECORD_NAME_LIST')
    return (
      <div className={`box-record-redux ${show && 'active'}`}>
        <div className="toggle-record" onClick={() => this.togglePanal()}>{`${show ? 'Record ❯' : '❮ Record'}`}</div>
        <input
          onKeyUp={(e) => this.addRecord(e)}
          type="text"
          className="input"
          placeholder="Add new record"
        />
        <div className="box-record-list">
          {
            recordList.map((record, i) => <RecordReduxItem
              key={`${record}-${i}`}
              recordName={record}
              replayRecord={() => actions.replayRecord(record)}
              deleteRecord={() => this.deleteRecord(record)}
            />)
          }
        </div>
        <div className="record-bar">
          <input type="file" id="uploadJSONRecordRedux" />
          <ul className="actions-list">
            <li onClick={() => this.uploadJSON()}>import</li>
            <li onClick={() => actions.exportJSON()}>Export</li>
          </ul>
        </div>
      </div>
    );
  }
}
