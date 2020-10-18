const { objects } = require('../db');
const { getNextId } = require('../utils');

const findAll = function () {
    return objects;
}

const create = function (payload) {
    payload.id = getNextId(objects);
    objects.push(payload);
    return objects[objects.length - 1];
}

const findOne = function (id) {
    return objects.find((object) => object.id == id);
}

module.exports = {
    findAll,
    create,
    findOne,
}