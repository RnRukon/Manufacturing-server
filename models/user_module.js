const Mongoose = require("mongoose");
const validator = require("validator");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");



const userSchema = Mongoose.Schema({
    fullName: {
        type: String,
        require: true,
        trim: true,
    },
    username: {
        type: String,
        trim: true,
        unique: [true, "Username is exist, please provide a unique username!"],
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
        }

    },
    status: {
        type: String,
        default: "inactive",
        enum: ["active", "inactive", "blocked"],
    },

    role: {
        type: String,
        default: 'user',
        enum: ["user", "admin", "supplier"],
    },
    profileImg: Object
    ,
    confirmationToken: String,
    confirmationTokenExpires: Date,
},
    {
        timestamps: true,
    }
);



userSchema.methods.generateConfirmationToken = function () {
    const token = crypto.randomBytes(32).toString("hex");
    this.confirmationToken = token;

    const date = new Date();

    date.setDate(date.getDate() + 1);
    this.confirmationTokenExpires = date;

    return token;
};

userSchema.methods.comparePassword = function (password, hash) {
    const isPasswordValid = bcrypt.compareSync(password, hash);

    return isPasswordValid;
};




const User = Mongoose.model('User', userSchema);

module.exports = User;