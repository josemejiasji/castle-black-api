const { objects } = require('../db');

const findAll = function () {
    return objects;
}

const create = function (payload) {
    objects.push(payload);
    return objects[objects.length - 1];
}

module.exports = {
    findAll,
    create,
}