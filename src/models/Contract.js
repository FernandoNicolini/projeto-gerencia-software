const { DataTypes } = require('sequelize');
const sequelize = require('../shared/database');
const Profile = require('./Profile');

const Contract = sequelize.define('Contract', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'active',
    },
});

Contract.belongsTo(Profile, { as: 'profile' });

module.exports = Contract;
