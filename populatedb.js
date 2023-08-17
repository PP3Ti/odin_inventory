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
    availableSizes: 
      [
        {size:38, stock: 3},
        {size:40, stock: 2},
        {size:42, stock: 4},
        {size:43, stock: 1},
      ],
    price: 135
  },  
  {
    manufacturer: 'La Sportiva',
    name: "Python",
    availableSizes:      
      [
        {size:37, stock: 5},
        {size:41, stock: 2},
        {size:42, stock: 4},
        {size:43, stock: 1},
      ],
    price: 155
  },
  {
    manufacturer: 'La Sportiva',
    name: "Solution Comp",
    availableSizes: 
      [
        {size:38, stock: 12},
        {size:40, stock: 5},
        {size:42, stock: 7},
        {size:43, stock: 1},
      ],
    price: 170
  },
  {
    manufacturer: 'Scarpa',
    name: "Drago",
    availableSizes:      
      [
        {size:35, stock: 3},
        {size:36, stock: 2},
        {size:37, stock: 4},
        {size:43, stock: 8},
      ],
    price: 200
  }
]
const crashpadData = [
  {
    manufacturer: 'Metolius',
    name: 'Magnum',
    thickness: 10.2,
    weight: 8.48,
    price: 399,
    stock: 5
  },
  {
    manufacturer: 'Mad Rock',
    name: 'Duo',
    thickness: 12.7,
    weight: 7.71,
    price: 299,
    stock: 2
  },
  {
    manufacturer: 'Organic',
    name: 'Full Pad',
    thickness: 10.2,
    weight: 5.44,
    price: 199,
    stock: 23
  },
  {
    manufacturer: 'Mad Rock',
    name: 'R3',
    thickness: 10.2,
    weight: 8.16,
    price: 269,
    stock: 4
  }
]
const accessoryData = [
  {
    manufacturer: 'Black Diamond',
    name: 'Brush Set',
    description: 'Everything you need to get slopers and crimps ready for action.',
    price: 49,
    stock: 20
  },
  {
    manufacturer: 'Mammut',
    name: 'Crag Chalk Bag',
    description: 'Stripped back to the bare essentials, this bag means business on rock. A reinforced, angled opening make it super easy to access, while an adjustable hip belt ensures the perfect fit.',
    price: 27,
    stock: 13
  },
  {
    manufacturer: 'Black Diamond',
    name: '300g Loose White Gold Chalk',
    description: 'Our white chalk is specifically blended for climbing to keep sweat at bay, ensuring maximum grip no matter how hot or humid it gets.',
    price: 14.95,
    stock: 36
  }
]

populateDB(shoesData, crashpadData, accessoryData)