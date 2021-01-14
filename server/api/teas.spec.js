/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Tea = db.model('tea')

describe('teas routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/teas/', () => {
    const teatype = 'jasmine'

    beforeEach(() => {
      return Tea.create({
        type: teatype,
        flavor: 'bones',
        topping: 'boba',
        size: 'small'
      })
    })

    it('GET /api/teas', async () => {
      const res = await request(app)
        .get('/api/teas')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].type).to.be.equal(teatype)
    })

    it('GET /api/teas/:teaId', async () => {
      const req = await request(app)
        .get('/api/teas/:teaId')
        .expect(200)

      expect(req.params.teaId).to.be.an('object')
    })
  })
})
