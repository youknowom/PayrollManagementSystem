const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
  // eid: { type: String, unique: true },
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contact: { type: String, required: true },
  department: { type: String, required: true },
  joiningdate: { type: Date, required: true },
  emptype: { type: String, required: true },
  salary: { type: Number, required: true },
});

module.exports = mongoose.model("Employee", empSchema);
