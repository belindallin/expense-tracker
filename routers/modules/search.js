const express = require('express')
const router = express.Router()
const Record = require('../../models/Record')
const Category = require('../../models/Category')

router.get('/', (req, res) => {  
  let totalAmount = 0
  const selectedCategory = req.query.category
  Record.find()
  .lean()
  .then(records => {
    Category.find()
    .lean()
    .then(category => {
      const record = records.filter(record => record.category === selectedCategory )
      record.forEach(record => {
        totalAmount += record.amount
        category.forEach(category => {
          if( record.category === category.name ){
            record.icon = category.icon
          }
        })
      })
      res.render('index',{record, selectedCategory, totalAmount})
    })
    .catch(error => console.log(error))
    })    
  .catch(error => console.log(error))
})

module.exports = router