const User = require('./User');
const Gallery = require('./Gallery');
const Painting = require('./Painting');
const Post = require('./Post');
const Comment = require('./Comment');

Gallery.hasMany(Painting, {
  foreignKey: 'gallery_id',
});

Painting.belongsTo(Gallery, {
  foreignKey: 'gallery_id',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

module.exports = { User, Gallery, Painting, Post, Comment };
