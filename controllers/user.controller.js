const bcrypt = require('bcryptjs');
const { registrationService, findUserByToken, findUserByEmail, findAllUserService, updateDetailsService } = require("../Services/user.service");
const { sendMailWithGmail } = require("../utils/email");
const { generateToken } = require("../utils/token");
const { verifyEmail } = require('../utils/verifyEmail');

exports.getAllUsers = async (req, res) => {
    try {
        const user = await findAllUserService();
        res.status(200).json({
            result: user,
            status: "success",
            message: "Getting users is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};

exports.getMe = async (req, res) => {


    try {
        const email = req?.user?.email;
        const user = await findUserByEmail(email);


        if (!user) {
            return res.status(500).json({
                status: "fail",
                error: 'User Not found'
            });
        }
        res.status(200).json({
            result: user,
            status: "success",
            message: "Getting me is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};


exports.updateDetails = async (req, res) => {
    try {
        const email = req?.user?.email;
        const info = req.body;
       
        const user = await updateDetailsService(info, email);

        res.status(200).json({
            result: user,
            status: "success",
            message: "Your details is update successfully!",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};
exports.registration = async (req, res) => {
    try {
        const user = await registrationService(req.body);
        const token = await user.generateConfirmationToken();

        await user.save({ validateBeforeSave: false });


        // send email =================================
        const mailData = {
            to: [user.email],
            subject: "Verify your Account",
            html: verifyEmail(`${req.protocol
                }://${req.get("host")}${req.originalUrl}/confirmation/${token}`)
        };

        await sendMailWithGmail(mailData);

        res.status(200).json({
            result: user,
            status: "success",
            message: "Signup is Successfully, Please check your email for conform your register",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;


        if (!email || !password) {
            return res.status(401).json({
                status: "fail",
                error: "Please provide your credentials",
            });
        }
        const user = await findUserByEmail(email);


        if (!user) {
            return res.status(401).json({
                status: "fail",
                error: "No user found. Please create an account",
            });
        }

        const isPasswordValid = await user.comparePassword(password, user.password);

        if (!isPasswordValid) {
            return res.status(403).json({
                status: "fail",
                error: "Password is not correct",
            });
        }

        if (user.status != "active") {
            return res.status(401).json({
                status: "fail",
                error: "Your account is not active yet.",
            });
        }


        const token = generateToken(user);

        const { password: pwd, ...others } = user.toObject();

        res.status(200).json({
            result: {
                user: others,
                token,
            },
            status: "success",
            message: "Sign in is Successfully",
        });


    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};

exports.updatePassword = async (req, res) => {


    try {
        const email = req?.user?.email;
        const { oldPassword, newPassword } = req.body;

        // check provide user information---------------
        if (!email && !oldPassword && !newPassword) {
            return res.status(401).json({
                status: "fail",
                error: "Please provide information.",
            })
        }

        // find user in Database-----------------------
        const user = await findUserByEmail(email);


        if (!user) {
            return res.status(401).json({
                status: "fail",
                error: "Your password not match please try again",
            })
        }

        // check valid password----------------------
        const isPasswordValid = await user.comparePassword(oldPassword, user.password);

        if (!isPasswordValid) {
            return res.status(403).json({
                status: "fail",
                error: "Your password not match please try again",
            });
        }
        // hash password----------------

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        user.password = hashedPassword;

        user.save();

        res.status(200).json({
            result: user,
            status: "success",
            message: "Logout  is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};
exports.updateProfileImage = async (req, res) => {


    try {
        const { email } = req.params;
        if (!email) {
            return res.status(401).json({
                status: "fail",
                error: "Something Wrong, please try again.",
            })
        }
        // find user in Database-----------------------
        const user = await findUserByEmail(email);


        if (!user) {
            return res.status(401).json({
                status: "fail",
                error: "Something Wrong, please try again.",
            })
        }

        // hash password----------------

        const fileName = await req?.file?.filename;
        const host = await req.protocol + '://' + req.get('host');
        const image = host + "/images/" + fileName;

        const file = await req.file;
        file.image = image;
        user.profileImg = file;
        user.save();

        res.status(200).json({
            result: user,
            status: "success",
            message: "Logout  is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};

exports.confirmEmail = async (req, res) => {
    try {
        const { token } = req.params;
        const user = await findUserByToken(token);

        if (!user) {
            return res.status(403).json({
                status: "fail",
                error: "Invalid token"
            });
        }

        const expired = new Date() > new Date(user.confirmationTokenExpires);

        if (expired) {
            return res.status(401).json({
                status: "fail",
                error: "Token expired"
            });
        }

        user.status = "active";
        user.confirmationToken = undefined;
        user.confirmationTokenExpires = undefined;
        user.save({ validateBeforeSave: false });

        const tokenAuth = generateToken(user);

        const { password: pwd, ...others } = user.toObject();

        res.status(200).redirect('http://localhost:3000');
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};
