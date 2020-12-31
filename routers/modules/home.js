const express = require('express')
const router = express.Router()
const Record = require('../../models/Record')

router.get('/', (req, res) => {  
  let sum = 0
  Record.find()
  .lean()
  .then(record => {
    record.forEach(record => sum += record.amount)
    res.render('index',{record, sum})
  })
  .catch(error => console.log(error))
})


module.exports = router