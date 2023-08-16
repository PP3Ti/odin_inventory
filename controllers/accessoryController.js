const asyncHandler = require('express-async-handler')
const Accessory = require('../models/accessories')

exports.viewAccessories = asyncHandler(async (req, res, next) => {

  const acc = await Accessory.find({})

  res.render('accessories', {acc: acc})
})