// // // const Employee = require("../models/Employee");

// // // // Get all employees (findall)
// // // const getEmployees = async (req, res) => {
// // //   try {
// // //     const employees = await Employee.find(); // Fetch all employees from the database
// // //     res.json(employees); // Send the employee list as JSON
// // //   } catch (error) {
// // //     console.error(error);
// // //     res.status(500).json({ message: "Error fetching employees" });
// // //   }
// // // };

// // // // Create a new employee
// // // const createEmployee = async (req, res) => {
// // //   try {
// // //     const newEmployee = new Employee(req.body); // Create a new Employee instance
// // //     await newEmployee.save(); // Save to the database
// // //     res.status(201).json(newEmployee); // Respond with the created employee
// // //   } catch (error) {
// // //     console.error(error);
// // //     res.status(500).json({ message: "Error creating employee" });
// // //   }
// // // };

// // // module.exports = {
// // //   getEmployees,
// // //   createEmployee,
// // // };
// // const Employee = require("../models/Employee");

// // // Add a new employee
// // const addEmployee = async (req, res) => {
// //   try {
// //     const newEmployee = new Employee({
// //       fname: req.body.fname,
// //       lname: req.body.lname,
// //       email: req.body.email,
// //       contact: req.body.contact,
// //     });
// //     const employeeData = await newEmployee.save();
// //     res.status(200).send({ msg: "Employee added successfully", employeeData });
// //   } catch (err) {
// //     res.status(400).send({ err });
// //   }
// // };

// // // Get all employees
// // const findEmployees = async (req, res) => {
// //   try {
// //     const data = await Employee.find();
// //     res.status(200).send({ data });
// //   } catch (err) {
// //     res.status(500).send({ err });
// //   }
// // };

// // // Get an employee by ID
// // const findEmployeeByID = async (req, res) => {
// //   try {
// //     const id = req.params.id;
// //     const data = await Employee.findById(id);
// //     if (data) {
// //       res.status(200).send({ data });
// //     } else {
// //       res.status(404).send({ msg: "Employee not found" });
// //     }
// //   } catch (error) {
// //     res.status(500).send({ error });
// //   }
// // };

// // // Update an employee
// // const updateEmployee = async (req, res) => {
// //   try {
// //     const id = req.params.id;
// //     const { fname, lname, email, contact, department } = req.body; // Adjust fields as needed
// //     const data = await Employee.updateOne(
// //       { _id: id },
// //       { $set: { fname, lname, email, contact, department } }
// //     );
// //     if (data.modifiedCount > 0) {
// //       res.status(200).send({ msg: "Employee data has been updated" });
// //     } else {
// //       res.status(400).send({ msg: "No changes made to the employee data" });
// //     }
// //   } catch (error) {
// //     res.status(500).send({ error });
// //   }
// // };

// // // Delete an employee
// // const deleteEmployee = async (req, res) => {
// //   try {
// //     const id = req.params.id;
// //     const data = await Employee.deleteOne({ _id: id });
// //     if (data.deletedCount > 0) {
// //       res.status(200).send({ message: "Employee is deleted successfully" });
// //     } else {
// //       res.status(400).send({ msg: "No employee found to delete" });
// //     }
// //   } catch (error) {
// //     res.status(500).send({ error });
// //   }
// // };

// // module.exports = {
// //   addEmployee,
// //   findEmployees,
// //   findEmployeeByID,
// //   updateEmployee,
// //   deleteEmployee,
// // };
// const Employee = require("../models/Employee");

// // Get all employees (basic findall)
// const getEmployees = async (req, res) => {
//   try {
//     const employees = await Employee.find(); // Fetch all employees from the database
//     res.json(employees); // Send the employee list as JSON
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error fetching employees" });
//   }
// };

// // Create a new employee (basic create)
// const createEmployee = async (req, res) => {
//   try {
//     const newEmployee = new Employee(req.body); // Create a new Employee instance
//     await newEmployee.save(); // Save to the database
//     res.status(201).json(newEmployee); // Respond with the created employee
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error creating employee" });
//   }
// };

