const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contact: { type: String, required: true },
  role: {
    type: String,
    enum: ["admin", "user"],
    required: true,
  },
  parentUser: { type: String, required: true },
  parentUserName: { type: String, required: true },
  username: {
    type: String,
    required: true,
    unique: true,
    match: /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/,
  },
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", UserSchema);
