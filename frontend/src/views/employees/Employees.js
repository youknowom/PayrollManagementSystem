// export default Employees
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Employees.css' // Importing the CSS file

const API_URL = 'http://localhost:8080/employee'

const Employees = () => {
  const [employee, setEmployee] = useState([]) // Employee state
  const [searchTerm, setSearchTerm] = useState('')

  // Fetching employees on initial load
  useEffect(() => {
    fetchEmployee() // Fetch employees
  }, [])

  const fetchEmployee = async () => {
    try {
      // Ensure the endpoint matches the backend route
      const response = await axios.get(API_URL)
      setEmployee(response.data) // Update state with fetched data
    } catch (error) {
      console.error('Error fetching employees:', error)
    }
  }

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  // Handle delete employee action
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/delete/${id}`)
      fetchEmployee() // Refresh the list after deletion
    } catch (error) {
      alert('Error deleting employee')
      console.error('Error deleting employee:', error)
    }
  }

  // Filter employee list based on search term
  const filteredEmployee = employee.filter(
    (emp) =>
      emp.fname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.lname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.email?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="main">
      <h2>Employee Information</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '10px',
        }}
      >
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {/* <Link to="/add" className="button-link">
          Add Employee
        </Link> */}
      </div>
      <table border="1" cellPadding="10" className="custom-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="formbody">
          {filteredEmployee.map((emp) => (
            <tr key={emp._id}>
              <td>{emp.fname}</td>
              <td>{emp.lname}</td>
              <td>{emp.email}</td>
              <td>{emp.contact}</td>
              <td>
                <Link to={`/update/${emp._id}`} className="button-link">
                  Update
                </Link>
                <button onClick={() => handleDelete(emp._id)} className="button-link">
                  Delete
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
