import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './addEmployee.css'

const API_URL = 'http://localhost:8080/employee'

const AddEmployee = () => {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [department, setDepartment] = useState('')
  const [joiningdate, setJoiningDate] = useState('')
  const [emptype, setEmploymentType] = useState('')
  const [salary, setSalary] = useState('')

  const navigate = useNavigate()

  // Function to generate Employee ID
  const generateEmployeeID = () => {
    const timestamp = Date.now().toString().slice(-6) // Use the last 6 digits of the timestamp
    const randomNum = Math.floor(100 + Math.random() * 900) // 3-digit random number
    return `EMP${timestamp}${randomNum}`
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const eid = generateEmployeeID() // Generate Employee ID

    try {
      const response = await axios.post(API_URL, {
        eid,
        fname,
        lname,
        email,
        contact,
        department,
        joiningdate,
        emptype,
        salary,
      })

      if (response.status === 201 || response.status === 200) {
        toast.success('Employee added successfully!')
        setTimeout(() => navigate('/employees'), 2000) // Navigate after toast
      }
    } catch (error) {
      if (error.response?.status === 409) {
        toast.error('Email already exists!')
      } else {
        toast.error('Error adding employee!')
      }
      console.error('Error adding employee:', error)
    }
  }

  return (
    <div className="add-employee">
      <ToastContainer position="top-right" autoClose={3000} />
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Contact:</label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Department:</label>
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Joining Date:</label>
          <input
            type="date"
            value={joiningdate}
            onChange={(e) => setJoiningDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Employment Type:</label>
          <input
            type="text"
            value={emptype}
            onChange={(e) => setEmploymentType(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Salary:</label>
          <input type="text" value={salary} onChange={(e) => setSalary(e.target.value)} required />
        </div>

        <button type="submit" className="submit-button">
          Add Employee
        </button>
      </form>
    </div>
  )
}

export default AddEmployee
