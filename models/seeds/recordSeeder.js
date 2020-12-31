const Record = require('../Record.js')
const db = require('../../config/mongoose')

db.once('open',() => {
  Record.create({
    name : '洗面乳',
    date : '2020-10-10',
    category : '家居物業',
    amount : 500,
  },
  {
    name : '午餐',
    date : '2020-10-30',
    category : '餐飲食品',
    amount : 50,
  },
  {
    name : '高鐵',
    date : '2020-11-10',
    category : '交通出行',
    amount : 1350,
  },
  {
    name : '電影',
    date : '2020-12-15',
    category : '休閒娛樂',
    amount : 500,
  },
  {
    name : 'iphone12',
    date : '2020-12-31',
    category : '其他',
    amount : 28500,
  })
  .then(() => console.log('recordSeeder done'))
})
