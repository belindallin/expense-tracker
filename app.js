const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const Record = require('./models/Record.js')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

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
app.use(bodyParser.urlencoded({extended:true}))
app.use(methodOverride('_method'))


app.get('/', (req, res) => {  
  Record.find()
  .lean()
  .then(record => res.render('index',{record}))
  .catch(error => console.log(error))
})
app.get('/record/new', (req, res) => {  
  res.render('new')
})
app.post('/record', (req, res) => {  
  return Record.create(req.body)
        .then(() => res.redirect('/'))
        .catch(error => console.log(error))
})
app.get('/record/:id/edit', (req, res) => {  
  const id = req.params.id
  Record.findById(id)
  .lean()
  .then(record => res.render('edit',{record}))
  .catch(error => console.log(error))
})
app.put('/record/:id', (req, res) => {  
  const id = req.params.id
  return Record.findById(id)
        .then(record => {
          record = Object.assign(record, req.body)
          return record.save()
        })
        .then(() => res.redirect('/'))
        .catch(error => console.log(error))
})
app.delete('/record/:id', (req, res) => {  
  const id = req.params.id
  return Record.findById(id)
        .then(record => record.remove())
        .then(() => res.redirect('/'))
        .catch(error => console.log(error))
})




app.listen(POST, () => {
  console.log(`The Express Tracker Web is running on http://localhost:${POST}`)
})