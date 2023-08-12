const mongoose = require('mongoose')

const accessorySchema = new mongoose.Schema({
  manufacturer: String,
  name: String,
  description: String,
  price: Number,
  count: Number
})

module.exports = mongoose.model('Accessory', accessorySchema)