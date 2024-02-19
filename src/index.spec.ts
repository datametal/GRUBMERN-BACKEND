import request from 'supertest'
import app from './index'

describe('GET /test', () => {
  it('should return a 200 status and the expected response body', async () => {
    const response = await request(app).get('/test')
    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({ message: 'Node Hello' })
  })
})
