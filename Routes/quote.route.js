const express = require("express");
const { addQuote, uploadTheeDFile, getMyQuotes } = require("../controllers/quote.controller");
const threeDFileUploader = require("../Middleware/threeDFileUploader");

const verifyToken = require("../Middleware/verifyToken");



const router = express.Router();

router.post("/add-quote/:id", threeDFileUploader.single("threeDFile"), addQuote);

router.patch("/upload-ThreeD-File/:id",
    threeDFileUploader.single("threeDFile"),
    uploadTheeDFile);

router.get("/get-my-quote/:id", getMyQuotes);

module.exports = router;