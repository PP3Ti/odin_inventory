const express = require('express')
const router = express.Router()

router
  .route('/')
  .get((req, res) => {
    res.send('hi get')
  })
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