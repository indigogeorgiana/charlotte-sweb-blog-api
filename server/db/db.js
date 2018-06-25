const path = require('path')
const config = require(path.join(__dirname, '../../knexfile')).development
const knex = require('knex')(config)

module.exports = {
  getPost,
  getPosts,
  createPost

}

function getPost (testDb) {
  const db = testDb || knex
  return db('Post').select()
}

function getPosts (testDb) {
  const db = testDb || knex
  return db('Posts').select()
}

function createPost (newPost, testDb) {
  const db = testDb || knex
  return db('Posts').insert(newPost)
}

function updatePost (updatedPost, testDb) {
  const db = testDb || knex
  return db('users')
    .where('id', updatedPost.id)
    .update(updatedPost)
}

function deletePost (id, testDb) {
  const db = testDb || knex
  return db('users')
    .where('id', id)
    .del()
}
