const express = require('express')
const app = express()
const logger = require('morgan')
const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.use(logger('dev'))
app.use('/', indexRouter)

app.listen(3000, () => {
  console.log('server listening on localhost:3000')
})
