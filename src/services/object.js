const { objects } = require('../db');
const { getNextId } = require('../utils');

const findAll = function () {
    return objects.filter((object) => !object.deleted);
}

const create = function (payload) {
    payload.id = getNextId(objects);
    objects.push(payload);
    return objects[objects.length - 1];
}

const findOne = function (id) {
    return objects.find((object) => object.id == id);
}

const updateOne = function (id, payload) {
    const objectIndex = objects.findIndex((object) => object.id == id);

    if (objectIndex < 0) {
        return null;
    }

    objects[objectIndex] = { ...objects[objectIndex], ...payload };

    return objects[objectIndex];
}

const deleteOne = function (id) {
    const objectIndex = objects.findIndex((object) => object.id == id);

    if (objectIndex < 0) {
        return null;
    }

    objects[objectIndex].deleted = true;

    return true;
}

module.exports = {
    findAll,
    create,
    findOne,
    updateOne,
    deleteOne,
}