const SQL = require('sequelize');

module.exports.createStore = () => {
  const Op = SQL.Op;
  const operatorsAliases = {
    $in: Op.in,
  };

  const db = new SQL('main', '', '', {
    dialect: 'sqlite',
    storage: './person.db',
    operatorsAliases,
    logging: false,
  });

  const persona = db.define('personas', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
    },
    nombre: SQL.TEXT,
    email: SQL.TEXT,
    contrasena: SQL.TEXT,
    linkImg: SQL.TEXT,
    nacimiento: SQL.DATE,
    genero: SQL.BOOLEAN,   
    calificacion: SQL.FLOAT,
    numCal: SQL.INTEGER,
    descripcion: SQL.TEXT,
    empresa: SQL.TEXT,
    phone: SQL.TEXT,
    skills: SQL.TEXT
  });
  return { persona};
};
