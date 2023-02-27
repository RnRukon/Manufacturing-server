const express = require("express");
const { addQuote, uploadTheeDFile, getMyQuotes } = require("../controllers/quote.controller");
const threeDFileUploader = require("../Middleware/threeDFileUploader");

const verifyToken = require("../Middleware/verifyToken");



const router = express.Router();

router.post("/create-a-quote/:id",
    verifyToken,
    threeDFileUploader
        .single("threeDFile"),
    addQuote);

router.patch("/update-ThreeD-File/:id",
    verifyToken,
    threeDFileUploader
        .single("threeDFile"),
    uploadTheeDFile);

router.get("/get-my-quotes/:id",
    verifyToken,
    getMyQuotes);

module.exports = router;