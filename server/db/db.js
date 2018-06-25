const path = require('path')
const config = require(path.join(__dirname, '../../knexfile')).development
const knex = require('knex')(config)

module.exports = {
  getPosts,
  addPost
}

function getPosts () {
  const db = knex
  return db('posts').select()
}

function addPost (newPost) {
  const db = knex
  return db('posts').insert(newPost)
}

function update.