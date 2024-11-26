const { DataTypes } = require('sequelize');
const sequelize = require('../shared/database');

const Profile = sequelize.define('Profile', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    balance: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
    },
});

module.exports = Profile;
