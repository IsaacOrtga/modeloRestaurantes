
module.exports = (sequelize, type) => {

    return sequelize.define('eater', {
        /* nombre de tabla en singular aunque no se porque en WORKBENCH me aparece en plural... */
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        surname: type.STRING,
        phone: type.INTEGER,
        
    })
   
}

//FALTAN LAS RELACIONES