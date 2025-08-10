const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    title: { type: String, required: [true, 'Title is required'], trim: true },
    imageUrl: { type: String, required: [true, 'Image URL is required'] },
    price: { type: Number, required: [true, 'Price is required'], min: 0 },
    category: { type: String, required: [true, 'Category is required'] },
    description: { type: String, required: [true, 'Description is required'] },
    owner: { type: mongoose.Types.ObjectId, ref: 'User' } // optional owner reference
}, {
    timestamps: true
});

module.exports = mongoose.model('Game', gameSchema);
