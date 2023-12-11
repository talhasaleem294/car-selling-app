const Router = require('express').Router;
const users = require('./users');

const router = new Router();

router.post('/', users.findUsers);
router.post('/vehicles', users.addVehicle);

module.exports = router;
