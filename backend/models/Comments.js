const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
    {
        user: { type: String, required: true },   // по-късно може да е userId вместо име
        comment: { type: String, required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
