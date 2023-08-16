const asyncHandler = require('express-async-handler')
const Crashpad = require('../models/crashpads')

exports.viewPads_get = asyncHandler(async (req, res, next) => {
  const pads = await Crashpad.find({})
  res.render('crashpads', { pads: pads })
})

exports.addPad_get = asyncHandler(async (req, res, next) => {
  res.render('addPadForm')
})

exports.addPad_post = asyncHandler(async (req, res, next) => {
  
  const pad = await Crashpad.findOne().where('name').equals(req.body.name)
  if (pad === null) {
    const newPad = await Crashpad.create(req.body)
    console.log(newPad.manufacturer + ' ' + newPad.name + ' added to inventory')
    res.redirect('/crashpads')
  } else {
    res.redirect(`/crashpads/update/${pad.id}`)
  }
})

exports.updatePad_get = asyncHandler(async (req, res, next) => {
  const pad = await Crashpad.findById(req.params.id)
  res.render('updateCrashpad', { pad: pad })
})

exports.updatePad_post = asyncHandler(async (req, res, next) => {
  const updatedPad = await Crashpad.findByIdAndUpdate(req.params.id, req.body)
  console.log(updatedPad.manufacturer + ' ' + updatedPad.name + ' updated')
  res.redirect('/crashpads')
})

exports.deletePad_post = asyncHandler(async (req, res, next) => {
  const deletedPad = await Crashpad.findByIdAndDelete(req.params.id)
  console.log(deletedPad.manufacturer + ' ' + deletedPad.name + ' deleted')
  res.redirect('/crashpads')
})