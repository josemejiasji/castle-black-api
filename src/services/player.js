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
    throw "Not implemented";
}

module.exports = {
    findAll,
    create,
    findOne,
    doAction
}