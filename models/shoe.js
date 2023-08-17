const mongoose = require("mongoose");

const shoeSchema = new mongoose.Schema({
  manufacturer: String,
  name: {
    type: String,
    required: true
    },
  availableSizes: 
    [
      { size:Number, stock:Number }
    ],
  price: Number
})

module.exports = mongoose.model('Shoe', shoeSchema)
