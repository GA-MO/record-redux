# record-redux
Record your action to local storage [live demo](https://ga-mo.github.io/record-redux/)

# Installation
```
$ npm install --save-dev record-redux
```

# Config middleware

```js
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'
import { recordReduxMiddleware } from 'record-redux' // import middleware

export default () => {
  const middlewares = [
    thunk,
    createLogger(),
    recordReduxMiddleware,  // Add record-redux to redux middleware
  ];

  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares),
  )

  return store
}

```

# Config UI Component

```js
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from 'store/configureStore'
import { App } from './index'
import { RecordRedux } from 'record-redux' // import UI component
import 'record-redux/lib/style.css' // import UI component CSS

export default class Root extends Component {
  render() {
    const store = configureStore()
    return (
      <Provider store={store} key="provider">
        <div>
          <App />
          <RecordRedux maxDelay={100} /> // Add UI component
        </div>
      </Provider>
    )
  }
}

```

Thank you for your suggestions!
