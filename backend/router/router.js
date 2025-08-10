const router = require('express').Router();
const authRoutes = require('../routes/auth');
const gamesRoutes = require('../routes/games');

router.use('/users', authRoutes);
router.use('/games', gamesRoutes);

module.exports = router;
