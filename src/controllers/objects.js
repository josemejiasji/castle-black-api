const ObjectService = require('../services/object');

const findAll = function (req, res) {
    const objects = ObjectService.findAll();

    return res.json(objects);
}

const create = function (req, res) {
    const object = ObjectService.create(req.body);

    return res.json(object);
}

module.exports = {
    findAll,
    create,
}