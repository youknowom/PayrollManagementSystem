const PDFDocument = require("pdfkit");
const XLSX = require("xlsx");

// Controller function to generate PDF
const generatePDFReport = async (req, res) => {
  const { month, year } = req.query; // Get month and year from request

  if (!month || !year) {
    return res.status(400).json({ error: "Month and year are required." });
  }

  // Example employee data (replace with a database query)
  const employees = [
    { name: "John Doe", net_salary: 50000 },
    { name: "Jane Smith", net_salary: 60000 },
  ];

  const doc = new PDFDocument();
  const filename = `Salary_Report_${month}_${year}.pdf`;

  // Set headers for file download
  res.setHeader("Content-Disposition", `attachment; filename=${filename}`);
  res.setHeader("Content-Type", "application/pdf");

  // Pipe the PDF directly to the response
  doc.pipe(res);

  // Add title
  doc
    .fontSize(20)
    .text(`Salary Report for ${month}, ${year}`, { align: "center" });
  doc.moveDown();

  // Add employee details
  employees.forEach((employee, index) => {
    doc
      .fontSize(12)
      .text(`${index + 1}. ${employee.name} - ₹${employee.net_salary}`);
  });

  // Finalize the PDF
  doc.end();
};

// Controller function to generate Excel
const generateExcelReport = async (req, res) => {
  const { month, year } = req.query; // Get month and year from request

  if (!month || !year) {
    return res.status(400).json({ error: "Month and year are required." });
  }

  // Example employee data (replace with a database query)
  const employees = [
    { name: "John Doe", net_salary: 50000 },
    { name: "Jane Smith", net_salary: 60000 },
  ];

  // Prepare data for Excel
  const data = employees.map((employee, index) => ({
    ID: index + 1,
    Name: employee.name,
    NetSalary: employee.net_salary,
  }));

  // Create a new workbook and add a sheet
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(data);
  XLSX.utils.book_append_sheet(workbook, worksheet, "Salary Report");

  // Write to buffer
  const buffer = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });

  // Set headers for file download
  res.setHeader(
    "Content-Disposition",
    `attachment; filename=Salary_Report_${month}_${year}.xlsx`
  );
  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  );

  // Send the file
  res.send(buffer);
};

// Controller function to handle both PDF and Excel downloads
const handleDownloadReport = async (req, res) => {
  const { format, month, year } = req.query; // Get format, month, and year from the request

  if (!format || !month || !year) {
    return res
      .status(400)
      .json({ error: "Format, month, and year are required." });
  }

  if (format === "pdf") {
    await generatePDFReport(req, res);
  } else if (format === "excel") {
    await generateExcelReport(req, res);
  } else {
    res.status(400).json({ error: "Invalid format. Use 'pdf' or 'excel'." });
  }
};

module.exports = {
  generatePDFReport,
  generateExcelReport,
  handleDownloadReport,
};
