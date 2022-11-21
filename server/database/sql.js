const Sequelize = require("sequelize");

const sequelize = new Sequelize(
   'restaurant',
   'root',
   'root',
    {
      host: 'localhost:127.0.0.1',
      dialect: 'mysql'
    }
  );

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully with SQLSQLSQLSQLSQLSQLSQLSQLSQLSQLSQLSQLSQLSQLSQLSQLSQL.');
}).catch((error) => {
   console.error('Unable to connect to the database SQL: ', error);
});