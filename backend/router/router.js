const router = require('express').Router();
const authRoutes = require('../routes/auth');
const gamesRoutes = require('../routes/games');

router.get("/", (req, res) => {
    res.status(200).send("✅ API is running!");
});

router.get("/status", (req, res) => {
    res.status(200).json({ status: "ok", uptime: process.uptime() });
});

router.use('/users', authRoutes);
router.use('/games', gamesRoutes);

module.exports = router;
