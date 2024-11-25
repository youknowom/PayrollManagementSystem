import React from 'react'

const Generatereports = () => {
  // Function to handle PDF or Excel download
  const handleDownloadReport = (format, month, year) => {
    // Correct URL for downloading PDF or Excel
    const url = `/reports/download-report?format=${format}&month=${month}&year=${year}`

    // Open the download in a new tab
    window.open(url, '_blank')
  }

  return (
    <div className="payroll-section">
      <h2>Payroll</h2>
      <p>Manage employee salaries and reports here.</p>

      {/* Button to download the PDF */}
      <button
        onClick={() => handleDownloadReport('pdf', 'November', 2024)}
        className="pdf-download-btn"
      >
        Download Salary Report (PDF)
      </button>

      {/* Button to download the Excel */}
      <button
        onClick={() => handleDownloadReport('excel', 'November', 2024)}
        className="excel-download-btn"
      >
        Download Salary Report (Excel)
      </button>
    </div>
  )
}

export default Generatereports
