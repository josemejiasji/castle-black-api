const ObjectService = require('../services/object');

const findAll = function (req, res) {
    const objects = ObjectService.findAll();

    return res.json(objects);
}

const create = function (req, res) {
    const object = ObjectService.create(req.body);

    return res.status(201).json(object);
}

module.exports = {
    findAll,
    create,
}