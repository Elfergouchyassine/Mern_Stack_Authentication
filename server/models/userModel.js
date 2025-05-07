const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
        minlength: 6
    },
    avatar: {
        type: String,
        default: "https://res.cloudinary.com/dtkor9vnr/image/upload/v1725639987/blank_avatar_sq93dl.png"
    }
}, { timestamp: true });

const User = model("User", userSchema);

module.exports = User;