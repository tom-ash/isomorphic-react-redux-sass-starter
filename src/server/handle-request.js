import { sendResponse } from './send-response'

export function handleRequest(req, res) {
  let initialState = { items: [] }
  let title = 'Isomorphic Mode | Main Page | isomorphic-react-redux-sass-starter'
  let description = 'This is the Main Page!'

  if (req.originalUrl === '/index') {
    initialState = { items: ['Server Item No. 1', 'Server Item No. 2', 'Server Item No. 3'] }
    title = 'Isomorphic Mode | Index | isomorphic-react-redux-sass-starter'
    description = 'This is the Index!'
  }

  sendResponse({
    res,
    initialState,
    title,
    description
  })
}
