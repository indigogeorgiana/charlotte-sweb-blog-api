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
  console.log(paragraphs)
  db.addPosts({title, paragraphs})
    .then(post => {
      res.status(200).end()
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
