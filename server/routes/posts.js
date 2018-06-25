const express = require('express')
const bodyParser = require('body-parser')

const db = require('../db/db')

const router = express.Router()

router.use(bodyParser.json())

router.get('/', (req, res) => {
  db.getPosts()
    .then(posts => {
      res.json(posts)
    })
    .catch(err => {
      res.status(500).send('errrrrrrrrr: ' + err.message)
    })
})

router.post('/', (req, res) => {
  const newPost = req.body
  db.addPost(newPost)
    .then(post => {
      res.status(200).end()
    })
    .catch(err => {
      res.status(500).send('errrrrrrrrr: ' + err.message)
    })
})
module.exports = router

router.put('/:id', (req, res) => {
  const id = req.params.id
  db.updatePost(id)
    .then(post => {
      res.status(200).end()
    })
    .catch(err => {
      res.status(500).send('errrrrrrrrr: ' + err.message)
    })
})
