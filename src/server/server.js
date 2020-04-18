import Express from 'express'
import { handleRequest } from './handle-request'

const app = Express()

app.use('/', Express.static('dist/client'))
app.use(handleRequest)
app.listen(process.env.PORT || 8080)
