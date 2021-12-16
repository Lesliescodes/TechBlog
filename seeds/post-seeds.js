const { Post } = require('../models');

const postData = [
    {
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        post_contents: 'link/linkpost.html',
        user_id: 2
    },
    {
        title: 'consectetuer adipiscing elit.',
        post_contents: 'ooga/booga.html',
        user_id: 1
    },
    {
        title: 'Lorem ipsum dolor sit amet.',
        post_contents: 'zelda/zelda.html',
        user_id: 4
    },
    {
        title: 'dolor sit amet, consectetuer adipiscing elit.',
        post_contents: 'google/google.html',
        user_id: 5
    },
    {
        title: 'dolor consectetuer adipiscing elit.',
        post_contents: 'twitter/twitter.html',
        user_id: 3
    },
    {
        title: 'Pellentesque eget nunc.',
        post_contents: 'hello/helloworld.html',
        user_id: 2
    },
    {
        title: 'Duis ac nibh.',
        post_contents: 'test/test.html',
        user_id: 4
    },
    {
        title: 'In hac habitasse platea dictumst.',
        post_contents: 'morepost/post.html',
        user_id: 3
    },
];

const postSeed = () => Post.bulkCreate(postData);

module.exports = postSeed;