const Comment = require("../models/Comments");

// GET all comments
exports.getComments = async (req, res) => {
    try {
        const comments = await Comment.find().sort({ createdAt: -1 });
        res.json(comments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// POST new comment
exports.addComment = async (req, res) => {
    try {
        const { user, comment } = req.body;
        if (!user || !comment) {
            return res.status(400).json({ message: "User email and comment are required" });
        }

        const newComment = new Comment({ user, comment });
        await newComment.save();
        res.status(201).json(newComment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
