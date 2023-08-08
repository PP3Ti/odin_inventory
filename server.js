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

  //const shoe = await Shoe.create({ name: 'Cobra', manufacturer: 'La Sportiva' }) 
  //const deleteshoes = await Shoe.deleteMany().where('name').equals('Cobra')
  //const findShoe = await Shoe.find().where('name').equals('Cobra')
  //const shoeExists = await Shoe.exists().where('name').equals('python')
  //console.log(shoeExists)

  app.listen(3000, () => {
    console.log('server listening on localhost:3000')
  }) 
}

connectToDB().catch(err => {
  console.log(err.message)
})

