const request = require('supertest')

const server = require('../../')



test('GET /users returns all users', () => {
  const expected = 'test@user.nz'
  return request(server)

})

test('POST /users returns a success code', () => {
  return request(server)
}