// // Add a new employee with detailed fields
// const addEmployee = async (req, res) => {
//   try {
//     const newEmployee = new Employee({
//       fname: req.body.fname,
//       lname: req.body.lname,
//       email: req.body.email,
//       contact: req.body.contact,
//     });
//     const employeeData = await newEmployee.save();
//     res.status(200).send({ msg: "Employee added successfully", employeeData });
//   } catch (err) {
//     res.status(400).send({ err });
//   }
// };

// // Get all employees with detailed fields
// const findEmployees = async (req, res) => {
//   try {
//     const data = await Employee.find();
//     res.status(200).send({ data });
//   } catch (err) {
//     res.status(500).send({ err });
//   }
// };

// // Get an employee by ID
// const findEmployeeByID = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const data = await Employee.findById(id);
//     if (data) {
//       res.status(200).send({ data });
//     } else {
//       res.status(404).send({ msg: "Employee not found" });
//     }
//   } catch (error) {
//     res.status(500).send({ error });
//   }
// };

// // Update an employee
// const updateEmployee = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const { fname, lname, email, contact, department } = req.body; // Adjust fields as needed
//     const data = await Employee.updateOne(
//       { _id: id },
//       { $set: { fname, lname, email, contact, department } }
//     );
//     if (data.modifiedCount > 0) {
//       res.status(200).send({ msg: "Employee data has been updated" });
//     } else {
//       res.status(400).send({ msg: "No changes made to the employee data" });
//     }
//   } catch (error) {
//     res.status(500).send({ error });
//   }
// };

// // Delete an employee
// const deleteEmployee = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const data = await Employee.deleteOne({ _id: id });
//     if (data.deletedCount > 0) {
//       res.status(200).send({ message: "Employee is deleted successfully" });
//     } else {
//       res.status(400).send({ msg: "No employee found to delete" });
//     }
//   } catch (error) {
//     res.status(500).send({ error });
//   }
// };

// module.exports = {
//   getEmployees,
//   createEmployee,
//   addEmployee,
//   findEmployees,
//   findEmployeeByID,
//   updateEmployee,
//   deleteEmployee,
// };
const Employee = require("../models/Employee");

// Get all employees
const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find(); // Fetch all employees from the database
    res.status(200).json(employees); // Send the employee list as JSON
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

// Add a new employee with specific fields
const addEmployee = async (req, res) => {
  try {
    const { fname, lname, email, contact, department } = req.body;
    const newEmployee = new Employee({
      fname,
      lname,
      email,
      contact,
      department,
    });
    const employeeData = await newEmployee.save();
    res.status(200).send({ msg: "Employee added successfully", employeeData });
  } catch (err) {
    res.status(400).send({ msg: "Error adding employee", error: err });
  }
};

// Get an employee by ID
const findEmployeeByID = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Employee.findById(id);
    if (data) {
      res.status(200).send({ data });
    } else {
      res.status(404).send({ msg: "Employee not found" });
    }
  } catch (error) {
    res.status(500).send({ error });
  }
};

// Update an employee by ID
const updateEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    const { fname, lname, email, contact, department } = req.body;

    const updatedEmployee = await Employee.findByIdAndUpdate(
      id,
      { $set: { fname, lname, email, contact, department } },
      { new: true }
    );

    if (updatedEmployee) {
      res
        .status(200)
        .send({ msg: "Employee data has been updated", updatedEmployee });
    } else {
      res
        .status(400)
        .send({
          msg: "No changes made to the employee data or employee not found",
        });
    }
  } catch (error) {
    res.status(500).send({ error });
  }
};

// Delete an employee by ID
const deleteEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Employee.deleteOne({ _id: id });

    if (data.deletedCount > 0) {
      res.status(200).send({ msg: "Employee has been deleted successfully" });
    } else {
      res.status(400).send({ msg: "No employee found to delete" });
    }
  } catch (error) {
    res.status(500).send({ error });
  }
};

module.exports = {
  getEmployees,
  createEmployee,
  addEmployee,
  findEmployeeByID,
  updateEmployee,
  deleteEmployee,
};
