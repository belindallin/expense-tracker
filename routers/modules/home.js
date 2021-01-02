const express = require('express')
const router = express.Router()
const Record = require('../../models/Record')
const Category = require('../../models/Category')

router.get('/', (req, res) => {  
  let totalAmount = 0
  Record.find()
  .lean()
  .then(record => {
    Category.find()
    .lean()
    .then(category => {
      record.forEach(record => {
        totalAmount += record.amount
        category.forEach(category => {
          if( record.category === category.name ){
            record.icon = category.icon
          }
        })
      })
      res.render('index',{record, totalAmount})
    })
    .catch(error => console.log(error))
    })    
  .catch(error => console.log(error))
})


module.exports = router