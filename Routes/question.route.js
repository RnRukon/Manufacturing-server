const express = require("express");
const { addQuestion, getQuestion, getSingleQuestion, updateQuestion, deleteQuestion } = require("../controllers/question.controller");
const checkLogin = require("../Middleware/checkLogin");



const router = express.Router();


router.post("/add-question", addQuestion);
router.get("/get-questions", getQuestion);

router.get("/get-single-question/:id", getSingleQuestion);
router.patch("/update-question/:id", updateQuestion);
router.delete("/delete-question/:id", deleteQuestion);



module.exports = router;