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
        required: [true, "Password is must be required"],
        validate: {
            validator: (value) =>
                validator.isStrongPassword(value, {
                    minLength: 6,
                    /*   minLowercase: 3,
                      minNumbers: 1,
                      minUppercase: 1,
                      minSymbols: 1, */
                }),
            message: "Password {VALUE} is not strong enough.",
        }},
        status: {
            type: String,
            default: "inactive",
            enum: ["active", "inactive", "blocked"],
        },
        roll: {
            type: String,
            default: 'user',
            enum: ["user", "admin", "supplier"],
        },
        token: String

    },
    {
        timestamps: true,
    }
);

const User = Mongoose.model('User', userSchema);

module.exports = User