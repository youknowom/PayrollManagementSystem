// const express = require("express");
// const { registerUser, loginUser } = require("./controllers/userController");
// const verifyToken = require("../Middleware/authMiddleware");

// const router = express.Router();

// // Public Routes
// router.post("/register", registerUser);
// router.post("/login", loginUser);

// // Protected Route example
// router.get("/protected", verifyToken, (req, res) => {
//   const { role } = req.user; // Get the user role from the decoded token
//   if (!["admin", "user"].includes(role)) {
//     return res
//       .status(403)
//       .send("You do not have permission to access this route");
//   }
//   res.send(`This is a protected route. Welcome ${role}!`);
// });

// module.exports = router;
// ``

const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");
const verifyToken = require("../Middleware/authMiddleware");

const router = express.Router();

// Public Routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected Route example
router.get("/protected", verifyToken, (req, res) => {
  const { role } = req.user; // Get the user role from the decoded token

  // Check if the user has permission
  if (!["admin", "user"].includes(role)) {
    return res.status(403).json({
      message: "You do not have permission to access this route",
    });
  }

  res.status(200).json({
    message: `This is a protected route. Welcome ${role}!`,
  });
});

module.exports = router;
