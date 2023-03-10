const bcrypt = require('bcryptjs');
const User = require("../models/user_module");



exports.findAllUserService = async () => {
    return await User.find({});
};



exports.updateDetailsService = async (userInfo, email) => {

    const user = await User.findOneAndUpdate(
        { email: email },
        userInfo,
        {
            runValidators: true,
        });

    return user;
};


exports.registrationService = async (userInfo) => {
    const hashedPassword = await bcrypt.hash(userInfo.password, 10);
    let newUser = new User({ ...userInfo });
    newUser.password = hashedPassword;
    newUser.confirmPassword = undefined;

    const user = await User.create(newUser);
    return user;
};




exports.findUserByEmail = async (email) => {
    return await User.findOne({ email });
};



exports.findUserByToken = async (token) => {
    return await User.findOne({ confirmationToken: token });
};