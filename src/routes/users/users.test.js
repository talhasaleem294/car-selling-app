const request = require('supertest');
const app = require('../../app');

describe('/users', () => {

  describe('GET /', () => {
    it('should return list of users', async function (done) {

      const response = await request(app).get('/users');

      expect(response.status).toEqual(200);
      expect(response.body).toBeDefined();

      const { data } = response.body;
      expect(data).toHaveProperty('users');
      done();
    });
  });

});