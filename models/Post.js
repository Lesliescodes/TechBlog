const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//initializes Post model (table) to store data
class Post extends Model {}

Post.init(
    {
        title: DataTypes.STRING,
        body: DataTypes.STRING
 
    },

    {
        sequelize

    }

);

module.exports=Post;