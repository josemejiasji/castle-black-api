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

module.exports = api;
