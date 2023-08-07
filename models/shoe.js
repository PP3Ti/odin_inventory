const mongoose = require("mongoose");

const shoeSchema = new mongoose.Schema({
  manufacturer: String,
  name: String,
  availableSizes: [Number],
  price: Number
})

module.exports = mongoose.model('Shoe', shoeSchema)

/*const cobra = new Shoe({
  manufacturer: 'La Sportiva',
  name: 'Cobra',
  availableSizes: [38, 39, 43],
  price: 135
})

cobra.save()*/
