import React, { useState, useEffect } from 'react'
import axios from 'axios'
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
        setEmployee(response.data.data)
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
      setTimeout(() => navigate('/employees'), 1000)
    } catch (error) {
      toast.error('Error updating employee')
      console.error(error)
    }
  }

  return (
    <div className="max-w-4xl mx-auto mt-8 p-8 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Update Employee</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          name="fname"
          placeholder="First Name"
          value={employee.fname}
          onChange={handleChange}
          required
          className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="lname"
          placeholder="Last Name"
          value={employee.lname}
          onChange={handleChange}
          required
          className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={employee.email}
          onChange={handleChange}
          required
          className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={employee.contact}
          onChange={handleChange}
          required
          className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={employee.department}
          onChange={handleChange}
          required
          className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="joiningdate"
          placeholder="Joining Date"
          value={employee.joiningdate}
          onChange={handleChange}
          required
          className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="emptype"
          placeholder="Employment Type"
          value={employee.emptype}
          onChange={handleChange}
          required
          className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="salary"
          placeholder="Salary"
          value={employee.salary}
          onChange={handleChange}
          required
          className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="md:col-span-2 mt-4 bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
        >
          Update Employee
        </button>
      </form>
      <ToastContainer />
    </div>
  )
}

export default UpdateEmployee
