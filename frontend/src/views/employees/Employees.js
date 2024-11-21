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
      toast.success('Employees fetched successfully!')
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
                <button onClick={() => handleDelete(emp._id)} className="button-link delete-btn">
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
