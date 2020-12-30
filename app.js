const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const Record = require('./models/Record.js')

const app = express()
const POST = 3000

mongoose.connect('mongodb://localhost/expense_tracker', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', () => console.log('mongodb error!'))
db.once('open',() => {
  console.log('mongodb connected')
})

app.engine('handlebars',exphbs({defaultLayout : 'main'}))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {  
  Record.find()
  .lean()
  .then(record => res.render('index',{record}))
  .then(error => console.log(error))
})

app.listen(POST, () => {
  console.log(`The Express Tracker Web is running on http://localhost:${POST}`)
})