// const jwt = require("jsonwebtoken");

// //verify JWT token middleware

// const verifyToken = (req, res, next) => {
//   const token = req.headers["authorization"];
//   if (!token) return res.status(403).send("Access denied.");

//   //remove the 'Bearer' prefix from the token if present
//   const actualToken = token.split(" ")[1];

//   jwt.verify(actualToken, process.env.JWT_SECRET, (err, decoded) => {
//     if (err) return res.status(403).send("Invalid token");
//     req.user = decoded; //Attach user info (eg.role) to the request
//   });
// };
// module.exports = verifyToken;
const jwt = require("jsonwebtoken");

// Verify JWT token middleware
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(403).send("Access denied.");

  // Remove the 'Bearer' prefix from the token if present
  const actualToken = token.split(" ")[1];

  jwt.verify(actualToken, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).send("Invalid token");

    req.user = decoded; // Attach user info (e.g., role) to the request
    next(); // Proceed to the next middleware or route handler
  });
};

module.exports = verifyToken;
