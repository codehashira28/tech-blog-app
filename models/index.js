const User = require('./User');
const Post = require('./Post');

Post.belongsTo(User, {
    foreignKey: 'username'
});

User.hasMany(Post, {
    foreignKey: 'username',
    onDelete: 'CASCADE'
});

module.exports = { 
    User,
    Post
};