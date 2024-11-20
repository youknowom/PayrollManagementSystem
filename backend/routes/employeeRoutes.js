// employeeRoutes.js
const express = require("express");
const {
  getEmployees, // Fetch all employees
  createEmployee, // Create a new employee
  addEmployee, // Create employee with detailed fields
  findEmployeeByID, // Fetch an employee by ID
  updateEmployee, // Update an employee by ID
  deleteEmployee, // Delete an employee by ID
} = require("../controllers/employeeController");

const router = express.Router();

// Employee CRUD routes
router.get("/", getEmployees); // Get all employees
router.post("/", createEmployee); // Create a new employee
router.post("/add", addEmployee); // Add employee with detailed fields
router.get("/:id", findEmployeeByID); // Find an employee by ID
router.put("/:id", updateEmployee); // Update an employee by ID
router.delete("/:id", deleteEmployee); // Delete an employee by ID

module.exports = router;
