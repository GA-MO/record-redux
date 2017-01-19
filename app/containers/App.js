
import React, { Component, PropTypes } from 'react';
import { RecordRedux } from 'containers/recordRedux';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// State
function mapStateToProps(state) {
  return {
    count: state.count.count,
  }
}

// Action
const actions = {
  add: () => ({
    type: 'ADD',
  }),
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends React.Component {
  static propTypes = {
    // name: React.PropTypes.string,
  };

  render() {
    const { count } = this.props;
    console.log('count', count);
    return (
      <div className="_center">
        <h1>{count}</h1>
        <button className="button" onClick={() => this.props.actions.add()}>Click</button>
        <RecordRedux maxDelay={100} />
      </div>
    );
  }
}
