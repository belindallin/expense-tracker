const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const routes = require('./routers')

const app = express()
const POST = 3000

require('./config/mongoose')

app.engine('handlebars',exphbs({defaultLayout : 'main'}))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.use(routes)


app.listen(POST, () => {
  console.log(`The Express Tracker Web is running on http://localhost:${POST}`)
})