const mongoose = require('mongoose')

const crashpadSchema = new mongoose.Schema({
  manufacturer: String, 
  name: String,
  thickness: Number,
  weight: Number,
  price: Number,
  count: Number
})

module.exports = mongoose.model('Crashpad', crashpadSchema)