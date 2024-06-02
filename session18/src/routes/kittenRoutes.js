const router = require('express').Router();
const kittenController = require('../controllers/kittenController');

router.post('/', kittenController.create);
router.get('/', kittenController.findAll);
router.get('/kittens/:id', kittenController.findOne);

module.exports = router;