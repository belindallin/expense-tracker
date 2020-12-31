const mongoose = require('mongoose')
const Category = require('../Category.js')

mongoose.connect('mongodb://localhost/expense_tracker', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', () => console.log('mongodb error!'))
db.once('open',() => {
  console.log('mongodb connected')
  Category.create({
    name : '家居物業',
    icon : "fas fa-home fa-3x"
  },
  {
    name : '交通出行',
    icon : "fas fa-shuttle-van fa-3x"
  },
  {
    name : '休閒娛樂',
    icon : "fas fa-grin-beam fa-3x"
  },
  {
    name : '餐飲食品',
    icon : "fas fa-utensils fa-3x"
  },
  {
    name : '其他',
    icon : "fas fa-pen fa-3x"
   })
   .then( () => {
     console.log('category done')
     return db.close()
   })
})