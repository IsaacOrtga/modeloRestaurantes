import express from 'express';
import router from './routes/routes.js';
import db from './config/db.js'
import * as dotenv from 'dotenv';
dotenv.config({path: '.env'})
const app = express();
db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch( error => console.log(error));
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;
app.use(express.urlencoded({extended: true}));
app.use('/', router);
app.listen(port,host, () => {
    console.log('El servidor está funcionando')
});