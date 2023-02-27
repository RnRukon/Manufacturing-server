const express = require("express");
const { addProject, getProject, getSingleProject, updateProject, deleteProject, getMyProjects } = require("../controllers/project.controller");
const checkLogin = require("../Middleware/checkLogin");
const verifyToken = require("../Middleware/verifyToken");



const router = express.Router();


router.post("/add-project", verifyToken, addProject);
router.get("/get-my-projects", verifyToken, getMyProjects);
router.get("/get-projects", getProject);

router.get("/get-single-project/:id", getSingleProject);
router.patch("/update-project/:id", updateProject);
router.delete("/delete-project/:id", deleteProject);

module.exports = router;