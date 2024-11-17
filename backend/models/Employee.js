// const mongoose = require("mongoose");

// const employeeSchema = new mongoose.Schema({
//   firstName: { type: String, required: true },
//   lastName: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   position: String,
//   salary: Number,
// });

// module.exports = mongoose.model("Employee", employeeSchema);
//import mongoose
const mongoose = require("mongoose");

//create schema
const empSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
});
//creating a model
module, (exports = mongoose.model("employee", empSchema)); //collection name
