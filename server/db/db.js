const path = require('path')
const config = require(path.join(__dirname, '../../knexfile')).development
const knex = require('knex')(config)

module.exports = {
  getPosts,
  getPost,
  addPost,
  updatePost,
  removePost
}

// get all posts
function getPosts () {
  const db = knex
  return db('posts').select('id', 'title', 'date_created as dateCreated', 'paragraphs')
}

// get individual post
function getPost (id) {
  const db = knex
  return db('posts').where('id', id).select('id', 'title', 'date_created as dateCreated', 'paragraphs')
}

// add new post
function addPost (newPost) {
  const db = knex
  return db('posts').insert(newPost).select('id', 'title', 'date_created as dateCreated', 'paragraphs')
}

// update existing post
function updatePost (updatedPost) {
  const db = knex
  return db('posts').where('id', updatedPost.id).update(updatedPost)
}

// delete existing post
function removePost (id) {
  const db = knex
  return db('posts').where('id', id).del()
}
