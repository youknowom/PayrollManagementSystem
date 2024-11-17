const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contact: { type: String, required: true },
});

module.exports = mongoose.model("Employee", empSchema);
