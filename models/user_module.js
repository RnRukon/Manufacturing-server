const Mongoose = require("mongoose");
const validator = require("validator");


const userSchema = Mongoose.Schema({
    fullName: {
        type: String,
        require: true,
        trim: true,
    },
    userName: {
        type: String,
        require: true,
        trim: true,
        unique: [true, "User name is must be unique"],
    },
    email: {
        type: String,
        require: true,
        trim: true,
        validate: [validator.isEmail, "Provide a valid Email"],
        unique: [true, "Email is must be unique"],
    },
    password: {
        type: String,
        require: true,
        trim: true,
    },
    active: {
        type: Boolean,
        default: false
    },
    token: String

},
    {
        timestamps: true,
    }
);

const User = Mongoose.model('User', userSchema);

module.exports = User