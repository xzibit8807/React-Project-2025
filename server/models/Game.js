const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    title: String,
    category: String,
    price: Number,
    imageUrl: String,
    description: String,
    registeredFrom: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    registeredAt: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Game', gameSchema);