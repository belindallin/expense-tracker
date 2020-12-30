const mongoose = require('mongoose')
const Category = require('../Category.js')

mongoose.connect('mongodb://localhost/expense_tracker', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', () => console.log('mongodb error!'))
db.once('open',() => {
  console.log('mongodb connected')
  Category.create({
    name : '家居物業',
    icon : '<i class="fas fa-home"></i>'
  },
  {
    name : '交通出行',
    icon : '<i class="fas fa-shuttle-van"></i>'
  },
  {
    name : '休閒娛樂',
    icon : '<i class="fas fa-grin-beam"></i>'
  },
  {
    name : '餐飲食品',
    icon : '<i class="fas fa-utensils"></i>'
  },
  {
    name : '其他',
    icon : '<i class="fas fa-pen"></i>'
   })
   .then( () => {
     console.log('category done')
     return db.close()
   })
})