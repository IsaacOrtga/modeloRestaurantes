const Cupo = require('../models/cupo');

const cupo = {

    register: async (req, res) => {

       const todo = {
         comensalesReg,
         nombreReg,
         telefonoReg,
         comentarioReg,
         fechaReg,
       } = req.body;

        if (todo) {
            let countJson = {  
              
                comensales: comensalesReg,
                nombre: nombreReg,
                telefono: telefonoReg,
                comentario: comentarioReg,
                fecha:  fechaReg
                
            };
            let registered = new Cupo(countJson)
            registered.save(function (err, registered) {
                res.json({ cupo: registered })
            });
        };
      
    },
    

    getCupo: async ( req, res ) => {
        const findCupo = await Cupo.find();

        res.json(findCupo);
        
    },

}

module.exports = cupo;