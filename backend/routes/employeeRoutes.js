const express = require("express");
const {
  getEmployees,
  createEmployee,
  addEmployee,
  findEmployeeByID,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");

const router = express.Router();

router.get("/", getEmployees);
router.post("/", createEmployee);
router.post("/add", addEmployee);
router.get("/:id", findEmployeeByID);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

module.exports = router;
