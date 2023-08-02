const sequelize = require('../config/connection');
const seedGallery = require('./userData');
const seedPaintings = require('./postData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedPosts();

  await seedUsers();

  process.exit(0);
};

seedAll();
