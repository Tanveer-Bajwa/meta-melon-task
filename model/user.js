const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: [8, "Password must be at least 8 words"],
    },
    userImage: {
        type: String,
    },
    dob: {
        type: Date,
        required: true,
    },
    skills: {
        type: [String],
    },
});

module.exports = mongoose.model("User", UserSchema);
