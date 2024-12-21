import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import './Employees.css'

const API_URL = 'http://localhost:8080/employee'

const Employees = () => {
  const [employee, setEmployee] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchEmployee()
  }, [])

  const fetchEmployee = async () => {
    try {
      const response = await axios.get(API_URL)
      setEmployee(response.data)
    } catch (error) {
      console.error('Error fetching employees:', error)
      toast.error('Error fetching employees!')
    }
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`)
      toast.success('Employee deleted successfully!')
      fetchEmployee()
    } catch (error) {
      console.error('Error deleting employee:', error)
      toast.error('Error deleting employee!')
    }
  }

  const filteredEmployee = employee.filter(
    (emp) =>
      emp.fname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.lname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.email?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const generateEmployeeID = () => {
    const timestamp = Date.now().toString().slice(-6) // Use the last 6 digits of the timestamp
    const randomNum = Math.floor(100 + Math.random() * 900) // 3-digit random number
    return `EMP${timestamp}${randomNum}`
  }

  const eid = generateEmployeeID() // Generate Employee ID

  return (
    <div className="main">
      <ToastContainer position="top-right" autoClose={3000} />
      <h2>Employee Information</h2>
      <div className="header-container">
        <div style={{ flex: 1 }}></div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-bar"
        />
      </div>
      <table cellPadding="10" className="custom-table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Department</th>
            <th>Joining Date</th>
            <th>Employment Type</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="formbody">
          {filteredEmployee.map((emp) => (
            <tr key={emp._id}>
              <td>{emp.eid}</td>
              <td>{emp.fname}</td>
              <td>{emp.lname}</td>
              <td>{emp.email}</td>
              <td>{emp.contact}</td>
              <td>{emp.department}</td>
              <td>{emp.joiningdate}</td>
              <td>{emp.emptype}</td>
              <td>{emp.salary}</td>
              <td className="icon-container">
                <Link to={`/update/${emp._id}`} className="icon">
                  <i className="bi bi-pencil-square"></i>
                  <span className="tooltip">Update</span>
                </Link>
                <button onClick={() => handleDelete(emp._id)} className="icon">
                  <i className="bi bi-trash"></i>
                  <span className="tooltip">Delete</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Employees
