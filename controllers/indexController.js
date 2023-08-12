const asyncHandler = require('express-async-handler')
const Shoe = require('../models/shoe')
const Crashpad = require('../models/crashpads')
const Accessory = require('../models/accessories')

exports.index = asyncHandler(async (req, res, next) => {

  const shoes = await Shoe.find({}).sort({ manufacturer: 1 })
  const crashpads = await Crashpad.find({})
  const accessories = await Accessory.find({}).sort({ manufacturer: 1 })

  let inventorySum = 0
  let shoesSum = 0
  let crashpadSum = 0
  let accessorySum = 0

  shoes.forEach(shoe => {
    shoe.availableSizes.forEach(element => {
      shoesSum += Math.floor(shoe.price * element.count)
    })
  })
  crashpads.forEach(pad => {
    crashpadSum += Math.floor(pad.price * pad.count)
  })
  accessories.forEach(acc => {
    accessorySum += Math.floor(acc.price * acc.count)
  })

  inventorySum = shoesSum + crashpadSum + accessorySum

  res.render('index', 
    { 
      shoes: shoes,
      crashpads: crashpads, 
      accessories: accessories,
      inventorySum: inventorySum,
      shoesSum: shoesSum,
      crashpadSum: crashpadSum,
      accessorySum: accessorySum
    }
  )
})