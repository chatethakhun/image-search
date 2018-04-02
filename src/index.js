import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
//import App from './App';
import Search from './features/search/Search'
import registerServiceWorker from './registerServiceWorker'
import reducer from './features/search/redux'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxPromiseMiddleware from 'redux-promise-middleware'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(reduxPromiseMiddleware()))
)

ReactDOM.render(
  <Provider store={store}>
    <Search />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
