const router = require('express').Router();
// const users = require('./users');
// const games = require('./games');
// const posts = require('./posts');
// const likes = require('./likes');
// const test = require('./test');
// const comments = require('./comments');
const { authController } = require('../controllers');
const auth = require("../routes/auth")

router.post('/users/register', auth);
router.post('/users/login', authController.login);
router.post('/users/logout', authController.logout);

// router.use('/users', users);
// router.use('/games', games);
// router.use('/posts', posts);
// router.use('/likes', likes);
// router.use('/comments', comments);
// router.use('/test', test);

module.exports = router;
