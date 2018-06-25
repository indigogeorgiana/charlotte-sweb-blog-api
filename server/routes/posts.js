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
      res.status(500).send('Database error: ' + err.message)
    })
})

router.post('/', (req, res) => {
  const post = req.body
  db.makePost(post)
    .then(posts => {
      res.status(200).end()
    })
    .catch(err => {
      res.status(500).send('Database error: ' + err.message)
    })
})

router.put('/', (req, res) => {
  const post = req.body
  db.updatePost(post)
    .then(posts => {
      res.status(200).end()
    })
    .catch(err => {
      res.status(500).send('Database error: ' + err.message)
    })
})

router.delete('/', (req, res) => {
  const id = req.body.id
  db.deletePost(id)
    .then(posts => {
      res.status(200).end()
    })
    .catch(err => {
      res.status(500).send('Database error: ' + err.message)
    })
})

router.get('/:id/comments', (req, res) => {
  const id = req.params.id
  db.getPostComments(id)
    .then(comments => {
      res.json({comments: comments})
    })
    .catch(err => {
      res.status(500).send('Database error: ' + err.message)
    })
})

router.post('/:id/comments', (req, res) => {
  const comment = req.body
  comment.post_id = req.params.id
  console.log(comment)
  db.makePostComment(comment)
    .then(comments => {
      res.json({comments: comments})
    })
    .catch(err => {
      res.status(500).send('Database error: ' + err.message)
    })
})

module.exports = router
