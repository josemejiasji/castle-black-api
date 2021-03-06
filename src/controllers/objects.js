const ObjectService = require('../services/object');

const findAll = function (req, res) {
    const objects = ObjectService.findAll();

    return res.json(objects);
}

const create = function (req, res) {
    const object = ObjectService.create(req.body);

    return res.status(201).json(object);
}

const findOne = function (req, res) {
    const object = ObjectService.findOne(req.params.id);

    if (!object) {
        return res.status(404).json({ code: 'NOT_FOUND' });
    }

    return res.json(object);
}

const updateOne = function(req, res) {
    const object = ObjectService.updateOne(req.params.id, req.body);

    if (!object) {
        return res.status(404).json({ code: 'NOT_FOUND' });
    }

    return res.json(object);
}

const deleteOne = function (req, res) {
    const object = ObjectService.deleteOne(req.params.id, req.body);

    if (!object) {
        return res.status(404).json({ code: 'NOT_FOUND' });
    }

    return res.status(204).json();
}

module.exports = {
    findAll,
    create,
    findOne,
    updateOne,
    deleteOne,
}