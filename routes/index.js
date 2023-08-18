const express = require('express')
const router = express.Router()
const indexController = require('../controllers/indexController')
const crashpadController = require('../controllers/crashpadController')
const shoeController = require('../controllers/shoeController')
const accessoryController = require('../controllers/accessoryController')

router
  .route('/')
  .get(indexController.index)
  .all((req, res) => {
    console.log(`invalid request from ${req.ip}`)
    res.redirect('/')
  })

router
  .route('/shoes')
  .get(shoeController.viewShoes_get)
  .all((req, res) => {
    console.log(`invalid request from ${req.ip}`)
    res.redirect('/')
  })
router
  .route('/shoes/add')
  .get(shoeController.addShoe_get)
  .post(shoeController.addShoe_post)
  .all((req, res) => {
    console.log(`invalid request from ${req.ip}`)
    res.redirect('/')
  })
router
  .route('/shoes/update/:id')
  .get(shoeController.updateShoe_get)
  .post(shoeController.updateShoe_post)
  .all((req, res) => {
    console.log(`invalid request from ${req.ip}`)
    res.redirect('/')
  })
router
  .route('/shoes/delete/:id')
  .post(shoeController.deleteShoe_post)
  .all((req, res) => {
    console.log(`invalid request from ${req.ip}`)
    res.redirect('/')
  })

router
  .route('/crashpads')
  .get(crashpadController.viewPads_get)
  .all((req, res) => {
    console.log(`invalid request from ${req.ip}`)
    res.redirect('/')
  })
router
  .route('/crashpads/add')
  .get(crashpadController.addPad_get)
  .post(crashpadController.addPad_post)
  .all((req, res) => {
    console.log(`invalid request from ${req.ip}`)
    res.redirect('/crashpads')
  })
router
  .route('/crashpads/update/:id')
  .get(crashpadController.updatePad_get)
  .post(crashpadController.updatePad_post)
  .all((req, res) => {
    console.log(`invalid request from ${req.ip}`)
    res.redirect('/crashpads')
  })
router
  .route('/crashpads/delete/:id')
  .post(crashpadController.deletePad_post)
  .all((req, res) => {
    console.log(`invalid request from ${req.ip}`)
    res.redirect('/crashpads')
  })

router
  .route('/accessories')
  .get(accessoryController.viewAccessories_get)
  .all((req, res) => {
    console.log(`invalid request from ${req.ip}`)
    res.redirect('/')
  })
router
  .route('/accessories/add')
  .get(accessoryController.addAccessory_get)
  .post(accessoryController.addAccessory_post)
  .all((req, res) => {
    console.log(`invalid request from ${req.ip}`)
    res.redirect('/')
  })
router
  .route('/accessories/update/:id')
  .get(accessoryController.updateAccessory_get)
  .post(accessoryController.updateAccessory_post)
  .all((req, res) => {
    console.log(`invalid request from ${req.ip}`)
    res.redirect('/')
  })
router
  .route('/accessories/delete/:id')
  .post(accessoryController.deleteAccessory_post)
  .all((req, res) => {
    console.log(`invalid request from ${req.ip}`)
    res.redirect('/')
  })

router
  .route('/:any')
  .all((req, res) => {
    console.log(`invalid request from ${req.ip}`)
    res.redirect('/')
  })


module.exports = router