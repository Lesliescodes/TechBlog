const { User } = require('../models');

const userData = [
    {
        username: 'cliff',
        email: 'littlebill@gmail.com',
        password: 'password123'
    },
    {
        username: 'test',
        email: 'test@gmail.com',
        password: 'password123'
    },
    {
        username: 'Candy',
        email: 'candycorn@gmail.com',
        password: 'password123'
    },
    {
        username: 'me123',
        email: 'me123@gmail.com',
        password: 'password123'
    },
    {
        username: 'jordan',
        email: 'nike23@gmail.com',
        password: 'password123'
    }
];

const userSeed = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = userSeed;