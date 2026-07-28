const Student = require("../models/Student");
const { Op } = require("sequelize");

// Get all students
const getStudents = async (req, res) => {
    try {
        const students = await Student.findAll();

        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// Create student
const createStudent = async (req, res) => {
    try {
        const { fname, lname, email, age } = req.body;

        const student = await Student.create({
            fname,
            lname,
            email,
            age,
        });

        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// Update student
const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const { fname, lname, email, age } = req.body;

        const student = await Student.findByPk(id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found",
            });
        }

        await student.update({
            fname,
            lname,
            email,
            age,
        });

        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// Delete student
const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;

        const student = await Student.findByPk(id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found",
            });
        }

        await student.destroy();

        res.status(200).json({
            message: "Student deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
//filtering student
const getStudents = async (req, res) => {
    try {
        const { fname, lname, email, age, ageMin, ageMax } = req.query;

        const where = {};

        if (fname) {
            where.fname = fname;
        }

        if (lname) {
            where.lname = lname;
        }

        if (email) {
            where.email = email;
        }

        if (age) {
            where.age = age;
        }

        if (ageMin || ageMax) {
            where.age = {};

            if (ageMin) {
                where.age[Op.gte] = ageMin;
            }

            if (ageMax) {
                where.age[Op.lte] = ageMax;
            }
        }

        const students = await Student.findAll({
            where,
        });

        res.status(200).json(students);

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    getStudents,
    createStudent,
    updateStudent,
    deleteStudent,
};