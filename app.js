const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const routes = require('./routers')

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
app.use(routes)


app.listen(POST, () => {
  console.log(`The Express Tracker Web is running on http://localhost:${POST}`)
})