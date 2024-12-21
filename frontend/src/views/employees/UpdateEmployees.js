import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './updateemployee.css'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const API_URL = 'http://localhost:8080/employee'

const UpdateEmployee = () => {
  const { id } = useParams()
  const [employee, setEmployee] = useState({
    fname: '',
    lname: '',
    email: '',
    contact: '',
    department: '',
    joiningdate: '',
    emptype: '',
    salary: '',
  })
  const navigate = useNavigate()

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`${API_URL}/${id}`)
        setEmployee(response.data.data) // Assuming the employee data is directly returned
      } catch (error) {
        toast.error('Error fetching employee data')
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
      toast.success('Employee Updated Successfully')
      setTimeout(() => navigate('/employees'), 10) // Redirect after 1 seconds
    } catch (error) {
      toast.error('Error updating employee')
      console.error(error)
    }
  }

  return (
    <div className="update-employee">
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
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={employee.contact}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="Department"
          placeholder="Department"
          value={employee.department}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="Joining Date"
          placeholder="Joining Date"
          value={employee.joiningdate}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="Employment Type"
          placeholder="Employment Type"
          value={employee.emptype}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="Salary"
          placeholder="Salary"
          value={employee.salary}
          onChange={handleChange}
          required
        />
        <button type="submit">Update Employee</button>
      </form>
      <ToastContainer />
    </div>
  )
}

export default UpdateEmployee
