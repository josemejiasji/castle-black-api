const app = require('../app');
const supertest = require('supertest');
const request = supertest(app);
const db = require('../src/db');

describe('Player endpoints', function () {
    it('should return all players', async function (done) {
        const res = await request.get('/api/players');

        expect(res.status).toBe(200);
        expect(res.body).toEqual(db.players);
        done();
    })
})