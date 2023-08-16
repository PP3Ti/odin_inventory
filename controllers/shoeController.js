const asyncHandler = require('express-async-handler')
const Shoe = require('../models/shoe')

exports.viewShoes = asyncHandler(async (req, res, next) => {

  const shoes = await Shoe.find({})

  res.render('shoes', {shoes: shoes})
})