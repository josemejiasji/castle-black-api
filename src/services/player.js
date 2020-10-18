const { players } = require('../db');

const findAll = function () {
    return players;
}

const create = function (payload) {
    players.push(payload);

    return players[players.length - 1];
}

const findOne = function (id) {
    return players.find((player) => player.id == id);
}

const doAction = function (id, action, payload) {
    const playerIndex = players.findIndex((player) => player.id == id)

    if (playerIndex < 0) {
        return null;
    }

    if (action === 'kill') {
        players[playerIndex].health = 0;
    } else if (action === 'arm') {
        if (players[playerIndex].bag.includes(payload)) {
            players[playerIndex].armedObject = payload;
        }
    }

    return players[playerIndex];
}

module.exports = {
    findAll,
    create,
    findOne,
    doAction
}