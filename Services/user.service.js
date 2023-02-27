const bcrypt = require('bcryptjs');
const User = require("../models/user_module");



exports.findAllUserService = async () => {
    return await User.find({});
};



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




exports.findUserByEmail = async (email) => {
    return await User.findOne({ email });
};



exports.findUserByToken = async (token) => {
    return await User.findOne({ confirmationToken: token });
};