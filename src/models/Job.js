const { DataTypes } = require('sequelize');
const sequelize = require('../shared/database');
const Contract = require('./Contract');

const Job = sequelize.define('Job', {
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    paid: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});

Job.belongsTo(Contract, { as: 'contract' });

module.exports = Job;
