/* Conexion con la BBDD mongo */

const mongoose = require("mongoose");
const bd = "mongodb+srv://masugerencias:Quiero1cafe@micluster.qpsymbw.mongodb.net/test";


mongoose.connect(bd, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(() => {
    console.log('Connection to Database is ready in MONGO');
})

.catch((err) => {
    console.log('Something went wrong with Database Connection');
})