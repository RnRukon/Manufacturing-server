const express = require("express");
const { registration, login, getMe, logout } = require("../controllers/user.controller");
const checkLogin = require("../Middleware/checkLogin");
const router = express.Router();



router.get("/get-me/:email", getMe);
router.post("/registration", registration);
router.post("/login", login);
router.patch("/logout/:email", logout);


module.exports = router;