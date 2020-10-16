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

module.exports = api;
