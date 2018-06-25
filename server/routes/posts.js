const express = require('express')
const bodyParser = require('body-parser')

const db = require('../db/db')

const router = express.Router()

router.use(bodyParser.json())

// get all posts
router.get('/', (req, res) => {
  db.getPosts()
    .then(posts => {
      res.json(posts)
    })
    .catch(err => {
      res.status(500).send('errrrrrrrrr: ' + err.message)
    })
})

// get individual post
router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getPost(id)
    .then(post => {
      res.json(post)
    })
    .catch(err => {
      res.status(500).send('errrrrrrrrr: ' + err.message)
    })
})

// add new post
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

// update existing post
router.put('/:id', (req, res) => {
  const updatedPost = req.body
  db.updatePost(updatedPost)
    .then(post => {
      res.render('/' + post.id)
    })
    .catch(err => {
      res.status(500).send('errrrrrrrrr: ' + err.message)
    })
})

// delete existing post
router.delete('/:id', (req, res) => {
  const id = req.params.id
  db.removePost(id)
    .then(post => {
      res.status(200).end()
    })
    .catch(err => {
      res.status(500).send('errrrrrrrrr: ' + err.message)
    })
})

module.exports = router
