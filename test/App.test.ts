import app from '../src/App'
import supertest from 'supertest'

test('Deve responder na raiz', async () => {
  const result = await supertest(app).get('/')
  expect(result.status).toBe(200)
})
