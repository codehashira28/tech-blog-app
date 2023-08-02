const { User } = require('../models');

const userData = [
    {
        username: 'Xandormus',
        email: 'xandormus@fun.com',
        password: 'password12345'
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;