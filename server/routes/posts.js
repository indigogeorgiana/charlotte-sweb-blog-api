const express = require('express')
const bodyParser = require('body-parser')

const db = require('../db/db')

const router = express.Router()

router.use(bodyParser.json())

router.get('/', (req, res) => {
  db.getPosts()
    .then(posts => {
      res.json({posts: posts})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/', (req, res) => {
  const paragraphs = JSON.stringify([req.body.paragraphs])
  const title = req.body.title
  const newPost = {title, paragraphs}
  db.addPosts(newPost)
    .then(post => {
      res.status(200).end()
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.put('/:id', (req, res) => {
  const paragraphs = JSON.stringify([req.body.paragraphs])
  const title = req.body.title
  const id = req.body.id
  const oldPost = {id, title, paragraphs}

  db.updatePost(oldPost)
    .then(post => {
      res.status(200).end()
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
