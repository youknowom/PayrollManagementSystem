// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const user = require("../models/userModel");

// //user login
// exports.loginUser = async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const user = await UserActivation.findOne({ username });
//     if (!user) return res.status(400).json({ msg: "Invalid credentials" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

//     //sign the JWT and include the user's role
//     const token = jwt.sign(
//       { id: user.id, role: user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" }
//     );
//     res.json({token,user:{username:user.username,role:user.role}}) // Return role in response
//   } catch (err) {
//     console.log(err);
//         console.log(err);
//         res.status(500).json({msg:'Error during login'});
//     }
//   };

//   //Register a new user
//   exports.registerUser =async (req,res)=>{
//     const {fullName,email,}
//   }
