// const Employee = require("../models/Employee");

// exports.getEmployees = async (req, res) => {
//   try {
//     const employees = await Employee.find();
//     res.json(employees);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.createEmployee = async (req, res) => {
//   const employee = new Employee(req.body);
//   try {
//     const savedEmployee = await employee.save();
//     res.status(201).json(savedEmployee);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

//including employee model
const { model } = require("mongoose");
const employee = require("./model/Employee.js");
const model = require("./model/Employee.js");

async function addEmployee(req, res) {
  try {
    const data = new employee({
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      contact: req.body.contact,
    });
    const employeedata = await data.save();
    res.status(200).send({ msg: "Employee added succefully", employeedata });
  } catch (err) {
    res.status(400).send({ err }); //console.log(err)
  }
}

module.exports = {
  addEmployee,
};
