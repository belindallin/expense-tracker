const express = require('express')
const router = express.Router()
const Record = require('../../models/Record')
const Category = require('../../models/Category')

router.get('/', (req, res) => {  
  let sum = 0
  Record.find()
  .lean()
  .then(record => {
    Category.find()
    .lean()
    .then(category => {
      record.forEach(record => {
        sum += record.amount
        category.forEach(category => {
          if( record.category === category.name ){
            record.icon = category.icon
          }
        })
      })
      res.render('index',{record, sum})
    })
    .catch(error => console.log(error))
    })    
  .catch(error => console.log(error))
})


module.exports = router