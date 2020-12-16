import { createStore, applyMiddleware, compose } from 'redux'
import penderMiddleware from 'redux-pender'
import modules from './modules'

const isDev = process.env.NODE_ENV === 'development'

const devtools =
  isDev && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__
    : () => fn => fn

const configureStore = initialState => {
  const enhancers = [applyMiddleware(penderMiddleware()), devtools()]

  const store = createStore(modules, initialState, compose(...enhancers))

  return store
}

export default configureStore
