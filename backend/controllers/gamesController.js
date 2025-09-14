const Game = require('../models/Game');

// CREATE
exports.createGame = async (req, res) => {
    try {
        const { title, imageUrl, price, category, description } = req.body;

        const game = new Game({
            title,
            imageUrl,
            price,
            category,
            description,
            owner: req.user._id
        });

        await game.save();
        res.status(201).json({ message: 'Game created', game });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET ALL
exports.getAllGames = async (req, res) => {
    try {
        const games = await Game.find().sort({ createdAt: -1 });
        res.json(games);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET BY ID
exports.getGameById = async (req, res) => {
    try {
        const game = await Game.findById(req.params.id);
        if (!game) return res.status(404).json({ message: 'Game not found' });
        res.json(game);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// SEARCH
exports.searchGames = async (req, res) => {
    try {
        const { q } = req.query;
        if (!q || q.trim() === "") {
            return res.json([]);
        }
        const games = await Game.find({
            title: { $regex: q, $options: "i" }
        }).sort({ createdAt: -1 });

        res.json(games);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


// UPDATE
exports.updateGame = async (req, res) => {
    try {
        const game = await Game.findById(req.params.id);
        if (!game) return res.status(404).json({ message: 'Game not found' });

        // Owner check
        if (game.owner.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'Not allowed: you are not the owner' });
        }

        const updates = ['title', 'imageUrl', 'price', 'category', 'description'];
        updates.forEach(field => {
            if (req.body[field] !== undefined) game[field] = req.body[field];
        });

        await game.save();
        res.json({ message: 'Game updated', game });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// DELETE
exports.deleteGame = async (req, res) => {
    try {
        const game = await Game.findById(req.params.id);
        if (!game) return res.status(404).json({ message: 'Game not found' });

        // Owner check
        if (game.owner.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'Not allowed: you are not the owner' });
        }

        await Game.deleteOne({ _id: req.params.id });
        res.json({ message: 'Game deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
