//including
// prettier-ignore
const { addEmployee, findEmployees, findEmployeeByID, updateEmployee, deleteEmployee } = require("./controllers/employeeController");
const express = require("express");
const { route } = require("./routes/employeeRoutes");
const router = express();
router.post("/add", addEmployee);
router.get("/findall", findEmployees);
router.get("/employee/:id", findEmployeeByID);
router.put("/update/:id", updateEmployee);
router.delete("/delete/:id", deleteEmployee);

module.exports = router;
