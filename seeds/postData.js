const { Posts } = require('../models');

const postData = [
  {
    title: 'Why is MVC so important',
    content: 'MVC is very important',
    user_id: 1
  }
];

const seedPosts = () => Posts.bulkCreate(postData);

module.exports = seedPosts;
