const { players } = require('../db');

const findAll = function (req, res) {
    res.json(players);
}

const create = function (req, res) {
    const newPlayer = req.body;
    players.push(newPlayer);

    res.status(201).json(newPlayer);
}

const findOne = function (req, res) {
    const player = players.find(player => player.id === parseInt(req.params.id));

    if (!player) {
        return res.status(404).json({ code: "NOT_FOUND" });
    }
    res.json(player);
}

const doActions = function (req, res) {
    const playerIndex = players.findIndex(player => player.id ===
        parseInt(req.params.id));

    if (!playerIndex < 0) {
        return res.status(404).json({ code: "NOT_FOUND" });
    }

    if (req.body.action === 'kill') {
        players[playerIndex].health = 0;
    } else if (req.body.action === 'arm') {
        players[playerIndex].armedObject = req.body.payload;
    }

    res.json(players[playerIndex]);
}

module.exports = {
    findAll,
    create,
    findOne, 
    doActions,
}