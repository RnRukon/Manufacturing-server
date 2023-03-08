const express = require("express");

const { registration, login, getMe, updatePassword, confirmEmail, getAllUsers, updateProfileImage } = require("../controllers/user.controller");
const uploader = require("../Middleware/uploader");
const verifyToken = require("../Middleware/verifyToken");

const router = express.Router();


router.get("/get-me", verifyToken, getMe);
router.patch("/update-password", verifyToken, updatePassword);
router.patch("/update-profile-image", verifyToken, uploader.single("image"), updateProfileImage);
router.get("/registration/confirmation/:token", confirmEmail);
router.get("/get-all-users", getAllUsers);
router.post("/registration", registration);
router.post("/login", login);

module.exports = router;