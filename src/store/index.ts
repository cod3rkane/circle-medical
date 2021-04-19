import thunk from 'redux-thunk'
import { applyMiddleware, createStore, Store } from 'redux'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'

import reducers from './reducers'

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    return nextState
  } else {
    return reducers(state, action)
  }
}

const makeStore = (initialStore = {}): Store => {
  return createStore(reducer, initialStore, bindMiddleware([thunk]))
}

export const wrapper = createWrapper(makeStore)
