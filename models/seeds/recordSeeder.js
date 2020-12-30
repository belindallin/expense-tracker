const mongoose = require('mongoose')
const Record = require('../Record.js')

mongoose.connect('mongodb://localhost/expense_tracker', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', () => console.log('mongodb error!'))
db.once('open',() => {
  console.log('mongodb connected')
  Record.create({
    name : '洗面乳',
    date : '10/10/2020',
    category : '家居物業',
    amount : 500,
  },
  {
    name : '午餐',
    date : '10/13/2020',
    category : '餐飲食品',
    amount : 50,
  },
  {
    name : '高鐵',
    date : '11/10/2020',
    category : '交通出行',
    amount : 1350,
  },
  {
    name : '電影',
    date : '12/15/2020',
    category : '休閒娛樂',
    amount : 500,
  },
  {
    name : 'iphone 12',
    date : '12/31/2020',
    category : '其他',
    amount : 28500,
  })
  .then(() => console.log('recordSeeder done'))
})
