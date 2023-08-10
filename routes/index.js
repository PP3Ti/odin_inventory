const express = require('express')
const router = express.Router()
const indexController = require('../controllers/indexController')

router
  .route('/')
  .get(indexController.index)
  .post((req, res) => {
    res.send('hi post')
  })
  .put((req, res) => {
    res.send('hi put')
  })
  .delete((req, res) => {
    res.send('hi delete')
  })

module.exports = router