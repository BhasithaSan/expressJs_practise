const express = require("express");
const router = express.Router();

const { registerStudentHandler,getStudentHandler } = require("../Controllers/StudentController");


router.post("/register",registerStudentHandler)
router.get("/:id",getStudentHandler)


module.exports = router;