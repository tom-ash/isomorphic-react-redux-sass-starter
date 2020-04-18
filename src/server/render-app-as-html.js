import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { appReducer } from '../app/functions/app-reducer'
import StyleContext from 'isomorphic-style-loader/StyleContext'
import App from '../app/app'

export function renderAppAsHtml(initialState) {
  const css = new Set()
  const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))
  const store = createStore(
    appReducer,
    initialState
  )

  const html = renderToString(
    <Provider store={store}>
      <StyleContext.Provider value={{ insertCss }}>
        <div id='app'>
          <App />
        </div>
      </StyleContext.Provider>
    </Provider>
  )

  const serverState = store.getState()

  return {
    html,
    css,
    serverState
  }
}
