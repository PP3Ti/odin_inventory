const asyncHandler = require('express-async-handler')
const Accessory = require('../models/accessories')

exports.viewAccessories_get = asyncHandler(async (req, res, next) => {
  const acc = await Accessory.find({})
  res.render('accessories', {acc: acc})
})

exports.addAccessory_get = asyncHandler(async (req, res, next) => {
  res.render('../views/addAccessory.ejs')
})

exports.addAccessory_post = asyncHandler(async (req, res, next) => {
  const acc = await Accessory.findOne().where('name').equals(req.body.name)
  if (acc === null) {
    const newAcc = await Accessory.create(req.body)
    console.log(newAcc.manufacturer + ' ' + newAcc.name + ' added to inventory')
    res.redirect('/')
  } else {
    res.redirect(`/accessories/update/${ acc.id }`)
  }
})

exports.updateAccessory_get = asyncHandler(async (req, res, next) => {
  const acc = await Accessory.findById(req.params.id)
  res.render('updateAccessory', {acc: acc})
})

exports.updateAccessory_post = asyncHandler(async (req, res, next) => {
  const updatedAcc = await Accessory.findByIdAndUpdate(req.params.id, req.body)
  console.log(updatedAcc)
  console.log(updatedAcc.manufacturer + ' ' + updatedAcc.name + ' updated')
  res.redirect('/')
})

exports.deleteAccessory_post = asyncHandler(async (req, res, next) => {
  const deletedAcc = await Accessory.findByIdAndDelete(req.params.id)
  console.log(deletedAcc.manufacturer + ' ' + deletedAcc.name + ' deleted')
  res.redirect('/')
})