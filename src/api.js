const { Router } = require("express");
const api = Router();
const db = require('./db');
const {players, objects} = db;

// EXAMPLE ENDPOINT: LIST ALL OBJECTS
api.get("/objects", function(req, res) {
  res.json(objects);
});

api.get("/players", function(req, res) {
  res.json(players);
});

api.post("/players", function(req, res) {
  const newPlayer = req.body;
  players.push(newPlayer);

  res.status(201);
  res.json(newPlayer);
});

api.get("/players/:id", function(req, res) {
  const matchPlayer = players.find(player => player.id === parseInt(req.params.id));

  if(!matchPlayer) {
    return res.status(404).json({code: "NOT_FOUND"});
  }
  res.json(matchPlayer);
});

module.exports = api;
