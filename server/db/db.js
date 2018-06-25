const path = require('path')
const config = require(path.join(__dirname, '../../knexfile')).development
const knex = require('knex')(config)

module.exports = {
  getPosts,
  makePost,
  updatePost,
  deletePost
}

function getPosts (testDb) {
  const db = testDb || knex
  return db('Posts')
    .select()
}

function makePost (post, db = knex) {
  return db('Posts')
    .insert(post)
}

function updatePost (post, db = knex) {
  return db('Posts')
    .where('id', post.id)
    .update(post)
}

function deletePost (id, db = knex) {
  return db('Posts')
    .where('id', id)
    .delete(id)
}
