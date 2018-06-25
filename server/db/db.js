const path = require('path')
const config = require(path.join(__dirname, '../../knexfile')).development
const knex = require('knex')(config)

module.exports = {
  getPosts,
  addPosts
}

function getPosts (testDb) {
  const db = testDb || knex
  return db('Posts').select()
}

function addPosts (newPost, testDb) {
  const db = testDb || knex
  return db('Posts').insert(newPost)
}