const express = require("express");

const { registration, login, getMe, updatePassword, confirmEmail, getAllUsers, updateProfileImage, updateDetails, applyForSupplier, getApplyForSupplier, makeAddApplyForSupplier, deleteApplyForSupplier } = require("../controllers/user.controller");
const authorization = require("../Middleware/authorization");
const uploader = require("../Middleware/uploader");
const verifyToken = require("../Middleware/verifyToken");

const router = express.Router();


router.get("/get-me", verifyToken, getMe);
router.patch("/update-password", verifyToken, updatePassword);
router.patch("/update-details", verifyToken, updateDetails);
router.patch("/update-profile-image", verifyToken, uploader.single("image"), updateProfileImage);
router.get("/registration/confirmation/:token", confirmEmail);
router.get("/get-all-users", getAllUsers);
router.post("/registration", registration);
router.post("/login", login);
router.post("/applyForSupplier", verifyToken, authorization("user"), applyForSupplier);
router.get("/getApplyForSupplier", verifyToken, authorization("admin"), getApplyForSupplier);
router.patch("/makeAddApplyForSupplier", verifyToken, authorization("admin"), makeAddApplyForSupplier);
router.patch("/deleteApplyForSupplier", verifyToken, authorization("admin"), deleteApplyForSupplier);

module.exports = router;