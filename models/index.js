const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');


Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
});

Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: userId,
    onDelete: "CASCADE"
})

module.exports = { Post, User, Comment };