// // const bcrypt = require("bcrypt");
// // const jwt = require("jsonwebtoken");
// // const user = require("../models/userModel");

// // //user login
// // exports.loginUser = async (req, res) => {
// //   const { username, password } = req.body;
// //   try {
// //     const user = await UserActivation.findOne({ username });
// //     if (!user) return res.status(400).json({ msg: "Invalid credentials" });

// //     const isMatch = await bcrypt.compare(password, user.password);
// //     if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

// //     //sign the JWT and include the user's role
// //     const token = jwt.sign(
// //       { id: user.id, role: user.role },
// //       process.env.JWT_SECRET,
// //       { expiresIn: "1h" }
// //     );
// //     res.json({ token, user: { username: user.username, role: user.role } }); // Return role in response
// //   } catch (err) {
// //     console.log(err);
// //     console.log(err);
// //     res.status(500).json({ msg: "Error during login" });
// //   }
// // };

// // //Register a new user
// // exports.registerUser = async (req, res) => {
// //   const {
// //     fname,
// //     lname,
// //     email,
// //     contact,
// //     role,
// //     parentUser,
// //     parentUserName,
// //     username,
// //     password: hashedPassword,
// //   } = req.body;
// //   try {
// //     //hash the password before saving
// //     const hashedPassword = await bcrypt.hash(password, 10);

// //     //create a new user instance with all required fields
// //     const newUser = new UserActivation({
// //       fname,
// //       lname,
// //       email,
// //       contact,
// //       role,
// //       parentUser,
// //       parentUserName,
// //       username,
// //       password: hashedPassword,
// //     });
// //     //save the new user to the database
// //     await newUser.save();
// //     res.status(201).send("user registered successfully");
// //   } catch (err) {
// //     console.error("Error during registration:", err);

// //     //handle duplicate email or username errors speciffically
// //     if (err.code === 11000) {
// //       const field = err.keyPattern.username ? "username" : "email";
// //       return res
// //         .status(400)
// //         .json({ msg: `This ${field} is already registered` });
// //     }
// //     res.status(500).json({ msg: "error registering user" });
// //   }
// // };
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const user = require("../models/userModel");

// // User login
// exports.loginUser = async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const foundUser = await user.findOne({ username });
//     if (!foundUser) return res.status(400).json({ msg: "Invalid credentials" });

//     const isMatch = await bcrypt.compare(password, foundUser.password);
//     if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

//     // Sign the JWT and include the user's role
//     if (!process.env.JWT_SECRET) {
//       return res.status(500).json({ msg: "JWT secret not configured" });
//     }

//     const token = jwt.sign(
//       { id: foundUser.id, role: foundUser.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" }
//     );
//     res.json({
//       token,
//       user: { username: foundUser.username, role: foundUser.role },
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ msg: "Error during login" });
//   }
// };

// // Register a new user
// exports.registerUser = async (req, res) => {
//   const {
//     fname,
//     lname,
//     email,
//     contact,
//     role,
//     parentUser,
//     parentUserName,
//     username,
//     password,
//   } = req.body;
//   try {
//     // Hash the password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user instance with all required fields
//     const newUser = new user({
//       fname,
//       lname,
//       email,
//       contact,
//       role,
//       parentUser,
//       parentUserName,
//       username,
//       password: hashedPassword,
//     });

//     // Save the new user to the database
//     await newUser.save();
//     res.status(201).send("User registered successfully");
//   } catch (err) {
//     console.error("Error during registration:", err);

//     // Handle duplicate email or username errors specifically
//     if (err.code === 11000) {
//       const field = err.keyPattern.username ? "username" : "email";
//       return res
//         .status(400)
//         .json({ msg: `This ${field} is already registered` });
//     }
//     res.status(500).json({ msg: "Error registering user" });
//   }
// };
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel"); // Corrected to 'User'

// Helper function to check for duplicates
const checkDuplicateUser = async (email, username) => {
  try {
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    return existingUser;
  } catch (err) {
    throw new Error("Database error while checking for duplicates");
  }
};

// User login
exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const foundUser = await User.findOne({ username });
    if (!foundUser) return res.status(400).json({ msg: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, foundUser.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    // Sign the JWT and include the user's role
    if (!process.env.JWT_SECRET) {
      return res.status(500).json({ msg: "JWT secret not configured" });
    }

    const token = jwt.sign(
      { id: foundUser.id, role: foundUser.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      token,
      user: { username: foundUser.username, role: foundUser.role },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Error during login" });
  }
};

// Register a new user
exports.registerUser = async (req, res) => {
  const {
    fname,
    lname,
    email,
    contact,
    role,
    parentUser,
    parentUserName,
    username,
    password,
  } = req.body;

  try {
    // Check for duplicate username or email
    const existingUser = await checkDuplicateUser(email, username);
    if (existingUser) {
      const field = existingUser.email === email ? "email" : "username";
      return res
        .status(400)
        .json({ msg: `This ${field} is already registered` });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance with all required fields
    const newUser = new User({
      fname,
      lname,
      email,
      contact,
      role,
      parentUser,
      parentUserName,
      username,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();
    res.status(201).send("User registered successfully");
  } catch (err) {
    console.error("Error during registration:", err);

    // Handle generic database errors or duplicate handling
    if (err.message === "Database error while checking for duplicates") {
      return res.status(500).json({ msg: "Internal server error" });
    }

    res.status(500).json({ msg: "Error registering user" });
  }
};
