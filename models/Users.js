const { Model, DataTypes} = require('sequelize');
const sequelize = require('../connection/connections');

class User extends Model {};

User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }, 
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8]
        }
    },
}, {
    sequelize,
    timestamps: false,
    // prevents sequelize from pluralizing table name
    freezeTableName: true,
    // snake_case 
    underscored: true,
    // gives defalut table name 
    modelName: 'user'
    }
);