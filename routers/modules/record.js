const express = require('express')
const router = express.Router()
const Record = require('../../models/Record')

router.get('/new', (req, res) => {  
  res.render('new')
})
router.post('/', (req, res) => {  
  return Record.create(req.body)
        .then(() => res.redirect('/'))
        .catch(error => console.log(error))
})
router.get('/:id/edit', (req, res) => {  
  const id = req.params.id
  Record.findById(id)
  .lean()
  .then(record => res.render('edit',{record}))
  .catch(error => console.log(error))
})
router.put('/:id', (req, res) => {  
  const id = req.params.id
  return Record.findById(id)
        .then(record => {
          record = Object.assign(record, req.body)
          return record.save()
        })
        .then(() => res.redirect('/'))
        .catch(error => console.log(error))
})
router.delete('/:id', (req, res) => {  
  const id = req.params.id
  return Record.findById(id)
        .then(record => record.remove())
        .then(() => res.redirect('/'))
        .catch(error => console.log(error))
})


module.exports = router
