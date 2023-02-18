const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv").config();
const User = require("../models/user_module");


exports.getMeService = async (email) => {

    const user = await User.findOne({ email: email });

    return user;
}
exports.LogoutLoService = async (email) => {

    const user = await User.updateOne(
        { email: email },
        { active: false, token: undefined }
    );

    return user;
}

exports.registrationService = async (userInfo) => {

    const hashedPassword = await bcrypt.hash(userInfo.password, 10);

    const newUser = new User({
        name: userInfo.name,
        email: userInfo.email,
        userName: userInfo.userName,
        password: hashedPassword
    });

    const user = await User.create(newUser);
    return user;
};




exports.loginService = async (userInfo) => {

    let user = await User.findOne({ email: userInfo.email});

    if (user && user._id) {
        const isValidPassword = await bcrypt.compare(userInfo.password, user.password);

        if (isValidPassword) {
            const token = jwt.sign({
                email: user.email,
                userName: user.userName,
                userId: user._id
            }, process.env.JWT_SECRET, {
                expiresIn: '1d'
            });

            user.active = true;
            user.token = token
            user?.save();
            return user;

        } else {
            throw new Error('Something wrong');

        }
    } else {
        throw new Error('Something wrong');
    }

};