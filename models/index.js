const User = require('./User');
const Post = require('./Post');

Post.belongsTo(User, {
    foreignKey: 'post_username'
});

User.hasMany(Post, {
    foreignKey: 'post_username',
    onDelete: 'CASCADE'
});

module.exports = { 
    User,
    Post
};