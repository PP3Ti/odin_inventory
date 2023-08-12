const express = require('express')
const router = express.Router()
const indexController = require('../controllers/indexController')
const crashpadController = require('../controllers/crashpadController')

router
  .route('/')
  .get(indexController.index)
  .all((req, res) => {
    console.log(`invalid request from ${req.ip}`)
    res.redirect('/')
  })

router
  .route('/shoes')
  .get((req, res) => {
    res.send('shoes')
  })
  .all((req, res) => {
    console.log(`invalid request from ${req.ip}`)
    res.redirect('/')
  })

router
  .route('/crashpads')
  .get(crashpadController.viewPads)
  .all((req, res) => {
    console.log(`invalid request from ${req.ip}`)
    res.redirect('/')
})

router
  .route('/accessories')
  .get((req, res) => {
    res.send('accessories')
  })
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