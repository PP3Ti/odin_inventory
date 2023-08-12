const asyncHandler = require('express-async-handler')
const Crashpad = require('../models/crashpads')

exports.viewPads = asyncHandler(async (req, res, next) => {

  const pads = await Crashpad.find({})

  res.render('crashpads', {pads: pads})
})