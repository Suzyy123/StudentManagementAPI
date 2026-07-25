const Student = require("../models/Student")
//get students
const getStudents = async(req, res) =>{
    try{
        const students = await Student.findAll();
        res.students(200).json(students);
    }catch(err){
        res.status(500).json({
            message: error.message,
        })
    }
};
//create student
const createStudent = async(req, res) =>{
    try{
        const {fname,lname, email, age} = req.body;
        const student = await Student.create({
            fname, lname, email, age
        });
        res.status(201).json(student) //201 is for created
    }
    catch(error){
        res.status(500).json({
        message: error.message
        })
    }   
}
//Update the record
const updateStudent = async (req, res) =>{
    try{
        const{id} = req.params;
        const {fname, lname, email, age} = req.body;
        const student = await Student.findByPk(id);
        if(!student){
            return res.status(404).json({
                message: "Student not found"
            });
        }
        await student.update({
            fname, lname, email, age
        });
        res.status(200).json(student);

    }
    catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}
//Delete the record
const deleteStudent = async (req, res) =>{
    try{
        const{id} = req.params;
        const student = await Student.findByPk(id);
        if(!student){
            return res.status(404).json({
                message: "Student not found",
            });
        }
        await student.destroy();
        res.status(200).json({
            message: "Student deleted sucessfully",
        });
    }
    catch(error){
        res.status(500).json({
            message: error.message,
        })
    }
}
module.exports = {
    getStudents,
    createStudent,
    updateStudent,
    deleteStudent
}