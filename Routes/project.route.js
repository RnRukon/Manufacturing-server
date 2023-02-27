const express = require("express");
const { addProject, getProject, getSingleProject, updateProject, deleteProject, getMyProjects } = require("../controllers/project.controller");
const verifyToken = require("../Middleware/verifyToken");



const router = express.Router();

router.get("/get-single-project/:id", verifyToken, getSingleProject);
router.patch("/update-project/:id", verifyToken, updateProject);
router.delete("/delete-project/:id", verifyToken, deleteProject);

router.post("/create-project", verifyToken, addProject);
router.get("/get-my-projects", verifyToken, getMyProjects);
router.get("/get-all-projects", verifyToken, getProject);


module.exports = router;