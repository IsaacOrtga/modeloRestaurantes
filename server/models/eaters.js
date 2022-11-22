/* MODELO DEL COMENSARL SEQUELEIZE

id autoincremental PK
name
surname
phone 
other key (es la foranea de la otra)
alias para llamarla directamente desde el controlador

La clave foranea de la otra esta aqui porque pienso que es mas
practico buscar desde el nombre del que ha hecho la reservea.



*/


module.exports = (sequelize, type) => {

    return sequelize.define('eater', {
        /* nombre de tabla en singular */
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

//este modelo es necesario para crear la BD.