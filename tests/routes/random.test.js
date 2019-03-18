require('dotenv').config();
require('../../lib/utils/connect')();
const request = require('supertest');
const app = require('../../lib/app');

describe('random routes', () => {
  it('can get a random text', () => {
    return request(app)
      .get('/random')
      .then(res => {
        expect(res.body).toHaveLength(100);
      });
  }
  );
});
