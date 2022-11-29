import Sequelize from 'sequelize';
import db from '../config/db.js';

export const Eater = db.define('eater', {
    name: {
        type: Sequelize.STRING
    },
    surname: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
})