const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {};

Comment.init(
    {
        body:{
            types: DataTypes.String,
            allowNull: false
        }
    },
    {
        sequelize
    }
);

module.exports =  Comment;