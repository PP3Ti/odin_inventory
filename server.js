require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const logger = require('morgan')

const indexRouter = require('./routes/index')

const Shoe = require('./models/shoe')

app.set('view engine', 'ejs')
app.use(logger('dev'))
app.use('/', indexRouter)

async function connectToDB() {
  await mongoose.connect(process.env.ATLAS_URI).then(console.log('DB connected'))

  const cobra = await Shoe.create({
    manufacturer: 'La Sportiva',
    name: 'Cobra',
    availableSizes: [38, 39, 43],
    price: 135
  })
  await cobra.save()
  console.log(cobra)

  app.listen(3000, () => {
    console.log('server listening on localhost:3000')
  }) 
}

connectToDB().catch(err => {
  console.log(err.message)
})

