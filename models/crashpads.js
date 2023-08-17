const mongoose = require('mongoose')

const crashpadSchema = new mongoose.Schema({
  manufacturer: String, 
  name: String,
  thickness: Number,
  weight: Number,
  price: Number,
  stock: Number
})

module.exports = mongoose.model('Crashpad', crashpadSchema)