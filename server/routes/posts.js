const express = require('express')
const bodyParser = require('body-parser')

const db = require('../db/db')

const router = express.Router()

router.use(bodyParser.json())

router.get('/', (req, res) => {
  db.getPost()
    .then(posts => {
      res.json({posts: posts})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

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
  const newPost = ({
    title: req.body.title,
    paragraphs: req.body.paragraphs
  })
  db.createPost(newPost)
    .then(ids => {
      db.getPost(ids[0])
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})




module.exports = router
