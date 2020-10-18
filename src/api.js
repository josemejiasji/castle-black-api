const { Router } = require("express");
const api = Router();
const PlayersController = require('./controllers/players');


// EXAMPLE ENDPOINT: LIST ALL OBJECTS
api.get("/objects", function (req, res) {
  res.json(objects);
});


// Players endpoints
api.get("/players", PlayersController.findAll);
api.post("/players", PlayersController.create);
api.get("/players/:id", PlayersController.findOne);
api.post('/players/:id/actions', PlayersController.doAction);

module.exports = api;
