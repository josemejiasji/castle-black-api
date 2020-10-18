const { Router } = require("express");
const api = Router();
const { players } = require('./controllers/players');


// EXAMPLE ENDPOINT: LIST ALL OBJECTS
api.get("/objects", function (req, res) {
  res.json(objects);
});


// Players endpoints
api.get("/players", players.findAll);
api.post("/players", players.create);
api.get("/players/:id", players.findOne);
api.post('/players/:id/actions', players.doAction);

module.exports = api;
