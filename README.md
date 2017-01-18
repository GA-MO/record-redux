# record-redux
record your redux stores

# Installation
```
$ npm install --save-dev record-redux
```

# Config middleware

```
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger'
import rootReducer from '../reducers'
import { recordReduxMiddleware } from 'record-redux';

export default (history) => {
  const middlewares = [
    thunk,
    createLogger(),
    recordReduxMiddleware,  // Add record-redux to redux middleware
  ];

  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  )

  return store
}

```

# Config UI Component
```
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from 'store/configureStore'
import { App } from './index'
import { RecordRedux } from 'containers/recordRedux';

export default class Root extends Component {
  render() {
    const store = configureStore();
    return (
      <Provider store={store} key="provider">
        <App />
        <RecordRedux /> // Add UI component
      </Provider>
    )
  }
}

```

Thank you for your suggestions!
