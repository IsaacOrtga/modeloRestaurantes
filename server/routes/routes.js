import express from 'express';
import { saveAdmin } from '../controllers/adminController.js';


const router = express.Router();
router.post('/admin', saveAdmin);

export default router;







// aksjdfkjasf

// 
// const { film, Film } = require ('../../db')


//  /* FIND ALL */
// router.get('/', async(req, res) => {
    
//     /* me meto en una varialbles */
//      const films = await Film.findAll();
//      /* vale, el modelo lo habia llamado con mayuscula dentro del archivo de DB. */
//      res.json(films)


//  })
//  /* CREATE */

//  router.post('/', async(req, res) => {
     
//  })