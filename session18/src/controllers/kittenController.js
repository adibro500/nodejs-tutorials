const Kitten = require('../models/kitten')

exports.create = (req, res, next) => {
    const kitten = new Kitten({name: req.body.name})
    kitten.save()
    .then(() => res.json(kitten))
    .catch((err) => res.json({message: 'an error occured'}))
}

exports.findAll = (req, res, next) => {
    Kitten.find()
    .then((kittens) => res.json(kittens))
    .catch((err) => res.json({message: 'an error occured'}))
}

exports.findOne = (req, res, next) => {
    Kitten.findById(req.params.id)
    .then((kitten) => res.json(kitten))
    .catch((err) => res.json({message: 'an error occured'}))
}
