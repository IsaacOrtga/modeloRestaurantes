const Sequelize = require("sequelize");
//para levantar una BBDD es tener antes un modelo.
//Tengo que requerir el modelo
const EaterModel = require('../models/eaters')



const sequelize = new Sequelize('restaurant',
   'root',
   'root',
    {
      host: 'localhost',
      dialect: 'mysql'
    }
  );


  const Eater = EaterModel(sequelize, Sequelize);

/* aQUI YA TENDRIA el modelo que puedo sincronizar con bbdd */
  sequelize.sync({ force : false})
  .then(() => {
      console.log('modelo Eater sincronizado en tu BBDD')
  });
  
module.exports = {
   Eater
}