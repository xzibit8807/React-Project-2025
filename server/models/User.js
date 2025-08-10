const mongoose = require("mongoose");
const bcrypt = require(`bcrypt`);

const { schema, model, MongooseError } = require(`mongoose`);

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: [true,`Email is required.`],
        lowercase: true,
        unique: true,
        minlength: 10,
        regex: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, `Wrong Email ore it may already exist !`],
    },
    password: {
        type: String,
        required: [true,`Password is required.`],
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

userSchema.pre(`save`, async function () {

    this.password = await bcrypt.hash(this.password, 12);

});


userSchema.virtual(`rePassword`)
    .set(function (value) {
        if (value !== this.password) {
            throw new MongooseError(`Password dose not match !`);
        }
    });

const User = model(`User`, userSchema);

module.exports = User;

// module.exports = mongoose.model('User', userSchema);