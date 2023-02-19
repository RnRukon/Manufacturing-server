const { registrationService, loginService, getMeService, LogoutLoService } = require("../Services/user.service");



exports.getMe = async (req, res) => {


    try {
        const user = await getMeService(req.params.email);

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
exports.logout = async (req, res) => {


    try {
        const user = await LogoutLoService(req.params.email);

        res.status(200).json({
            result: user,
            status: "success",
            message: "Logout in is Successfully",
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

        res.status(200).json({
            result: user,
            status: "success",
            message: "Signup is Successfully",
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
        const user = await loginService(req.body);

        res.status(200).json({
            result: user,
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