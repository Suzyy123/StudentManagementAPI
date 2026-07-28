const express = require("express");
const router = express.Router();

const {
    getEnrollments,
    createEnrollment,
    updateEnrollment,
    deleteEnrollment,
} = require("../controllers/enrollmentController");

router.get("/getEnrollments", getEnrollments);
router.post("/createEnrollments", createEnrollment);
router.put("/:id", updateEnrollment);
router.delete("/:id", deleteEnrollment);

module.exports = router;