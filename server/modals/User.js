const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            require: true,
        },
        lastName: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
        },
        passWord: {
            type: String,
            require: true,
        },
    }
)

module.exports = mongoose.model("user", userSchema);