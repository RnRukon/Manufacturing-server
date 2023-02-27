const express = require("express");

const { registration, login, getMe, updatePassword, confirmEmail, getAllUsers, updateProfileImage } = require("../controllers/user.controller");

const checkLogin = require("../Middleware/checkLogin");
const uploader = require("../Middleware/uploader");

const router = express.Router();



router.get("/get-me/:email", getMe);
router.patch("/update-password/:email", updatePassword);
router.patch("/update-profile-image/:email", uploader.single("image"), updateProfileImage);
router.get("/registration/confirmation/:token", confirmEmail);
router.get("/get-all-users", getAllUsers);
router.post("/registration", registration);
router.post("/login", login);

module.exports = router;