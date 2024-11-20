// employeeRoutes.js
const express = require("express");
const {
  getEmployees,
  createEmployee,
  addEmployee,
  findEmployees,
  findEmployeeByID,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");

const router = express.Router();

// Define employee-specific routes
router.get("/", getEmployees); // Get all employees
router.post("/", createEmployee); // Create a new employee
router.post("/add", addEmployee); // Add employee with detailed fields
router.get("/findall", findEmployees); // Fetch all employees
router.get("/employee/:id", findEmployeeByID); // Find an employee by ID
router.put("/update/:id", updateEmployee); // Update an employee by ID
router.delete("/delete/:id", deleteEmployee); // Delete an employee by ID

module.exports = router;
