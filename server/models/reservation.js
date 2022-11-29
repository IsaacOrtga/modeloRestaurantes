import { Sequelize } from "sequelize";
import db from "../config/db.js";

export const Reservation = db.define('reservation', {
    day: {
        tyoe: Sequelize.DATE
    },
    time: {
        type: Sequelize.TIME
    },
    sits: {
        type: Sequelize.INTEGER
    },
})