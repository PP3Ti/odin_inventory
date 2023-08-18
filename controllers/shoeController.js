const asyncHandler = require('express-async-handler')
const Shoe = require('../models/shoe')

const sizes = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47]

exports.viewShoes_get = asyncHandler(async (req, res, next) => {
  const shoes = await Shoe.find({})
  let shoesSum = 0
  shoes.forEach(shoe => {
    shoe.fullStock = shoe.availableSizes
                                        .map(size => size.stock)
                                        .reduce((a, b) => a + b, 0)
  })
  shoes.forEach(shoe => {
    shoesSum += Math.floor(shoe.price * shoe.fullStock)
  })

  res.render('shoes', { shoes: shoes, shoesSum: shoesSum })
})

exports.addShoe_get = asyncHandler(async (req, res, next) => {
  res.render('addShoe', { sizes: sizes })
})

exports.addShoe_post = asyncHandler(async (req, res, next) => {
  const input = req.body
  input.availableSizes = input.availableSizes.filter(e => e.size)
  const shoe = await Shoe.findOne().where('name').equals(input.name)
  if (shoe === null) {
    const newShoe = await Shoe.create(input)
    console.log(newShoe.manufacturer + ' ' + newShoe.name + ' added to inventory')
    res.redirect('/')
  } else {
    res.redirect(`/shoes/update/${ shoe.id }`)
  }
})

exports.updateShoe_get = asyncHandler(async (req, res, next) => {
  const shoe = await Shoe.findById(req.params.id)
  res.render('updateShoe', { shoe: shoe, sizes: sizes })
})

exports.updateShoe_post = asyncHandler(async (req, res, next) => {
  const input = req.body
  input.availableSizes = input.availableSizes.filter(e => e.size)
  const updatedShoe = await Shoe.findByIdAndUpdate(req.params.id, input)
  console.log(updatedShoe.manufacturer + ' ' + updatedShoe.name + ' updated')
  res.redirect('/')
})

exports.deleteShoe_post = asyncHandler(async (req, res, next) => {
  const deletedShoe = await Shoe.findByIdAndDelete(req.params.id)
  console.log(deletedShoe.manufacturer + ' ' + deletedShoe.name + ' deleted')
  res.redirect('/')
})