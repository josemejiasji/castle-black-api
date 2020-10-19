const { Router } = require('express');
const api = Router();
const auth = require('./auth');
const PlayersController = require('./controllers/players');
const ObjectsController = require('./controllers/objects');

// Basic Auth middleware
api.use(auth);

//Objects endpoints
// EXAMPLE ENDPOINT: LIST ALL OBJECTS
api.get('/objects', ObjectsController.findAll);
api.post('/objects', ObjectsController.create);
api.get('/objects/:id', ObjectsController.findOne);
api.patch('/objects/:id', ObjectsController.updateOne);
api.delete('/objects/:id', ObjectsController.deleteOne);


// Players endpoints
api.get('/players', PlayersController.findAll);
api.post('/players', PlayersController.create);
api.get('/players/:id', PlayersController.findOne);
api.post('/players/:id/actions', PlayersController.doAction);

module.exports = api;
