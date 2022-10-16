const router = require("express").Router();

const cupo = require('../controllers/cupo.controller');


router.post('/reservas', cupo.register);
router.get('/getreservas', cupo.getCupo);
router.delete('/delete', cupo.deleteCupo);

module.exports = router;