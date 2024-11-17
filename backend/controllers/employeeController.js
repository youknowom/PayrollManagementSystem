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
// controllers/employeeController.js
const Employee = require("../models/Employee"); // Assuming you're using Mongoose

// Get all employees (findall)
const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find(); // Fetch all employees from the database
    res.json(employees); // Send the employee list as JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching employees" });
  }
};

// Create a new employee
const createEmployee = async (req, res) => {
  try {
    const newEmployee = new Employee(req.body); // Create a new Employee instance
    await newEmployee.save(); // Save to the database
    res.status(201).json(newEmployee); // Respond with the created employee
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating employee" });
  }
};

module.exports = {
  getEmployees,
  createEmployee,
};
