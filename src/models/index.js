const Sequelize = require('sequelize');
const path = require('path');
const fs = require('fs');
const basename = path.basename(__filename);

const { mysql } = require('../../config');

/**
 * @type {sequelize.Sequelize}
 */
const sequelize = new Sequelize(mysql.database, mysql.username, mysql.password, {
  host: mysql.hostname,
  dialect: 'mysql',
  logging: false,

  pool: {
    max: Number(mysql.pool.max),
    min: Number(mysql.pool.min),
    acquire: 30000,
    idle: 10000
  },
})

const db = {};

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

module.exports = db;
