import Sequelize from 'sequelize';
import db from '../config/db.js';

export const Administrator = db.define('administrators', {

    admin_id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nick: {
        type: Sequelize.STRING
    },
    pass: {
        type: Sequelize.STRING
    },
});



