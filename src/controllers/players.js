const PlayerService = require('../services/player');

const findAll = function (req, res) {
    const players = PlayerService.findAll();

    return res.json(players);
}

const create = function (req, res) {
    const newPlayer = PlayerService.create(req.body);

    return res.status(201).json(newPlayer);
}

const findOne = function (req, res) {
    const player = PlayerService.findOne(req.params.id);

    if (!player) {
        return res.status(404).json({ code: 'NOT_FOUND' });
    }

    return res.json(player);
}

const doAction = function (req, res) {
    const { action, payload } = req.body;
    const player = PlayerService.doAction(req.params.id, action, payload);

    if (!player) {
        return res.status(404).json({ code: 'NOT_FOUND' });
    }

    return res.json(player);
}

module.exports = {
    findAll,
    create,
    findOne,
    doAction,
}