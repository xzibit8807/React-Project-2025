const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { ObjectId } = mongoose.Schema.Types;
const saltRounds = 10;

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, `Email is required.`],
        lowercase: true,
        unique: true,
        minlength: 10,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, `Wrong Email or it may already exist!`],
    },
    password: {
        type: String,
        required: [true, `Password is required.`],
        minlength: [4, `Min length of the Password is 4 characters.`]
    },
    AddedGamesCatalog: [{
        type: mongoose.Types.ObjectId,
        ref: `Catalog`
    }],
    likedGames: [{
        type: mongoose.Types.ObjectId,
        ref: `Catalog`
    }],
    themes: [{
        type: ObjectId,
        ref: "Theme"
    }],
    posts: [{
        type: ObjectId,
        ref: "Post"
    }]
}, {
    timestamps: { createdAt: 'created_at' }
});

userSchema.methods = {
    matchPassword: function (password) {
        return bcrypt.compare(password, this.password);
    }
}

userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if (err) return next(err);
            bcrypt.hash(this.password, salt, (err, hash) => {
                if (err) return next(err);
                this.password = hash;
                next();
            });
        });
        return;
    }
    next();
});

module.exports = mongoose.model('User', userSchema);
