const asyncHandler = require('express-async-handler')
const Shoe = require('../models/shoe')
const Crashpad = require('../models/crashpads')
const Accessory = require('../models/accessories')

exports.index = asyncHandler(async (req, res, next) => {

  const shoes = await Shoe.find({}).sort({price: -1})
  const crashpads = await Crashpad.find({})
  const accessories = await Accessory.find({}).sort({name: -1})

  res.render('index', { shoes: shoes, crashpads: crashpads, accessories: accessories })
})