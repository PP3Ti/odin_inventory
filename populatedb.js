require('dotenv').config()
const mongoose = require('mongoose')
const Shoe = require('./models/shoe')
const Crashpad = require('./models/crashpads')
const Accessory = require('./models/accessories')

const populateDB = async (shoesData, crashpadData) => {
  await mongoose.connect(process.env.ATLAS_URI).then(console.log('ready to upload inventory'))

  const deleteShoes = await Shoe.deleteMany({})
  console.log(`${deleteShoes.deletedCount} shoes removed from DB`)
  const deleteCrashpads = await Crashpad.deleteMany({})
  console.log(`${deleteCrashpads.deletedCount} crashpads removed from DB`)
  const deleteAccessories = await Accessory.deleteMany({})
  console.log(`${deleteAccessories.deletedCount} accessories removed from DB`)

  shoesData.forEach(async (shoe) => {
    await Shoe.create(shoe)
  })
  console.log(`Data of ${shoesData.length} shoes uploaded to DB`)

  crashpadData.forEach(async (crashpad) => {
    await Crashpad.create(crashpad)
  })
  console.log(`Data of ${crashpadData.length} crashpads uploaded to DB`)

  accessoryData.forEach(async (accessory) => {
    await Accessory.create(accessory)
  })
  console.log(`Data of ${accessoryData.length} accessories uploaded to DB`)
}

const shoesData = [
  {
    manufacturer: 'La Sportiva',
    name: "Cobra",
    availableSizes: [38, 40, 42, 43],
    price: 135
  },  
  {
    manufacturer: 'La Sportiva',
    name: "Python",
    availableSizes: [38, 40, 42, 43, 44],
    price: 155
  },
  {
    manufacturer: 'La Sportiva',
    name: "Solution Comp",
    availableSizes: [38, 40, 42, 43],
    price: 170
  },
  {
    manufacturer: 'Scarpa',
    name: "Drago",
    availableSizes: [35, 37, 38],
    price: 200
  }
]
const crashpadData = [
  {
    manufacturer: 'Metolius',
    name: 'Magnum',
    thickness: 10.2,
    weight: 8.48,
    price: 399
  },
  {
    manufacturer: 'Mad Rock',
    name: 'Duo',
    thickness: 12.7,
    weight: 7.71,
    price: 299
  },
  {
    manufacturer: 'Organic',
    name: 'Full Pad',
    thickness: 10.2,
    weight: 5.44,
    price: 199
  },
  {
    manufacturer: 'Mad Rock',
    name: 'R3',
    thickness: 10.2,
    weight: 8.16,
    price: 269
  }
]
const accessoryData = [
  {
    manufacturer: 'Black Diamond',
    name: 'Brush Set',
    description: 'Everything you need to get slopers and crimps ready for action.',
    price: 49
  },
  {
    manufacturer: 'Mammut',
    name: 'Crag Chalk Bag',
    description: 'Stripped back to the bare essentials, this bag means business on rock. A reinforced, angled opening make it super easy to access, while an adjustable hip belt ensures the perfect fit.',
    price: 27
  },
  {
    manufacturer: 'Black Diamond',
    name: '300g Loose White Gold Chalk',
    description: 'Our white chalk is specifically blended for climbing to keep sweat at bay, ensuring maximum grip no matter how hot or humid it gets.',
    price: 14.95
  }
]

populateDB(shoesData, crashpadData, accessoryData)