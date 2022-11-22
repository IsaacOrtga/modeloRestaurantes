

module.exports = (sequelize, type) => {

    return sequelize.define('reservation', {
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        date: type.STRING,

    })

}

//FALTAN LAS RELACIONES