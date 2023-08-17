const mongoose = require('mongoose')

const accessorySchema = new mongoose.Schema({
  manufacturer: String,
  name: String,
  description: String,
  price: Number,
  stock: Number
})

module.exports = mongoose.model('Accessory', accessorySchema)