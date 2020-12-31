const express = require('express')
const router = express.Router()
const Record = require('../../models/Record')

router.get('/', (req, res) => {  
  let sum = 0
  const selectedCategory = req.query.category
  Record.find()
  .lean()
  .then(records => {    
    const record = records.filter(record => record.category === selectedCategory )
    record.filter( record => sum += record.amount)
    res.render('index',{record, selectedCategory, sum})
  })
  .catch(error => console.log(error))
})

module.exports = router