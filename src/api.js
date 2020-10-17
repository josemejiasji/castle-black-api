const { Router } = require("express");
const api = Router();
const db = require('./db');
const { players, objects } = db;

// EXAMPLE ENDPOINT: LIST ALL OBJECTS
api.get("/objects", function (req, res) {
  res.json(objects);
});

api.get("/players", function (req, res) {
  res.json(players);
});

api.post("/players", function (req, res) {
  const newPlayer = req.body;
  players.push(newPlayer);

  res.status(201).json(newPlayer);
});

api.get("/players/:id", function (req, res) {
  const player = players.find(player => player.id === parseInt(req.params.id));

  if (!player) {
    return res.status(404).json({ code: "NOT_FOUND" });
  }
  res.json(player);
});

api.post('/players/:id/actions', function (req, res) {
  const playerIndex = players.findIndex(player => player.id ===
    parseInt(req.params.id));

  if (!playerIndex < 0) {
    return res.status(404).json({ code: "NOT_FOUND" });
  }

  if (req.body.action === 'kill') {
    players[playerIndex].health = 0;
  }

  res.json(players[playerIndex]);
});

module.exports = api;
