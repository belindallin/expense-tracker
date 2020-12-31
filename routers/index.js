const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const record = require('./modules/record')
const search = require('./modules/search')
router.use('/', home)
router.use('/record', record)
router.use('/search', search)

module.exports = router