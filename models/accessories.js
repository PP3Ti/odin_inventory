const mongoose = require('mongoose')

const accessorySchema = new mongoose.Schema({
  manufacturer: String,
  name: String,
  description: String,
  price: Number
})

module.exports = mongoose.model('Accessory', accessorySchema)