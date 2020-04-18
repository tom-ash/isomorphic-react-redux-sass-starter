import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { appReducer } from '../app/functions/app-reducer'
import StyleContext from 'isomorphic-style-loader/StyleContext'
import App from '../app/app'

const insertCss = (...styles) => {
  const removeCss = styles.map(style => style._insertCss())
  return () => removeCss.forEach(dispose => dispose())
}

let store = createStore(
  appReducer,
  { items: ['Dev Item No. 1', 'Dev Item No. 2', 'Dev Item No. 3'] }
)
store.subscribe(() => console.log(store.getState()))

render(
  <StyleContext.Provider value={{ insertCss }}>
    <Provider store={store}>
      <App />
    </Provider>
  </StyleContext.Provider>,
  window.document.getElementById('app')
)
