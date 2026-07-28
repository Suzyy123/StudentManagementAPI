const express = require("express");
const router = express.Router();

const {
    getStudents,
    createStudent,
    updateStudent,
    deleteStudent,
        } = require("../controllers/studentController");

router.get("/getStudents", getStudents);
router.post("/createStudents", createStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;