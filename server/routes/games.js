const express = require('express');
const Game = require('../models/Game');
const User = require('../models/User');
const router = express.Router();

router.post('/', async (req, res) => {
    const { title, category, price, imageUrl, description, userId } = req.body;
    const game = new Game({
        title,
        category,
        price,
        imageUrl,
        description,
        registeredFrom: userId,
    });

    await game.save();
    res.status(201).json({ message: 'Game registered', game });
});

module.exports = router;
