require('dotenv').config()
const mongoose = require('mongoose')
const Shoe = require('./models/shoe')
const Crashpad = require('./models/crashpads')

let updated = 0

const populateDB = async (shoesData, crashpadData) => {
  await mongoose.connect(process.env.ATLAS_URI).then(console.log('ready to upload inventory'))

  shoesData.forEach(async (shoe) => {
    const shoeExists = await Shoe.exists().where('name').equals(shoe.name)

    if (shoeExists === null) {
      const addShoe = await Shoe.create(shoe)
      console.log(`${addShoe.manufacturer} ${addShoe.name} added to db`)

    } else {
      const shoeInDB = await Shoe.findOne().where('name').equals(shoe.name).updateOne(shoe, {'upsert':true})
      console.log(shoeInDB)
    } 
  })

  return
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
    availableSizes: [35, 37, 38, 40, 42, 43],
    price: 200
  },
]

populateDB(shoesData)