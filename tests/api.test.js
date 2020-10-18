const app = require('../app');
const supertest = require('supertest');
const request = supertest(app);
const { players, objects } = require('../src/db');
const { getNextId } = require('../src/utils');

describe('Player endpoints', function () {
    it('should return all players', async function (done) {
        const res = await request.get('/api/players');

        expect(res.status).toBe(200);
        expect(res.body).toEqual(players);
        done();
    });

    it('should create a new player', async function (done) {
        const newPlayer = {
            id: getNextId(players),
            name: 'Arya Stark',
            age: 18,
            health: 100,
            bag: [],
        };
        const res = await request.post('/api/players').send(newPlayer);

        expect(res.status).toBe(201);
        expect(res.body).toEqual(newPlayer);
        done();
    });

    it('should return a player by a given id', async function (done) {
        const playerId = 3;
        const expectedPlayer = players.find(player => player.id === playerId);
        const res = await request.get(`/api/players/${playerId}`);

        expect(res.status).toBe(200);
        expect(res.body).toEqual(expectedPlayer);
        done();
    });

    it('should return NOT_FOUND error given an invalid id', async function (done) {
        const playerId = 0;
        const expectedError = { code: 'NOT_FOUND' };
        const res = await request.get(`/api/players/${playerId}`);

        expect(res.status).toBe(404);
        expect(res.body).toEqual(expectedError);
        done();
    });

    it('should return a player by id with health 0', async function (done) {
        const playerId = 3;
        const expectedPlayer = players.find(player => player.id === playerId);
        expectedPlayer.health = 0;

        const res = await request.post(`/api/players/${playerId}/actions`).send({ action: 'kill' });

        expect(res.status).toBe(200);
        expect(res.body).toEqual(expectedPlayer);
        done();
    });

    it('should return a player with armedObject given a valid object', async function (done) {
        const playerId = 2;
        const objectId = 2;
        const expectedPlayer = players.find(player => player.id === playerId);
        expectedPlayer.armedObject = objectId;

        const res = await request.post(`/api/players/${playerId}/actions`).send({ action: 'arm', payload: objectId });

        expect(res.status).toBe(200);
        expect(res.body).toEqual(expectedPlayer);
        done();
    });

    it('should return a player without armedObject given an invalid object', async function (done) {
        const playerId = 4;
        const objectId = 1;
        const expectedPlayer = players.find(player => player.id === playerId);

        const res = await request.post(`/api/players/${playerId}/actions`).send({ action: 'arm', payload: objectId });

        expect(res.status).toBe(200);
        expect(res.body).toEqual(expectedPlayer);
        done();
    });
});

describe('Object endpoints', function () {
    it('should return all objects', async function (done) {
        const res = await request.get('/api/objects');

        expect(res.status).toBe(200);
        expect(res.body).toEqual(objects);
        done();
    });

    it('should create a new object', async function (done) {
        const newObject = {
            id: getNextId(objects),
            name: 'bow',
            value: 30,
        };
        const res = await request.post('/api/objects').send(newObject);

        expect(res.status).toBe(201);
        expect(res.body).toEqual(newObject);
        done();
    });

    it('should return an object by a given id', async function (done) {
        const objectId = 3;
        const expectedObject = objects.find(object => object.id === objectId);
        const res = await request.get(`/api/objects/${objectId}`);

        expect(res.status).toBe(200);
        expect(res.body).toEqual(expectedObject);
        done();
    });

    it('should return NOT_FOUND error given an invalid id', async function (done) {
        const objectId = 0;
        const expectedError = { code: 'NOT_FOUND' };
        const res = await request.get(`/api/objects/${objectId}`);

        expect(res.status).toBe(404);
        expect(res.body).toEqual(expectedError);
        done();
    });

    it('should return an object with updated value', async function (done) {
        const objectId = 1;
        const newValue = 35;
        const expectedObject = objects.find(object => object.id === objectId);
        expectedObject.value = newValue;
        const res = await request.patch(`/api/objects/${objectId}`).send({ value: newValue });

        expect(res.status).toBe(200);
        expect(res.body).toEqual(expectedObject);
        done();
    });
});