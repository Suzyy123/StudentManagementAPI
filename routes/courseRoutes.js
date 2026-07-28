const express = require("express");
const router = express.Router();

const {
    getCourses,
    createCourse,
    updateCourse,
    deleteCourse,
} = require("../controllers/courseController");

router.get("/getCourses", getCourses);
router.post("/createCourses", createCourse);
router.put("/:id", updateCourse);
router.delete("/:id", deleteCourse);

module.exports = router;