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
    });

    it('should create a new player', async function (done) {
        const newPlayer = {
            name: 'Arya Stark',
            age: 18,
            health: 100,
            bag: [],
        };
        const res = await request.post('/api/players').send(newPlayer);

        expect(res.status).toBe(201);
        expect(res.body).toEqual(newPlayer);
        done();
    })
});