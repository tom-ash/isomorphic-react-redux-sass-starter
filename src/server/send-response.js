import { renderPage } from './render-page'
import { renderAppAsHtml } from './render-app-as-html'

export function sendResponse({
  res,
  initialState,
  title,
  description
}) {
  res.send(
    renderPage({ 
      ...renderAppAsHtml(initialState),
      title,
      description
    }) 
  )
}
