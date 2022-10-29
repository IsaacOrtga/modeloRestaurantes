/* Esto es el modelo de mongoose, es esquema */

const mongoose = require("mongoose");

const objectSchema = new mongoose.Schema({
    comensales: String,
    nombre: String,
    telefono: String,
    comentario: String,
    fecha: String
   
});

/* Ahora la BBDD llamada CUPO se llena con el esquema de arriba */
const Cupo = mongoose.model('Cupo', objectSchema);

module.exports = Cupo;