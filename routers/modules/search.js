const express = require('express')
const router = express.Router()
const Record = require('../../models/Record')

router.get('/', (req, res) => {  
  const selectedCategory = req.query.category
  Record.find()
  .lean()
  .then(records => {    
    const record = records.filter(record => record.category === selectedCategory )
    res.render('index',{record, selectedCategory})
  })
  .catch(error => console.log(error))
})

module.exports = router