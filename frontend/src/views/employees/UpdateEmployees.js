import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const API_URL = 'http://localhost:8000/employee'

const UpdateEmployee = () => {
  const { id } = useParams()
  const [employee, setEmployee] = useState({
    fname: '',
    lname: '',
    contact: '',
    email: '',
  })
  const navigate = useNavigate()

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`${API_URL}/${id}`)
        setEmployee(response.data) // Assuming the employee data is directly returned
      } catch (error) {
        alert('Error fetching employee data')
        console.error(error)
      }
    }

    fetchEmployee()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setEmployee({ ...employee, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`${API_URL}/${id}`, employee)
      alert('Employee Updated Successfully')
      navigate('/employees') // Redirect to employee list after update
    } catch (error) {
      alert('Error updating employee')
      console.error(error)
    }
  }

  return (
    <div>
      <h2>Update Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fname"
          placeholder="First Name"
          value={employee.fname}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lname"
          placeholder="Last Name"
          value={employee.lname}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={employee.email}
          onChange={handleChange}
          required
        />
        <input
          type="text" // Use text to handle contact number as a string
          name="contact"
          placeholder="Contact Number"
          value={employee.contact}
          onChange={handleChange}
          required
        />
        <button type="submit">Update Employee</button>
      </form>
    </div>
  )
}

export default UpdateEmployee
