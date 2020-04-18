import React from 'react'
import { hydrate } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { appReducer } from '../app/functions/app-reducer'
import StyleContext from 'isomorphic-style-loader/StyleContext'
import App from '../app/app'

const insertCss = (...styles) => {
  const removeCss = styles.map(style => style._insertCss())
  return () => removeCss.forEach(dispose => dispose())
}

const serverState = window.serverState
delete window.serverState
const store = createStore(
  appReducer,
  serverState
)

hydrate(
  <StyleContext.Provider value={{ insertCss }}>
    <Provider store={store}>
      <App />
    </Provider>
  </StyleContext.Provider>,
  document.getElementById('app')
)
