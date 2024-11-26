const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    dialectOptions: {
        timeout: 10000
    }
});

module.exports = sequelize;
