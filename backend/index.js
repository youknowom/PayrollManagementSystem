// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const employeeRoutes = require("./routes/employeeRoutes");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// // Routes
// app.use("/api/employees", employeeRoutes);

// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//import express and mongoose
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

//connection of express with database
mongoose
  .connect("mongodb://localhost:27017/payrollmanagementsystem") //database name
  .then(() => {
    console.log("connect to database succesully");
  })
  .catch((err) => {
    console.log(err);
  });

//to use multiple function simultaneously
app.use(cors());
app.use(express.json());

const Router = require("./routes/employeeRoutes");
app.use("./employee", Router); //main router

//to create server on specific port
app.listen(8080, () => {
  console.log("Server running on 8080 port");
});
