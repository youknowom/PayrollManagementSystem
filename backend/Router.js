//including
// prettier-ignore
const { addEmployee } = require("./controllers/employeeController");
const express = require("express");
const router = express();
router.post("/add", addEmployee);

module.exports = router;
