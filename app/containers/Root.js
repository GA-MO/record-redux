import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from 'store/configureStore'
import { App } from './index'

export default class Root extends Component {
  render() {
    const store = configureStore();
    return (
      <Provider store={store} key="provider">
        <App />
      </Provider>
    )
  }
}
