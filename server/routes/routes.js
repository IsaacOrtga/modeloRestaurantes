const router = require("express").Router();

const cupo = require('../controllers/cupo.controller');


router.post('/reservas', cupo.register);
router.get('/getreservas', cupo.getCupo);

module.exports = router;