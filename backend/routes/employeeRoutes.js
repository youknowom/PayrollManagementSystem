// const express = require("express");
// const {
//   getEmployees,
//   createEmployee,
// } = require("../controllers/employeeController");
// const router = express.Router();

// router.get("/", getEmployees);
// router.post("/", createEmployee);

// module.exports = router;
// routes/employeeRoutes.js
const express = require("express");
const {
  getEmployees,
  createEmployee,
} = require("../controllers/employeeController");
const router = express.Router();

// Route to get all employees (findall)
router.get("/", getEmployees);

// Route to create a new employee
router.post("/", createEmployee);

module.exports = router;
