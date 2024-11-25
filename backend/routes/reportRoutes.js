const express = require("express");
const router = express.Router();
const {
  handleDownloadReport, // This is the combined function to handle both PDF and Excel reports
} = require("../controllers/reportController");

// Route to download report (either PDF or Excel)
router.get("/download-report", handleDownloadReport);

module.exports = router;
