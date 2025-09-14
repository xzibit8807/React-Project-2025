const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const gamesController = require('../controllers/gamesController');
const { verifyToken } = require('../middleware/authMiddleware');

// Validation rules
const gameValidation = [
    body('title').notEmpty().withMessage('Title is required'),
    body('imageUrl').isURL().withMessage('Image URL must be valid'),
    body('price').isFloat({ min: 0 }).withMessage('Price must be a positive number'),
    body('category').notEmpty().withMessage('Category is required'),
    body('description').notEmpty().withMessage('Description is required')
];

const validate = (req, res, next) => {
    const { validationResult } = require('express-validator');
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

// Public
router.get('/', gamesController.getAllGames);
router.get('/search', gamesController.searchGames);
router.get('/:id', gamesController.getGameById);

// Protected + validated
router.post('/', verifyToken, gameValidation, validate, gamesController.createGame);
router.put('/:id', verifyToken, gameValidation, validate, gamesController.updateGame);
router.delete('/:id', verifyToken, gamesController.deleteGame);

module.exports = router;
